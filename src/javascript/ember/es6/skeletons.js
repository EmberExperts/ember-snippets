module.exports = {
  Route: {
    prefix: "route",
    body: "import classic from 'ember-classic-decorator';\nimport Route from '@ember/routing/route';\n\n@classic\nclass ${1}Route extends Route {\n\t${2}\n}\n\nexport default ${1}Route;",
  },
  Controller: {
    prefix: "controller",
    body: "import classic from 'ember-classic-decorator';\nimport Controller from '@ember/controller';\n\n@classic\nclass ${1}Controller extends Controller {\n\t${2}\n}\n\nexport default ${1}Controller;",
  },
  Service: {
    prefix: "service",
    body: "import classic from 'ember-classic-decorator';\nimport Service from '@ember/service';\n\n@classic\nclass ${1}Service extends Service {\n\t${2}\n}\n\nexport default ${1}Service;",
  },
  "Glimmer Component": {
    prefix: "component",
    body: "import Component from '@glimmer/component';\n\nexport default class ${1}Component extends Component {\n\t${2}\n}",
  },
  "Classic Component": {
    prefix: "component",
    body: "import classic from 'ember-classic-decorator';\nimport Component from '@ember/component';\n\n@classic\nclass ${1}Component extends Component {\n\ttagName = '';\n}\n\nexport default ${1}Component;",
  },
  Mixin: {
    prefix: "mixin",
    body: "import classic from 'ember-classic-decorator';\nimport Mixin from '@ember/object/mixin';\n\n@classic\nclass ${1}Mixin extends Mixin {\n\t${2}\n}\n\nexport default ${1}Mixin;",
  },
  Object: {
    prefix: "object",
    body: "import classic from 'ember-classic-decorator';\nimport EmberObject from '@ember/object';\n\n@classic\nclass ${1} extends EmberObject {\n\t${2}\n}\n\nexport default ${1};",
  },
  Helper: {
    prefix: "helper",
    body: "import classic from 'ember-classic-decorator';\nimport Helper from '@ember/component/helper';\n\n@classic\nclass ${1}Helper extends Helper {\n\tcompute() {\n\t\t${2}\n\t}\n}\n\nexport default ${1}Helper;",
  },
};
