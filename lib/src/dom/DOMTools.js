"use strict";

import TypeChecking from "../typeChecking/Types.js";

/**
 * Collection of basic DOM tools like traversing, manipulating HTML elements.
 */
class DOMTools {
  /**
   * @param {string} elementName
   * @return {Element}
   */
  static createElement(elementName = "div") {
    if (typeof elementName !== "string") {
      throw new TypeError("Element tag name should be string!");
    }

    let element = document.createElement(elementName);
    return element;
  }

  /**
   * @param {Element} element
   * @param {string} parentSelector
   * @param {string} insertBeforeSelector
   */
  static renderElement(element, parentSelector, insertBeforeSelector) {
    let selectedElement = TypeChecking.checkType(
      "object",
      element,
      "element parameter should be type of object, and that object should be HTMLElement"
    );

    let selectedParentSelector = TypeChecking.checkType(
      "string",
      parentSelector,
      "parent selector should be type of string!"
    );

    let readyElement = selectedElement;
    let parentElement = document.querySelector(selectedParentSelector);

    if (insertBeforeSelector) {
      let selectedInsertBeforeSelector = TypeChecking.checkType(
        "string",
        insertBeforeSelector,
        "Insert before selector should be type of string!"
      );

      let insertBeforeElement = document.querySelector(selectedInsertBeforeSelector);
      parentElement.insertBefore(readyElement, insertBeforeElement);
    } else {
      parentElement.appendChild(readyElement);
    }
  }

  /**
   * @param {string} parentSelector
   * @param {Element[]} elements
   */
  static renderElements_Append(parentSelector, ...elements) {
    for (let i = 0; i < elements.length; ++i) {
      this.renderElement(elements[i], parentSelector);
    }
  }

  /**
   * @param {string} parentSelector
   * @param {string} insertBeforeSelector
   * @param {Element[]} elements
   */
  static renderElements_SpecLocation(parentSelector, insertBeforeSelector, ...elements) {
    for (let i = 0; i < elements.length; ++i) {
      this.renderElement(elements[i], parentSelector, insertBeforeSelector);
    }
  }

  /**
   * @param {string} htmlElementName
   * @param {string} htmlContent
   * @param {string} cssStyles
   */
  static createComponent(htmlElementName, htmlContent, cssStyles) {
    let selectedHtmlElementName = TypeChecking.checkType(
      "string",
      htmlElementName,
      "htmlElementName parameter value should be type of string. Not a " + typeof htmlElementName,
    );

    let selectedHtmlContent = TypeChecking.checkType(
      "string",
      htmlContent,
      "htmlContent parameter value should be type of string. Not a " + typeof htmlContent,
    );

    let htmlElement = document.createElement(selectedHtmlElementName);
    let htmlElementContent;
    let selectedCssStyles;
    
    if (cssStyles) {
      selectedCssStyles = TypeChecking.checkType(
        "string",
        cssStyles,
        "cssStyles parameter value should be type of string. Not a " + typeof cssStyles
      );

      htmlElementContent = `<style>${cssStyles}</style>${selectedHtmlContent}`;
    } else {
      htmlElementContent = selectedHtmlContent;
    }

    htmlElement.innerHTML = htmlElementContent;
  }

  /**
   * @param {string} newHTMLTagName
   * @param {string} cssStyles
   * @param {string} htmlContent
   */
  static createCustomWebComponent(newHTMLTagName, cssStyles, htmlContent) {
    customElements.define(newHTMLTagName, class CustomComponent extends HTMLElement {
      constructor() {
        super();
        
        const node = this.attachShadow({mode: "open"});

        let htmlTagName = TypeChecking.checkType(
          "string",
          newHTMLTagName,
          "new HTML tag name should be type of string",
        );

        let style = TypeChecking.checkType(
          "string",
          cssStyles,
          "cssStyles should be type of string",
        );

        let checkedHTMLContent = TypeChecking.checkType(
          "string",
          htmlContent,
          "htmlContent should be type of string",
        );

        node.innerHTML = `
        <style>${style}</style>
        ${checkedHTMLContent}
        `;
      }
    });
  }

  static HTMLAttribute = class HTMLAttribute {
    /** @type {string} */ attributeName;
    /** @type {string} */ attributeValue;
    
    /**
     * @param {string} attributeName
     * @param {string} attributeValue
     */
    constructor(attributeName, attributeValue) {
      this.attributeName = attributeName;
      this.attributeValue = attributeValue;
    }
  }

  /**
   * @param {string} targetSelector
   * @param {string} attributeName
   * @param {string} attributeValue
   */
  static setAttribute(targetSelector, attributeName, attributeValue) {
    const targetElement = document.querySelector(targetSelector);
    const attrName = TypeChecking.checkType("string", attributeName, true);
    const attrValue = TypeChecking.checkType("string", attributeValue, true);

    targetElement.setAttribute(attrName, attrValue);
  }

  /**
   * @param {string[]} attributesNameArr
   * @param {string[]} attributesValueArr
   * @return {HTMLAttribute[]}
   */
  static createAttributesMap(attributesNameArr, attributesValueArr) {
    const targetMap = [];
    const attributesNameMap = [];
    const attributesValueMap = [];

    attributesNameMap.push(...attributesNameArr);
    attributesValueMap.push(...attributesValueArr);

    if (attributesNameMap.length !== attributesValueMap.length) {
      throw new Error("Length of attributesNameArr and attributesValueArr does not match, check your input array data.");
    }

    const arrStandardLength = (attributesNameMap.length + attributesValueMap.length) / 2;

    for (let i = 0; i < arrStandardLength; ++i) {
      targetMap.push(
        new this.HTMLAttribute(attributesNameMap[i], attributesValueMap[i])
      );
    }

    return targetMap;
  }

  /**
   * @param {object[]} attrList
   * @return {HTMLAttribute[]}
   */
  static createAttributesArrayObj(...attrList) {
    let collectionAttrs = [];

    for (let i = 0; i < attrList.length; ++i) {
      collectionAttrs.push(
        new this.HTMLAttribute(attrList[i].attributeName, attrList[i].attributeValue)
      );
    }

    return collectionAttrs;
  }

  /**
   * @param {string} targetSelector
   * @param {string[]} attributeNamesArray
   * @param {string[]} attributeValueArray
   */
  static setAttributes(targetSelector, attributeNamesArray, attributeValueArray) {
    const targetMap = this.createAttributesMap(attributeNamesArray, attributeValueArray);
    const targetElement = document.querySelector(targetSelector);

    for (let i = 0; i < targetMap.length; ++i) {
      targetElement.setAttribute(targetMap[i].attributeName, targetMap[i].attributeValue);
    }
  }

  /**
   * @param {string} targetSelector
   * @param {object[]} attrList
   */
  static setCustomAttributes(targetSelector, ...attrList) {
    const targetElement = document.querySelector(targetSelector);

    for (let i = 0; i < attrList.length; ++i) {
      targetElement.setAttribute(attrList[i].attributeName, attrList[i].attributeValue);
    }
  }
}

export default DOMTools;