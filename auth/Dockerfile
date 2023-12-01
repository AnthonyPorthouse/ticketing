FROM node:21.2-alpine3.18

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci
COPY . .

CMD ["npm", "start"]
