# ---- Build stage --------------------------------------------------------
FROM python:3.11.14-alpine3.23 AS build

WORKDIR /app

# Build tooling for any dependency without a prebuilt musllinux wheel;
# discarded along with this stage, so it never reaches the runtime image.
RUN apk add --no-cache --virtual .build-deps build-base libffi-dev

COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# ---- Runtime stage --------------------------------------------------------
FROM python:3.11.14-alpine3.23

RUN apk upgrade --no-cache \
    && addgroup -S -g 10001 order \
    && adduser -S -D -H -u 10001 -G order order

WORKDIR /app

COPY --from=build /install /usr/local
COPY --chown=order:order . .

RUN python -m pip uninstall --yes setuptools wheel pip

USER 10001

EXPOSE 8004

HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:8004/health || exit 1

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8004"]
