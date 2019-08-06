module.exports = {
  "[ember-data] Model Skeleton": {
    "prefix": "model",
    "body": "import Model from '@ember-data/model';\n\nexport default Model.extend({\n\t${1:// body}\n});",
    "description": "Model Skeleton"
  },
  "[ember-data] REST Adapter Skeleton": {
    "prefix": "adapter",
    "body": "import RESTAdapter from '@ember-data/adapter/rest';\n\nexport default RESTAdapter.extend({\n\t${1:// body}\n});",
    "description": "REST Adapter Skeleton"
  },
  "[ember-data] JSON API Adapter Skeleton": {
    "prefix": "jsonapi-adapter",
    "body": "import JSONAPIAdapter from '@ember-data/adapter/json-api';\n\nexport default JSONAPIAdapter.extend({\n\t${1:// body}\n});",
    "description": "JSON API Adapter Skeleton"
  },
  "[ember-data] REST Serializer Skeleton": {
    "prefix": "serializer",
    "body": "import RESTSerializer from '@ember-data/serializer/rest';\n\nexport default RESTSerializer.extend({\n\t${1:// body}\n});",
    "description": "REST Serializer Skeleton"
  },
  "[ember-data] JSON API Serializer Skeleton": {
    "prefix": "jsonapi-serializer",
    "body": "import JSONAPISerializer from '@ember-data/serializer/json-api';\n\nexport default JSONAPISerializer.extend({\n\t${1:// body}\n});",
    "description": "JSON API Serializer Skeleton"
  },
  "[ember-data] Transform Serializer Skeleton": {
    "prefix": "transform",
    "body": "import Transform from '@ember-data/serializer/transform';\n\nexport default Transform.extend({\n\t${1:// body}\n});",
    "description": "Transform Serializer Skeleton"
  }
};