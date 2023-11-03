"use strict";

import WebComponent from "../WebComponent.js";

class HeaderComponent extends WebComponent {
  public node: ShadowRoot;
  public nodeStyles: string;

  public constructor() {
    super();
    this.node = this.attachShadow({mode: "open"});
    this.nodeStyles = "h1{color:red;}";
    this.node.innerHTML = `<style>${this.nodeStyles}</style><header><h1>Header Component</h1></header>`;
  }
}

export default HeaderComponent;