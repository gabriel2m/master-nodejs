import User from "../models/user.js";

export default {
    create(req, res) {
        res.render("signup");
    },

    store(req, res) {
        const user = new User(req.body);
        user.save()
            .then(() => {
                req.session.flash.push("User saved.");
                res.redirect("/login");
            })
            .catch((err) => {
                if (err.errors) {
                    req.session.errors = err.errors;
                } else {
                    req.session.flash.push("Something went wrong.");
                }
                res.redirect("/signup");
            });
    },
};
