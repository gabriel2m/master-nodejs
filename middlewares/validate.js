import { checkSchema, validationResult } from "express-validator";

export default (schema) => {
    return [
        checkSchema(schema),
        (req, res, next) => {
            if (validationResult(req).isEmpty()) {
                return next();
            }
            req.session.errors = validationResult(req)
                .array({ onlyFirstError: true })
                .reduce((errors, error) => {
                    errors[error.path] = error.msg;
                    return errors;
                }, {});
            res.redirect(req.url);
        },
    ];
};
