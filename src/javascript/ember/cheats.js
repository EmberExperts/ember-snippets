module.exports = {
  "set(...)": {
    "prefix": "set",
    "body": "set(${1:this}, '${2}', ${3});",
    "description": "set(...)"
  },
  "get(...)": {
    "prefix": "get",
    "body": "get(${1:this}, '${2}');",
    "description": "get(...)"
  },
  "this._super(...)": {
    "prefix": "super",
    "body": "this._super(...arguments);",
    "description": "this._super(...)"
  },
  "init() { ... }": {
    "prefix": "init",
    "body": "init() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "init() { ... }"
  },
  "service(...)": {
    "prefix": "service",
    "body": "service(${1}),",
    "description": "service(...)"
  },
  "observer(...)": {
    "prefix": "observer",
    "body": "observer('${1:property}', function() {\n\t${2:// body}\n}),",
    "description": "observer(...)"
  },
  "on(...)": {
    "prefix": "on",
    "body": "on('${1:property}', function() {\n\t${2:// body}\n}),",
    "description": "on(...)"
  },
  "actions: { ... }": {
    "prefix": "actions",
    "body": "actions: {\n\t${1:// body}\n}",
    "description": "actions: { ... }"
  },
  "computed(...)": {
    "prefix": "computed",
    "body": "computed('${1:property}', function() {\n\t${2:// body}\n}),",
    "description": "computed(...)"
  },
  "action(...)": {
    "prefix": "action",
    "body": "action(function() {\n\t${2}\n}),",
    "description": "action(...)"
  },
  "alias(...)": {
    "prefix": "calias",
    "body": "alias('${1:key}');",
    "description": "alias(...)"
  },
  "and(...)": {
    "prefix": "cand",
    "body": "and('${1:key1}', '${2:key2}');",
    "description": "and(...)"
  },
  "bool(...)": {
    "prefix": "cbool",
    "body": "bool(${1:key});",
    "description": "bool(...)"
  },
  "collect(...)": {
    "prefix": "ccollect",
    "body": "collect(${1:keys});",
    "description": "collect(...)"
  },
  "empty(...)": {
    "prefix": "cempty",
    "body": "empty('${1:key}');",
    "description": "empty(...)"
  },
  "equal(...)": {
    "prefix": "cequal",
    "body": "equal('${1:key}', ${2:value});",
    "description": "equal(...)"
  },
  "filter(...)": {
    "prefix": "cfilter",
    "body": "filter(${1:key}, function(${2:item}${3:, index}) {\n  return ${2:item};\n}));",
    "description": "filter(...)"
  },
  "filterBy(...)": {
    "prefix": "cfilterBy",
    "body": "filterBy('${1:key}', ${2:propertyKey}, ${3:value});",
    "description": "filterBy(...)"
  },
  "gt(...)": {
    "prefix": "cgt",
    "body": "gt('${1:key}', ${2:value});",
    "description": "gt(...)"
  },
  "gte(...)": {
    "prefix": "cgte",
    "body": "gte('${1:key}', ${2:value});",
    "description": "gte(...)"
  },
  "intersect(...)": {
    "prefix": "intersect",
    "body": "intersect('${1:key1}', '${2:key2}');",
    "description": "intersect(...)"
  },
  "lt(...)": {
    "prefix": "clt",
    "body": "lt('${1:key}', ${2:value});",
    "description": "lt(...)"
  },
  "lte(...)": {
    "prefix": "clte",
    "body": "lte('${1:key}', ${2:value});",
    "description": "lte(...)"
  },
  "map(...)": {
    "prefix": "cmap",
    "body": "map(${1:key}, function(${2:item}${3:, index}) {\n  return ${2:item};\n}));",
    "description": "map(...)"
  },
  "mapBy(...)": {
    "prefix": "cmapBy",
    "body": "mapBy('${1:key}', '${2:propertyKey}');",
    "description": "mapBy(...)"
  },
  "match(...)": {
    "prefix": "cmatch",
    "body": "match('${1:key}', ${2:regEx});",
    "description": "match(...)"
  },
  "max(...)": {
    "prefix": "cmax",
    "body": "max('${1:key}');",
    "description": "max(...)"
  },
  "min(...)": {
    "prefix": "cmin",
    "body": "min('${1:key}');",
    "description": "min(...)"
  },
  "none(...)": {
    "prefix": "cnone",
    "body": "none('${1:key}');",
    "description": "none(...)"
  },
  "not(...)": {
    "prefix": "cnot",
    "body": "not('${1:key}');",
    "description": "not(...)"
  },
  "notEmpty(...)": {
    "prefix": "cnotEmpty",
    "body": "notEmpty('${1:key}');",
    "description": "notEmpty(...)"
  },
  "oneWay(...)": {
    "prefix": "coneWay",
    "body": "oneWay('${1:key}');",
    "description": "oneWay(...)"
  },
  "or(...)": {
    "prefix": "cor",
    "body": "or('${1:key1}', '${2:key2}');",
    "description": "or(...)"
  },
  "readOnly(...)": {
    "prefix": "creadOnly",
    "body": "readOnly('${1:key}');",
    "description": "readOnly(...)"
  },
  "reads(...)": {
    "prefix": "creads",
    "body": "reads('${1:key}');",
    "description": "reads(...)"
  },
  "setDiff(...)": {
    "prefix": "csetDiff",
    "body": "setDiff('${1:key1}', '${2:key2}');",
    "description": "setDiff(...)"
  },
  "sort(...)": {
    "prefix": "csort",
    "body": "sort('${1:itemsKey}', '${2:sortDefinition}');",
    "description": "sort(...)"
  },
  "sum(...)": {
    "prefix": "csum",
    "body": "sum('${1:key}');",
    "description": "sum(...)"
  },
  "union(...)": {
    "prefix": "cunion",
    "body": "union('${1:key1}', '${2:key2}');",
    "description": "union(...)"
  },
  "uniq(...)": {
    "prefix": "cuniq",
    "body": "uniq('${1:key}', '${2:propertyKey}');",
    "description": "uniq(...)"
  },
  "uniqBy(...)": {
    "prefix": "cuniqBy",
    "body": "uniqBy('${1:key}');",
    "description": "uniqBy(...)"
  },
  "bind(...)": {
    "prefix": "bind",
    "body": "bind(${1:this}, ${2:this.methodName});",
    "description": "bind(...)"
  },
  "cancel(...)": {
    "prefix": "cancel",
    "body": "cancel('${1:key}');",
    "description": "cancel(...)"
  },
  "debounce(...)": {
    "prefix": "debounce",
    "body": "debounce(${1:this}, '${2:methodName}', ${3:500});",
    "description": "debounce(...)"
  },
  "later(...)": {
    "prefix": "later",
    "body": "later(${1:this}, () => { ${2}\\}, ${3:500});",
    "description": "later(...)"
  },
  "next(...)": {
    "prefix": "next",
    "body": "next(${1:this}, () => { ${2}\\});",
    "description": "next(...)"
  },
  "once(...)": {
    "prefix": "once",
    "body": "once(${1:this}, () => { ${2}\\});",
    "description": "once(...)"
  },
  "run(...)": {
    "prefix": "run",
    "body": "run(() => { ${1}\\});",
    "description": "run(...)"
  },
  "schedule(...)": {
    "prefix": "schedule",
    "body": "schedule('${1:queue}', ${2:this}, () => { ${3}\\}, );",
    "description": "schedule(...)"
  },
  "scheduleOnce(...)": {
    "prefix": "scheduleOnce",
    "body": "scheduleOnce('${1:queue}', ${2:this}, () => { ${3}\\}, );",
    "description": "scheduleOnce(...)"
  },
  "throttle(...)": {
    "prefix": "throttle",
    "body": "throttle(${1:this}, '${2:methodName}', ${3:500});",
    "description": "throttle(...)"
  },
  "Route: model(...) { ... }": {
    "prefix": "model",
    "body": "model(params = {}) {\n\treturn this.store.query('${1}', params);\n},",
    "description": "Route: model(...) { ... }"
  },
  "Route: setupController(...) { ... }": {
    "prefix": "setupController",
    "body": "setupController(controller, model) {\n\tthis._super(controller, model);\n\t${1}\n},",
    "description": "Route: setupController(...) { ... }"
  },
  "Route: beforeModel(...) { ... }": {
    "prefix": "beforeModel",
    "body": "beforeModel(transition) {\n\tthis._super(controller, model);\n\t${1}\n},",
    "description": "Route: beforeModel(...) { ... }"
  },
  "Route: afterModel(...) { ... }": {
    "prefix": "afterModel",
    "body": "afterModel(model, transition) {\n\tthis._super(controller, model);\n\t${1}\n},",
    "description": "Route: afterModel(...) { ... }"
  },
  "Component: didReceiveAttrs() { ... }": {
    "prefix": "didReceiveAttrs",
    "body": "didReceiveAttrs() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didReceiveAttrs() { ... }"
  },
  "Component: didRender() { ... }": {
    "prefix": "didRender",
    "body": "didRender() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didRender() { ... }"
  },
  "Component: didUpdateAttrs() { ... }": {
    "prefix": "didUpdateAttrs",
    "body": "didUpdateAttrs() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didUpdateAttrs() { ... }"
  },
  "Component: willUpdate() { ... }": {
    "prefix": "willUpdate",
    "body": "willUpdate() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: willUpdate() { ... }"
  },
  "Component: didInsertElement() { ... }": {
    "prefix": "didInsertElement",
    "body": "didInsertElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didInsertElement() { ... }"
  },
  "Component: willDestroyElement() { ... }": {
    "prefix": "willDestroyElement",
    "body": "willDestroyElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: willDestroyElement() { ... }"
  },
  "Component: willClearElement() { ... }": {
    "prefix": "willClearElement",
    "body": "willClearElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: willClearElement() { ... }"
  },
  "Component: didDestroyElement() { ... }": {
    "prefix": "didDestroyElement",
    "body": "didDestroyElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didDestroyElement() { ... }"
  }
};
