module.exports = {
  "store.findAll(...)": {
    "prefix": "find-all",
    "leftLabel": "Ember Data",
    "body": "this.store.findAll('${1:model}');",
    "description": "store.findAll(...)"
  },
  "store.findRecord(...)": {
    "prefix": "find-record",
    "leftLabel": "Ember Data",
    "body": "this.store.findRecord('${1:model}', params.${1:model}_id);",
    "description": "store.findRecord(...)"
  },
  "store.peekAll(...)": {
    "prefix": "peek-all",
    "leftLabel": "Ember Data",
    "body": "this.store.peekAll('${1:model}');",
    "description": "store.peekAll(...)"
  },
  "store.peekRecord(...)": {
    "prefix": "peek-record",
    "leftLabel": "Ember Data",
    "body": "this.store.peekRecord('${1:model}', params.${1:model}_id);",
    "description": "store.peekRecord(...)"
  },
  "store.query(...)": {
    "prefix": "query-all",
    "leftLabel": "Ember Data",
    "body": "this.store.query('${1:model}', { ${2:queryKey}: ${3:queryValue}});",
    "description": "store.query(...)"
  },
  "store.queryRecord(...)": {
    "prefix": "query-record",
    "leftLabel": "Ember Data",
    "body": "this.store.queryRecord('${1:model}', { ${2:queryKey}: ${3:queryValue}});",
    "description": "store.queryRecord(...)"
  },
  "attr(...)": {
    "prefix": "attr",
    "leftLabel": "Ember Data",
    "body": "attr('${1:string}'),",
    "description": "attr(...)"
  },
  "belongsTo(...)": {
    "prefix": "belongsTo",
    "leftLabel": "Ember Data",
    "body": "belongsTo('${1:name}'),",
    "description": "belongsTo(...)"
  },
  "hasMany(...)": {
    "prefix": "hasMany",
    "leftLabel": "Ember Data",
    "body": "hasMany('${1:string}'),",
    "description": "hasMany(...)"
  }
};
