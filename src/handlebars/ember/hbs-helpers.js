module.exports = {
  "[handelbars] #each": {
    "prefix": "each",
    "body": "{{#each ${1} as |${2}|}}\n\t${3}\n{{/each}}",
    "description": "The {{#each}} helper loops over elements in a collection."
  },
  "[handelbars] #each-in": {
    "prefix": "each-in",
    "body": "{{#each-in ${1} as |${2} ${3}|}}\n\t${4}\n{{/each-in}}",
    "description": "The {{each-in}} helper loops over properties on an object."
  },
  "[handelbars] #each/else": {
    "prefix": "eachelse",
    "body": "{{#each ${1} as |${2}|}}\n\t${3}\n{{else}}\n\t${4}\n{{/each}}",
    "description": "The {{#each}} helper loops over elements in a collection."
  },
  "[handelbars] #if hasBlock": {
    "prefix": "ifhasBlock",
    "body": "{{#if (hasBlock)}}\n\t${1}\n{{/if}}",
    "description": "Indicates if the component was invoked with a block."
  },
  "[handelbars] #if hasBlockParams": {
    "prefix": "ifhasBlockParams",
    "body": "{{#if (hasBlockParams)}}\n\t${1}\n{{/if}}",
    "description": "Indicates if the component was invoked with block params."
  },
  "[handelbars] if": {
    "prefix": "if",
    "body": "{{if ${1} ${2} ${3}}}",
    "description": "The if helper allows you to conditionally render one of two branches, depending on the 'truthiness' of a property."
  },
  "[handelbars] #if": {
    "prefix": "if",
    "body": "{{#if ${1}}}\n\t${3}\n{{/if}}",
    "description": "The if helper allows you to conditionally render one of two branches, depending on the 'truthiness' of a property."
  },
  "[handelbars] #if/else": {
    "prefix": "if",
    "body": "{{#if ${1}}}\n\t${2}\n{{else}}\n\t${3}\n{{/if}}",
    "description": "The if helper allows you to conditionally render one of two branches, depending on the 'truthiness' of a property."
  },
  "[handelbars] unless": {
    "prefix": "unless",
    "body": "{{unless ${1} ${2} ${3}}}",
    "description": "[handelbars] unless"
  },
  "[handelbars] #unless": {
    "prefix": "unless",
    "body": "{{#unless ${1}}}\n\t${2}\n{{/unless}}",
    "description": "The unless helper is the inverse of the if helper. It displays if a value is falsey (\"not true\" or \"is false\"). "
  },
  "[handelbars] #unless/else": {
    "prefix": "unless",
    "body": "{{#unless ${1}}}\n\t${2}\n{{else}}\n\t${3}\n{{/unless}}",
    "description": "The unless helper is the inverse of the if helper. It displays if a value is falsey (\"not true\" or \"is false\"). "
  },
  "[handelbars] with": {
    "prefix": "with",
    "body": "{{#with ${1} as |${2}|}}\n\t${3}\n{{/with}}",
    "description": "[handelbars] with"
  },
  "[handelbars] log": {
    "prefix": "log",
    "body": "{{log ${1}}}",
    "description": "log allows you to output the value of variables in the current rendering context. log also accepts primitive types such as strings or numbers."
  },
  "[handelbars] yield": {
    "prefix": "yield",
    "body": "{{yield}}",
    "description": "{{yield}} denotes an area of a template that will be rendered inside of another template."
  },
};
