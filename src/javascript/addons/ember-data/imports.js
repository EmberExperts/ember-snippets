const data = require("@ember-data/rfc395-data");

const customMapping = {};

function getImport(object) {
  if (object.replacement.export === "default") {
    const mapping = customMapping[object.replacement.module] || {};
    return mapping[object.localName] || object.localName;
  } else {
    const mapping = customMapping[object.replacement.module] || {};
    const customName = mapping[object.replacement.export];
    
    if (customName) {
      return `{ ${object.replacement.export} as ${customName} }`;
    }
    
    return `{ ${object.replacement.export} }`;
  }
}

function getDescriptor(object) {
  if (object.localName) return object.localName;

  if (object.replacement.export === "default") {
    return object.export;
  }

  return object.replacement.export;
}

const imports = {};

data.forEach((object) => {
  imports[`[ember-data] ${getDescriptor(object)}`] = {
    prefix: `im${object.localName || object.replacement.export}`,
    body: `import ${getImport(object)} from '${object.replacement.module}';`,
    description: getDescriptor(object)
  };
});

module.exports = imports;