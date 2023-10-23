"use strict";

class StringTools {
  /**
   * Upper case the string value
   * @param {string} value
   * @return {string}
   */
  static upperCase(value) {
    return value.toUpperCase();
  }

  /**
   * Lower case the string value
   * @param {string} value
   * @return {string}
   */
  static lowerCase(value) {
    return value.toLowerCase();
  }

  /**
   * Upper case the first character of your string value
   * @param {string} value
   * @return {string}
   */
  static upperCaseFirstChar(value) {
    return value[0].toUpperCase() + value.slice(1 - value.length);
  }
}

export default StringTools;