# javascript - ember
## Table of Contents
- [set(...)](#set)
- [get(...)](#get)
- [this._super(...)](#this_super)
- [init() { ... }](#init---)
- [service(...)](#service)
- [observer(...)](#observer)
- [on(...)](#on)
- [actions: { ... }](#actions---)
- [computed(...)](#computed)
- [action(...)](#action)
- [alias(...)](#alias)
- [and(...)](#and)
- [bool(...)](#bool)
- [collect(...)](#collect)
- [empty(...)](#empty)
- [equal(...)](#equal)
- [filter(...)](#filter)
- [filterBy(...)](#filterby)
- [gt(...)](#gt)
- [gte(...)](#gte)
- [intersect(...)](#intersect)
- [lt(...)](#lt)
- [lte(...)](#lte)
- [map(...)](#map)
- [mapBy(...)](#mapby)
- [match(...)](#match)
- [max(...)](#max)
- [min(...)](#min)
- [none(...)](#none)
- [not(...)](#not)
- [notEmpty(...)](#notempty)
- [oneWay(...)](#oneway)
- [or(...)](#or)
- [readOnly(...)](#readonly)
- [reads(...)](#reads)
- [setDiff(...)](#setdiff)
- [sort(...)](#sort)
- [sum(...)](#sum)
- [union(...)](#union)
- [uniq(...)](#uniq)
- [uniqBy(...)](#uniqby)
- [bind(...)](#bind)
- [cancel(...)](#cancel)
- [debounce(...)](#debounce)
- [later(...)](#later)
- [next(...)](#next)
- [once(...)](#once)
- [run(...)](#run)
- [schedule(...)](#schedule)
- [scheduleOnce(...)](#scheduleonce)
- [throttle(...)](#throttle)
- [Route: model(...) { ... }](#route-model---)
- [Route: setupController(...) { ... }](#route-setupcontroller---)
- [Route: beforeModel(...) { ... }](#route-beforemodel---)
- [Route: afterModel(...) { ... }](#route-aftermodel---)
- [Component: didReceiveAttrs() { ... }](#component-didreceiveattrs---)
- [Component: didRender() { ... }](#component-didrender---)
- [Component: didUpdateAttrs() { ... }](#component-didupdateattrs---)
- [Component: willUpdate() { ... }](#component-willupdate---)
- [Component: didInsertElement() { ... }](#component-didinsertelement---)
- [Component: willDestroyElement() { ... }](#component-willdestroyelement---)
- [Component: willClearElement() { ... }](#component-willclearelement---)
- [Component: didDestroyElement() { ... }](#component-diddestroyelement---)
## Snippets
### `set(...)`
**Prefix:** `set`

**Description**:
```
set(...)
```
**Generated code**:
```js
set(this, '', );
```
### `get(...)`
**Prefix:** `get`

**Description**:
```
get(...)
```
**Generated code**:
```js
get(this, '');
```
### `this._super(...)`
**Prefix:** `super`

**Description**:
```
this._super(...)
```
**Generated code**:
```js
this._super(...arguments);
```
### `init() { ... }`
**Prefix:** `init`

**Description**:
```
init() { ... }
```
**Generated code**:
```js
init() {
  this._super(...arguments);
  
},
```
### `service(...)`
**Prefix:** `service`

**Description**:
```
service(...)
```
**Generated code**:
```js
service(),
```
### `observer(...)`
**Prefix:** `observer`

**Description**:
```
observer(...)
```
**Generated code**:
```js
observer('property', function() {
  
}),
```
### `on(...)`
**Prefix:** `on`

**Description**:
```
on(...)
```
**Generated code**:
```js
on('property', function() {
  
}),
```
### `actions: { ... }`
**Prefix:** `actions`

**Description**:
```
actions: { ... }
```
**Generated code**:
```js
actions: {
  
}
```
### `computed(...)`
**Prefix:** `computed`

**Description**:
```
computed(...)
```
**Generated code**:
```js
computed('property', function() {
  
}),
```
### `action(...)`
**Prefix:** `action`

**Description**:
```
action(...)
```
**Generated code**:
```js
action(function() {
  
}),
```
### `alias(...)`
**Prefix:** `calias`

**Description**:
```
alias(...)
```
**Generated code**:
```js
alias('key');
```
### `and(...)`
**Prefix:** `cand`

**Description**:
```
and(...)
```
**Generated code**:
```js
and('key1', 'key2');
```
### `bool(...)`
**Prefix:** `cbool`

**Description**:
```
bool(...)
```
**Generated code**:
```js
bool(key);
```
### `collect(...)`
**Prefix:** `ccollect`

**Description**:
```
collect(...)
```
**Generated code**:
```js
collect(keys);
```
### `empty(...)`
**Prefix:** `cempty`

**Description**:
```
empty(...)
```
**Generated code**:
```js
empty('key');
```
### `equal(...)`
**Prefix:** `cequal`

**Description**:
```
equal(...)
```
**Generated code**:
```js
equal('key', value);
```
### `filter(...)`
**Prefix:** `cfilter`

**Description**:
```
filter(...)
```
**Generated code**:
```js
filter(key, function(item, index}) {
  return item;
}));
```
### `filterBy(...)`
**Prefix:** `cfilterBy`

**Description**:
```
filterBy(...)
```
**Generated code**:
```js
filterBy('key', propertyKey, value);
```
### `gt(...)`
**Prefix:** `cgt`

**Description**:
```
gt(...)
```
**Generated code**:
```js
gt('key', value);
```
### `gte(...)`
**Prefix:** `cgte`

**Description**:
```
gte(...)
```
**Generated code**:
```js
gte('key', value);
```
### `intersect(...)`
**Prefix:** `intersect`

**Description**:
```
intersect(...)
```
**Generated code**:
```js
intersect('key1', 'key2');
```
### `lt(...)`
**Prefix:** `clt`

**Description**:
```
lt(...)
```
**Generated code**:
```js
lt('key', value);
```
### `lte(...)`
**Prefix:** `clte`

**Description**:
```
lte(...)
```
**Generated code**:
```js
lte('key', value);
```
### `map(...)`
**Prefix:** `cmap`

**Description**:
```
map(...)
```
**Generated code**:
```js
map(key, function(item, index}) {
  return item;
}));
```
### `mapBy(...)`
**Prefix:** `cmapBy`

**Description**:
```
mapBy(...)
```
**Generated code**:
```js
mapBy('key', 'propertyKey');
```
### `match(...)`
**Prefix:** `cmatch`

**Description**:
```
match(...)
```
**Generated code**:
```js
match('key', regEx);
```
### `max(...)`
**Prefix:** `cmax`

**Description**:
```
max(...)
```
**Generated code**:
```js
max('key');
```
### `min(...)`
**Prefix:** `cmin`

**Description**:
```
min(...)
```
**Generated code**:
```js
min('key');
```
### `none(...)`
**Prefix:** `cnone`

**Description**:
```
none(...)
```
**Generated code**:
```js
none('key');
```
### `not(...)`
**Prefix:** `cnot`

**Description**:
```
not(...)
```
**Generated code**:
```js
not('key');
```
### `notEmpty(...)`
**Prefix:** `cnotEmpty`

**Description**:
```
notEmpty(...)
```
**Generated code**:
```js
notEmpty('key');
```
### `oneWay(...)`
**Prefix:** `coneWay`

**Description**:
```
oneWay(...)
```
**Generated code**:
```js
oneWay('key');
```
### `or(...)`
**Prefix:** `cor`

**Description**:
```
or(...)
```
**Generated code**:
```js
or('key1', 'key2');
```
### `readOnly(...)`
**Prefix:** `creadOnly`

**Description**:
```
readOnly(...)
```
**Generated code**:
```js
readOnly('key');
```
### `reads(...)`
**Prefix:** `creads`

**Description**:
```
reads(...)
```
**Generated code**:
```js
reads('key');
```
### `setDiff(...)`
**Prefix:** `csetDiff`

**Description**:
```
setDiff(...)
```
**Generated code**:
```js
setDiff('key1', 'key2');
```
### `sort(...)`
**Prefix:** `csort`

**Description**:
```
sort(...)
```
**Generated code**:
```js
sort('itemsKey', 'sortDefinition');
```
### `sum(...)`
**Prefix:** `csum`

**Description**:
```
sum(...)
```
**Generated code**:
```js
sum('key');
```
### `union(...)`
**Prefix:** `cunion`

**Description**:
```
union(...)
```
**Generated code**:
```js
union('key1', 'key2');
```
### `uniq(...)`
**Prefix:** `cuniq`

**Description**:
```
uniq(...)
```
**Generated code**:
```js
uniq('key', 'propertyKey');
```
### `uniqBy(...)`
**Prefix:** `cuniqBy`

**Description**:
```
uniqBy(...)
```
**Generated code**:
```js
uniqBy('key');
```
### `bind(...)`
**Prefix:** `bind`

**Description**:
```
bind(...)
```
**Generated code**:
```js
bind(this, this.methodName);
```
### `cancel(...)`
**Prefix:** `cancel`

**Description**:
```
cancel(...)
```
**Generated code**:
```js
cancel('key');
```
### `debounce(...)`
**Prefix:** `debounce`

**Description**:
```
debounce(...)
```
**Generated code**:
```js
debounce(this, 'methodName', 500);
```
### `later(...)`
**Prefix:** `later`

**Description**:
```
later(...)
```
**Generated code**:
```js
later(this, () => { \}, 500);
```
### `next(...)`
**Prefix:** `next`

**Description**:
```
next(...)
```
**Generated code**:
```js
next(this, () => { \});
```
### `once(...)`
**Prefix:** `once`

**Description**:
```
once(...)
```
**Generated code**:
```js
once(this, () => { \});
```
### `run(...)`
**Prefix:** `run`

**Description**:
```
run(...)
```
**Generated code**:
```js
run(() => { \});
```
### `schedule(...)`
**Prefix:** `schedule`

**Description**:
```
schedule(...)
```
**Generated code**:
```js
schedule('queue', this, () => { \}, );
```
### `scheduleOnce(...)`
**Prefix:** `scheduleOnce`

**Description**:
```
scheduleOnce(...)
```
**Generated code**:
```js
scheduleOnce('queue', this, () => { \}, );
```
### `throttle(...)`
**Prefix:** `throttle`

**Description**:
```
throttle(...)
```
**Generated code**:
```js
throttle(this, 'methodName', 500);
```
### `Route: model(...) { ... }`
**Prefix:** `model`

**Description**:
```
Route: model(...) { ... }
```
**Generated code**:
```js
model(params = {}) {
  return this.store.query('', params);
},
```
### `Route: setupController(...) { ... }`
**Prefix:** `setupController`

**Description**:
```
Route: setupController(...) { ... }
```
**Generated code**:
```js
setupController(controller, model) {
  this._super(controller, model);
  
},
```
### `Route: beforeModel(...) { ... }`
**Prefix:** `beforeModel`

**Description**:
```
Route: beforeModel(...) { ... }
```
**Generated code**:
```js
beforeModel(transition) {
  this._super(controller, model);
  
},
```
### `Route: afterModel(...) { ... }`
**Prefix:** `afterModel`

**Description**:
```
Route: afterModel(...) { ... }
```
**Generated code**:
```js
afterModel(model, transition) {
  this._super(controller, model);
  
},
```
### `Component: didReceiveAttrs() { ... }`
**Prefix:** `didReceiveAttrs`

**Description**:
```
Component: didReceiveAttrs() { ... }
```
**Generated code**:
```js
didReceiveAttrs() {
  this._super(...arguments);
  
},
```
### `Component: didRender() { ... }`
**Prefix:** `didRender`

**Description**:
```
Component: didRender() { ... }
```
**Generated code**:
```js
didRender() {
  this._super(...arguments);
  
},
```
### `Component: didUpdateAttrs() { ... }`
**Prefix:** `didUpdateAttrs`

**Description**:
```
Component: didUpdateAttrs() { ... }
```
**Generated code**:
```js
didUpdateAttrs() {
  this._super(...arguments);
  
},
```
### `Component: willUpdate() { ... }`
**Prefix:** `willUpdate`

**Description**:
```
Component: willUpdate() { ... }
```
**Generated code**:
```js
willUpdate() {
  this._super(...arguments);
  
},
```
### `Component: didInsertElement() { ... }`
**Prefix:** `didInsertElement`

**Description**:
```
Component: didInsertElement() { ... }
```
**Generated code**:
```js
didInsertElement() {
  this._super(...arguments);
  
},
```
### `Component: willDestroyElement() { ... }`
**Prefix:** `willDestroyElement`

**Description**:
```
Component: willDestroyElement() { ... }
```
**Generated code**:
```js
willDestroyElement() {
  this._super(...arguments);
  
},
```
### `Component: willClearElement() { ... }`
**Prefix:** `willClearElement`

**Description**:
```
Component: willClearElement() { ... }
```
**Generated code**:
```js
willClearElement() {
  this._super(...arguments);
  
},
```
### `Component: didDestroyElement() { ... }`
**Prefix:** `didDestroyElement`

**Description**:
```
Component: didDestroyElement() { ... }
```
**Generated code**:
```js
didDestroyElement() {
  this._super(...arguments);
  
},
```