FROM public.ecr.aws/docker/library/node:16.20.0-alpine3.16 AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY /.yarn ./.yarn
RUN yarn config set --home enableTelemetry 0
RUN yarn install
COPY . .

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
RUN yarn build

ENV NEXT_TELEMETRY_DISABLED 1

CMD yarn dev
