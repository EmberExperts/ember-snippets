"use strict";

const glob = require("glob");
const path = require("path");
const fs = require("fs-extra");

const pathRegexp = /.\/src\/(?<language>.+)\/(?<module>.+)\//;

function generateLanguageFile(language) {
  const data = [];

  glob.sync(`./src/${language}/**/*.js`).forEach(function(file) {
    const fileContent = require(path.resolve(file));
    const transformedContent = {};
    const { module } = file.match(pathRegexp).groups;

    Object.keys(fileContent).forEach((key) => {
      transformedContent[`[${module}] ${key}`] = fileContent[key];
    });

    data.push(transformedContent);
  });

  fs.outputJsonSync(`dist/${language}.json`, Object.assign({}, ...data), { spaces: 2 });
}

fs.emptyDirSync("dist");
generateLanguageFile("javascript");
generateLanguageFile("handlebars");