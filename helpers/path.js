import path from "path";
import { fileURLToPath } from "url";

path.root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

path.base = (...paths) => path.join(path.root, ...paths);

path.view = (view) => path.base(`views/${view}.html`);

export default path;
