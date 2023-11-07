import Base from "./Base.js";

/**
 * Custom map collection that can be modified in your own way.
 * At the current time this class is almost the same as Map class, but limited with three methods,
 * which are set, get, delete, has
 */
class MapCollection extends Base {
  collection = new Map();
  size = this.collection.size;

  /**
   * Sets value to map collection
   * @param {any} key   Set a key to your map collection
   * @param {any} value Set a value to your map collection
   */
  set(key, value) {
    this.collection.set(key, value);
  }

  /**
   * Gets value through key from your map collection
   * @param {any} key Enter key to get value you want
   * @returns {any}
   */
  get(key) {
    return this.collection.get(key);
  }

  /**
   * Deletes value from your map using key
   * @param {any} key Enter key to find value and delete it
   */
  delete(key) {
    this.collection.delete(key);
  }

  /**
   * Checks whether your collection has the key or not
   * @param {any} key Enter the key to see whether your collection has it or not
   * @returns {boolean} Returns true or false based on there is key or not in map collection
   */
  has(key) {
    return this.collection.has(key);
  }
}

/**
 * Notes!!!
 * You can also extend this class by overriding methods or creating new ones. Do whatever you want with this class!
 */

// Example:
/** 
 * @example
 * class UsersCollection extends MapCollection {
 *   constructor() {
 *     super();
 *   }
 *   
 *   static checkUserKey(key) {
 *     return UsersCollection.checkType("string", key, "Users key value should be type of string!", true);
 *   }
 *
 *   static checkUserValue(value) {
 *     return UsersCollection.checkType("object", value, "Users map value should be type of object!", true);
 *   }
 *
 *   set(key, value) {
 *     let userKey = UsersCollection.checkUserKey(key);
 *     let userValue = UsersCollection.checkUserValue(value);
 *
 *     this.collection.set(userKey, userValue);
 *   }
 *
 *   get(key) {
 *     let userKey = UsersCollection.checkUserKey(key);
 *     this.collection.get(userKey);
 *   }
 * 
 *   delete(key) {
 *     let userKey = UsersCollection.checkUserKey(key);
 *     this.collection.delete(userKey);
 *   }
 * 
 *   has(key) {
 *     let userKey = UsersCollection.checkUserKey(key);
 *     return this.collection.has(userKey);
 *   }
 * }
**/
class UsersCollection extends MapCollection {
  constructor() {
    super();
  }

  /** @param {string} key */
  static checkUserKey(key) {
    return UsersCollection.checkType("string", key, "Users key value should be type of string!", true);
  }

  static checkUserValue(value) {
    return UsersCollection.checkType("object", value, "Users map value should be type of object!", true);
  }

  /**
   * @param {string} key
   * @param {object} value
   */
  set(key, value) {
    let userKey = UsersCollection.checkUserKey(key);
    let userValue = UsersCollection.checkUserValue(value);

    this.collection.set(userKey, userValue);
  }

  /**
   * @param {string} key
   * @returns {object}
   */
  get(key) {
    let userKey = UsersCollection.checkUserKey(key);
    this.collection.get(userKey);
  }

  /** @param {string} key */
  delete(key) {
    let userKey = UsersCollection.checkUserKey(key);
    this.collection.delete(userKey);
  }

  /**
   * @param {string} key
   * @returns {boolean}
   */
  has(key) {
    let userKey = UsersCollection.checkUserKey(key);
    return this.collection.has(userKey);
  }
}

export default MapCollection;