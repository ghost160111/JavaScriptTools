import UIComponent from "../UIComponent.js";

class PreloaderUIComponent extends UIComponent {
  htmlContent = `<div class="preloader-wrapper">Preloader UI Component</div>`;

  /**
   * @param {string} parentSelector
   * @param {string} insertBeforeSelector
   */
  constructor(parentSelector, insertBeforeSelector) {
    super("div", this.htmlContent);
    this.UIElement.setAttribute("class", "preloader-component");
    this.renderUIComponent(parentSelector, insertBeforeSelector);
  }
}

export default PreloaderUIComponent;