import Manipulation from "../dom/Manipulation.js";

class Scripts {
  /**
   * Creates script tag with code inside
   * @param {string} scriptCode
   */
  static createScript(scriptCode) {
    return Manipulation.createDOMElement("script", scriptCode);
  }

  /**
   * Evaluates JavaScript code or JS code that is inside of script tag
   * @param {string | HTMLScriptElement} scriptCode
   */
  static evaluateScript(scriptCode) {
    if (typeof scriptCode === "string") {
      eval(scriptCode);
    } else {
      eval(scriptCode.textContent);
    }
  }
}

export default Scripts;