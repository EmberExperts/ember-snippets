module.exports = {
  "[ember-data] findAll(...)": {
    "prefix": "find-all",

    "body": "this.store.findAll('${1:model}');",
    "description": "[ember-data] findAll(...)"
  },
  "[ember-data] findRecord(...)": {
    "prefix": "find-record",

    "body": "this.store.findRecord('${1:model}', params.${1:model}_id);",
    "description": "[ember-data] findRecord(...)"
  },
  "[ember-data] peekAll(...)": {
    "prefix": "peek-all",

    "body": "this.store.peekAll('${1:model}');",
    "description": "[ember-data] peekAll(...)"
  },
  "[ember-data] peekRecord(...)": {
    "prefix": "peek-record",

    "body": "this.store.peekRecord('${1:model}', params.${1:model}_id);",
    "description": "[ember-data] peekRecord(...)"
  },
  "[ember-data] query(...)": {
    "prefix": "query-all",

    "body": "this.store.query('${1:model}', { ${2:queryKey}: ${3:queryValue}});",
    "description": "[ember-data] query(...)"
  },
  "[ember-data] queryRecord(...)": {
    "prefix": "query-record",

    "body": "this.store.queryRecord('${1:model}', { ${2:queryKey}: ${3:queryValue}});",
    "description": "[ember-data] queryRecord(...)"
  },
};
