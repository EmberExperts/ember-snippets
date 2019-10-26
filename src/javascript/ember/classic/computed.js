module.exports = {
  "alias()": {
    "prefix": "alias",
    "body": "alias('${1:key}');"
  },
  "and()": {
    "prefix": "and",
    "body": "and('${1:key1}', '${2:key2}');"
  },
  "bool()": {
    "prefix": "bool",
    "body": "bool(${1:key});"
  },
  "collect()": {
    "prefix": "collect",
    "body": "collect(${1:keys});"
  },
  "empty()": {
    "prefix": "empty",
    "body": "empty('${1:key}');"
  },
  "equal()": {
    "prefix": "equal",
    "body": "equal('${1:key}', ${2:value});"
  },
  "filter()": {
    "prefix": "filter",
    "body": "filter(${1:key}, function(${2:item}${3:, index}) {\n  return ${2:item};\n}));"
  },
  "filterBy()": {
    "prefix": "filterBy",
    "body": "filterBy('${1:key}', ${2:propertyKey}, ${3:value});"
  },
  "gt()": {
    "prefix": "gt",
    "body": "gt('${1:key}', ${2:value});"
  },
  "gte()": {
    "prefix": "gte",
    "body": "gte('${1:key}', ${2:value});"
  },
  "intersect()": {
    "prefix": "intersect",
    "body": "intersect('${1:key1}', '${2:key2}');"
  },
  "lt()": {
    "prefix": "lt",
    "body": "lt('${1:key}', ${2:value});"
  },
  "lte()": {
    "prefix": "lte",
    "body": "lte('${1:key}', ${2:value});"
  },
  "map()": {
    "prefix": "map",
    "body": "map(${1:key}, function(${2:item}${3:, index}) {\n  return ${2:item};\n}));"
  },
  "mapBy()": {
    "prefix": "mapBy",
    "body": "mapBy('${1:key}', '${2:propertyKey}');"
  },
  "match()": {
    "prefix": "match",
    "body": "match('${1:key}', ${2:regEx});"
  },
  "max()": {
    "prefix": "max",
    "body": "max('${1:key}');"
  },
  "min()": {
    "prefix": "min",
    "body": "min('${1:key}');"
  },
  "none()": {
    "prefix": "none",
    "body": "none('${1:key}');"
  },
  "not()": {
    "prefix": "not",
    "body": "not('${1:key}');"
  },
  "notEmpty()": {
    "prefix": "notEmpty",
    "body": "notEmpty('${1:key}');"
  },
  "oneWay()": {
    "prefix": "oneWay",
    "body": "oneWay('${1:key}');"
  },
  "or()": {
    "prefix": "or",
    "body": "or('${1:key1}', '${2:key2}');"
  },
  "readOnly()": {
    "prefix": "readOnly",
    "body": "readOnly('${1:key}');"
  },
  "reads()": {
    "prefix": "reads",
    "body": "reads('${1:key}');"
  },
  "setDiff()": {
    "prefix": "setDiff",
    "body": "setDiff('${1:key1}', '${2:key2}');"
  },
  "sort()": {
    "prefix": "sort",
    "body": "sort('${1:itemsKey}', '${2:sortDefinition}');"
  },
  "sum()": {
    "prefix": "sum",
    "body": "sum('${1:key}');"
  },
  "union()": {
    "prefix": "union",
    "body": "union('${1:key1}', '${2:key2}');"
  },
  "uniq()": {
    "prefix": "uniq",
    "body": "uniq('${1:key}', '${2:propertyKey}');"
  },
  "uniqBy()": {
    "prefix": "uniqBy",
    "body": "uniqBy('${1:key}');"
  }
};