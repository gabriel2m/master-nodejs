import express from 'express';
import { faker } from "@faker-js/faker";

express()
    .use('/users', (_request, response) => {
        response.send(
            faker.helpers.multiple(() => ({
                id: faker.number.int(),
                name: faker.internet.username(),
                email: faker.internet.email()
            }))
        );
    })
    .use('/', (_request, response) => {
        response.send('Hello');
    })
    .listen(process.env.APP_PORT);
