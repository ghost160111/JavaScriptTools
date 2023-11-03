import UIComponent from "../UIComponent.js";

class HeaderUIComponent extends UIComponent {
  /**
   * @param {string} parentSelector
   * @param {string} insertBeforeSelector
   */
  constructor(parentSelector, insertBeforeSelector) {
    super("header", "<nav>Header Navigation Panel</nav>");
    this.renderUIComponent(parentSelector, insertBeforeSelector);
  }
}

export default HeaderUIComponent;