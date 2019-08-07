const data = require("ember-rfc176-data");

const customMapping = {
  "@ember/controller": {
    "inject": "controller"
  },

  "@ember/service": {
    "inject": "service"
  }
};

function getImport(object) {
  if (object.export === "default") {
    const mapping = customMapping[object.module] || {};
    return mapping[object.localName] || object.localName;
  } else {
    const mapping = customMapping[object.module] || {};
    const customName = mapping[object.export];
    
    if (customName) {
      return `{ ${object.export} as ${customName} }`;
    }
    
    return `{ ${object.export} }`;
  }
}

const imports = {};

data.forEach((object) => {
  if (!object.deprecated) {
    imports[`[ember] ${object.global || "NOGLOBAL"}`] = {
      prefix: `im${object.localName || object.export}`,
      body: `import ${getImport(object)} from '${object.module}';`,
      description: object.global
    };
  }
});

module.exports = imports;