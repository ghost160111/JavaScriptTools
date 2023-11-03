import Base from "../../abstracts/Base.js";

class UIComponent extends Base {
  public baseElementTagName: string;
  public htmlContent: string;
  public UIElement: Element;

  public constructor(baseElementTagName: string, htmlContent: string) {
    super();
    UIComponent.getObjCount();
    this.baseElementTagName = baseElementTagName;
    this.htmlContent = htmlContent;
    this.UIElement = document.createElement(this.baseElementTagName);
  }

  public renderUIComponent(parentSelector: string, insertBeforeSelector: string): void {
    let element: Element = this.UIElement;
    let parentElement: Element | null = document.querySelector(parentSelector);

    if (!insertBeforeSelector) {
      parentElement.appendChild(element);
    } else {
      const insertBeforeElement = document.querySelector(insertBeforeSelector);
      if (!insertBeforeElement) {
        throw Error("Element to be inserted before does not exist in Document!");
      }
      parentElement.insertBefore(element, insertBeforeElement);
    }
  }

  public setBaseElement(value: string): void {
    this.baseElementTagName = Base.checkType("string", value, "Base element name should be specified in string type", true);
  }

  public setHTMLContent(value: string): void {
    this.htmlContent = Base.checkType("string", value, "HTML content should be type of string", true);
  }

  public setBaseElementClassName(className: string): void {
    this.UIElement.setAttribute("class", Base.checkType("string", className, "Class name parameter value should be type of string!", true));
  }

  public getBaseElement(): string {
    return this.baseElementTagName;
  }

  public getHtmlContent(): string {
    return this.htmlContent;
  }

  public getUIElement(): Element {
    return this.UIElement;
  }
}

export default UIComponent;