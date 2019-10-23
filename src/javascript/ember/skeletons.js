module.exports = {
  "[ember] Route Skeleton": {
    "prefix": "route",
    "body": "import Route from '@ember/routing/route';\n\nexport default Route.extend({\n\t${1:// body}\n});",
    "description": "Route Skeleton"
  },
  "[ember] ES6 Route Skeleton": {
    "prefix": "route",
    "body": "import classic from 'ember-classic-decorator';\nimport Route from '@ember/routing/route';\n\n@classic\nclass ${1}Route extends Route {\n\t${2}\n}\n\nexport default ${1}Route;",
    "description": "ES6 Route Skeleton"
  },
  "[ember] Controller Skeleton": {
    "prefix": "controller",
    "body": "import Controller from '@ember/controller';\n\nexport default Controller.extend({\n\t${1:// body}\n});",
    "description": "Controller Skeleton"
  },
  "[ember] ES6 Controller Skeleton": {
    "prefix": "controller",
    "body": "import classic from 'ember-classic-decorator';\nimport Controller from '@ember/controller';\n\n@classic\nclass ${1}Controller extends Controller {\n\t${2}\n}\n\nexport default ${1}Controller;",
    "description": "ES6 Controller Skeleton"
  },
  "[ember] Service Skeleton": {
    "prefix": "service",
    "body": "import Service from '@ember/service';\n\nexport default Service.extend({\n\t${1:// body}\n});",
    "description": "Service Skeleton"
  },
  "[ember] ES6 Service Skeleton": {
    "prefix": "service",
    "body": "import classic from 'ember-classic-decorator';\nimport Service from '@ember/service';\n\n@classic\nclass ${1}Service extends Service {\n\t${2}\n}\n\nexport default ${1}Service;",
    "description": "ES6 Service Skeleton"
  },
  "[ember] Classic Component Skeleton": {
    "prefix": "component",
    "body": "import Component from '@ember/component';\n\nexport default Component.extend({\n\ttagName: ''\n});",
    "description": "Component Skeleton"
  },
  "[ember] Glimmer Component Skeleton": {
    "prefix": "component",
    "body": "import Component from '@glimmer/component';\n\nclass ${1}Component extends Component {\n\t${2}\n}",
    "description": "Glimmer Component Skeleton"
  },
  "[ember] ES6 Classic Component Skeleton": {
    "prefix": "component",
    "body": "import classic from 'ember-classic-decorator';\nimport Component from '@ember/component';\n\n@classic\nclass ${1}Component extends Component {\n\ttagName = '';\n}\n\nexport default ${1}Component;",
    "description": "ES6 Classic Component Skeleton"
  },
  "[ember] Mixin Skeleton": {
    "prefix": "mixin",
    "body": "import Mixin from '@ember/object/mixin';\n\nexport default Mixin.create({\n\t${1:// body}\n});",
    "description": "Mixin Skeleton"
  },
  "[ember] ES6 Mixin Skeleton": {
    "prefix": "mixin",
    "body": "import classic from 'ember-classic-decorator';\nimport Mixin from '@ember/object/mixin';\n\n@classic\nclass ${1}Mixin extends Mixin {\n\t${2}\n}\n\nexport default ${1}Mixin;",
    "description": "ES6 Mixin Skeleton"
  },
  "[ember] Object Skeleton": {
    "prefix": "object",
    "body": "import EmberObject from '@ember/object';\n\nexport default EmberObject.extend({\n\t${1:// body}\n});",
    "description": "Object Skeleton"
  },
  "[ember] ES6 Object Skeleton": {
    "prefix": "object",
    "body": "import classic from 'ember-classic-decorator';\nimport EmberObject from '@ember/object';\n\n@classic\nclass ${1} extends EmberObject {\n\t${2}\n}\n\nexport default ${1};",
    "description": "ES6 Object Skeleton"
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
  "[ember] ES6 Helper Skeleton": {
    "prefix": "helper",
    "body": "import classic from 'ember-classic-decorator';\nimport Helper from '@ember/component/helper';\n\n@classic\nclass ${1}Helper extends Helper {\n\tcompute() {\n\t\t${2}\n\t}\n}\n\nexport default ${1}Helper;",
    "description": "ES6 Helper Skeleton"
  },
  "[ember] Initializer Skeleton": {
    "prefix": "initializer",
    "body": "export function initialize(application) {\n\t${1}\n}\n\nexport default { initialize };",
    "description": "Initializer Skeleton"
  }
};
