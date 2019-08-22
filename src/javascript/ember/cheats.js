module.exports = {
  "[ember] set(...)": {
    "prefix": "set",
    "body": "set(${1:this}, '${2}', ${3});",
    "description": "set(...)"
  },
  "[ember] get(...)": {
    "prefix": "get",
    "body": "get(${1:this}, '${2}');",
    "description": "get(...)"
  },
  "[ember] this._super(...)": {
    "prefix": "super",
    "body": "this._super(...arguments);",
    "description": "this._super(...)"
  },
  "[ember] init() { ... }": {
    "prefix": "init",
    "body": "init() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "init() { ... }"
  },
  "[ember] service(...)": {
    "prefix": "service",
    "body": "service(${1}),",
    "description": "service(...)"
  },
  "[ember] observer(...)": {
    "prefix": "observer",
    "body": "observer('${1:property}', function() {\n\t${2:// body}\n}),",
    "description": "observer(...)"
  },
  "[ember] on(...)": {
    "prefix": "on",
    "body": "on('${1:property}', function() {\n\t${2:// body}\n}),",
    "description": "on(...)"
  },
  "[ember] actions: { ... }": {
    "prefix": "actions",
    "[ember] body": "actions: {\n\t${1:// body}\n}",
    "[ember] description": "actions: { ... }"
  },
  "[ember] computed(...)": {
    "prefix": "computed",
    "body": "computed('${1:property}', function() {\n\t${2:// body}\n}),",
    "description": "computed(...)"
  },
  "[ember] action(...)": {
    "prefix": "action",
    "body": "action(function() {\n\t${2}\n}),",
    "description": "action(...)"
  },
  "[ember] alias(...)": {
    "prefix": "calias",
    "body": "alias('${1:key}');",
    "description": "alias(...)"
  },
  "[ember] and(...)": {
    "prefix": "cand",
    "body": "and('${1:key1}', '${2:key2}');",
    "description": "and(...)"
  },
  "[ember] bool(...)": {
    "prefix": "cbool",
    "body": "bool(${1:key});",
    "description": "bool(...)"
  },
  "[ember] collect(...)": {
    "prefix": "ccollect",
    "body": "collect(${1:keys});",
    "description": "collect(...)"
  },
  "[ember] empty(...)": {
    "prefix": "cempty",
    "body": "empty('${1:key}');",
    "description": "empty(...)"
  },
  "[ember] equal(...)": {
    "prefix": "cequal",
    "body": "equal('${1:key}', ${2:value});",
    "description": "equal(...)"
  },
  "[ember] filter(...)": {
    "prefix": "cfilter",
    "body": "filter(${1:key}, function(${2:item}${3:, index}) {\n  return ${2:item};\n}));",
    "description": "filter(...)"
  },
  "[ember] filterBy(...)": {
    "prefix": "cfilterBy",
    "body": "filterBy('${1:key}', ${2:propertyKey}, ${3:value});",
    "description": "filterBy(...)"
  },
  "[ember] gt(...)": {
    "prefix": "cgt",
    "body": "gt('${1:key}', ${2:value});",
    "description": "gt(...)"
  },
  "[ember] gte(...)": {
    "prefix": "cgte",
    "body": "gte('${1:key}', ${2:value});",
    "description": "gte(...)"
  },
  "[ember] intersect(...)": {
    "prefix": "intersect",
    "body": "intersect('${1:key1}', '${2:key2}');",
    "description": "intersect(...)"
  },
  "[ember] lt(...)": {
    "prefix": "clt",
    "body": "lt('${1:key}', ${2:value});",
    "description": "lt(...)"
  },
  "[ember] lte(...)": {
    "prefix": "clte",
    "body": "lte('${1:key}', ${2:value});",
    "description": "lte(...)"
  },
  "[ember] map(...)": {
    "prefix": "cmap",
    "body": "map(${1:key}, function(${2:item}${3:, index}) {\n  return ${2:item};\n}));",
    "description": "map(...)"
  },
  "[ember] mapBy(...)": {
    "prefix": "cmapBy",
    "body": "mapBy('${1:key}', '${2:propertyKey}');",
    "description": "mapBy(...)"
  },
  "[ember] match(...)": {
    "prefix": "cmatch",
    "body": "match('${1:key}', ${2:regEx});",
    "description": "match(...)"
  },
  "[ember] max(...)": {
    "prefix": "cmax",
    "body": "max('${1:key}');",
    "description": "max(...)"
  },
  "[ember] min(...)": {
    "prefix": "cmin",
    "body": "min('${1:key}');",
    "description": "min(...)"
  },
  "[ember] none(...)": {
    "prefix": "cnone",
    "body": "none('${1:key}');",
    "description": "none(...)"
  },
  "[ember] not(...)": {
    "prefix": "cnot",
    "body": "not('${1:key}');",
    "description": "not(...)"
  },
  "[ember] notEmpty(...)": {
    "prefix": "cnotEmpty",
    "body": "notEmpty('${1:key}');",
    "description": "notEmpty(...)"
  },
  "[ember] oneWay(...)": {
    "prefix": "coneWay",
    "body": "oneWay('${1:key}');",
    "description": "oneWay(...)"
  },
  "[ember] or(...)": {
    "prefix": "cor",
    "body": "or('${1:key1}', '${2:key2}');",
    "description": "or(...)"
  },
  "[ember] readOnly(...)": {
    "prefix": "creadOnly",
    "body": "readOnly('${1:key}');",
    "description": "readOnly(...)"
  },
  "[ember] reads(...)": {
    "prefix": "creads",
    "body": "reads('${1:key}');",
    "description": "reads(...)"
  },
  "[ember] setDiff(...)": {
    "prefix": "csetDiff",
    "body": "setDiff('${1:key1}', '${2:key2}');",
    "description": "setDiff(...)"
  },
  "[ember] sort(...)": {
    "prefix": "csort",
    "body": "sort('${1:itemsKey}', '${2:sortDefinition}');",
    "description": "sort(...)"
  },
  "[ember] sum(...)": {
    "prefix": "csum",
    "body": "sum('${1:key}');",
    "description": "sum(...)"
  },
  "[ember] union(...)": {
    "prefix": "cunion",
    "body": "union('${1:key1}', '${2:key2}');",
    "description": "union(...)"
  },
  "[ember] uniq(...)": {
    "prefix": "cuniq",
    "body": "uniq('${1:key}', '${2:propertyKey}');",
    "description": "uniq(...)"
  },
  "[ember] uniqBy(...)": {
    "prefix": "cuniqBy",
    "body": "uniqBy('${1:key}');",
    "description": "uniqBy(...)"
  },
  "[ember] bind(...)": {
    "prefix": "bind",
    "body": "bind(${1:this}, ${2:this.methodName});",
    "description": "bind(...)"
  },
  "[ember] cancel(...)": {
    "prefix": "cancel",
    "body": "cancel('${1:key}');",
    "description": "cancel(...)"
  },
  "[ember] debounce(...)": {
    "prefix": "debounce",
    "body": "debounce(${1:this}, '${2:methodName}', ${3:500});",
    "description": "debounce(...)"
  },
  "[ember] later(...)": {
    "prefix": "later",
    "body": "later(${1:this}, () => { ${2}\\}, ${3:500});",
    "description": "later(...)"
  },
  "[ember] next(...)": {
    "prefix": "next",
    "body": "next(${1:this}, () => { ${2}\\});",
    "description": "next(...)"
  },
  "[ember] once(...)": {
    "prefix": "once",
    "body": "once(${1:this}, () => { ${2}\\});",
    "description": "once(...)"
  },
  "[ember] run(...)": {
    "prefix": "run",
    "body": "run(() => { ${1}\\});",
    "description": "run(...)"
  },
  "[ember] schedule(...)": {
    "prefix": "schedule",
    "body": "schedule('${1:queue}', ${2:this}, () => { ${3}\\}, );",
    "description": "schedule(...)"
  },
  "[ember] scheduleOnce(...)": {
    "prefix": "scheduleOnce",
    "body": "scheduleOnce('${1:queue}', ${2:this}, () => { ${3}\\}, );",
    "description": "scheduleOnce(...)"
  },
  "[ember] throttle(...)": {
    "prefix": "throttle",
    "body": "throttle(${1:this}, '${2:methodName}', ${3:500});",
    "description": "throttle(...)"
  },
  "[ember] Route: model(...) { ... }": {
    "prefix": "model",
    "body": "model(params = {}) {\n\treturn this.store.query('${1}', params);\n},",
    "description": "Route: model(...) { ... }"
  },
  "[ember] Route: setupController(...) { ... }": {
    "prefix": "setupController",
    "body": "setupController(controller, model) {\n\tthis._super(controller, model);\n\t${1}\n},",
    "description": "Route: setupController(...) { ... }"
  },
  "[ember] Route: beforeModel(...) { ... }": {
    "prefix": "beforeModel",
    "body": "beforeModel(transition) {\n\tthis._super(controller, model);\n\t${1}\n},",
    "description": "Route: beforeModel(...) { ... }"
  },
  "[ember] Route: afterModel(...) { ... }": {
    "prefix": "afterModel",
    "body": "afterModel(model, transition) {\n\tthis._super(controller, model);\n\t${1}\n},",
    "description": "Route: afterModel(...) { ... }"
  },
  "[ember] Component: didReceiveAttrs() { ... }": {
    "prefix": "didReceiveAttrs",
    "body": "didReceiveAttrs() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didReceiveAttrs() { ... }"
  },
  "[ember] Component: didRender() { ... }": {
    "prefix": "didRender",
    "body": "didRender() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didRender() { ... }"
  },
  "[ember] Component: didUpdateAttrs() { ... }": {
    "prefix": "didUpdateAttrs",
    "body": "didUpdateAttrs() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didUpdateAttrs() { ... }"
  },
  "[ember] Component: willUpdate() { ... }": {
    "prefix": "willUpdate",
    "body": "willUpdate() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: willUpdate() { ... }"
  },
  "[ember] Component: didInsertElement() { ... }": {
    "prefix": "didInsertElement",
    "body": "didInsertElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didInsertElement() { ... }"
  },
  "[ember] Component: willDestroyElement() { ... }": {
    "prefix": "willDestroyElement",
    "body": "willDestroyElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: willDestroyElement() { ... }"
  },
  "[ember] Component: willClearElement() { ... }": {
    "prefix": "willClearElement",
    "body": "willClearElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: willClearElement() { ... }"
  },
  "[ember] Component: didDestroyElement() { ... }": {
    "prefix": "didDestroyElement",
    "body": "didDestroyElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didDestroyElement() { ... }"
  }
};
