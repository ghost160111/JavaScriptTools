"use strict";

import Package from "../src/Package";

const {
  ArrayTools,
  ObjectTools,
  ConsoleTools,
  Scripts,
  Ajax,
  Attributes,
  Events,
  Manipulation,
  Selecting,
  Styles,
  Traversing,
  ExceptionHandler,
  Types,
  DOMTools
} = Package;

/**
 * Collection of tests inside of Tests class.
 * Tests are stored inside of static methods as the collection
 */
class Tests {
  static test1() {
    Ajax.getAjax("lib/ts/test.html", (data) => console.log(data));
  }

  static test2() {
    Ajax.getAjax("lib/ts/test.html", (data) => {
      const app = document.querySelector("#app");
      app.innerHTML = data;
    });
  }
}

export default Tests;