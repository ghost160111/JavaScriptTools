"use strict";

import Types from "../typeChecking/Types";

/**
 * Collection of ready to use and useful array methods
 */
class ArrayTools {
  /**
   * @param {any[]} array
   * @param {any[]} values
   */
  static addElementToEnd(array, ...values) {
    array.push(...values);
  }
  
  /**
   * @param {any[]} array
   * @param {any[]} values
   */
  static addElementToStart(array, ...values) {
    array.unshift(...values);
  }
  
  /**
   * @param {any[]} array
   * @param {number} startIndex
   * @param {any[]} values 
   */
  static addElementTo(array, startIndex, ...values) {
    array.splice(startIndex, 0, ...values);
  }

  static deleteElementFromEnd() {
    array.pop();
  }

  static deleteElementFromStart() {
    array.shift();
  }

  /**
   * @param {any[]} array
   * @param {number} startIndex
   * @param {number} endIndex
   */
  static deleteGroupOfElements(array, startIndex, endIndex) {
    array.splice(startIndex, endIndex);
  }

  /**
   * @param {any} value
   * @param {any[]} array
   * @param {string} returnType
   */
  static findElement(value, array, returnType) {
    for (let i = 0; i < array.length; ++i) {
      if (array[i] === value) {
        console.log("Found element in index: " + i + ". \nElement value: " + array[i] + "\nIndex: " + i);
      }

      if (returnType) {
        if (typeof returnType !== "string") {
          throw new TypeError("Return type parameter should be specified in string!");
        }

        switch (returnType) {
          case "string":
            return array[i];
          case "object":
            return {
              elementValue: array[i],
              index: i,
            }
          default:
            throw new TypeError("List of values for returnType parameter are:\n1.string\n2.object");
        }
      } else {
        return array[i];
      }
    }
  }

  /**
   * @param {any} value
   * @param {any[]} array
   */
  static findIndex(value, array) {
    for (let i = 0; i < array.length; ++i) {
      if (array[i] === value) {
        return "Index: " + i;
      }
    }
  }

  /**
   * @param {any} value
   * @param {any[]} array
   */
  static findSameValuesIndexes(value, array) {
    let results = [];
    
    for (let i = 0; i < array.length; ++i) {
      if (array[i] === value) {
        results.push(i);
      }
    }
  
    return results;
  }

  // deletes first index of element that appears in array
  /**
   * @param {any} value
   * @param {any[]} array
   */
  static deleteElement(value, array) {
    for (let i = 0; i < array.length; ++i) {
      if (array[i] === value) {
        array.splice(i, 1);
        break;
      }
    }
  }

  // deletes all elements with same values that appears in array
  // it is continuation of without break of method deleteElement()
  /**
   * @param {any} value
   * @param {any[]} array
   */
  static deleteElementsWithSameValues(value, array) {
    for (let i = 0; i < array.length; ++i) {
      if (array[i] === value) {
        array.splice(i, 1);
      }
    }
  }

  /**
   * @param {any} value
   * @param {any[]} array
   */
  static deleteElementsWithSameValuesReturnArray(value, array) {
    let arrayClone = [];
    arrayClone.push(...array);

    for (let i = 0; i < arrayClone.length; ++i) {
      if (arrayClone[i] === value) {
        arrayClone.splice(i, 1);
      }
    }

    return arrayClone;
  }

  /** @param {any[]} targetArray */
  static cloneArray(targetArray) {
    let cloneArray = [];
    for (let i = 0; i < targetArray.length; ++i) {
      cloneArray[i] = targetArray[i];
    }
    return cloneArray;
  }

  /**
   * Create tuple using arrays
   * @param {any[]} types
   * @param {any[]} values
   */
  static createTuple(types, values) {
    let tuple = [];
    let tupleResult = [];
    let length = (types.length + values.length) / 2;

    for (let i = 0; i < length; ++i) {
      tuple.push({
        value: values[i],
        type: types[i]
      });
    }

    for (let i = 0; i < tuple.length; ++i) {
      if (typeof tuple[i].value !== tuple[i].type) {
        throw TypeError(`Index ${i} does not match with type of ${tuple[i].type}`);
      }

      tupleResult.push(tuple[i].value);
    }

    return tupleResult;
  }

  /**
   * Create tuple using object model
   * @param {object[]} tupleModel
   * @return {any[]}
   */
  static createTupleUsingObjectModel(tupleModel) {
    let tuple = [];
    
    for (let i = 0; i < tupleModel.length; ++i) {
      let checkedTuple = Types.checkType(tupleModel[i].type, tupleModel[i].value, `Index ${i} does not match with type of ${tupleModel[i].type}`, false);
      tuple.push(checkedTuple);
    }
    
    return tuple;
  }
}

export default ArrayTools;