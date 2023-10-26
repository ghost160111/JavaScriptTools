"use strict";

import Base from "./Base.js";

class Header extends Base {
  constructor(baseElementName) {
    super(baseElementName);
    this.buildComponent(
      "header",
      `<div class="header-wrapper">
      <nav class="nav">
        <div class="nav__logo">
          <a class="nav__logo-link" href="/">
            <img class="nav__logo-img" src="" alt="Logo" style="max-width: 75px" />
          </a>
        </div>
        <ul class="nav__list">
        </ul>
      </nav>
    </div>`
    );
  }
}

export default Header;
