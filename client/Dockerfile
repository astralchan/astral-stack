FROM node:alpine as base
WORKDIR /client

# Setup pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base as builder
WORKDIR /client

RUN apk add \
  autoconf \
  automake \
  clang \
  zlib-dev \
  make \
  nasm

COPY . .
RUN pnpm i
RUN pnpm build

FROM base as dev

COPY . .
RUN pnpm i

EXPOSE 8000
CMD [ "pnpm", "start" ]

FROM nginx:alpine as prod
WORKDIR /client

COPY --from=builder /client/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
