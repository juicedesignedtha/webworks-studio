import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, "..");
const source = resolve(projectRoot, "node_modules/preline/dist/preline.js");
const destinationDir = resolve(projectRoot, "js/vendor");
const destination = resolve(destinationDir, "preline.js");

mkdirSync(destinationDir, { recursive: true });
copyFileSync(source, destination);
console.log("Preline runtime copied to js/vendor/preline.js");
