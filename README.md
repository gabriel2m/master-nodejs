# Node.js - The Complete Guide
[**Node.js - The Complete Guide**](https://www.udemy.com/course/nodejs-the-complete-guide/) course assignments.

# Requirements
- [Docker](https://www.docker.com/)
- [Docker compose](https://docs.docker.com/compose/)
- [Make](https://www.gnu.org/software/make/manual/make.html)

# Install
```sh
make install
```

# Run
```sh
make run
```

# Config
Open [.env.example](https://github.com/gabriel2m/nodejs-complete-guide/blob/master/.env.example) to see all available configs, change their values via `.env` file.

## Assignments
- [1](https://github.com/gabriel2m/nodejs-complete-guide/commit/1f26e8c820b8d1d09152af680c9d65dca1840fff):
    - Spin up a Node.js-driven Server (on port 3000)
    - Handle two Routes: "/" and "/users"
    - Return some greeting text on "/"
    - Return a list of dummy users (e.g. `<ul><li>User 1</li></ul>`)
    - Add a form with a "username" `<input>` to the "/" page and submit a POST request to "/create-user" upon a button click
    - Add the "/create-user" route and parse the incoming data (i.e. the username) and simply log it to the console

- [2](https://github.com/gabriel2m/nodejs-complete-guide/commit/168e16b9927257e252d550cd2d9f952e56534409):
    - Create an Express.js app which funnels the requests through 2 middleware functions that log something to the console and return one response.
    - Handle requests to "/" and "/users" such that each request only has one handler/middleware that does something with it (e.g. send dummy response).

- [3](https://github.com/gabriel2m/nodejs-complete-guide/commit/68cf0de0fb7ac139a16c107d4ce1fb2ae0025832):
    - Create an Express.js app which serves two HTML files (of your choice/with your content) for "/" and "/users".
    - Add some static (.js or .css) files to your project that should be required by at least one of your HTML files.

- [4](https://github.com/gabriel2m/nodejs-complete-guide/commit/4dbe4b4b8775dd33202838601b551a3f3153a156):
    - Create a route "/" with a `<form>` that allows users to input their name
    - Create a route "/users" that outputs an `<ul>` with the user names.

- [5](https://github.com/gabriel2m/nodejs-complete-guide/commit/d85da42c49424f747e89abe31259c77316d7f671):
    - Save user on session when logging in
