import path from "path";
import { fileURLToPath } from "url";

export default {
    ...path,
    root: path.dirname(path.dirname(fileURLToPath(import.meta.url))),
    base(...paths) {
        return this.join(this.root, ...paths);
    },
    view(view = null) {
        return this.base("views", view ? `${view}.html` : "");
    },
};
