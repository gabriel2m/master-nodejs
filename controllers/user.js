import User from "../models/user.js";

export default {
    create(req, res) {
        res.render("signup");
    },

    store(req, res) {
        const user = new User(req.body);
        user.save().then(() => {
            req.session.flash.push("User saved.");
            res.redirect("/login");
        });
    },
};
