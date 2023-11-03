import ArrayTools from "./array/ArrayTools.js";
import ObjectTools from "./objects/ObjectTools.js";
import ConsoleTools from "./console/ConsoleTools.js";
import Scripts from "./console/Scripts.js";
import Ajax from "./dom/Ajax.js";
import Attributes from "./dom/Attributes.js";
import Events from "./dom/Events.js";
import Manipulation from "./dom/Manipulation.js";
import Selecting from "./dom/Selecting.js";
import Styles from "./dom/Styles.js";
import Traversing from "./dom/Traversing.js";
import ExceptionHandler from "./exceptions/ExceptionHandler.js";
import Types from "./typeChecking/Types.js";
import DOMTools from "./dom/DOMTools.js";

class Package {
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

export default Package;