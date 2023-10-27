"use strict";

class Base {
  /** @type {Element} */ htmlElement;
  /** @type {string} */ htmlContent;
  /** @type {Element} */ mutationEl;

  /** @param {string} baseElementName */
  constructor(baseElementName) {
    Base.getObjCount();
    this.htmlElement = document.createElement("div");
    
    if (baseElementName) {
      this.htmlElement = document.createElement(baseElementName);
    }

    this.htmlContent = "";
    this.mutationEl = document.createElement("div");
    this.mutationEl.appendChild(this.htmlElement);
  }

  static objCount = 0;
  static getObjCount() {
    return this.objCount++;
  }

  setHTMLContent(htmlContent) {
    this.htmlContent = htmlContent;
  }

  setComponentClassName(className) {
    this.htmlElement.setAttribute("class", className);
  }

  setupComponent(className, htmlContent) {
    this.setComponentClassName(className);
    this.setHTMLContent(htmlContent);
  }
  
  buildElementComponent() {
    this.htmlElement.innerHTML = this.htmlContent;
    return this.htmlElement;
  }

  gethtmlElement() {
    return this.htmlElement;
  }

  renderComponent(parentSelector, insertBeforeSelector) {
    let parentElement = document.querySelector(parentSelector);

    if (!insertBeforeSelector) {
      parentElement.appendChild(this.htmlElement);
    } else {
      let insertBeforeElement = document.querySelector(insertBeforeSelector);
      parentElement.insertBefore(this.htmlElement, insertBeforeElement);
    }
  }

  buildComponent(className, htmlContent) {
    this.setupComponent(className, htmlContent);
    this.buildElementComponent();
  }
}

export default Base;