"use strict";

class Base {
  static objCount = 0;
  static getObjCount() {
    return this.objCount++;
  }

  /**
   * @param {string} typeName                Enter type that will be checked based on 'value' parameter
   * @param {any} value                      Enter value that will be checked based on 'typeName' parameter that you entered
   * @param {string} exceptionMessage        Optionally, enter custom exception message
   * @param {boolean} enableExceptionHandler Optionally, enable handling exception using try...catch approach
   */
  static checkType(typeName, value, exceptionMessage, enableExceptionHandler) {
    const checkingType = () => {
      if (typeof typeName !== "string") {
        throw TypeError("Type name parameter should be type of string in order to check typization of your value input parameter!");
      }
  
      if (typeof value !== typeName) {
        if (exceptionMessage) {
          throw TypeError(exceptionMessage);
        }
        throw TypeError("Value parameter should be type of " + typeName + ", not type of " + typeof value);
      }

      return value;
    }

    const usingTryCatch = () => {
      try {
        return checkingType();
      } catch (error) {
        console.error(`${error.stack}`);
      }
    }

    return (exceptionMessage)
      ? usingTryCatch()
      : checkingType();
  }
}

export default Base;