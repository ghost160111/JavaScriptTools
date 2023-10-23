"use strict";

import DOMBase from "./DOMBase.js";

/**
 * Traversing library that is inherited from DOMBase library
 */
class Traversing extends DOMBase {
  /**
   * Getting the parent DOM node of an element
   * @param {Element} el
   * @return {ParentNode | null}
   */
  static getParentNode(el) {
    return el.parentNode;
  }

  /**
   * A helper function for fetching all siblings for a given DOM element -  or a filtered set of them:
   * @param {Element} el
   * @return {Element[]}
   */
  static getSiblings(el, filter) {
    let siblings = [];
    el = el.parentNode.firstChild;
    do {
      if (!filter || filter(el)) {
        siblings.push(el);
      }
    } while (el = el.nextSibling);
    return siblings;
  }

  /**
   * Get all following siblings of an element, optionally filtered
   * @param {Element} el
   * @return {Element[]}
   */
  static getNextSiblings(el, filter) {
    let siblings = [];
    while (el = el.nextSibling) {
      if (!filter || filter(el)) {
        siblings.push(el);
      }
    }
    return siblings;
  }

  /**
   * Get all preceding siblings of an element, optionally filtered
   * @param {Element} el
   * @return {Element[]}
   */
  static getPreviousSiblings(el, filter) {
    let siblings = [];
    while (el = el.previousSibling) {
      if (!filter || filter(el)) {
        siblings.push(el);
      }
    }
    return siblings;
  }

  /**
   * Get the first child from the element
   * @param {Element} el
   * @return {Element | null}
   */
  static getFirstChild(el) {
    if (el) {
      return (el.firstChild) ? el.firstChild : null;
    }
  }

  /**
   * Get the last child from the element
   * @param {Element} el
   * @return {ChildNode | null}
   */
  static getLastChild(el) {
    if (el.lastChild) {
      return (el.lastChild) ? el.lastChild : null;
    }
  }

  /**
   * Selecting the children of an element with DOM methods
   * @param {Element} el
   * @return {NodeListOf<ChildNode> | null}
   */
  static getChildren(el) {
    if (el) {
      return (el.childNodes) ? el.childNodes : null;
    }
  }
}

export default Traversing;