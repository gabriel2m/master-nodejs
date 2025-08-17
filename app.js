import express from 'express';
import path from './helpers/path.js';
import routes from './routes.js';
import status from 'http-status';

express()
    .use(express.static(path.base('public')))
    .use(routes)
    .use((_request, response) => response.sendStatus(status.NOT_FOUND))
    .listen(process.env.APP_PORT);
