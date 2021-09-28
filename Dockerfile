FROM node:latest

EXPOSE 3001

WORKDIR /usr/src/

COPY . .

WORKDIR /usr/src/frontend

RUN npm install && npm run build

WORKDIR /usr/src/backend

RUN cp -r ../frontend/build . && rm -rf ../frontend && npm install

CMD npm start
