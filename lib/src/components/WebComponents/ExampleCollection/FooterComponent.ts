"use strict";

import WebComponent from "../WebComponent.js";

class FooterComponent extends WebComponent {
  public node: ShadowRoot;
  public nodeStyles: string;

  public constructor() {
    super();
    this.node = this.attachShadow({mode: "open"});
    this.nodeStyles = "h1{color:red;}";
    this.node.innerHTML = `<style>${this.nodeStyles}</style><footer><h1>Footer Component</h1></footer>`;
  }
}

export default FooterComponent;