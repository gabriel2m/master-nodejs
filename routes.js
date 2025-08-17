import { Router } from 'express';
import path from './helpers/path.js';

export default Router()
    .get('/users', (_request, response) => response.sendFile(path.view('users')))
    .get('/', (_request, response) => response.sendFile(path.view('home')));
