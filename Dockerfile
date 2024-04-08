FROM node:bullseye-slim

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY --chown=node:node ./src ./src

EXPOSE 5050

CMD ["node", "src/server.js"]