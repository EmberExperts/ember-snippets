# javascript - ember/es6 - skeletons
## Table of Contents
- [Route](#route)
- [Controller](#controller)
- [Service](#service)
- [Glimmer Component](#glimmer-component)
- [Classic Component](#classic-component)
- [Mixin](#mixin)
- [Object](#object)
- [Helper](#helper)
## Snippets
### `Route`
**Prefix:** `route`

**Description**:
```
Route
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
### `Controller`
**Prefix:** `controller`

**Description**:
```
Controller
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
### `Service`
**Prefix:** `service`

**Description**:
```
Service
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
### `Glimmer Component`
**Prefix:** `component`

**Description**:
```
Glimmer Component
```
**Generated code**:
```js
import Component from '@glimmer/component';

export default class Component extends Component {
  
}
```
### `Classic Component`
**Prefix:** `component`

**Description**:
```
Classic Component
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
### `Mixin`
**Prefix:** `mixin`

**Description**:
```
Mixin
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
### `Object`
**Prefix:** `object`

**Description**:
```
Object
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
### `Helper`
**Prefix:** `helper`

**Description**:
```
Helper
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