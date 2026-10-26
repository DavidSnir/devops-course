FROM node:22 as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM gcr.io/distroless/nodejs22-debian12:nonroot as run

WORKDIR /app

COPY --from=build /app/dist ./dist

CMD [ "dist/index.js" ]