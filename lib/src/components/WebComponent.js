"use strict";

class WebComponent extends HTMLElement {
  constructor() {
    super();
  }

  static define(elementName, classConstructor, options) {
    if (WebComponent instanceof HTMLElement) {
      return (options)
        ? customElements.define(elementName, classConstructor, options)
        : customElements.define(elementName, classConstructor);
    }

    throw TypeError(`${WebComponent.name} is not an instance of ${HTMLElement.name}`);
  }
}

WebComponent.define("footer-component", class FooterComponent extends WebComponent {
  constructor() {
    super();
    this.nodeStyles = "";
    this.htmlContent = "";
    this.node = this.attachShadow({mode: "open"});
    this.node.innerHTML = `<style>${this.nodeStyles}</style><div>${this.htmlContent}</div>`;
  }

  static checkType(type, input, message) {
    if (typeof type !== "string") {
      throw TypeError("Type parameter description should be specified in string!");
    }

    if (typeof input !== type) {
      if (message) {
        throw TypeError(message);
      }
      throw TypeError("Input parameter value is not a " + type + "!");
    }

    return input;
  }

  static set nodeStyles(value) {
    if (typeof value === "string") {
      this.nodeStyles = value;
    }
    throw TypeError("Value for nodeStyles is not a string!");
  }

  static set htmlContent(value) {
    this.checkType("string", value, "HTML content should be specified in string type!");
  }
});

const randomNumber = (range) => Math.floor(Math.random() * range);
randomNumber(10000);

export {  }