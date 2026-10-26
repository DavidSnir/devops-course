# Sports Store Catalog Service

FastAPI service responsible for products, variants, filtering, inventory checks, and stock updates.

## Runtime

- Port: `8002`
- Database: `catalog_db`
- Health endpoint: `/health`

## Development

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements-dev.txt
cp .env.example .env
uvicorn main:app --reload --port 8002
```

## Tests

```bash
ruff check .
pytest
python -m pip check
```

## PR Diff Review Runner

The provider-independent pipeline and trusted post-CI GitHub Actions integration are documented in [`review_runner/README.md`](review_runner/README.md). Local use accepts a supplied unified patch and uses the mock provider; the trusted reusable workflow retrieves Pull Request diffs as data and invokes OpenRouter only after deterministic CI succeeds.
