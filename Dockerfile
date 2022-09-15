# --------------> The build image
FROM node:latest AS build

WORKDIR .

COPY package*.json .

RUN npm ci --only=production

# --------------> The production image

FROM node:lts-alpine

ENV NODE_ENV production

USER node

WORKDIR .

COPY --chown=node:node --from=build node_modules node_modules

COPY --chown=node:node . .

CMD ["node", "main.js"]
