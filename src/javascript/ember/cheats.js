module.exports = {
  "run(() => { ... })": {
    "prefix": "run",
    "leftLabel": "Ember",
    "body": "run(() => {\n\t${1}\n});",
    "description": "run(() => { ... })"
  },
  "let ... get(...)": {
    "prefix": "lget",
    "leftLabel": "Ember",
    "body": "let $1 = ${2:this}.get('$1');",
    "description": "let ... get(...)"
  },
  ".set(...)": {
    "prefix": "set",
    "leftLabel": "Ember",
    "body": "${1:this}.set('${2}', ${3});",
    "description": ".set(...)"
  },
  ".get(...)": {
    "prefix": "get",
    "leftLabel": "Ember",
    "body": "${1:this}.get('${2}');",
    "description": ".get(...)"
  },
  "this._super(...)": {
    "prefix": "super",
    "leftLabel": "Ember",
    "body": "this._super(...arguments);",
    "description": "this._super(...)"
  },
  "init() { ... }": {
    "prefix": "init",
    "leftLabel": "Ember",
    "body": "init() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "init() { ... }"
  },
  "service(...)": {
    "prefix": "service",
    "leftLabel": "Ember",
    "body": "service(${1}),",
    "description": "service(...)"
  },
  "observer(...)": {
    "prefix": "observer",
    "leftLabel": "Ember",
    "body": "observer('${1:property}', function() {\n\t${2:// body}\n}),",
    "description": "observer(...)"
  },
  "on(...)": {
    "prefix": "on",
    "leftLabel": "Ember",
    "body": "on('${1:property}', function() {\n\t${2:// body}\n}),",
    "description": "on(...)"
  },
  "actions: { ... }": {
    "prefix": "actions",
    "leftLabel": "Ember",
    "body": "actions: {\n\t${1:// body}\n}",
    "description": "actions: { ... }"
  },
  "computed(...)": {
    "prefix": "computed",
    "leftLabel": "Ember",
    "body": "computed('${1:property}', function() {\n\t${2:// body}\n}),",
    "description": "computed(...)"
  },
  "alias(...)": {
    "prefix": "calias",
    "leftLabel": "Ember Computed",
    "body": "alias('${1:key}');",
    "description": "alias(...)"
  },
  "and(...)": {
    "prefix": "cand",
    "leftLabel": "Ember Computed",
    "body": "and('${1:key1}', '${2:key2}');",
    "description": "and(...)"
  },
  "bool(...)": {
    "prefix": "cbool",
    "leftLabel": "Ember Computed",
    "body": "bool(${1:key});",
    "description": "bool(...)"
  },
  "collect(...)": {
    "prefix": "ccollect",
    "leftLabel": "Ember Computed",
    "body": "collect(${1:keys});",
    "description": "collect(...)"
  },
  "empty(...)": {
    "prefix": "cempty",
    "leftLabel": "Ember Computed",
    "body": "empty('${1:key}');",
    "description": "empty(...)"
  },
  "equal(...)": {
    "prefix": "cequal",
    "leftLabel": "Ember Computed",
    "body": "equal('${1:key}', ${2:value});",
    "description": "equal(...)"
  },
  "filter(...)": {
    "prefix": "cfilter",
    "leftLabel": "Ember Computed",
    "body": "filter(${1:key}, function(${2:item}${3:, index}) {\n  return ${2:item};\n}));",
    "description": "filter(...)"
  },
  "filterBy(...)": {
    "prefix": "cfilterBy",
    "leftLabel": "Ember Computed",
    "body": "filterBy('${1:key}', ${2:propertyKey}, ${3:value});",
    "description": "filterBy(...)"
  },
  "gt(...)": {
    "prefix": "cgt",
    "leftLabel": "Ember Computed",
    "body": "gt('${1:key}', ${2:value});",
    "description": "gt(...)"
  },
  "gte(...)": {
    "prefix": "cgte",
    "leftLabel": "Ember Computed",
    "body": "gte('${1:key}', ${2:value});",
    "description": "gte(...)"
  },
  "intersect(...)": {
    "prefix": "intersect",
    "leftLabel": "Ember Computed",
    "body": "intersect('${1:key1}', '${2:key2}');",
    "description": "intersect(...)"
  },
  "lt(...)": {
    "prefix": "clt",
    "leftLabel": "Ember Computed",
    "body": "lt('${1:key}', ${2:value});",
    "description": "lt(...)"
  },
  "lte(...)": {
    "prefix": "clte",
    "leftLabel": "Ember Computed",
    "body": "lte('${1:key}', ${2:value});",
    "description": "lte(...)"
  },
  "map(...)": {
    "prefix": "cmap",
    "leftLabel": "Ember Computed",
    "body": "map(${1:key}, function(${2:item}${3:, index}) {\n  return ${2:item};\n}));",
    "description": "map(...)"
  },
  "mapBy(...)": {
    "prefix": "cmapBy",
    "leftLabel": "Ember Computed",
    "body": "mapBy('${1:key}', '${2:propertyKey}');",
    "description": "mapBy(...)"
  },
  "match(...)": {
    "prefix": "cmatch",
    "leftLabel": "Ember Computed",
    "body": "match('${1:key}', ${2:regEx});",
    "description": "match(...)"
  },
  "max(...)": {
    "prefix": "cmax",
    "leftLabel": "Ember Computed",
    "body": "max('${1:key}');",
    "description": "max(...)"
  },
  "min(...)": {
    "prefix": "cmin",
    "leftLabel": "Ember Computed",
    "body": "min('${1:key}');",
    "description": "min(...)"
  },
  "none(...)": {
    "prefix": "cnone",
    "leftLabel": "Ember Computed",
    "body": "none('${1:key}');",
    "description": "none(...)"
  },
  "not(...)": {
    "prefix": "cnot",
    "leftLabel": "Ember Computed",
    "body": "not('${1:key}');",
    "description": "not(...)"
  },
  "notEmpty(...)": {
    "prefix": "cnotEmpty",
    "leftLabel": "Ember Computed",
    "body": "notEmpty('${1:key}');",
    "description": "notEmpty(...)"
  },
  "oneWay(...)": {
    "prefix": "coneWay",
    "leftLabel": "Ember Computed",
    "body": "oneWay('${1:key}');",
    "description": "oneWay(...)"
  },
  "or(...)": {
    "prefix": "cor",
    "leftLabel": "Ember Computed",
    "body": "or('${1:key1}', '${2:key2}');",
    "description": "or(...)"
  },
  "readOnly(...)": {
    "prefix": "creadOnly",
    "leftLabel": "Ember Computed",
    "body": "readOnly('${1:key}');",
    "description": "readOnly(...)"
  },
  "reads(...)": {
    "prefix": "creads",
    "leftLabel": "Ember Computed",
    "body": "reads('${1:key}');",
    "description": "reads(...)"
  },
  "setDiff(...)": {
    "prefix": "csetDiff",
    "leftLabel": "Ember Computed",
    "body": "setDiff('${1:key1}', '${2:key2}');",
    "description": "setDiff(...)"
  },
  "sort(...)": {
    "prefix": "csort",
    "leftLabel": "Ember Computed",
    "body": "sort('${1:itemsKey}', '${2:sortDefinition}');",
    "description": "sort(...)"
  },
  "sum(...)": {
    "prefix": "csum",
    "leftLabel": "Ember Computed",
    "body": "sum('${1:key}');",
    "description": "sum(...)"
  },
  "union(...)": {
    "prefix": "cunion",
    "leftLabel": "Ember Computed",
    "body": "union('${1:key1}', '${2:key2}');",
    "description": "union(...)"
  },
  "uniq(...)": {
    "prefix": "cuniq",
    "leftLabel": "Ember Computed",
    "body": "uniq('${1:key}', '${2:propertyKey}');",
    "description": "uniq(...)"
  },
  "uniqBy(...)": {
    "prefix": "cuniqBy",
    "leftLabel": "Ember Computed",
    "body": "uniqBy('${1:key}');",
    "description": "uniqBy(...)"
  },
  "bind(...)": {
    "prefix": "bind",
    "leftLabel": "Ember",
    "body": "bind(${1:this}, ${2:this.methodName});",
    "description": "bind(...)"
  },
  "cancel(...)": {
    "prefix": "cancel",
    "leftLabel": "Ember",
    "body": "cancel('${1:key}');",
    "description": "cancel(...)"
  },
  "debounce(...)": {
    "prefix": "debounce",
    "leftLabel": "Ember",
    "body": "debounce(${1:this}, '${2:methodName}', ${3:500});",
    "description": "debounce(...)"
  },
  "later(...)": {
    "prefix": "later",
    "leftLabel": "Ember",
    "body": "later(${1:this}, () => { ${2}\\}, ${3:500});",
    "description": "later(...)"
  },
  "next(...)": {
    "prefix": "next",
    "leftLabel": "Ember",
    "body": "next(${1:this}, () => { ${2}\\});",
    "description": "next(...)"
  },
  "once(...)": {
    "prefix": "once",
    "leftLabel": "Ember",
    "body": "once(${1:this}, () => { ${2}\\});",
    "description": "once(...)"
  },
  "run(...)": {
    "prefix": "run",
    "leftLabel": "Ember",
    "body": "run(() => { ${1}\\});",
    "description": "run(...)"
  },
  "schedule(...)": {
    "prefix": "schedule",
    "leftLabel": "Ember",
    "body": "schedule('${1:queue}', ${2:this}, () => { ${3}\\}, );",
    "description": "schedule(...)"
  },
  "scheduleOnce(...)": {
    "prefix": "scheduleOnce",
    "leftLabel": "Ember",
    "body": "scheduleOnce('${1:queue}', ${2:this}, () => { ${3}\\}, );",
    "description": "scheduleOnce(...)"
  },
  "throttle(...)": {
    "prefix": "throttle",
    "leftLabel": "Ember",
    "body": "throttle(${1:this}, '${2:methodName}', ${3:500});",
    "description": "throttle(...)"
  },
  "Route: model(...) { ... }": {
    "prefix": "model",
    "leftLabel": "Ember",
    "body": "model(params = {}) {\n\treturn this.store.query('${1}', params);\n},",
    "description": "Route: model(...) { ... }"
  },
  "Route: setupController(...) { ... }": {
    "prefix": "setupController",
    "leftLabel": "Ember",
    "body": "setupController(controller, model) {\n\tthis._super(controller, model);\n\t${1}\n},\n",
    "description": "Route: setupController(...) { ... }"
  },
  "Route: beforeModel(...) { ... }": {
    "prefix": "beforeModel",
    "leftLabel": "Ember",
    "body": "beforeModel(transition) {\n\tthis._super(controller, model);\n\t${1}\n},\n",
    "description": "Route: beforeModel(...) { ... }"
  },
  "Route: afterModel(...) { ... }": {
    "prefix": "afterModel",
    "leftLabel": "Ember",
    "body": "afterModel(model, transition) {\n\tthis._super(controller, model);\n\t${1}\n},\n",
    "description": "Route: afterModel(...) { ... }"
  },
  "Component: didReceiveAttrs() { ... }": {
    "prefix": "didReceiveAttrs",
    "leftLabel": "Ember",
    "body": "didReceiveAttrs() {\n\tthis._super(...arguments);\n\t${1}\n},\n",
    "description": "Component: didReceiveAttrs() { ... }"
  },
  "Component: didRender() { ... }": {
    "prefix": "didRender",
    "leftLabel": "Ember",
    "body": "didRender() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didRender() { ... }"
  },
  "Component: didUpdateAttrs() { ... }": {
    "prefix": "didUpdateAttrs",
    "leftLabel": "Ember",
    "body": "didUpdateAttrs() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didUpdateAttrs() { ... }"
  },
  "Component: willUpdate() { ... }": {
    "prefix": "willUpdate",
    "leftLabel": "Ember",
    "body": "willUpdate() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: willUpdate() { ... }"
  },
  "Component: didInsertElement() { ... }": {
    "prefix": "didInsertElement",
    "leftLabel": "Ember",
    "body": "didInsertElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didInsertElement() { ... }"
  },
  "Component: willDestroyElement() { ... }": {
    "prefix": "willDestroyElement",
    "leftLabel": "Ember",
    "body": "willDestroyElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: willDestroyElement() { ... }"
  },
  "Component: willClearElement() { ... }": {
    "prefix": "willClearElement",
    "leftLabel": "Ember",
    "body": "willClearElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: willClearElement() { ... }"
  },
  "Component: didDestroyElement() { ... }": {
    "prefix": "didDestroyElement",
    "leftLabel": "Ember",
    "body": "didDestroyElement() {\n\tthis._super(...arguments);\n\t${1}\n},",
    "description": "Component: didDestroyElement() { ... }"
  },
  ".filterBy(...)": {
    "prefix": "filterBy",
    "leftLabel": "Ember Enumerable",
    "body": "${1:enumerable}.filterBy('${2:property}', ${3:value});",
    "description": ".filterBy(...)"
  },
  ".mapBy(...)": {
    "prefix": "mapBy",
    "leftLabel": "Ember Enumerable",
    "body": "${1:enumerable}.mapBy('${2:property}');",
    "description": ".mapBy(...)"
  },
  ".every(...)": {
    "prefix": "every",
    "leftLabel": "Ember Enumerable",
    "body": "${1:enumerable}.every(function(${2:item}) {\n\t${3}\n});",
    "description": ".every(...)"
  },
  ".isEvery(...)": {
    "prefix": "is-every",
    "leftLabel": "Ember Enumerable",
    "body": "${1:enumerable}.isEvery('${2:property}', ${3:bool});",
    "description": ".isEvery(...)"
  },
  ".some(...)": {
    "prefix": "some",
    "leftLabel": "Ember Enumerable",
    "body": "${1:enumerable}.some(function(${2:item}) {\n\t${3}\n});",
    "description": ".some(...)"
  },
  ".isAny(...)": {
    "prefix": "is-any",
    "leftLabel": "Ember Enumerable",
    "body": "${1:enumerable}.isAny('${2:property}', ${3:bool});",
    "description": ".isAny(...)"
  },
  ".toArray(...)": {
    "prefix": "to-array",
    "leftLabel": "Ember Enumerable",
    "body": "${1:enumerable}.toArray();",
    "description": ".toArray(...)"
  },
  ".get('firstObject')": {
    "prefix": "first-object",
    "leftLabel": "Ember Enumerable",
    "body": "${1:enumerable}.get('firstObject');",
    "description": ".get('firstObject')"
  },
  ".get('lastObject')": {
    "prefix": "last-object",
    "leftLabel": "Ember Enumerable",
    "body": "${1:enumerable}.get('lastObject');",
    "description": ".get('lastObject')"
  }
};
