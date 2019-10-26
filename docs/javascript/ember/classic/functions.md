# javascript - ember/classic - functions
## Table of Contents
- [this._super()](#this_super)
- [init() {}](#init-)
- [service()](#service)
- [observer()](#observer)
- [on()](#on)
- [actions: {}](#actions-)
- [computed()](#computed)
- [action()](#action)
- [model() {}](#model-)
- [setupController() {}](#setupcontroller-)
- [beforeModel() {}](#beforemodel-)
- [afterModel() {}](#aftermodel-)
- [didReceiveAttrs() {}](#didreceiveattrs-)
- [didRender() {}](#didrender-)
- [didUpdateAttrs() {}](#didupdateattrs-)
- [willUpdate() {}](#willupdate-)
- [didInsertElement() {}](#didinsertelement-)
- [willDestroyElement() {}](#willdestroyelement-)
- [willClearElement() {}](#willclearelement-)
- [didDestroyElement() {}](#diddestroyelement-)
## Snippets
### `this._super()`
**Prefix:** `super`

**Description**:
```
this._super()
```
**Generated code**:
```js
this._super(...arguments);
```
### `init() {}`
**Prefix:** `init`

**Description**:
```
init() {}
```
**Generated code**:
```js
init() {
  this._super(...arguments);
  
},
```
### `service()`
**Prefix:** `service`

**Description**:
```
service()
```
**Generated code**:
```js
service(),
```
### `observer()`
**Prefix:** `observer`

**Description**:
```
observer()
```
**Generated code**:
```js
observer('property', function() {
  
}),
```
### `on()`
**Prefix:** `on`

**Description**:
```
on()
```
**Generated code**:
```js
on('property', function() {
  
}),
```
### `actions: {}`
**Prefix:** `actions`

**Description**:
```
actions: {}
```
**Generated code**:
```js
actions: {
  
}
```
### `computed()`
**Prefix:** `computed`

**Description**:
```
computed()
```
**Generated code**:
```js
computed('property', function() {
  
}),
```
### `action()`
**Prefix:** `action`

**Description**:
```
action()
```
**Generated code**:
```js
action(function() {
  
}),
```
### `model() {}`
**Prefix:** `model`

**Description**:
```
model() {}
```
**Generated code**:
```js
model(params = {}) {
  return this.store.query('', params);
},
```
### `setupController() {}`
**Prefix:** `setupController`

**Description**:
```
setupController() {}
```
**Generated code**:
```js
setupController(controller, model) {
  this._super(controller, model);
  
},
```
### `beforeModel() {}`
**Prefix:** `beforeModel`

**Description**:
```
beforeModel() {}
```
**Generated code**:
```js
beforeModel(transition) {
  this._super(controller, model);
  
},
```
### `afterModel() {}`
**Prefix:** `afterModel`

**Description**:
```
afterModel() {}
```
**Generated code**:
```js
afterModel(model, transition) {
  this._super(controller, model);
  
},
```
### `didReceiveAttrs() {}`
**Prefix:** `didReceiveAttrs`

**Description**:
```
didReceiveAttrs() {}
```
**Generated code**:
```js
didReceiveAttrs() {
  this._super(...arguments);
  
},
```
### `didRender() {}`
**Prefix:** `didRender`

**Description**:
```
didRender() {}
```
**Generated code**:
```js
didRender() {
  this._super(...arguments);
  
},
```
### `didUpdateAttrs() {}`
**Prefix:** `didUpdateAttrs`

**Description**:
```
didUpdateAttrs() {}
```
**Generated code**:
```js
didUpdateAttrs() {
  this._super(...arguments);
  
},
```
### `willUpdate() {}`
**Prefix:** `willUpdate`

**Description**:
```
willUpdate() {}
```
**Generated code**:
```js
willUpdate() {
  this._super(...arguments);
  
},
```
### `didInsertElement() {}`
**Prefix:** `didInsertElement`

**Description**:
```
didInsertElement() {}
```
**Generated code**:
```js
didInsertElement() {
  this._super(...arguments);
  
},
```
### `willDestroyElement() {}`
**Prefix:** `willDestroyElement`

**Description**:
```
willDestroyElement() {}
```
**Generated code**:
```js
willDestroyElement() {
  this._super(...arguments);
  
},
```
### `willClearElement() {}`
**Prefix:** `willClearElement`

**Description**:
```
willClearElement() {}
```
**Generated code**:
```js
willClearElement() {
  this._super(...arguments);
  
},
```
### `didDestroyElement() {}`
**Prefix:** `didDestroyElement`

**Description**:
```
didDestroyElement() {}
```
**Generated code**:
```js
didDestroyElement() {
  this._super(...arguments);
  
},
```