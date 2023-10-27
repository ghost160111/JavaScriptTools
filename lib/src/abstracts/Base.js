"use strict";

class Base {
  static objCount = 0;
  static getObjCount() {
    return this.objCount++;
  }

  /**
   * @param {any} typeName                    Enter type that will be checked based on 'value' parameter
   * @param {any} value                       Enter value that will be checked based on 'typeName' parameter that you entered
   * @param {string} exceptionMessage         Optionally, enter custom exception message
   * @param {boolean} enableExceptionHandler  Optionally, enable handling exception using try...catch approach
   */
  static checkType(typeName, value, exceptionMessage, enableExceptionHandler) {
    const checkingType = () => {  
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

    return (enableExceptionHandler)
      ? usingTryCatch()
      : checkingType();
  }
}

export default Base;