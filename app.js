import express from 'express';
import status from 'http-status';
import bodyParser from 'body-parser';
import path from './helpers/path.js';
import routes from './routes.js';

express()
    .set('view engine', 'pug')
    .use(express.static(path.base('public')))
    .use(bodyParser.urlencoded())
    .use(routes)
    .use((_request, response) => response.sendStatus(status.NOT_FOUND))
    .listen(process.env.APP_PORT);
