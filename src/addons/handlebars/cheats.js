module.exports = {
  "Ember: get": {
    "prefix": "get",
    "body": "{{get '${1}'}}",
    "description": "Ember: get"
  },
  "Ember: let": {
    "prefix": "let",
    "body": "{{#let ${1} as |${2}|}}\n\t${3}\n{{/let}}",
    "description": "Ember: let"
  },
  "Ember: helper": {
    "prefix": "helper",
    "body": "{{${1:get} '${2}'}}",
    "description": "Ember: helper"
  },
  "Ember: closure helper": {
    "prefix": "chelper",
    "body": "(${1:get} '${2}')",
    "description": "Ember: closure helper"
  },
  "Ember: action": {
    "prefix": "action",
    "body": "{{action '${1:actionName}' ${2:argument}}}",
    "description": "Ember: action"
  },
  "Ember: #each/else": {
    "prefix": "eachelse",
    "body": "{{#each ${1} as |${2}|}}\n\t${3}\n{{else}}\n\t${4}\n{{/each}}\n",
    "description": "Ember: #each/else"
  },
  "Ember: component": {
    "prefix": "comp",
    "body": "{{#${1} ${2:as |${3:yielded}|}}}\n\t${4}\n{{/${1}}}",
    "description": "Ember: component"
  }
};
