FROM node:lts

WORKDIR /srv/http/app

USER node

CMD ["npm", "start"]
