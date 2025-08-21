import { Router } from 'express';

const data = {
    users: []
};

export default Router()
    .get('/users', (_request, response) => response.render('users', data))
    .post('/users', (request, response) => {
        data.users.push(request.body);
        response.redirect('/users');
    })
    .get('/', (_request, response) => response.render('home'));
