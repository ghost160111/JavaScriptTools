"use strict";

import DOMBase from "./DOMBase.js";

/**
 * Events library that is inherited from DOMBase library
 */
class Events extends DOMBase {
  /**
   * Stops the immediate action of the event and prevents the event from bubbling up
   * @param {Event} e
   */
  static preventDefault(e) {
    // stop the immediate action of this event
    e.preventDefault();

    // prevent the event from bubbling up
    e.stopPropogation();
  }

  /**
   * Attaches handler to the document
   * @param {Element} el
   * @param {Event} eventName
   */
  static attachHandler(el, eventName) {
    el.addEventListener(eventName, this.preventDefault);
  }

  /**
   * To get the key code, attaching an event handler to any keyboard action is required. The key code is reported on the event object received by the handler function.
   * @param {Event} e
   */
  static keyCodeHandler(e) {
    let key = window.event ? e.keyCode : e.which;
    console.log(key, e.shiftKey, e.altKey, e.ctrlKey);
  }

  /**
   * Gets current mouse position
   * @param {Event} e
   * @return {object}
   */
  static getMousePosition(e) {
    e = e || window.event;

    let pageX = e.pageX;
    let pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
      pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return { pageX, pageY };
  }

  /**
   * Loads code that should be runned after document is ready, supports from modern to IE <= 8 browsers
   */
  static ready(callback) {
    if (document.readyState !== "loading") callback();
    else if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      document.attachEvent("onreadystatechange", () => {
        if (document.readyState === "complete") callback();
      });
    }
  }
}

export default Events;