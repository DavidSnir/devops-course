# Sports Store Order Service

FastAPI service responsible for checkout orchestration, order history, shipping totals, payment coordination, and stock updates.

## Runtime

- Port: `8004`
- Database: `order_db`
- Dependencies: Cart, catalog, and payment services
- Health endpoint: `/health`

## Development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload --port 8004
```

## Tests

```bash
pytest tests/ -v
```

## PR Diff Review Runner

The provider-independent pipeline and trusted post-CI GitHub Actions integration are documented in [`review_runner/README.md`](review_runner/README.md). Local use accepts a supplied unified patch and uses the mock provider; the trusted reusable workflow retrieves Pull Request diffs as data and invokes OpenRouter only after deterministic CI succeeds.
