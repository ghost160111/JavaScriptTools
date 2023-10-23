"use strict";

import TypeChecking from "../typeChecking/Types.js";

class ObjectTools {
  /**
   * @param {string} label
   * @param {string} messages
   */
  static log(label, ...messages) {
    for (let i = 0; i < messages.length; ++i) {
      console.group(label);
      console.log(...messages);
      console.groupEnd();
    }
  }

  /**
   * @param {boolean} log
   * @param {string} label
   * @param {string} messages
   */
  static logOnConsole(log = false, label, ...messages) {
    if (log) {
      this.log(label, ...messages);
    }
  }

  /**
   * @param {void} callback
   * @param {boolean} log
   * @param {string} label
   * @param {string} messages
   */
  static logOnConsoleWithCallback(callback, log = false, label, ...messages) {
    if (callback) {
      console.group(label);
      console.log(...messages);
      callback();
      console.groupEnd();
    }
  }

  /**
   * @param {object} targetObject
   * @param {object} objects
   */
  static assign(targetObject, ...objects) {
    let checkedTarget = TypeChecking.checkType(
      "object",
      targetObject,
      "Target object parameter should be type of object!"
    );

    for (let i = 0; i < objects.length; ++i) {
      Object.assign(checkedTarget, objects[i]);
    }
  }

  /** 
   * @param {object} targetObject 
   * @return {object}
   */
  static createObject(targetObject) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    return checkedTargetObject;
  }

  /**
   * @param {object} targetObject
   * @param {object} properties
   */
  static defineProperties(targetObject, ...properties) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    Object.defineProperties(checkedTargetObject, ...properties);
  }
  
  /**
   * @param {object} targetObject
   * @param {string} propertyKey
   * @param {string} attributes
   */
  static defineProperty(targetObject, propertyKey, attributes) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    Object.defineProperty(checkedTargetObject, propertyKey, attributes);
  }

  /**
   * @param {object} targetObject
   * @param {boolean} logOnConsole
   */
  static getEntries(targetObject, logOnConsole = false) {
    let checkedTargetObject = TypeChecking.checkType(
      "object",
      targetObject,
      true,
      "Target object is should be type of object!"
    );

    const iterateEntries = () => {
      for (const [key, value] of Object.entries(checkedTargetObject)) {
        console.log(`${key}: ${value}`);
      }
    }

    this.logOnConsoleWithCallback(iterateEntries, logOnConsole, "Result of iterating entries:");

    return Object.entries(checkedTargetObject);
  }

  /** 
   * @param {object} targetObject 
   * @return {boolean}
   */
  static freeze(targetObject) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let freezed = Object.freeze(checkedTargetObject);

    (freezed) ? true : false;
  }

  /** @param {object} entries */
  static fromEntries(entries) {
    let targetObject = Object.fromEntries(entries);
    return targetObject;
  }

  /** 
   * @param {object} targetObject
   * @param {string} propertyKey
   * 
   * @return {PropertyDescriptor}
  */
  static getOwnPropertyDescriptor(targetObject, propertyKey) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let descriptor = Object.getOwnPropertyDescriptor(checkedTargetObject, propertyKey);

    return descriptor;
  }

  /**
   * @param {object} targetObject
   * @param {boolean} logResultOnConsole
   */
  static getOwnPropertyDescriptors(targetObject, logResultOnConsole = false) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let descriptors = Object.getOwnPropertyDescriptors(checkedTargetObject);
    
    if (logResultOnConsole) {
      ObjectTools.getEntries(checkedTargetObject, logResultOnConsole);
    }

    return descriptors;
  }

  /**
   * @param {object} targetObject
   * @return {string[]}
   */
  static getOwnPropertyNames(targetObject) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let propertyNamesList = Object.getOwnPropertyNames(checkedTargetObject);

    return propertyNamesList;
  }

  /**
   * @param {object} targetObject
   * @param {boolean} logOnConsole
   * 
   * @return {symbol[]}
   */
  static getOwnPropertySymbols(targetObject, logOnConsole = false) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let propertySymbols = Object.getOwnPropertySymbols(checkedTargetObject);

    if (logOnConsole) {
      console.log(propertySymbols);
    }

    return propertySymbols;
  }

  /**
   * @param {object} targetObject
   * @return {any}
   */
  static getPrototypeOf(targetObject) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let result = Object.getPrototypeOf(checkedTargetObject);

    return result;
  }

  /**
   * @param {object} targetObject
   * @param {string} propertyName
   * @param {boolean} logOnConsole
   * 
   * @return {boolean}
   */
  static hasOwnProperty(targetObject, propertyName, logOnConsole = false) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let hasOwnProperty = checkedTargetObject.hasOwnProperty(propertyName);

    if (logOnConsole) {
      console.log(hasOwnProperty);
    }

    return hasOwnProperty;
  }

  /**
   * @param {any} value1
   * @param {any} value2
   * @param {boolean} logOnConsole
   * @param {string} additionalMessage
   * 
   * @return {boolean}
   */
  static is(value1, value2, logOnConsole = false, additionalMessage) {
    let areTheSameValue = Object.is(value1, value2);

    if (logOnConsole) {
      console.group("Result of comparing two values:");
      if (additionalMessage) {
        console.log(`${additionalMessage}: ${areTheSameValue}`);
      } else {
        console.log(`Result: ${areTheSameValue}`);
      }
      console.groupEnd();
    }

    return areTheSameValue;
  }

  /** 
   * @param {object} targetObject 
   * @return {boolean}
   */
  static isExtensible(targetObject) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let isTargetObjectExtensible = Object.isExtensible(checkedTargetObject);
    
    return isTargetObjectExtensible;
  }

  /** 
   * @param {object} targetObject
   * @return {boolean}
   */
  static isFrozen(targetObject) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let isTargetObjectFrozen = Object.isFrozen(checkedTargetObject);

    return isTargetObjectFrozen;
  }

  /** 
   * @param {object} targetObject 
   * @return {boolean}
   */
  static isSealed(targetObject) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let isTargetObjectSealed = Object.isSealed(checkedTargetObject);
    
    return isTargetObjectSealed;
  }

  /** 
   * @param {object} targetObject 
   * @return {string[]}
   */
  static keys(targetObject) {
    let checkedTargetObject = TypeChecking.checkType("object", targetObject, true);
    let keys = Object.keys(checkedTargetObject);

    return keys;
  }

  /** @param {object} targetObject */
  static preventExtensions(targetObject) {
    let checkedTargetObject = Tools.checkType("object", targetObject, true);
    Object.preventExtensions(checkedTargetObject);
  }

  /** @param {object} targetObject */
  static seal(targetObject) {
    let checkedTargetObject = TypeChecking.checkType(targetObject);
    Object.seal(checkedTargetObject);
  }
  
  /**
   * @param {object} targetObject
   * @param {object} source
   */
  static setObjectPrototype(targetObject, ...source) {
    let checkedTargetObject = TypeChecking.checkType(
      "object",
      targetObject,
      "Target object parameter should be type of object!",
    );

    for (let i = 0; i < source.length; ++i) {
      Object.setPrototypeOf(checkedTargetObject, source[i]);
    }
  }
}

export default ObjectTools;