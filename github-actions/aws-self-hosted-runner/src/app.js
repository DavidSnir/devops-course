const http = require("node:http");

const DEFAULT_MESSAGE = "Hello from Node CI/CD on EC2";

function getMessage() {
  return process.env.APP_MESSAGE || DEFAULT_MESSAGE;
}

function requestHandler(req, res) {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  if (req.url === "/" || req.url === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`${getMessage()}\n`);
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("Not found\n");
}

function createServer() {
  return http.createServer(requestHandler);
}

function startServer(port = process.env.PORT || 3000) {
  const server = createServer();

  server.listen(port, () => {
    const address = server.address();
    const displayPort = typeof address === "object" && address ? address.port : port;
    console.log(`Server listening on http://localhost:${displayPort}`);
  });

  return server;
}

if (require.main === module) {
  startServer();
}

module.exports = {
  createServer,
  getMessage,
  requestHandler,
  startServer
};
