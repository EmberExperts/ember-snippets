module.exports = {
  "[ember] Route Skeleton": {
    "prefix": "route",
    "body": "import Route from '@ember/routing/route';\n\nexport default Route.extend({\n\t${1:// body}\n});",
    "description": "Route Skeleton"
  },
  "[ember] Controller Skeleton": {
    "prefix": "controller",
    "body": "import Controller from '@ember/controller';\n\nexport default Controller.extend({\n\t${1:// body}\n});",
    "description": "Controller Skeleton"
  },
  "[ember] Service Skeleton": {
    "prefix": "service",
    "body": "import Service from '@ember/service';\n\nexport default Service.extend({\n\t${1:// body}\n});",
    "description": "Service Skeleton"
  },
  "[ember] Component Skeleton": {
    "prefix": "component",
    "body": "import Component from '@ember/component';\n\nexport default Component.extend({\n\t${1:// body}\n});",
    "description": "Component Skeleton"
  },
  "[ember] Mixin Skeleton": {
    "prefix": "mixin",
    "body": "import Mixin from '@ember/object/mixin';\n\nexport default Mixin.create({\n\t${1:// body}\n});",
    "description": "Mixin Skeleton"
  },
  "[ember] Object Skeleton": {
    "prefix": "object",
    "body": "import EmberObject from '@ember/object';\n\nexport default EmberObject.extend({\n\t${1:// body}\n});",
    "description": "Object Skeleton"
  },
  "[ember] Bound Helper Skeleton": {
    "prefix": "bound-helper",
    "body": "import Ember from 'ember';\n\nexport default Ember.Handlebars.makeBoundHelper(function() {\n\t${1:// body}\n});",
    "description": "Bound Helper Skeleton"
  },
  "[ember] Helper Skeleton": {
    "prefix": "helper",
    "body": "import Helper from '@ember/component/helper';\n\nexport default Helper.extend({\n\tcompute() {\n\t\t${1:// body}\n\t}\n});",
    "description": "Helper Skeleton"
  },
  "[ember] Initializer Skeleton": {
    "prefix": "initializer",
    "body": "export function initialize(application) {\n\t${1}\n}\n\nexport default { initialize };",
    "description": "Initializer Skeleton"
  }
};
