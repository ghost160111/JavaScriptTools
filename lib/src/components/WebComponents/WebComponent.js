"use strict";

class WebComponent extends HTMLElement {
  constructor() {
    super();
    WebComponent.getObjCount();
  }

  static define(elementName, classConstructor, options) {
    if (WebComponent instanceof HTMLElement) {
      return (options)
        ? customElements.define(elementName, classConstructor, options)
        : customElements.define(elementName, classConstructor);
    }

    throw TypeError(`${WebComponent.name} is not an instance of ${HTMLElement.name}`);
  }

  static objCount = 0;
  static getObjCount() {
    return this.objCount++;
  }
}

export default WebComponent;