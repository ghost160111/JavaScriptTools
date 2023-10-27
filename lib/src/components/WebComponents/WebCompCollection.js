"use strict";

class WebCompCollection {
  static list = new Map();

  /**
   * Adds new element to list map which is the collection of WebComponents that can be defined using defineComponents function
   * @param {string} key Enter key to define a key and name for your WebComponent that can be manipulated using Map methods
   * @param {object} constructorClass Enter class constructor by referencing it or directly defining it. The choice is yours
   */
  static setComponent(key, constructorClass) {
    this.list.set(key, constructorClass);
  }

  /**
   * Watches for a key of entered from list map collection
   * @param {string} key Enter defined key to find element and delete it
   * @return {boolean} true if the operation is handled successfully
   */
  static deleteComponent(key) {
    this.list.delete(key);
  }

  /**
   * This method finds the element through the entered key
   * @returns {any} Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.
   */
  static getComponent(key) {
    return this.list.get(key);
  }
}

export default WebCompCollection;
// this is in case if you want to define your components in your own way.