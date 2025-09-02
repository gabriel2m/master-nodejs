import mongoose from "mongoose";
import { hash } from "bcryptjs";

const { Schema, model, models } = mongoose;

const schema = new Schema({
    email: {
        type: String,
        required: [true, "email required."],
        validate: [
            {
                validator: (email) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                        email,
                    ),
                message: "email invalid.",
            },
            {
                validator: (email) =>
                    models.User.exists({ email }).then(
                        (result) => result === null,
                    ),
                message: "email already in use.",
            },
        ],
    },
    password: {
        type: String,
        required: [true, "password required."],
    },
});

schema.pre("save", function () {
    if (this.$isNew || "password" in this.getChanges().$set) {
        return hash(this.password, 10).then((hash) => {
            this.password = hash;
        });
    }
});

export default model("User", schema);
