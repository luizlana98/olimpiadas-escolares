FROM node:lts-alpine

COPY node_modules /usr/src/node_modules
COPY dist /usr/src/dist
RUN mkdir -p /usr/src/outputs

WORKDIR /usr/src

EXPOSE 3000
CMD node dist/Main
