FROM node:22

WORKDIR /app

COPY ./base/package*.json .

RUN npm ci

COPY ./base .

EXPOSE 3000

CMD [ "npm" , "start"]