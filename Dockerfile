FROM public.ecr.aws/docker/library/node:16.20.0-alpine3.16 AS base

FROM base AS deps
WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY  .yarn ./.yarn
RUN yarn install

FROM base AS runner
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
