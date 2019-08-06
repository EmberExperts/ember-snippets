module.exports = {
  "[handelbars] action": {
    "prefix": "action",
    "body": "{{action ${1}}}",
    "description": "[handelbars] action"
  },
  "[handelbars] array": {
    "prefix": "array",
    "body": "(array ${1})",
    "description": "[handelbars] array"
  },
  "[handelbars] hash": {
    "prefix": "hash",
    "body": "(hash ${1})",
    "description": "[handelbars] hash"
  },
  "[handelbars] component": {
    "prefix": "component",
    "body": "{{component ${1}}}",
    "description": "[handelbars] component"
  },
  "[handelbars] #component": {
    "prefix": "component",
    "body": "{{#component ${1}}}\n\t${2}\n{{/component}}",
    "description": "[handelbars] #component"
  },
  "[handelbars] concat": {
    "prefix": "concat",
    "body": "{{concat ${1} ${2}}}",
    "description": "[handelbars] concat"
  },
  "[handelbars] debugger": {
    "prefix": "debugger",
    "body": "{{debugger}}",
    "description": "[handelbars] debugger"
  },
  "[handelbars] fn": {
    "prefix": "fn",
    "body": "{{fn}}",
    "description": "[handelbars] fn"
  },
  "[handelbars] get": {
    "prefix": "get",
    "body": "{{get ${1} ${2}}}",
    "description": "[handelbars] get"
  },
  "[handelbars] let": {
    "prefix": "let",
    "body": "{{#let ${1} as |${2}|}}\n\t${3}\n{{/let}}",
    "description": "[handelbars] let"
  },
  "[handelbars] mount": {
    "prefix": "mount",
    "body": "{{mount ${1}}}",
    "description": "[handelbars] mount"
  },
  "[handelbars] mut": {
    "prefix": "mut",
    "body": "(mut ${1})",
    "description": "[handelbars] mut"
  },
  "[handelbars] on": {
    "prefix": "on",
    "body": "{{on ${1} ${2}}}",
    "description": "[handelbars] on"
  },
  "[handelbars] outlet": {
    "prefix": "outlet",
    "body": "{{outlet ${1} ${2}}}",
    "description": "[handelbars] outlet"
  },
  "[handelbars] query-params": {
    "prefix": "query-params",
    "body": "(query-params ${1})",
    "description": "[handelbars] query-params"
  },
};
