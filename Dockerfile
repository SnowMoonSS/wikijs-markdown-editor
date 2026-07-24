ARG BUILDPLATFORM=linux/amd64
FROM --platform=${BUILDPLATFORM} node:lts-alpine AS builder

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build

FROM ghcr.io/linuxserver/baseimage-alpine:3.24

RUN apk add --no-cache nginx

COPY --from=builder /src/dist/ /opt/wikijs-markdown-editor/dist/

COPY root/ /

EXPOSE 8080
