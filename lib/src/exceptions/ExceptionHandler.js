"use strict";

class ExceptionHandler {
  /**
   * @param {void} callback
   * @param {any[]} parameters
   */
  static handleException(callback, parameters) {
    try {
      callback(...parameters);
    } catch (error) {
      console.error(`${error.name}: ${error.message}`);
    }
  }
}

export default ExceptionHandler;