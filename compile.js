"use strict";

const glob = require("glob");
const path = require("path");
const fs = require("fs-extra");

const collections = [];

glob.sync("./src/**/*.js").forEach(function(file) {
  collections.push(require(path.resolve(file)));
});

const content = Object.assign({}, ...collections);

fs.emptyDirSync("dist");
fs.outputJsonSync("dist/vscode.json", content, { spaces: 2 });