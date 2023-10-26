"use strict";

class App {
  /** @type {string} */ _selector = "#app"
  /** @type {Element} */ _app = document.querySelector(this._selector);
  /** @type {object[]} */ _components = [];

  /** @param {object[]} components */
  render(...components) {
    for (let i = 0; i < components.length; ++i) {
      this._components.push(components[i]);
      this._components[i].renderComponent("#app");
    }
  }
}

export default App;