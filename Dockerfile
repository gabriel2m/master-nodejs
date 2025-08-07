FROM node:lts-alpine

WORKDIR /srv/http/app

USER node

CMD ["npm", "start"]
