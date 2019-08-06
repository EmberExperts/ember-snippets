module.exports = {
  "Ember.$": {
    "prefix": "im$",
    
    "body": "import $ from 'jquery';",
    "description": "Ember.$"
  },
  "Ember.Enumerable": {
    "prefix": "imenum",
    
    "body": "import Enumerable from '@ember/enumerable';",
    "description": "Ember.Enumerable"
  },
  "Ember.Error": {
    "prefix": "imerr",
    
    "body": "import EmberError from '@ember/error';",
    "description": "Ember.Error"
  },
  "Ember.instrument": {
    "prefix": "iminstrument",
    
    "body": "import { instrument } from '@ember/instrumentation';",
    "description": "Ember.instrument"
  },
  "Ember.reset": {
    "prefix": "imreset",
    
    "body": "import { reset } from '@ember/instrumentation';",
    "description": "Ember.reset"
  },
  "Ember.subscribe": {
    "prefix": "imsubscribe",
    
    "body": "import { subscribe } from '@ember/instrumentation';",
    "description": "Ember.subscribe"
  },
  "Ember.unsubscribe": {
    "prefix": "imunsubscribe",
    
    "body": "import { unsubscribe } from '@ember/instrumentation';",
    "description": "Ember.unsubscribe"
  }
};
