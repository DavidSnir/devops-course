const fs = require("node:fs");
const path = require("node:path");

const rootDir = path.resolve(__dirname, "..");
const srcDir = path.join(rootDir, "src");
const distDir = path.join(rootDir, "dist");
const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, "package.json"), "utf8"));

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });
fs.cpSync(srcDir, distDir, { recursive: true });

const productionPackage = {
  name: packageJson.name,
  version: packageJson.version,
  private: packageJson.private,
  main: "app.js",
  scripts: {
    start: "node app.js"
  },
  engines: packageJson.engines,
  license: packageJson.license
};

const buildInfo = {
  builtAt: new Date().toISOString(),
  gitSha: process.env.GITHUB_SHA || null,
  nodeVersion: process.version
};

fs.writeFileSync(path.join(distDir, "package.json"), `${JSON.stringify(productionPackage, null, 2)}\n`);
fs.writeFileSync(path.join(distDir, "build-info.json"), `${JSON.stringify(buildInfo, null, 2)}\n`);

console.log(`Built app into ${path.relative(rootDir, distDir)}`);
