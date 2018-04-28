FROM node:7.6

RUN mkdir -p /src/app

ENV zachs 34.215.160.52:9001

ENV andys 52.91.248.43

ENV mikes 52.43.195.69

ENV toms 52.14.248.199:4000

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 8008

CMD ["npm", "run", "docker"]


