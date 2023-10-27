"use strict";

import Base from "../../abstracts/Base.js";
import Types from "../../typeChecking/Types.js";

class UIComponent extends Base {
  /** @type {string}  Member variable: base element tag name of UIComponent */ baseElementTagName;
  /** @type {string}  Member variable: html content of UIComponent          */ htmlContent;
  /** @type {Element} Member variable: UIElement of UIComponent             */ UIElement;

  /**
   * @param {string} baseElementTagName Set base element tag name for your UIComponent
   * @param {string} htmlContent        Set html content for your UIComponent
   */
  constructor(baseElementTagName, htmlContent) {
    UIComponent.getObjCount();
    this.baseElementTagName = baseElementTagName;
    this.htmlContent = htmlContent;
    this.UIElement = document.createElement(this.baseElementTagName);
  }

  /**
   * Member method: this method renders UI component
   * @param {string} parentSelector       Required - set parent selector to render your UIComponent inside of it
   * @param {string} insertBeforeSelector Optionally - set insert before selector of element that you want to insert before 
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
   * Member Setter: Sets base element tag name
   * @param {string} value Sets string value, value should be name of HTML element
   */
  setBaseElement(value) {
    this.baseElementTagName = Base.checkType("string", value, "Base element name should be specified in string type", true);
  }

  /** 
   * Member Setter: Sets HTML content to UI component
   * @param {string} value Sets string value, value should be HTML content for your UIComponent
   */
  setHTMLContent(value) {
    this.htmlContent = Base.checkType("string", value, "HTML content should be type of string", true);
  }

  /**
   * Member Setter: Sets class attribute to base element
   * @param {string} className Sets Element object value, value should be an HTML element
   */
  setBaseElementClassName(className) {
    this.UIElement.setAttribute("class", Base.checkType("string", className, "Class name parameter value should be type of string!", true));
  }

  /** 
   * Member Getter: Gets base element tag name
   * @returns {string}
   */
  getBaseElement() {
    return this.baseElementTagName;
  }

  /** 
   * Member Getter: Gets HTML content of your UI component
   * @returns {string}
   */
  getHtmlContent() {
    return this.htmlContent;
  }

  /**
   * Member Getter: Gets UI base element
   * @returns {Element}
   */
  getUIElement() {
    return this.UIElement;
  }
}

export default UIComponent;