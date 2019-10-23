module.exports = {
  "input": {
    "prefix": "input",
    "body": "<Input @value=${1} />",
    "description": "The {{input}} helper lets you create an HTML <input /> component."
  },
  "textarea": {
    "prefix": "textarea",
    "body": "<Textarea @value=${1} />",
    "description": "The {{textarea}} helper lets you create an HTML <textarea /> component."
  },
  "link-to": {
    "prefix": "linkto",
    "body": "<LinkTo @route=\"${1}\">\n\t${2}\n</LinkTo>",
    "description": "The {{link-to}} component renders a link to the supplied routeName."
  },
};
