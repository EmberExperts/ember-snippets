module.exports = {
  "[ember] action": {
    "prefix": "action",
    "body": "(action ${1})",
    "description": "The {{action}} helper provides a way to pass triggers for behavior (usually just a function) between components, and into components from controllers."
  },
  "[ember] array": {
    "prefix": "array",
    "body": "(array ${1})",
    "description": "Use the {{array}} helper to create an array to pass as an option to your components."
  },
  "[ember] hash": {
    "prefix": "hash",
    "body": "(hash ${1})",
    "description": "Use the {{hash}} helper to create a hash to pass as an option to your components."
  },
  "[ember] component": {
    "prefix": "component",
    "body": "{{component ${1}}}",
    "description": "The {{component}} helper lets you add instances of Component to a template."
  },
  "[ember] #component": {
    "prefix": "component",
    "body": "{{#component ${1}}}\n\t${2}\n{{/component}}",
    "description": "The {{component}} helper lets you add instances of Component to a template."
  },
  "[ember] concat": {
    "prefix": "concat",
    "body": "{{concat ${1} ${2}}}",
    "description": "Concatenates the given arguments into a string."
  },
  "[ember] debugger": {
    "prefix": "debugger",
    "body": "{{debugger}}",
    "description": "Execute the debugger statement in the current template's context."
  },
  "[ember] fn": {
    "prefix": "fn",
    "body": "(fn ${1})",
    "description": "The fn helper allows you to ensure a function that you are passing off to another component, helper, or modifier has access to arguments that are available in the template."
  },
  "[ember] get": {
    "prefix": "get",
    "body": "{{get ${1} ${2}}}",
    "description": "Dynamically look up a property on an object. "
  },
  "[ember] let": {
    "prefix": "let",
    "body": "{{#let ${1} as |${2}|}}\n\t${3}\n{{/let}}",
    "description": "The let helper receives one or more positional arguments and yields them out as block params."
  },
  "[ember] mount": {
    "prefix": "mount",
    "body": "{{mount ${1}}}",
    "description": "[ember] mount"
  },
  "[ember] mut": {
    "prefix": "mut",
    "body": "(mut ${1})",
    "description": "The mut helper lets you clearly specify that a child Component can update the (mutable) value passed to it, which will change the value of the parent component."
  },
  "[ember] on": {
    "prefix": "on",
    "body": "{{on ${1} ${2}}}",
    "description": "The {{on}} modifier lets you easily add event listeners (it uses EventTarget.addEventListener internally)."
  },
  "[ember] outlet": {
    "prefix": "outlet",
    "body": "{{outlet ${1} ${2}}}",
    "description": "The {{outlet}} helper lets you specify where a child route will render in your template"
  },
  "[ember] query-params": {
    "prefix": "query-params",
    "body": "(query-params ${1})",
    "description": "This is a helper to be used in conjunction with the link-to helper. It will supply url query parameters to the target route."
  },
};
