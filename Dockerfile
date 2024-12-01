FROM node:23-alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . . 

EXPOSE 5366

CMD ["npm","run","dev"]
