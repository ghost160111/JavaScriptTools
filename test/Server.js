import http from "http";
import fs from "fs";

class Server {
  port;
  routes = [];
  messages = {
    serverName: "=========== Node.js Server ============\n",
    serverStatus: "Server status: server is running",
    serverMessage: `Server http url: http://localhost:${this.port}/\n`
  };

  constructor(port, routes) {
    this.port = port;
    
    for (let i = 0; i < routes.length; ++i) {
      this.routes.push({
        title: routes[i].title,
        url: routes[i].url,
        template: routes[i].template
      });
    }
  }

  buildServer() {
    const server = http.createServer((req, res) => {
      for (let i = 0; i < this.routes.length; ++i) {
        if (req.url === this.routes[i].url) {
          res.write(this.routes[i].template);
        }
      }
      res.end();
    });
    
    return server;
  }

  startServer() {
    this.buildServer().listen(this.port);
  }

  logServerState() {
    console.log(this.messages.serverName);
    console.log(this.messages.serverStatus);
    console.log(this.messages.serverMessage);
  }
}

export default Server;