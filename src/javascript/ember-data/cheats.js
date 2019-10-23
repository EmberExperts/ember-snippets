module.exports = {
  "findAll(...)": {
    "prefix": "findAll",
    "body": "this.store.findAll('${1:model}');",
    "description": "findAll(...)"
  },
  "findRecord(...)": {
    "prefix": "findRecord",
    "body": "this.store.findRecord('${1:model}', params.${1:model}_id);",
    "description": "findRecord(...)"
  },
  "peekAll(...)": {
    "prefix": "peekAll",
    "body": "this.store.peekAll('${1:model}');",
    "description": "peekAll(...)"
  },
  "peekRecord(...)": {
    "prefix": "peekRecord",
    "body": "this.store.peekRecord('${1:model}', params.${1:model}_id);",
    "description": "peekRecord(...)"
  },
  "query(...)": {
    "prefix": "queryAll",
    "body": "this.store.query('${1:model}', { ${2:queryKey}: ${3:queryValue}});",
    "description": "query(...)"
  },
  "queryRecord(...)": {
    "prefix": "queryRecord",
    "body": "this.store.queryRecord('${1:model}', { ${2:queryKey}: ${3:queryValue}});",
    "description": "queryRecord(...)"
  },
};
