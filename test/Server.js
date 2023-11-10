import http from "http";

class Server {
  port;
  routes = [];
  messages = {
    serverName: "=========== Node.js Server ============\n",
    serverStatus: "Server status: server is running"
  };

  /** 
   * @param {number} port
   * @param {object[]} routes
   */
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

  _buildServer() {
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

  startServer = () => this._buildServer().listen(this.port);

  logServerState() {
    console.log(this.messages.serverName);
    console.log(this.messages.serverStatus);
    this.messages.serverMessage = `Server http url: http://localhost:${this.port}`;
    console.log(this.messages.serverMessage);
  }
}

export default Server;