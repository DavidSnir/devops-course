
FROM node:20-alpine AS builder

WORKDIR /app

COPY ./package*.json .

RUN npm ci

COPY nest-cli.json tsconfig.json ./

COPY src/ ./src

RUN npm run build

FROM gcr.io/distroless/nodejs20-debian12 AS production

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# ENV NODE_ENV=development
# ENV DB_HOST=postgres-db
# ENV DB_PORT=5432
# ENV DB_NAME=company
# ENV DB_USER=admin
# ENV DB_PASSWORD=admin123
# ENV PORT=3000

EXPOSE 3000

CMD [ "dist/main.js" ]