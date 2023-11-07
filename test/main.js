import Server from "./Server.js";

const server = new Server(3235, [
  {
    title: "Home page",
    url: "/",
    template: "Home page content"
  },
  {
    title: "About page",
    url: "/about",
    template: "About page content"
  },
  {
    title: "Services page",
    url: "/services",
    template: "Services page content"
  }
]);

server.startServer();
server.logServerState();

