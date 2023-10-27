"use strict";

import Base from "../../abstract/Base.js";
import Types from "../../typeChecking/Types.js";

class UIComponent extends Base {
  /** @type {string} */ baseElementTagName;
  /** @type {string} */ htmlContent;
  /** @type {Element} */ UIElement;

  /**
   * @param {string} baseElementTagName
   * @param {string} htmlContent
   */
  constructor(baseElementTagName, htmlContent) {
    UIComponent.getObjCount();
    this.baseElementTagName = baseElementTagName;
    this.htmlContent = htmlContent;
    this.UIElement = document.createElement(this.baseElementTagName);
  }

  /**
   * Renders UI component
   * @param {string} parentSelector
   * @param {string} insertBeforeSelector
   */
  renderUIComponent(parentSelector, insertBeforeSelector) {
    /** @type {Element} */ const element = this.UIElement;
    /** @type {Element} */ const parentElement = document.querySelector(parentSelector);

    if (!insertBeforeSelector) {
      parentElement.appendChild(element);
    } else {
      /** @type {Element} */ const insertBeforeElement = document.querySelector(insertBeforeSelector);
      if (!insertBeforeElement) {
        throw Error("Element to be inserted before does not exist in Document!");
      }
      parentElement.insertBefore(element, insertBeforeElement);
    }
  }

  /**
   * Setter: Sets base element tag name
   * @param {string} value 
   */
  setBaseElement(value) {
    this.baseElementTagName = Types.checkType("string", value, "Base element name should be specified in string type", true);
  }

  /** 
   * Setter: Sets HTML content to UI component
   * @param {string} value 
   */
  setHTMLContent(value) {
    this.htmlContent = Types.checkType("string", value, "HTML content should be type of string", true);
  }

  /**
   * Setter: Sets class attribute to base element
   * @param {string} className 
   */
  setBaseElementClassName(className) {
    this.UIElement.setAttribute("class", className);
  }

  /** 
   * Getter: Gets base element tag name
   * @returns {string}
   */
  getBaseElement() {
    return this.baseElementTagName;
  }

  /** 
   * Getter: Gets HTML content of your UI component
   * @returns {string}
   */
  getHtmlContent() {
    return this.htmlContent;
  }

  /**
   * Getter: Gets UI base element
   * @returns {Element}
   */
  getUIElement() {
    return this.UIElement;
  }
}

export default UIComponent;