class WebComponent extends HTMLElement {
  public constructor() {
    super();
    WebComponent.getObjCount();
  }

  public static define(elementName: string, classConstructor: CustomElementConstructor, options?: object): void {
    if (WebComponent instanceof HTMLElement) {
      return (options)
        ? customElements.define(elementName, classConstructor, options)
        : customElements.define(elementName, classConstructor);
    }

    throw TypeError(`${WebComponent.name} is not an instance of ${HTMLElement.name}`);
  }

  public static get(componentName: string): CustomElementConstructor | undefined {
    return customElements.get(componentName);
  }

  public static upgrade(root: Node): void {
    customElements.upgrade(root);
  }

  public static whenDefined(componentName: string): Promise<CustomElementConstructor> {
    return customElements.whenDefined(componentName);
  }

  public static objCount: number = 0;
  public static getObjCount(): number {
    return this.objCount++;
  }
}

class HeaderComponent extends WebComponent {
  public node: ShadowRoot;
  public nodeStyles: string;

  public constructor() {
    super();
    this.node = this.attachShadow({mode: "open"});
    this.nodeStyles = "";
    this.node.innerHTML = `<style>${this.nodeStyles}</style><div><header><nav>Navigation</nav></header></div>`;
  }
}

class FooterComponent extends WebComponent {
  public node: ShadowRoot;
  public nodeStyles: string;

  public constructor() {
    super();
    this.node = this.attachShadow({mode: "open"});
    this.nodeStyles = "";
    this.node.innerHTML = `<style>${this.nodeStyles}</style><div><footer>Footer</footer></div>`;
  }
}

WebComponent.define("header-component", HeaderComponent);
WebComponent.define("footer-component", FooterComponent);

export default WebComponent;