"use strict";

import ExceptionHandler from "../exceptions/ExceptionHandler.js";

class Types {
  /**
   * Checks type of an input value, if it does not match with type, else it returns value
   * @param {string | any} type
   * @param {any} value
   * @param {string} exceptionMessage
   * @param {boolean} exceptMessage
   */
  static checkType(type, value, exceptionMessage, exceptMessage) {
    const check = () => {
      if (typeof value !== type) {
        if (exceptionMessage) {
          throw TypeError(exceptionMessage + "!");
        }
        throw TypeError("Entered value parameter is not type of " + type + ". It is type of " + typeof value + "!");
      }
      return value;
    }

    if (!exceptMessage) {
      check();
    } else {
      try {
        check();
      } catch (err) {
        console.error(`${err.name}: ${err.message}`);
      }
    }
  }

  /**
   * Checks the list of types. List is array that contains elements as objects which contains keys: type and value, and their values
   * @param {object[]} listOfTypes
   */
  static checkTypes(listOfTypes) {
    for (let i = 0; i < listOfTypes.length; ++i) {
      this.checkType(listOfTypes[i].type, listOfTypes[i].value, `At index ${i} value type does not match with type ${listOfTypes[i].type}!`, true);
    }

    return listOfTypes;
  }
}

export default Types;