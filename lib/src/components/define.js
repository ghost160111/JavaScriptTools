"use strict";

/**
 * Defines custom elements using Map object, [key, value] pairing method
 * @param {Map} componentsList
 */
const defineComponents = (componentsList) => {
  for (const [key, value] of componentsList.entries()) {
    customElements.define(key, value);
  }
}

export default defineComponents;