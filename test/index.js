const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write("hello world");
      break;
    case "/about":
      break;
    case "/services":
      break;
  }
}).listen(8000);

console.log(`Server listens on http://localhost:${8000}/`);