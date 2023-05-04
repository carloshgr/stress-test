FROM node:16

WORKDIR /usr/src/app

COPY server/package*.json ./

RUN npm install

COPY server/index.js ./
COPY server/bubblesort.js ./

EXPOSE 8080

CMD ["node", "index.js"]