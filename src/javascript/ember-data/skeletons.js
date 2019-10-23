module.exports = {
  "Model Skeleton": {
    "prefix": "model",
    "body": "import Model from '@ember-data/model';\n\nexport default Model.extend({\n\t${1:// body}\n});",
    "description": "Model Skeleton"
  },
  "ES6 Model Skeleton": {
    "prefix": "model",
    "body": "import classic from 'ember-classic-decorator';\nimport Model from '@ember-data/model';\n\n@classic\nclass ${1}Model extends Model {\n\t${2}\n}\n\nexport default ${1}Model;",
    "description": "ES6 Model Skeleton"
  },
  "Adapter Skeleton": {
    "prefix": "adapter",
    "body": "import Adapter from '@ember-data/adapter';\n\nexport default Adapter.extend({\n\t${1:// body}\n});",
    "description": "Adapter Skeleton"
  },
  "ES6 Adapter Skeleton": {
    "prefix": "adapter",
    "body": "import classic from 'ember-classic-decorator';\nimport Adapter from '@ember-data/adapter';\n\n@classic\nclass ${1}Adapter extends Adapter {\n\t${2}\n}\n\nexport default ${1}Adapter;",
    "description": "ES6 Adapter Skeleton"
  },
  "REST Adapter Skeleton": {
    "prefix": "restAdapter",
    "body": "import RESTAdapter from '@ember-data/adapter/rest';\n\nexport default RESTAdapter.extend({\n\t${1:// body}\n});",
    "description": "REST Adapter Skeleton"
  },
  "ES6 REST Adapter Skeleton": {
    "prefix": "restAdapter",
    "body": "import classic from 'ember-classic-decorator';\nimport RESTAdapter from '@ember-data/adapter/rest';\n\n@classic\nclass ${1}RESTAdapter extends RESTAdapter {\n\t${2}\n}\n\nexport default ${1}RESTAdapter;",
    "description": "ES6 REST Adapter Skeleton"
  },
  "JSON API Adapter Skeleton": {
    "prefix": "jsonapiAdapter",
    "body": "import JSONAPIAdapter from '@ember-data/adapter/json-api';\n\nexport default JSONAPIAdapter.extend({\n\t${1:// body}\n});",
    "description": "JSON API Adapter Skeleton"
  },
  "ES6 JSON API Adapter Skeleton": {
    "prefix": "jsonapiAdapter",
    "body": "import classic from 'ember-classic-decorator';\nimport JSONAPIAdapter from '@ember-data/adapter/json-api';\n\n@classic\nclass ${1}JSONAPIAdapter extends JSONAPIAdapter {\n\t${2}\n}\n\nexport default ${1}JSONAPIAdapter;",
    "description": "ES6 JSON API Adapter Skeleton"
  },
  "Serializer Skeleton": {
    "prefix": "serializer",
    "body": "import Serializer from '@ember-data/serializer';\n\nexport default Serializer.extend({\n\t${1:// body}\n});",
    "description": "Serializer Skeleton"
  },
  "ES6 Serializer Skeleton": {
    "prefix": "serializer",
    "body": "import classic from 'ember-classic-decorator';\nimport Serializer from '@ember-data/serializer';\n\n@classic\nclass ${1}Serializer extends Serializer {\n\t${2}\n}\n\nexport default ${1}Serializer;",
    "description": "ES6 Serializer Skeleton"
  },
  "REST Serializer Skeleton": {
    "prefix": "restSerializer",
    "body": "import RESTSerializer from '@ember-data/serializer/rest';\n\nexport default RESTSerializer.extend({\n\t${1:// body}\n});",
    "description": "REST Serializer Skeleton"
  },
  "ES6 REST Serializer Skeleton": {
    "prefix": "restSerializer",
    "body": "import classic from 'ember-classic-decorator';\nimport RESTSerializer from '@ember-data/serializer/rest';\n\n@classic\nclass ${1}RESTSerializer extends RESTSerializer {\n\t${2}\n}\n\nexport default ${1}RESTSerializer;",
    "description": "ES6 REST Serializer Skeleton"
  },
  "JSON API Serializer Skeleton": {
    "prefix": "jsonapiSerializer",
    "body": "import JSONAPISerializer from '@ember-data/serializer/json-api';\n\nexport default JSONAPISerializer.extend({\n\t${1:// body}\n});",
    "description": "JSON API Serializer Skeleton"
  },
  "ES6 JSON API Serializer Skeleton": {
    "prefix": "jsonapiSerializer",
    "body": "import classic from 'ember-classic-decorator';\nimport JSONAPISerializer from '@ember-data/serializer/json-api';\n\n@classic\nclass ${1}JSONAPISerializer extends JSONAPISerializer {\n\t${2}\n}\n\nexport default ${1}JSONAPISerializer;",
    "description": "ES6 JSON API Serializer Skeleton"
  },
  "Transform Serializer Skeleton": {
    "prefix": "transform",
    "body": "import Transform from '@ember-data/serializer/transform';\n\nexport default Transform.extend({\n\t${1:// body}\n});",
    "description": "Transform Serializer Skeleton"
  },
  "ES6 Transform Serializer Skeleton": {
    "prefix": "transform",
    "body": "import classic from 'ember-classic-decorator';\nimport Transform from '@ember-data/serializer/transform';\n\n@classic\nclass ${1}Transform extends Transform {\n\t${2}\n}\n\nexport default ${1}Transform;",
    "description": "ES6 Transform Serializer Skeleton"
  }
};