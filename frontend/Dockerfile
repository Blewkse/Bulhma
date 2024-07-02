# Stage 1
FROM node:21.6.2-slim AS builder
WORKDIR /frontend

COPY ./package.json .
COPY ./pnpm-lock.yaml .

RUN corepack enable
RUN corepack prepare pnpm@8.6.12 --activate

RUN pnpm install
COPY . .
RUN pnpm run build

# Stage 2
FROM nginx:1.25.1-alpine
WORKDIR /data/www
COPY --from=builder /frontend/dist .

# Change default configuration
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]