import WebComponent from "./WebComponent.js";
import HeaderComponent from "./collection/HeaderComponent.js";
import FooterComponent from "./collection/FooterComponent.js";

const listOfComponents = [
  {
    name: "header-component",
    classConstructor: HeaderComponent
  },
  {
    name: "footer-component",
    classConstructor: FooterComponent
  }
];

/**
 * defineComponents is void function that defines list of components
 * @param {object[]} components
 * @return {void}
 */
const defineComponents = (components) => {
  for (let i = 0; i < components.length; ++i) {
    WebComponent.define(components[i].name, components[i].classConstructor);
  }
}

// Example:
(() => {
  defineComponents(listOfComponents); // each of web components are now defined
});

export default defineComponents;