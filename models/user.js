import mongoose from "mongoose";
import { hash } from "bcryptjs";

const { Schema, model } = mongoose;

const schema = new Schema({
    email: String,
    password: String,
});

schema.pre("save", function () {
    if (this.getChanges().$set.password === undefined) {
        return;
    }
    return hash(this.password, 10).then((hash) => {
        this.password = hash;
    });
});

export default model("User", schema);
