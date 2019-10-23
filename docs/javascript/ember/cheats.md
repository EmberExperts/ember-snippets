# javascript
## ember
### `set(...)`
**Prefix:** `set`

**Description**:
```
set(...)
```
**Generated code**:
```js
set(${1:this}, '', );
```
### `get(...)`
**Prefix:** `get`

**Description**:
```
get(...)
```
**Generated code**:
```js
get(${1:this}, '');
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
observer('${1:property}', function() {
	
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
on('${1:property}', function() {
	
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
computed('${1:property}', function() {
	
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
alias('${1:key}');
```
### `and(...)`
**Prefix:** `cand`

**Description**:
```
and(...)
```
**Generated code**:
```js
and('${1:key1}', '${2:key2}');
```
### `bool(...)`
**Prefix:** `cbool`

**Description**:
```
bool(...)
```
**Generated code**:
```js
bool(${1:key});
```
### `collect(...)`
**Prefix:** `ccollect`

**Description**:
```
collect(...)
```
**Generated code**:
```js
collect(${1:keys});
```
### `empty(...)`
**Prefix:** `cempty`

**Description**:
```
empty(...)
```
**Generated code**:
```js
empty('${1:key}');
```
### `equal(...)`
**Prefix:** `cequal`

**Description**:
```
equal(...)
```
**Generated code**:
```js
equal('${1:key}', ${2:value});
```
### `filter(...)`
**Prefix:** `cfilter`

**Description**:
```
filter(...)
```
**Generated code**:
```js
filter(${1:key}, function(${2:item}${3:, index}) {
  return ${2:item};
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
filterBy('${1:key}', ${2:propertyKey}, ${3:value});
```
### `gt(...)`
**Prefix:** `cgt`

**Description**:
```
gt(...)
```
**Generated code**:
```js
gt('${1:key}', ${2:value});
```
### `gte(...)`
**Prefix:** `cgte`

**Description**:
```
gte(...)
```
**Generated code**:
```js
gte('${1:key}', ${2:value});
```
### `intersect(...)`
**Prefix:** `intersect`

**Description**:
```
intersect(...)
```
**Generated code**:
```js
intersect('${1:key1}', '${2:key2}');
```
### `lt(...)`
**Prefix:** `clt`

**Description**:
```
lt(...)
```
**Generated code**:
```js
lt('${1:key}', ${2:value});
```
### `lte(...)`
**Prefix:** `clte`

**Description**:
```
lte(...)
```
**Generated code**:
```js
lte('${1:key}', ${2:value});
```
### `map(...)`
**Prefix:** `cmap`

**Description**:
```
map(...)
```
**Generated code**:
```js
map(${1:key}, function(${2:item}${3:, index}) {
  return ${2:item};
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
mapBy('${1:key}', '${2:propertyKey}');
```
### `match(...)`
**Prefix:** `cmatch`

**Description**:
```
match(...)
```
**Generated code**:
```js
match('${1:key}', ${2:regEx});
```
### `max(...)`
**Prefix:** `cmax`

**Description**:
```
max(...)
```
**Generated code**:
```js
max('${1:key}');
```
### `min(...)`
**Prefix:** `cmin`

**Description**:
```
min(...)
```
**Generated code**:
```js
min('${1:key}');
```
### `none(...)`
**Prefix:** `cnone`

**Description**:
```
none(...)
```
**Generated code**:
```js
none('${1:key}');
```
### `not(...)`
**Prefix:** `cnot`

**Description**:
```
not(...)
```
**Generated code**:
```js
not('${1:key}');
```
### `notEmpty(...)`
**Prefix:** `cnotEmpty`

**Description**:
```
notEmpty(...)
```
**Generated code**:
```js
notEmpty('${1:key}');
```
### `oneWay(...)`
**Prefix:** `coneWay`

**Description**:
```
oneWay(...)
```
**Generated code**:
```js
oneWay('${1:key}');
```
### `or(...)`
**Prefix:** `cor`

**Description**:
```
or(...)
```
**Generated code**:
```js
or('${1:key1}', '${2:key2}');
```
### `readOnly(...)`
**Prefix:** `creadOnly`

**Description**:
```
readOnly(...)
```
**Generated code**:
```js
readOnly('${1:key}');
```
### `reads(...)`
**Prefix:** `creads`

**Description**:
```
reads(...)
```
**Generated code**:
```js
reads('${1:key}');
```
### `setDiff(...)`
**Prefix:** `csetDiff`

**Description**:
```
setDiff(...)
```
**Generated code**:
```js
setDiff('${1:key1}', '${2:key2}');
```
### `sort(...)`
**Prefix:** `csort`

**Description**:
```
sort(...)
```
**Generated code**:
```js
sort('${1:itemsKey}', '${2:sortDefinition}');
```
### `sum(...)`
**Prefix:** `csum`

**Description**:
```
sum(...)
```
**Generated code**:
```js
sum('${1:key}');
```
### `union(...)`
**Prefix:** `cunion`

**Description**:
```
union(...)
```
**Generated code**:
```js
union('${1:key1}', '${2:key2}');
```
### `uniq(...)`
**Prefix:** `cuniq`

**Description**:
```
uniq(...)
```
**Generated code**:
```js
uniq('${1:key}', '${2:propertyKey}');
```
### `uniqBy(...)`
**Prefix:** `cuniqBy`

**Description**:
```
uniqBy(...)
```
**Generated code**:
```js
uniqBy('${1:key}');
```
### `bind(...)`
**Prefix:** `bind`

**Description**:
```
bind(...)
```
**Generated code**:
```js
bind(${1:this}, ${2:this.methodName});
```
### `cancel(...)`
**Prefix:** `cancel`

**Description**:
```
cancel(...)
```
**Generated code**:
```js
cancel('${1:key}');
```
### `debounce(...)`
**Prefix:** `debounce`

**Description**:
```
debounce(...)
```
**Generated code**:
```js
debounce(${1:this}, '${2:methodName}', ${3:500});
```
### `later(...)`
**Prefix:** `later`

**Description**:
```
later(...)
```
**Generated code**:
```js
later(${1:this}, () => { \}, ${3:500});
```
### `next(...)`
**Prefix:** `next`

**Description**:
```
next(...)
```
**Generated code**:
```js
next(${1:this}, () => { \});
```
### `once(...)`
**Prefix:** `once`

**Description**:
```
once(...)
```
**Generated code**:
```js
once(${1:this}, () => { \});
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
schedule('${1:queue}', ${2:this}, () => { \}, );
```
### `scheduleOnce(...)`
**Prefix:** `scheduleOnce`

**Description**:
```
scheduleOnce(...)
```
**Generated code**:
```js
scheduleOnce('${1:queue}', ${2:this}, () => { \}, );
```
### `throttle(...)`
**Prefix:** `throttle`

**Description**:
```
throttle(...)
```
**Generated code**:
```js
throttle(${1:this}, '${2:methodName}', ${3:500});
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