import status from "http-status";

export default (req, res, next) => {
    if (req.session.user) {
        return res.sendStatus(status.FORBIDDEN);
    }
    next();
};
