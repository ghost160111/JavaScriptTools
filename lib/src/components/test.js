import HeaderComponent from "./collection/HeaderComponent.js";
import FooterComponent from "./collection/FooterComponent.js";

import defineComponents from "./define.js";
import WebCompCollection from "./WebCompCollection.js";

(() => {
  WebCompCollection.setComponent("header-component", HeaderComponent);
  WebCompCollection.setComponent("footer-component", FooterComponent);

  defineComponents(WebCompCollection.list);

  console.log(
    WebCompCollection.getComponent("header-component"),
    WebCompCollection.getComponent("footer-component")
  );
})();