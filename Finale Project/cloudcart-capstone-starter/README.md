# Sports Store — Python Microservices E-Commerce (Starter)

A teaching project: a sportswear e-commerce platform ("Stryda Athletics" — a
fictional brand) built as five FastAPI microservices with MongoDB, a React
storefront, and an NGINX API gateway.

**This is the starting point for Stage 2 — Containerization and Local Docker
Compose Environment.** The application itself is complete and working; your
job is to containerize it and orchestrate it with Docker Compose.

## Architecture

```
Browser
   │
   ▼
NGINX Gateway (:8080) ── serves the React build, routes /api/*
   │
   ├── /api/auth/*      → auth-service    (:8001) ── auth_db
   ├── /api/products*   → catalog-service (:8002) ── catalog_db
   ├── /api/internal/*  → catalog-service            (stock endpoints)
   ├── /api/cart*       → cart-service    (:8003) ── cart_db
   ├── /api/orders*     → order-service   (:8004) ── order_db
   └── /api/payments*   → payment-service (:8005) ── payment_db
                                │
                     one MongoDB container,
                     database-per-service pattern
```

Each service owns its database and never reads another service's collections —
services communicate over REST only. The order service orchestrates checkout
synchronously (a simple saga):

```
checkout → read cart → check stock → create pending order
        → charge payment (idempotent) → on success: decrement stock,
          clear cart, mark paid  /  on failure: mark payment_failed (HTTP 402)
```

## Services

| Service | Port | Database | Responsibilities |
|---|---|---|---|
| auth-service | 8001 | `auth_db` | Register, login, JWT issuance, customer/admin roles, bcrypt hashing |
| catalog-service | 8002 | `catalog_db` | Products with embedded variants (SKU/color/size/price/stock), filters, admin CRUD, internal stock check/decrement |
| cart-service | 8003 | `cart_db` | Per-user cart with product snapshots, quantity merge, subtotal |
| order-service | 8004 | `order_db` | Checkout orchestration, order numbers (`ORD-YYYY-NNNNNN`), history |
| payment-service | 8005 | `payment_db` | Mock provider, idempotency keys, deterministic decline rule |

## What's already provided

- A working React frontend (`frontend/`).
- Five working FastAPI microservices (`services/*`), each with a fully
  mocked pytest suite (no MongoDB or network needed to run the tests).
- An NGINX gateway config (`gateway/nginx.conf`, `gateway/proxy_params.conf`)
  with the routing paths already fixed to match the frontend's API contract —
  the upstream hostname for each route is an inline `TODO` you complete once
  you've named your backend services.
- A MongoDB seed script (`seed/init-mongo.js`) that loads demo products and
  an admin user — idempotent, runs only against an empty data directory.
- Dockerfiles for the gateway and all 5 services, with inline `TODO`
  comments instead of working instructions.
- A `docker-compose.yml` skeleton with inline `TODO` comments instead of
  working service definitions.

## What you need to build

1. Complete each service's `Dockerfile` (`services/*/Dockerfile`) and
   `gateway/Dockerfile`.
2. Complete `docker-compose.yml`: add MongoDB and all 5 backend services,
   wire up the gateway, configure the shared network, persistent MongoDB
   storage, seed script mounting, and health checks.
3. Complete `gateway/nginx.conf`: fill in the `proxy_pass` upstream hostname
   for each route to match the service names you chose in
   `docker-compose.yml`.
4. Verify the complete application flow end-to-end through the gateway.

Full requirements, MongoDB configuration rules, and success criteria are in
the lab instructions for this stage.

## Exploring the app before you containerize it

Each service can run standalone on your machine — useful for understanding
the app before wrapping it in Docker.

You'll need a MongoDB instance reachable at `localhost:27017` (this is
separate from the exercise — a throwaway container is enough:
`docker run -d --name dev-mongo -p 27017:27017 mongo:7`).

For each service:

```bash
cd services/auth-service        # or any other service
cp .env.example .env
pip install -r requirements.txt
uvicorn main:app --reload --port 8001   # match the port table above
```

Each service exposes interactive OpenAPI docs at `http://localhost:<port>/docs`.

Frontend:

```bash
cd frontend
npm install
npm run dev
```

Note: the Vite dev server proxies `/api/*` to `http://localhost:8080` (the
gateway), so full click-through testing of the UI needs your finished
Compose stack running. Until then, verify backend behavior directly via
`/docs` or `curl`.

## Tests

```bash
cd services/auth-service        # or any other service
pip install -r requirements.txt
pytest tests/ -v
```

## Once your Compose file is complete

```bash
cp .env.example .env          # optional — defaults work for local dev
docker compose up --build -d
```

Then open **http://localhost:8080**.

On first run, MongoDB's `docker-entrypoint-initdb.d` hook should run
`seed/init-mongo.js`, idempotently loading ten Stryda products and an admin
user (only fires against an empty volume):

- Admin login: `admin@stryda-sports.com` / `Admin1234!`
- Any card number "pays" successfully — except cards ending in `0000`
  (`PAYMENT_FAILURE_SUFFIX`), which are declined.

### Demo flow (curl)

```bash
BASE=http://localhost:8080

# Register + login
curl -X POST $BASE/api/auth/register -H 'Content-Type: application/json' \
  -d '{"email":"daniel@example.com","password":"Str0ngPass!","full_name":"Daniel Cohen"}'
TOKEN=$(curl -s -X POST $BASE/api/auth/login -H 'Content-Type: application/json' \
  -d '{"email":"daniel@example.com","password":"Str0ngPass!"}' | jq -r .access_token)

# Browse and add to cart
curl "$BASE/api/products?category=running-shoes"
curl -X POST $BASE/api/cart/items -H "Authorization: Bearer $TOKEN" \
  -H 'Content-Type: application/json' -d '{"sku":"VR-BLK-42","quantity":2}'

# Checkout (paid) — use a card ending 0000 to see the 402 failure path
curl -X POST $BASE/api/orders/checkout -H "Authorization: Bearer $TOKEN" \
  -H 'Content-Type: application/json' -d '{
    "shipping_address": {"full_name":"Daniel Cohen","street":"Example St 10",
      "city":"Netanya","postal_code":"1234567","country":"Israel"},
    "card_number":"4242424242424242"}'

curl $BASE/api/orders -H "Authorization: Bearer $TOKEN"
```

## Design notes

- **Database-per-service** on one MongoDB container: `auth_db`, `catalog_db`,
  `cart_db`, `order_db`, `payment_db`. Order items and shipping addresses are
  embedded immutable snapshots — later price or name changes never rewrite
  order history.
- **Inter-service trust**: all services share one `JWT_SECRET`; the order
  service forwards the caller's own bearer token on internal calls. Real
  systems would use dedicated service credentials/mTLS — a documented
  simplification.
- **Stock decrement** uses a guarded atomic update
  (`$elemMatch` + `$inc` with `stock_quantity >= qty`), so concurrent
  checkouts cannot oversell a variant.
- **Payment idempotency**: the charge endpoint is keyed by a unique
  `idempotency_key` (the order number); replays return the stored result
  instead of double-charging.

## Security notes (dev defaults)

`JWT_SECRET` defaults to a well-known dev value; set a real secret outside
local development. Passwords are hashed with bcrypt; the payment service
stores only the last four card digits. The `/api/internal/*` routes are
exposed through the gateway for course demos — a production deployment would
keep them reachable only on the service network.
