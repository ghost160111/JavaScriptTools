"use strict";

class App {
  /** @type {string} */ htmlContent;

  /**
   * Sets HTML content to your application
   * @param {string} htmlContent
   */
  setHTMLContent(htmlContent) {
    if (typeof htmlContent !== "string") {
      throw TypeError("HTML content type value should be in string!");
    }
    this.htmlContent = htmlContent;
  }

  /**
   * Renders html content to body element
   */
  render() {
    document.body.innerHTML = this.htmlContent;
  }

  /**
   * Renders HTML component, without the need of creating element, method does it for you.
   * Only things that method needs are HTML content input, parent selector input and optionally insert before selector input, in case if you want to paste content before element.
   */
  renderComponent(htmlContent, parentSelector, insertBeforeSelector) {
    const parentElement = document.querySelector(parentSelector);
    const element = document.createElement("div");
    
    element.setAttribute("class", "g-component");
    element.setAttribute("id", App.idGenerator());
    element.innerHTML = htmlContent;
    
    if (!insertBeforeSelector) {
      parentElement.appendChild(element);
    } else {
      const insertBeforeElement = document.querySelector(insertBeforeSelector);
      parentElement.insertBefore(element, insertBeforeElement);
    }
  }

  static idGenerator() {
    return Math.random().toString(16).slice(2);
  }
}

console.log(App.idGenerator());
console.log(App.idGenerator());
console.log(App.idGenerator());

module.exports = App;