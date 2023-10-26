class ArrayTools {
}
class ObjectTools {
}
class ConsoleTools {
}
class Scripts {
}
class Ajax {
}
class Attributes {
}
class Events {
}
class Manipulation {
}
class Selecting {
}
class Styles {
}
class Traversing {
}
class ExceptionHandler {
}
class Types {
}
class DOMTools {
}

class ClassCollection {
  static list = [
    ArrayTools,
    ObjectTools,
    ConsoleTools,
    Scripts,
    Ajax,
    Attributes,
    Events,
    Manipulation,
    Selecting,
    Styles,
    Traversing,
    ExceptionHandler,
    Types,
    DOMTools
  ]

  /** @param {object[]} className */
  static setClassConstructor(className) {
    for (let i = 0; i < className.length; ++i) {
      this.list.push(className[i]);
    }
  }

  /** @param {string} className */
  static getClassConstructor(className) {
    for (let i = 0; this.list.length; ++i) {
      try {
        if (className === this.list[i].name) {
          return this.list[i].name;
        }
      } catch (error) {
        throw Error(`${error.stack}`);
      }
    }
  }
}

class Constructor {

}

class Class {

}

ClassCollection.setClassConstructor([Constructor, Class])

console.log(ClassCollection.getClassConstructor("Constructor"));

function sumTo(n) {
  let sum = 0;

  for (let i = 0; i <= n; ++i) {
    sum += i;
  }

  return sum;
}

const results = [
  sumTo(1),
  sumTo(2),
  sumTo(3),
  sumTo(100000)
];

console.log(results); // [ 1, 3, 6, 5000050000 ]

