module.exports = {
  "[ember-data] findAll(...)": {
    "prefix": "findAll",
    "body": "this.store.findAll('${1:model}');",
    "description": "[ember-data] findAll(...)"
  },
  "[ember-data] findRecord(...)": {
    "prefix": "findRecord",
    "body": "this.store.findRecord('${1:model}', params.${1:model}_id);",
    "description": "[ember-data] findRecord(...)"
  },
  "[ember-data] peekAll(...)": {
    "prefix": "peekAll",
    "body": "this.store.peekAll('${1:model}');",
    "description": "[ember-data] peekAll(...)"
  },
  "[ember-data] peekRecord(...)": {
    "prefix": "peekRecord",
    "body": "this.store.peekRecord('${1:model}', params.${1:model}_id);",
    "description": "[ember-data] peekRecord(...)"
  },
  "[ember-data] query(...)": {
    "prefix": "queryAll",
    "body": "this.store.query('${1:model}', { ${2:queryKey}: ${3:queryValue}});",
    "description": "[ember-data] query(...)"
  },
  "[ember-data] queryRecord(...)": {
    "prefix": "queryRecord",
    "body": "this.store.queryRecord('${1:model}', { ${2:queryKey}: ${3:queryValue}});",
    "description": "[ember-data] queryRecord(...)"
  },
};
