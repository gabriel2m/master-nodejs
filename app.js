import { readFile } from "fs";
import { createServer } from "http";
import { URLSearchParams } from "url";

const server = createServer((request, response) => {
    console.log('Request: ', request.url);

    switch (true) {
        case request.url == '/create-user' && request.method == 'POST':
            request
                .toArray()
                .then((body) => {
                    const data = new URLSearchParams(Buffer.concat(body).toString());
                    console.log('Nome:', data.get('name'));

                    response
                        .writeHead(301, { location: '/' })
                        .end();
                });
            break;

        default:
            readFile('./views/home.html', (_, body) => response.end(body));
            break;
    }

});

server.listen(3000);

process.on('SIGTERM', () => process.exit(0));
