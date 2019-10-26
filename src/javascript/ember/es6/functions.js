module.exports = {
  "super()": {
    "prefix": "super",
    "body": "super(...arguments);"
  },
  "init() {}": {
    "prefix": "init",
    "body": "init() {\n\tsuper.init(...arguments);\n\t${1}\n}"
  },
  "model() {}": {
    "prefix": "model",
    "body": "model(params = {}) {\n\treturn this.store.query('${1}', params);\n}"
  },
  "setupController() {}": {
    "prefix": "setupController",
    "body": "setupController(controller, model) {\n\tsuper.setupController(...arguments);\n\t${1}\n}"
  },
  "beforeModel() {}": {
    "prefix": "beforeModel",
    "body": "beforeModel(transition) {\n\tsuper.beforeModel(...arguments);\n\t${1}\n}"
  },
  "afterModel() {}": {
    "prefix": "afterModel",
    "body": "afterModel(model, transition) {\n\tsuper.afterModel(...arguments);\n\t${1}\n}"
  },
  "didReceiveAttrs() {}": {
    "prefix": "didReceiveAttrs",
    "body": "didReceiveAttrs() {\n\tsuper.didReceiveAttrs(...arguments);\n\t${1}\n}"
  },
  "didRender() {}": {
    "prefix": "didRender",
    "body": "didRender() {\n\tsuper.didRender(...arguments);\n\t${1}\n}"
  },
  "didUpdateAttrs() {}": {
    "prefix": "didUpdateAttrs",
    "body": "didUpdateAttrs() {\n\tsuper.didUpdateAttrs(...arguments);\n\t${1}\n}"
  },
  "willUpdate() {}": {
    "prefix": "willUpdate",
    "body": "willUpdate() {\n\tsuper.willUpdate(...arguments);\n\t${1}\n}"
  },
  "didInsertElement() {}": {
    "prefix": "didInsertElement",
    "body": "didInsertElement() {\n\tsuper.didInsertElement(...arguments);\n\t${1}\n}"
  },
  "willDestroyElement() {}": {
    "prefix": "willDestroyElement",
    "body": "willDestroyElement() {\n\tsuper.willDestroyElement(...arguments);\n\t${1}\n}"
  },
  "willClearElement() {}": {
    "prefix": "willClearElement",
    "body": "willClearElement() {\n\tsuper.willClearElement(...arguments);\n\t${1}\n}"
  },
  "didDestroyElement() {}": {
    "prefix": "didDestroyElement",
    "body": "didDestroyElement() {\n\tsuper.didDestroyElement(...arguments);\n\t${1}\n}"
  }
};