FROM node:bullseye-slim AS build

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine3.21-perl AS production

COPY --link nginx.conf /etc/nginx/nginx.conf

COPY --link --from=build /src/app/dist/ /usr/share/nginx/html

EXPOSE 8080
