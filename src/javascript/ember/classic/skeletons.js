module.exports = {
  "Route": {
    "prefix": "route",
    "body": "import Route from '@ember/routing/route';\n\nexport default Route.extend({\n\t${1}\n});"
  },
  "Controller": {
    "prefix": "controller",
    "body": "import Controller from '@ember/controller';\n\nexport default Controller.extend({\n\t${1}\n});"
  },
  "Service": {
    "prefix": "service",
    "body": "import Service from '@ember/service';\n\nexport default Service.extend({\n\t${1}\n});"
  },
  "Classic Component": {
    "prefix": "component",
    "body": "import Component from '@ember/component';\n\nexport default Component.extend({\n\ttagName: ''\n});"
  },
  "Mixin": {
    "prefix": "mixin",
    "body": "import Mixin from '@ember/object/mixin';\n\nexport default Mixin.create({\n\t${1}\n});"
  },
  "Object": {
    "prefix": "object",
    "body": "import EmberObject from '@ember/object';\n\nexport default EmberObject.extend({\n\t${1}\n});"
  },
  "Bound Helper": {
    "prefix": "bound-helper",
    "body": "import Ember from 'ember';\n\nexport default Ember.Handlebars.makeBoundHelper(function() {\n\t${1}\n});"
  },
  "Helper": {
    "prefix": "helper",
    "body": "import Helper from '@ember/component/helper';\n\nexport default Helper.extend({\n\tcompute() {\n\t\t${1}\n\t}\n});"
  },
  "Initializer": {
    "prefix": "initializer",
    "body": "export function initialize(application) {\n\t${1}\n}\n\nexport default { initialize };"
  }
};
