import User from "../models/user.js";
import { compare } from "bcryptjs";

export default {
    create(req, res) {
        res.render("login");
    },

    store(req, res) {
        const wrong = () => {
            req.session.flash.push("Invalid credentials.");
            res.redirect("/login");
        };

        User.findOne({ email: req.body.email }).then((user) => {
            if (!user) {
                return wrong();
            }
            compare(req.body.password, user.password).then((equals) => {
                if (!equals) {
                    return wrong();
                }
                req.session.regenerate(() => {
                    req.session.user = user;
                    req.session.flash = ["Login successful."];
                    req.session.save(() => {
                        res.redirect("/");
                    });
                });
            });
        });
    },

    destroy(req, res) {
        req.session.user = null;
        req.session.save(() => {
            req.session.regenerate(() => {
                res.redirect("/");
            });
        });
    },
};
