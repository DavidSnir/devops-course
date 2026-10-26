import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from prometheus_fastapi_instrumentator import Instrumentator, metrics
from pymongo.errors import PyMongoError

from database import products_collection
from routes import internal, products

logger = logging.getLogger("catalog-service")

app = FastAPI(title="Sports Store — Catalog Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router, prefix="/api")
app.include_router(internal.router, prefix="/api")

# Prometheus metrics (DEP-263, Sub-PRD 7 2.1.2). Exposes GET /metrics with
# http_requests_total and http_request_duration_seconds — the series the
# Sub-PRD 6 canary AnalysisTemplate queries. Labels are limited to
# method/handler/status; `handler` is the templated route path (e.g.
# /api/products/{slug}), never the raw id, so high-cardinality values
# (user_id/order_id/cart_id) are never emitted as label values (AC 2.1.2.2).
Instrumentator(excluded_handlers=["/metrics", "/health"]).add(
    metrics.requests(metric_name="http_requests_total")
).add(
    metrics.latency(metric_name="http_request_duration_seconds")
).instrument(app).expose(app, endpoint="/metrics", include_in_schema=False)


@app.on_event("startup")
async def create_indexes():
    try:
        await products_collection.create_index("slug", unique=True)
        await products_collection.create_index("variants.sku", unique=True)
        await products_collection.create_index("category")
        await products_collection.create_index("tags")
        await products_collection.create_index(
            [("name", "text"), ("description", "text")]
        )
    except PyMongoError as exc:  # Mongo may be unavailable (e.g. unit tests)
        logger.warning("Index creation skipped: %s", exc)


@app.get("/health")
def health():
    return {"status": "ok", "service": "catalog-service"}
