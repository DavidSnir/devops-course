const assert = require("node:assert/strict");
const test = require("node:test");

const { createServer, getMessage } = require("../src/app");

function listen(server) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, () => {
      const address = server.address();
      resolve(address.port);
    });
  });
}

test("returns the default application message", () => {
  assert.equal(getMessage(), process.env.APP_MESSAGE || "Hello from Node CI/CD on EC2");
});

test("serves the application message", async (t) => {
  const server = createServer();
  const port = await listen(server);

  t.after(() => new Promise((resolve) => server.close(resolve)));

  const response = await fetch(`http://127.0.0.1:${port}/`);

  assert.equal(response.status, 200);
  assert.equal(await response.text(), `${getMessage()}\n`);
});

test("serves health checks", async (t) => {
  const server = createServer();
  const port = await listen(server);

  t.after(() => new Promise((resolve) => server.close(resolve)));

  const response = await fetch(`http://127.0.0.1:${port}/health`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: "ok" });
});
