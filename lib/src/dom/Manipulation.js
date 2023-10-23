"use strict";

import DOMBase from "./DOMBase.js";

/**
 * Manipulation library that is inherited from DOMBase library
 */
class Manipulation extends DOMBase {
  /**
   * How to create a new element and attach it to the DOM tree.
   * @param {string} elementName
   * @param {string} innerHTML
   * @return {HTMLElement}
   */
  static createDOMElement(elementName, htmlContent) {
    let el = document.createElement(elementName);
    el.innerHTML = htmlContent;
    return el;
  }

  /** 
   * Alternatively, use DOM methods for creating content nodes and append them to the new element. This approach requires more code, and is in general slower or equally fast as working with innerHTML:
   * @param {string} textNodeContent 
   * @param {Element} element
   * @return {void | Text}
   */
  static createTextNode(textNodeContent, element) {
    let textNode = document.createTextNode(textNodeContent);
    if (element) {
      element.appendChild(textNode);
    } else {
      return textNode;
    }
  }

  /**
   * Remove an element from the DOM tree and insert a new one in its place.
   * @param {Element} currentEl
   * @param {Element} newEl
   * @return {void | Element}
   */
  static replaceDOMElement(currentElement, newElement, newElementInnerHTML) {
    currentElement.parentNode.replaceChild(newElement, currentElement);
    (newElementInnerHTML) ? newElement.innerHTML = newElementInnerHTML : newElement;
  }

  /**
   * Remove the parents of an element from the DOM, leaving the element's content in place
   * @param {Element} elementToUnwrap
   */
  static unwrapDOMElement(elementToUnwrap) {
    let el = elementToUnwrap;
    let parent = el.parentNode;

    while (el.firstChild) {
      parent.insertBefore(el.firstChild, el);
    }

    parent.removeChild(el);
  }

  /**
   * Remove all child nodes of an element from the DOM
   * @param {Element} element
   */
  static removeElementContent(element) {
    element.innerHTML = "";
  }

  /**
   * Remove an element from the DOM tree.
   * @param {Element} elementToBeDeleted
   */
  static removeElement(elementToBeDeleted) {
    elementToBeDeleted.remove();
  }

  /**
   * Insert a new element after an existing one in the DOM tree
   * @param {Element} el
   * @param {Element} referenceNode
   */
  static insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
  }

  /**
   * Insert a new element before an existing one in the DOM tree
   * @param {Element} el
   * @param {Element} referenceNode
   */
  static insertBefore(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
  }

  /**
   * Get element text content
   * @param {Element} el
   * @return {string | null}
   */
  static getTextContent(el) {
    return el.textContent;
  }

  /**
   * Get HTML content of an element
   * @param {Element} el
   * @return {string}
   */
  static getInnerHTML(el) {
    return el.innerHTML;
  }

  /**
   * Set HTML content to an element
   * @param {Element} el
   */
  static setHTMLContent(el, htmlContent) {
    el.innerHTML = htmlContent;
  }

  /**
   * Append to the element's content
   * @param {Element} el
   * @param {string} htmlContent
   */
  static appendHTMLContent(el, htmlContent) {
    el.innerHTML += htmlContent;
  }

  /**
   * Prepend to the element's content
   * @param {Element} el
   * @param {string} htmlContent
   */
  static prependHTMLContent(el, htmlContent) {
    el.innerHTML = htmlContent + el.innerHTML;
  }

  /**
   * Wrap a given element in a new container using plain JavaScript
   * @param {Element} el
   * @param {Element} wrapper
   */
  static wrap(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

  /**
   * Get clone of an element
   * @param {Element} el
   * @return {Node}
   */
  static cloneElement(el) {
    return el.cloneNode(true);
  }

  /**
   * Iterate over list of elements
   * @param {Element[]} list
   */
  static iterateOverList(list, filter) {
    list.forEach(filter);
  }
}

export default Manipulation;