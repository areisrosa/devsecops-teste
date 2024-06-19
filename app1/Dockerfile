FROM node:22-alpine

ENV INSTALL_PATH /worspace

WORKDIR $INSTALL_PATH

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
