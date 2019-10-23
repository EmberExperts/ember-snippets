module.exports = {
  "action": {
    "prefix": "action",
    "body": "(action ${1})",
    "description": "The {{action}} helper provides a way to pass triggers for behavior (usually just a function) between components, and into components from controllers."
  },
  "array": {
    "prefix": "array",
    "body": "(array ${1})",
    "description": "Use the {{array}} helper to create an array to pass as an option to your components."
  },
  "hash": {
    "prefix": "hash",
    "body": "(hash ${1})",
    "description": "Use the {{hash}} helper to create a hash to pass as an option to your components."
  },
  "component": {
    "prefix": "component",
    "body": "{{component ${1}}}",
    "description": "The {{component}} helper lets you add instances of Component to a template."
  },
  "#component": {
    "prefix": "component",
    "body": "{{#component ${1}}}\n\t${2}\n{{/component}}",
    "description": "The {{component}} helper lets you add instances of Component to a template."
  },
  "concat": {
    "prefix": "concat",
    "body": "{{concat ${1} ${2}}}",
    "description": "Concatenates the given arguments into a string."
  },
  "debugger": {
    "prefix": "debugger",
    "body": "{{debugger}}",
    "description": "Execute the debugger statement in the current template's context."
  },
  "fn": {
    "prefix": "fn",
    "body": "(fn ${1})",
    "description": "The fn helper allows you to ensure a function that you are passing off to another component, helper, or modifier has access to arguments that are available in the template."
  },
  "get": {
    "prefix": "get",
    "body": "{{get ${1} ${2}}}",
    "description": "Dynamically look up a property on an object. "
  },
  "let": {
    "prefix": "let",
    "body": "{{#let ${1} as |${2}|}}\n\t${3}\n{{/let}}",
    "description": "The let helper receives one or more positional arguments and yields them out as block params."
  },
  "mount": {
    "prefix": "mount",
    "body": "{{mount ${1}}}",
    "description": "mount"
  },
  "mut": {
    "prefix": "mut",
    "body": "(mut ${1})",
    "description": "The mut helper lets you clearly specify that a child Component can update the (mutable) value passed to it, which will change the value of the parent component."
  },
  "on": {
    "prefix": "on",
    "body": "{{on ${1} ${2}}}",
    "description": "The {{on}} modifier lets you easily add event listeners (it uses EventTarget.addEventListener internally)."
  },
  "outlet": {
    "prefix": "outlet",
    "body": "{{outlet ${1} ${2}}}",
    "description": "The {{outlet}} helper lets you specify where a child route will render in your template"
  },
  "query-params": {
    "prefix": "query-params",
    "body": "(query-params ${1})",
    "description": "This is a helper to be used in conjunction with the link-to helper. It will supply url query parameters to the target route."
  },
};
