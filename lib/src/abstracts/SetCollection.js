import Base from "./Base.js";

class SetCollection extends Base {
  collection = new Set();

  constructor() {
    super();
  }

  /** @param {any} absoluteValue */
  add(absoluteValue) {
    this.collection.add(absoluteValue);
  }
  
  /** @param {any} absoluteValue */
  delete(absoluteValue) {
    this.collection.delete(absoluteValue);
  }

  /**
   * @param {any} absoluteValue
   * @returns {boolean}
   */
  has(absoluteValue) {
    return this.collection.has(absoluteValue);
  }
}

export default SetCollection;