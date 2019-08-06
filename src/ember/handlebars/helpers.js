module.exports = {
  "[handelbars] #each": {
    "prefix": "each",
    "body": "{{#each ${1} as |${2}|}}\n\t${3}\n{{/each}}",
    "description": "[handelbars] #each"
  },
  "[handelbars] #each-in": {
    "prefix": "each-in",
    "body": "{{#each-in ${1} as |${2} ${3}|}}\n\t${4}\n{{/each-in}}",
    "description": "[handelbars] #each-in"
  },
  "[handelbars] #each/else": {
    "prefix": "eachelse",
    "body": "{{#each ${1} as |${2}|}}\n\t${3}\n{{else}}\n\t${4}\n{{/each}}",
    "description": "[handelbars] #each/else"
  },
  "[handelbars] #if hasBlock": {
    "prefix": "ifhasBlock",
    "body": "{{#if (hasBlock)}}\n\t${1}\n{{/if}}",
    "description": "[handelbars] #if hasBlock"
  },
  "[handelbars] #if hasBlockParams": {
    "prefix": "ifhasBlockParams",
    "body": "{{#if (hasBlockParams)}}\n\t${1}\n{{/if}}",
    "description": "[handelbars] #if hasBlockParams"
  },
  "[handelbars] if": {
    "prefix": "if",
    "body": "{{if ${1} ${2} ${3}}}",
    "description": "[handelbars] if"
  },
  "[handelbars] #if": {
    "prefix": "if",
    "body": "{{#if ${1}}}\n\t${3}\n{{/if}}",
    "description": "[handelbars] #if"
  },
  "[handelbars] #if/else": {
    "prefix": "if",
    "body": "{{#if ${1}}}\n\t${2}\n{{else}}\n\t${3}\n{{/if}}",
    "description": "[handelbars] #if/else"
  },
  "[handelbars] unless": {
    "prefix": "unless",
    "body": "{{unless ${1} ${2} ${3}}}",
    "description": "[handelbars] unless"
  },
  "[handelbars] #unless": {
    "prefix": "unless",
    "body": "{{#unless ${1}}}\n\t${2}\n{{/unless}}",
    "description": "[handelbars] #unless"
  },
  "[handelbars] #unless/else": {
    "prefix": "unless",
    "body": "{{#unless ${1}}}\n\t${2}\n{{else}}\n\t${3}\n{{/unless}}",
    "description": "[handelbars] #unless/else"
  },
  "[handelbars] with": {
    "prefix": "with",
    "body": "{{#with ${1} as |${2}|}}\n\t${3}\n{{/with}}",
    "description": "[handelbars] with"
  },
  "[handelbars] log": {
    "prefix": "log",
    "body": "{{log ${1}}}",
    "description": "[handelbars] log"
  },
  "[handelbars] yield": {
    "prefix": "yield",
    "body": "{{yield}}",
    "description": "[handelbars] yield"
  },
};
