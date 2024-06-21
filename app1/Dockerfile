ARG BASE_IMAGE=node:22-alpine

FROM --platform=$BUILDPLATFORM ${BASE_IMAGE} AS builder

ENV INSTALL_PATH /worspace

WORKDIR $INSTALL_PATH

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
