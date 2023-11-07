const defineComponents = (componentsList: Map<string, CustomElementConstructor>): void => {
  for (const [key, value] of componentsList.entries()) {
    customElements.define(key, value);
  }
};

abstract class WebComponentsDefinition {
  public static defineComponents(componentsList: Map<string, CustomElementConstructor>): void {
    for (const [key, value] of componentsList.entries()) {
      customElements.define(key, value);
    }
  }
}

export default {
  defineComponents,
  WebComponentsDefinition
};