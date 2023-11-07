import * as Package from "./src/Package.js";

const modules = [];

for (const classesList of Package.default.classes) {
  modules.push(classesList);
}

export default modules;