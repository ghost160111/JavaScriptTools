"use strict";

import Base from "./Base.js";

class Footer extends Base {
  constructor(baseElementName) {
    super(baseElementName);
    this.buildComponent("footer", "footer".toUpperCase());
  }
}

export default Footer;
