import Base from "./Base.js";

class Intro extends Base {
  constructor(baseElementName) {
    super(baseElementName);
    this.buildComponent(
      "intro-component",
      `<h1 class="app-title">Vite Server</h1>
      <p>Next Generation Frontend Tooling. Get ready for a development environment that can finally catch up with you.</p>`
    );
  }
}

export default Intro;