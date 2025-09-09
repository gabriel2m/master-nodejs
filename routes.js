import { Router } from "express";
import login from "./controllers/login.js";
import user from "./controllers/user.js";
import User from "./models/user.js";
import auth from "./middlewares/auth.js";
import guest from "./middlewares/guest.js";
import validate from "./middlewares/validate.js";

export default Router()
    .get("/login", guest, login.create)
    .post(
        "/login",
        guest,
        validate({
            email: {
                isEmail: {
                    errorMessage: "Invalid email",
                },
            },
            password: {
                isLength: {
                    options: { min: 8 },
                    errorMessage: "Too short",
                },
            },
        }),
        login.store,
    )
    .post("/logout", auth, login.destroy)
    .get("/signup", guest, user.create)
    .post(
        "/signup",
        guest,
        validate({
            email: {
                isEmail: {
                    errorMessage: "Invalid email",
                },
                unique: {
                    custom: (email) =>
                        User.exists({ email }).then((result) => {
                            if (result !== null) {
                                throw new Error("Already in use");
                            }
                        }),
                },
            },
            password: {
                isLength: {
                    options: { min: 8 },
                    errorMessage: "Too short",
                },
            },
        }),
        user.store,
    )
    .get("/", (_request, response) => response.render("home"));
