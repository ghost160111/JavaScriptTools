import DOMBase from "./DOMBase.js";

/**
 * Styles library that is inherited from DOMBase library
 */
class Styles extends DOMBase {
  /**
   * Gets computed style of an element
   * @param {Element} el
   */
  static getComputedStyle(el) {
    let style = window.getComputedStyle ? getComputedStyle(el, null) : el.currentStyle;
    return style;
  }

  /**
   * Sets inline css styles
   * @param {Element} el
   * @param {string} cssText
   */
  static setInlineCssText(el, cssText) {
    el.style.cssText = cssText;
  }

  /**
   * Sets css like an object, { prop: key }
   * @param {Element} el
   * @param {object} css
   */
  static css(el, styles) {
    for (let property in styles) {
      el.style[property] = styles[property];
    }
  }

  /**
   * Gets scroll position of an element, x and y respectively as an object
   * @param {Element} el
   * @return {object}
   */
  static getScrollPosition(el) {
    return {
      x: el.scrollLeft,
      y: el.scrollTop
    }
  }

  /**
   * Sets scroll position of an element, x and y respectively
   * @param {Element} el
   * @param {number} x
   * @param {number} y
   */
  static setScrollPosition(el, x, y) {
    el.scrollLeft = x;
    el.scrollTop = y;
  }

  /**
   * Getting the scroll position of a document in px
   * @return {object}
   */
  static getDocumentScrollPosition() {
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      x: scrollLeft,
      y: scrollTop
    }
  }

  /**
   * Setting the document scroll position of the document in px
   * @param {number} x
   * @param {number} y
   */
  static setDocumentScrollPosition(x, y) {
    document.documentElement.scrollLeft = document.body.scrollLeft = x;
    document.documentElement.scrollTop = document.body.scrollTop = y;
  }

  /**
   * Get the top/left coordinates of an element relative to the offset parent.
   * @param {Element} el
   * @return {object}
   */
  static getOffsetPosition(el) {
    return {
      x: el.offsetLeft,
      y: el.offsetTop
    }
  }
  
  /**
   * Get the current top/left (x/y) coordinates of an element relative to the document
   * @param {Element} el
   * @return {object}
   */
  static getCurrentCoord(el) {
    let rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      x: rect.top + scrollTop,
      y: rect.left + scrollLeft
    }
  }

  /**
   * Width and height in pixels, including padding and border
   * @param {Element} el
   * @return {object}
   */
  static getOuterShapeSize(el) {
    return {
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }

  /**
   * Width and height in px, including padding, but without border
   * @param {Element} el
   * @param {boolean} dynamic
   * @return {object}
   */
  static getInnerShapeSize(el, dynamic) {
    const get = () => {
      return {
        width: el.clientWidth,
        height: el.clientHeight
      };
    }

    if (dynamic) window.addEventListener("resize", get);
    else get();
  }
}

export default Styles;