"use strict";

class ConsoleTools {
  /**
   * Logs message or messages to the console
   * @param {string} label
   * @param {string[]} messages
   */
  static log(label, messages) {
    console.group(label);
    
    for (let i = 0; i < messages.length; ++i) {
      console.log(messages[i]);
    }
    
    console.groupEnd();
  }
}

export default ConsoleTools;