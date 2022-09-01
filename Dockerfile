# --------------> The build image
FROM node:latest AS build

WORKDIR .

COPY package*.json .

RUN --mount=type=secret,mode=0644,id=npmrc,target=/usr/src/app/.npmrc npm ci --only=production

# --------------> The production image

FROM node:lts-alpine

RUN apk add dumb-init

ENV NODE_ENV production

USER node

WORKDIR .

COPY --chown=node:node --from=build node_modules node_modules

COPY --chown=node:node . .

CMD ["dumb-init", "node", "main.js"]
