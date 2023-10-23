"use strict";

import DOMBase from "./DOMBase.js";

/**
 * Attributes library that is inherited from DOMBase library
 */
class Attributes extends DOMBase {
  /**
   * Creates new attribute to your Document Object Model
   * @param {string} name
   * @return {Attr}
   */
  static createNewAttribute(name) {
    return document.createAttribute(name);
  }

  /**
   * Checks if element has specific attribute
   * @param {Element} el
   * @return {boolean}
   */
  static hasAttribute(el, attrName) {
    return el.hasAttribute(attrName);
  }

  /**
   * Checks if element has any attribute(s)
   * @param {Element} el
   * @return {boolean}
   */
  static hasAttributes(el) {
    return el.hasAttributes();
  }

  /**
   * Get attribute from an element
   * @param {Element} el
   * @param {string} attrName
   * @return {string | null}
   */
  static getAttribute(el, attrName) {
    return el.getAttribute(attrName);
  }

  /**
   * Gets map of attributes
   * @param {Element} el
   * @return {NamedNodeMap}
   */
  static getAttributes(el) {
    return el.attributes;
  }

  /**
   * Set attribute to an element
   * @param {Element} el
   * @param {string} attrName
   * @param {string} attrValue
   */
  static setAttribute(el, attrName, attrValue) {
    el.setAttribute(attrName, attrValue);
  }

  /**
   * Toggle attribute of an element
   * @param {Element} el
   * @param {string} attrName
   */
  static toggleAttribute(el, attrName) {
    el.toggleAttribute(attrName, true);
  }

  /**
   * Checks if selected element has specified className
   * @param {Element} el
   * @param {string} className
   */
  static hasClass(el, className) {
    return (el.classList) ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
  }

  /**
   * Removes specific attribute from an element
   * @param {Element} el
   */
  static removeAttribute(el, attrName) {
    el.removeAttribute(attrName);
  }

  /**
   * Remove all attributes from an element
   * @param {Element} el
   */
  static removeAllAttributes(el) {
    let len = el.attributes.length;
    if (len > 0) {
      for (let i = 0; i < len; ++i) {
        el.removeAttribute(el.attributes.item(i));
      }
    }
  }

  /**
   * Adds class to the selected element
   * @param {Element} el
   * @param {string} className
   */
  static addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!this.hasClass(el, className)) el.className += " " + className;
  }

  /**
   * Removes class from the selected element
   * @param {Element} el
   * @param {string} className
   */
  static removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp("\\b" + className+ "\\b", "g"), "");
  }
}

export default Attributes;