# Reusable Components

Reusable components that is inherited from WebComponent class that is inherited HTMLElement.

## WebComponent class

```js
class WebComponent extends HTMLElement {
  constructor() {
    super();
  }

  static define(elementName, classConstructor, options) {
    if (WebComponent instanceof HTMLElement) {
      return (options)
        ? customElements.define(elementName, classConstructor, options)
        : customElements.define(elementName, classConstructor);
    }

    throw TypeError(`${WebComponent.name} is not an instance of ${HTMLElement.name}`);
  }
}

export default WebComponent;
```

## Custom Component class, your reusable component class

```js
class CustomComponent extends WebComponent {
  constructor() {
    super();
    this.node = this.attachShadow({mode: "open"});
    this.nodeStyles = "";
    this.node.innerHTML = `<style>${this.nodeStyles}</style><div class="custom-component">Your Custom Reusable Component</div>`;
  }
}

export default CustomComponent;
```

## Defining your component in define.js file

```js
import WebComponent from "..";
import CustomComponent from "..";

WebComponent.define("custom-component", CustomComponent); // you defined component: <custom-component>...</custom-component>

// at the end you just import this file to main index.js file like this: import "define.js"
// this action will define your components to your HTML structure.
```

That is the end of structuring your reusable components!
