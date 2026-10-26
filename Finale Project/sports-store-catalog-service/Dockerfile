# ---- Build stage --------------------------------------------------------
FROM python:3.11.14-slim-bookworm AS build

WORKDIR /app

COPY requirements.txt .
RUN python -m venv /opt/venv \
    && /opt/venv/bin/python -m pip install --no-cache-dir --upgrade pip==26.1.2 \
    && /opt/venv/bin/python -m pip install --no-cache-dir -r requirements.txt \
    && /opt/venv/bin/python -m pip uninstall --yes pip setuptools wheel

# ---- Runtime stage --------------------------------------------------------
FROM python:3.11.14-slim-bookworm

ENV PATH="/opt/venv/bin:$PATH" \
    PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

RUN apt-get update \
    && apt-get upgrade --yes \
    && rm -rf /var/lib/apt/lists/* \
    && python -m pip uninstall --yes pip setuptools wheel \
    && groupadd --gid 10001 catalog \
    && useradd --uid 10001 --gid catalog --no-create-home --shell /usr/sbin/nologin catalog

WORKDIR /app

COPY --from=build /opt/venv /opt/venv
COPY --chown=catalog:catalog . .

USER 10001

EXPOSE 8002

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD ["python", "-c", "import sys, urllib.request; r = urllib.request.urlopen('http://127.0.0.1:8002/health', timeout=2); sys.exit(0 if r.status == 200 else 1)"]

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8002"]
