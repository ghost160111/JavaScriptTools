import Server from "./Server.js";
import fs from "fs";

const server = new Server(3235, [
  {
    title: "Home page",
    url: "/",
    template: fs.readFileSync("./index.html")
  },
  {
    title: "About page",
    url: "/about",
    template: fs.readFileSync("./about.html")
  },
  {
    title: "Services page",
    url: "/services",
    template: fs.readFileSync("./services.html")
  }
]);

server.startServer();
server.logServerState();
