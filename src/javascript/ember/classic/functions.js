module.exports = {
  "this._super()": {
    "prefix": "super",
    "body": "this._super(...arguments);"
  },
  "init() {}": {
    "prefix": "init",
    "body": "init() {\n\tthis._super(...arguments);\n\t${1}\n},"
  },
  "service()": {
    "prefix": "service",
    "body": "service(${1}),"
  },
  "observer()": {
    "prefix": "observer",
    "body": "observer('${1:property}', function() {\n\t${2}\n}),"
  },
  "on()": {
    "prefix": "on",
    "body": "on('${1:property}', function() {\n\t${2}\n}),"
  },
  "actions: {}": {
    "prefix": "actions",
    "body": "actions: {\n\t${1}\n}"
  },
  "computed()": {
    "prefix": "computed",
    "body": "computed('${1:property}', function() {\n\t${2}\n}),"
  },
  "action()": {
    "prefix": "action",
    "body": "action(function() {\n\t${2}\n}),"
  },
  "model() {}": {
    "prefix": "model",
    "body": "model(params = {}) {\n\treturn this.store.query('${1}', params);\n},"
  },
  "setupController() {}": {
    "prefix": "setupController",
    "body": "setupController(controller, model) {\n\tthis._super(controller, model);\n\t${1}\n},"
  },
  "beforeModel() {}": {
    "prefix": "beforeModel",
    "body": "beforeModel(transition) {\n\tthis._super(controller, model);\n\t${1}\n},"
  },
  "afterModel() {}": {
    "prefix": "afterModel",
    "body": "afterModel(model, transition) {\n\tthis._super(controller, model);\n\t${1}\n},"
  },
  "didReceiveAttrs() {}": {
    "prefix": "didReceiveAttrs",
    "body": "didReceiveAttrs() {\n\tthis._super(...arguments);\n\t${1}\n},"
  },
  "didRender() {}": {
    "prefix": "didRender",
    "body": "didRender() {\n\tthis._super(...arguments);\n\t${1}\n},"
  },
  "didUpdateAttrs() {}": {
    "prefix": "didUpdateAttrs",
    "body": "didUpdateAttrs() {\n\tthis._super(...arguments);\n\t${1}\n},"
  },
  "willUpdate() {}": {
    "prefix": "willUpdate",
    "body": "willUpdate() {\n\tthis._super(...arguments);\n\t${1}\n},"
  },
  "didInsertElement() {}": {
    "prefix": "didInsertElement",
    "body": "didInsertElement() {\n\tthis._super(...arguments);\n\t${1}\n},"
  },
  "willDestroyElement() {}": {
    "prefix": "willDestroyElement",
    "body": "willDestroyElement() {\n\tthis._super(...arguments);\n\t${1}\n},"
  },
  "willClearElement() {}": {
    "prefix": "willClearElement",
    "body": "willClearElement() {\n\tthis._super(...arguments);\n\t${1}\n},"
  },
  "didDestroyElement() {}": {
    "prefix": "didDestroyElement",
    "body": "didDestroyElement() {\n\tthis._super(...arguments);\n\t${1}\n},"
  }
};
