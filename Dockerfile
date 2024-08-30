FROM node:22-slim

RUN apt update && apt install -y openssl procps git

RUN npm i -g express pg @types/express

WORKDIR /home/node/app

USER node

CMD npm run api && tail -f /dev/null