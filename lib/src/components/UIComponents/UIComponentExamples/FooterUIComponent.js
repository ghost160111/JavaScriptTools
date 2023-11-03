import UIComponent from "../UIComponent.js";

class FooterUIComponent extends UIComponent {
  /**
   * @param {string} parentSelector
   * @param {string} insertBeforeSelector
   */
  constructor(parentSelector, insertBeforeSelector) {
    super("footer", "<div>Footer</div>");
    this.renderUIComponent(parentSelector, insertBeforeSelector);
  }
}

export default FooterUIComponent;