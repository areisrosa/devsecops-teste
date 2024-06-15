FROM node:22-alpine

ENV INSTALL_PATH /worspace

WORKDIR $INSTALL_PATH

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
