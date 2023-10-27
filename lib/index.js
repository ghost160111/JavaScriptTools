import Package from "./src/Package.js";

const {
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
} = Package;

class JavaScriptTools {
  static ArrayTools = ArrayTools;
  static ObjectTools = ObjectTools;
  static ConsoleTools = ConsoleTools;
  static Scripts = Scripts;
  static Ajax = Ajax;
  static Attributes = Attributes;
  static Events = Events;
  static Manipulation = Manipulation;
  static Selecting = Selecting;
  static Styles = Styles;
  static Traversing = Traversing;
  static ExceptionHandler = ExceptionHandler;
  static Types = Types;
  static DOMTools = DOMTools;
}

export default JavaScriptTools;

import Base from "./src/abstracts/Base.js";

// Start testing your library
let checkingStringType = Base.checkType("string", "test log", "Message should be string type!", true);

console.log(checkingStringType); // test log