import { Router } from "express";
import login from "./controllers/login.js";
import user from "./controllers/user.js";
import auth from "./middlewares/auth.js";
import guest from "./middlewares/guest.js";

export default Router()
    .get("/login", guest, login.create)
    .post("/login", guest, login.store)
    .post("/logout", auth, login.destroy)
    .get("/signup", guest, user.create)
    .post("/signup", guest, user.store)
    .get("/", (_request, response) => response.render("home"));
