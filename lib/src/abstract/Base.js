"use strict";

class Base {
  static objCount = 0;
  static getObjCount() {
    return this.objCount++;
  }
}

export default Base;