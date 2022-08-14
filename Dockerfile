FROM node:16.14.0

WORKDIR /src/app

COPY package.json ./

RUN npm ci

COPY . .

EXPOSE 5000

CMD ["node", "main.js"]
