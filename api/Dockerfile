FROM rust:alpine as base
WORKDIR /api

RUN apk add \
  musl-dev

FROM base as builder
WORKDIR /api

COPY . .
RUN cargo build -r

FROM builder as prod
WORKDIR /api

EXPOSE 3000
CMD ["cargo", "run", "-r"]

FROM builder as dev
WORKDIR /api

COPY . .
RUN cargo build

EXPOSE 3000
CMD ["cargo", "run"]
