# STAGE 1: BUILD
FROM node:12-slim

RUN apt-get update

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN npm run build

# STAGE 2: SERVE
FROM nginx:1.17-alpine

WORKDIR /usr/share/nginx/html

COPY --from=0 /usr/src/app/dist/ ./

RUN echo 'echo "{ \"backend\": \"${BACKEND}\" }" > config.json' > startup.sh

CMD sh startup.sh && nginx -g 'daemon off;'
