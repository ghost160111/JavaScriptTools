"use strict";

import DOMBase from "./DOMBase.js";

/**
 * Selecting library that is inherited from DOMBase library
 */
class Selecting extends DOMBase {
  /**
   * Select a list of matching elements, context is optional
   * @param {string} selector
   * @param {object} context
   */
  static $(selector, context) {
    return (context || document).querySelectorAll(selector);
  }

  /**
   * Select the first match only, context is optional
   * @param {string} selector
   * @param {string} context
   */
  static $1(selector, context) {
    return (context || document).querySelector(selector);
  }
}

const examples = () => {
  // how to use those methods:

  // select all '.bar' elements inside all '.foo' containers
  const matches = Selecting.$('.foo .bar');
  console.log(matches);

  // context example
  const container = Selecting.$1('.foo');
  console.log(container);

  {
    // select '.bar' elements inside this one container
    const matches = Selecting.$('.bar', container);
    console.log(matches);
  }
}

// invoke this function to see examples result
//examples();

export default Selecting;