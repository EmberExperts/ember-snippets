"use strict";

const glob = require("glob");
const path = require("path");
const fs = require("fs-extra");

function generateLanguageFile(language) {
  const data = [];

  glob.sync(`./src/${language}/**/*.js`).forEach(function(file) {
    data.push(require(path.resolve(file)));
  });

  fs.outputJsonSync(`dist/${language}.json`, Object.assign({}, ...data), { spaces: 2 });
}

fs.emptyDirSync("dist");
generateLanguageFile("javascript");
generateLanguageFile("handlebars");