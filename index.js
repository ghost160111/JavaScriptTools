import ArrayTools from "./lib/src/array/ArrayTools.js";
import ObjectTools from "./lib/src/objects/ObjectTools.js";
import ConsoleTools from "./lib/src/console/ConsoleTools.js";
import Scripts from "./lib/src/console/Scripts.js";
import Ajax from "./lib/src/dom/Ajax.js";
import Attributes from "./lib/src/dom/Attributes.js";
import Events from "./lib/src/dom/Events.js";
import Manipulation from "./lib/src/dom/Manipulation.js";
import Selecting from "./lib/src/dom/Selecting.js";
import Styles from "./lib/src/dom/Styles.js";
import Traversing from "./lib/src/dom/Traversing.js";
import ExceptionHandler from "./lib/src/exceptions/ExceptionHandler.js";
import Types from "./lib/src/typeChecking/Types.js";
import DOMTools from "./lib/src/dom/DOMTools.js";

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

module.exports = JavaScriptTools;