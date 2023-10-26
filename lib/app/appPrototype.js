import App from "./App.js";
import Router from "./Router.js";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Intro from "./components/Intro.js";
import Form from "./components/Form.js";
import Base from "./components/Base.js";
import About from "./components/About.js";

const PROTOCOL = "http";
const ADDRESS = "localhost";
const PORT = 5128;

const app = new App();

class Introduction extends Base {
  constructor(baseElement) {
    super(baseElement);
    this.buildComponent(
      "introduction",
      `<h1>HTML Component</h1>
      <p>Description of HTML component based rendering.</p>`,
    );
  }
}

app.render(
  new Header("header"),
  new Introduction("time"),
  new Footer("footer")
);

const router = new Router(
  PROTOCOL,
  ADDRESS,
  PORT,
  {
    url: "/",
    pageName: "Home",
    title: "Home Page",
    className: "home-page",
    components: [
      new Intro("section"),
      new Intro("section"),
      new Intro("section"),
      new Intro("section")
    ]
  },
  {
    url: "/#autotune",
    pageName: "Auto Tune",
    title: "Auto Tune",
    className: "auto-tune",
    components: [
      new Intro("section")
    ]
  },
  {
    url: "/#instructions",
    pageName: "Instructions",
    title: "Intructions",
    className: "instructions-page",
    components: [
      new Intro("section"),
    ]
  },
  {
    url: "/#feedback",
    pageName: "Feedback",
    title: "Feedback",
    className: "feedback-page",
    components: [
      new Form("form"),
    ]
  },
  {
    url: "/#support",
    pageName: "Support",
    title: "Support",
    className: "support-page",
    components: [
      new Form("form"),
    ]
  },
  {
    url: "/#onlineshop",
    pageName: "Online Shop",
    title: "Online Shop",
    className: "online-shop-page",
    components: [
      new Form("form"),
    ]
  },
  {
    url: "/#changelog",
    pageName: "Changelog",
    title: "Changelog",
    className: "changelog-page",
    components: [
      new About()
    ]
  },
  {
    url: "/#login",
    pageName: "Login",
    title: "Login",
    className: "login-page",
    components: [
      new Form("form"),
    ]
  },
  {
    url: "/#signin",
    pageName: "Signin",
    title: "Signin",
    className: "signin-page",
    components: [
      new Form("form"),
    ]
  }
);

router.renderMainContent("#app", ".footer");
router.route();