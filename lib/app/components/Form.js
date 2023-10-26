"use strict";

import Base from "./Base.js";

class Form extends Base {
  constructor(baseElementName) {
    super(baseElementName);
    this.buildComponent(
      "form",
      `<div class="form-wrapper">
        <div class="form__item">
          <label class="form__label" for="name">Full name: </label>
          <input class="g-input" type="text" id="name" placeholder="Enter your full name" />
        </div>
        <div class="form__item">
          <label class="form__label" for="email">Email: </label>
          <input class="g-input" type="email" id="email" placeholder="Enter your email" />
        </div>
        <div class="form__item">
          <label class="form__label" for="password">Password: </label>
          <input class="g-input" type="text" id="password" placeholder="Enter your password" />
        </div>
        <div class="form__item">
          <label class="form__label" for="textarea">Send your question</label>
          <textarea class="g-input form__textarea" id="textarea" placeholder="Write your question..."></textarea>
        </div>
        <button class="g-btn" type="button">Submit</button>
      </div>`
    );
  }
}

export default Form;
