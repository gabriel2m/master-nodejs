import express from "express";
import status from "http-status";
import bodyParser from "body-parser";
import session from "express-session";
import { connect } from "mongoose";
import routes from "./routes.js";
import path from "./helpers/path.js";

connect(process.env.MONGODB_URL).then(() => {
    express()
        .set("view engine", "pug")
        .use(express.static("public"))
        .use(bodyParser.urlencoded())
        .use(
            session({
                secret: process.env.APP_SECRET,
                resave: false,
                saveUninitialized: true,
            }),
        )
        .use((req, res, next) => {
            Object.assign(res.locals, {
                user: req.session.user,
                basedir: path.view(),
                flash: req.session.flash ?? [],
                errors: req.session.errors ?? {},
            });
            Object.assign(req.session, {
                flash: [],
                errors: {},
            });
            next();
        })
        .use(routes)
        .use((_request, response) => response.sendStatus(status.NOT_FOUND))
        .listen(process.env.APP_PORT);
});
