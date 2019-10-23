# javascript - ember
## Table of Contents
- [Route Skeleton](#route-skeleton)
- [ES6 Route Skeleton](#es6-route-skeleton)
- [Controller Skeleton](#controller-skeleton)
- [ES6 Controller Skeleton](#es6-controller-skeleton)
- [Service Skeleton](#service-skeleton)
- [ES6 Service Skeleton](#es6-service-skeleton)
- [Classic Component Skeleton](#classic-component-skeleton)
- [Glimmer Component Skeleton](#glimmer-component-skeleton)
- [ES6 Classic Component Skeleton](#es6-classic-component-skeleton)
- [Mixin Skeleton](#mixin-skeleton)
- [ES6 Mixin Skeleton](#es6-mixin-skeleton)
- [Object Skeleton](#object-skeleton)
- [ES6 Object Skeleton](#es6-object-skeleton)
- [Bound Helper Skeleton](#bound-helper-skeleton)
- [Helper Skeleton](#helper-skeleton)
- [ES6 Helper Skeleton](#es6-helper-skeleton)
- [Initializer Skeleton](#initializer-skeleton)
## Snippets
### `Route Skeleton`
**Prefix:** `route`

**Description**:
```
Route Skeleton
```
**Generated code**:
```js
import Route from '@ember/routing/route';

export default Route.extend({
  
});
```
### `ES6 Route Skeleton`
**Prefix:** `route`

**Description**:
```
ES6 Route Skeleton
```
**Generated code**:
```js
import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
class Route extends Route {
  
}

export default Route;
```
### `Controller Skeleton`
**Prefix:** `controller`

**Description**:
```
Controller Skeleton
```
**Generated code**:
```js
import Controller from '@ember/controller';

export default Controller.extend({
  
});
```
### `ES6 Controller Skeleton`
**Prefix:** `controller`

**Description**:
```
ES6 Controller Skeleton
```
**Generated code**:
```js
import classic from 'ember-classic-decorator';
import Controller from '@ember/controller';

@classic
class Controller extends Controller {
  
}

export default Controller;
```
### `Service Skeleton`
**Prefix:** `service`

**Description**:
```
Service Skeleton
```
**Generated code**:
```js
import Service from '@ember/service';

export default Service.extend({
  
});
```
### `ES6 Service Skeleton`
**Prefix:** `service`

**Description**:
```
ES6 Service Skeleton
```
**Generated code**:
```js
import classic from 'ember-classic-decorator';
import Service from '@ember/service';

@classic
class Service extends Service {
  
}

export default Service;
```
### `Classic Component Skeleton`
**Prefix:** `component`

**Description**:
```
Component Skeleton
```
**Generated code**:
```js
import Component from '@ember/component';

export default Component.extend({
  tagName: ''
});
```
### `Glimmer Component Skeleton`
**Prefix:** `component`

**Description**:
```
Glimmer Component Skeleton
```
**Generated code**:
```js
import Component from '@glimmer/component';

class Component extends Component {
  
}
```
### `ES6 Classic Component Skeleton`
**Prefix:** `component`

**Description**:
```
ES6 Classic Component Skeleton
```
**Generated code**:
```js
import classic from 'ember-classic-decorator';
import Component from '@ember/component';

@classic
class Component extends Component {
  tagName = '';
}

export default Component;
```
### `Mixin Skeleton`
**Prefix:** `mixin`

**Description**:
```
Mixin Skeleton
```
**Generated code**:
```js
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  
});
```
### `ES6 Mixin Skeleton`
**Prefix:** `mixin`

**Description**:
```
ES6 Mixin Skeleton
```
**Generated code**:
```js
import classic from 'ember-classic-decorator';
import Mixin from '@ember/object/mixin';

@classic
class Mixin extends Mixin {
  
}

export default Mixin;
```
### `Object Skeleton`
**Prefix:** `object`

**Description**:
```
Object Skeleton
```
**Generated code**:
```js
import EmberObject from '@ember/object';

export default EmberObject.extend({
  
});
```
### `ES6 Object Skeleton`
**Prefix:** `object`

**Description**:
```
ES6 Object Skeleton
```
**Generated code**:
```js
import classic from 'ember-classic-decorator';
import EmberObject from '@ember/object';

@classic
class  extends EmberObject {
  
}

export default ;
```
### `Bound Helper Skeleton`
**Prefix:** `bound-helper`

**Description**:
```
Bound Helper Skeleton
```
**Generated code**:
```js
import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function() {
  
});
```
### `Helper Skeleton`
**Prefix:** `helper`

**Description**:
```
Helper Skeleton
```
**Generated code**:
```js
import Helper from '@ember/component/helper';

export default Helper.extend({
  compute() {
    
  }
});
```
### `ES6 Helper Skeleton`
**Prefix:** `helper`

**Description**:
```
ES6 Helper Skeleton
```
**Generated code**:
```js
import classic from 'ember-classic-decorator';
import Helper from '@ember/component/helper';

@classic
class Helper extends Helper {
  compute() {
    
  }
}

export default Helper;
```
### `Initializer Skeleton`
**Prefix:** `initializer`

**Description**:
```
Initializer Skeleton
```
**Generated code**:
```js
export function initialize(application) {
  
}

export default { initialize };
```