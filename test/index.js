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

class Tools {
  /** @return {boolean} */
  static checkInstance(class1, class2) {
    if (class1 instanceof class2) {
      return true;
    }
    throw Error(`${class1} is not an instance of ${class2}`);
  }

  static getAjax(url) {
    try {
      if (typeof url === "string") {
        return true;
      }
    } catch (e) {
      throw Error(`${e.stack}`);
    }
  }
}