# javascript - ember/es6 - functions
## Table of Contents
- [super()](#super)
- [init() {}](#init-)
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
### `super()`
**Prefix:** `super`

**Description**:
```
super()
```
**Generated code**:
```js
super(...arguments);
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
  super.init(...arguments);
  
}
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
}
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
  super.setupController(...arguments);
  
}
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
  super.beforeModel(...arguments);
  
}
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
  super.afterModel(...arguments);
  
}
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
  super.didReceiveAttrs(...arguments);
  
}
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
  super.didRender(...arguments);
  
}
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
  super.didUpdateAttrs(...arguments);
  
}
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
  super.willUpdate(...arguments);
  
}
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
  super.didInsertElement(...arguments);
  
}
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
  super.willDestroyElement(...arguments);
  
}
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
  super.willClearElement(...arguments);
  
}
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
  super.didDestroyElement(...arguments);
  
}
```