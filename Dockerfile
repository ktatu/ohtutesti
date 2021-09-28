FROM node:16-alpine

WORKDIR /usr/src/mielentila

ENV PUBLIC_URL=https://ohtup-staging.cs.helsinki.fi/mielentilatutkimus

COPY . .

RUN cd ./frontend && \
    npm ci --production && \
    npm run build 

RUN cd ./backend && \
    cp -r ../frontend/build . && \
    rm -rf ../frontend && \
    npm ci --production 

EXPOSE 3001

WORKDIR /usr/src/mielentila/backend

CMD npm start
