# javascript - ember/es6 - decorators
## Table of Contents
- [@tracked](#tracked)
- [@service](#service)
- [@observer](#observer)
- [@on](#on)
- [@computed](#computed)
- [@action](#action)
- [@alias()](#alias)
- [@and()](#and)
- [@bool()](#bool)
- [@collect()](#collect)
- [@empty()](#empty)
- [@equal()](#equal)
- [@filter()](#filter)
- [@filterBy()](#filterby)
- [@gt()](#gt)
- [@gte()](#gte)
- [@intersect()](#intersect)
- [@lt()](#lt)
- [@lte()](#lte)
- [@map()](#map)
- [@mapBy()](#mapby)
- [@match()](#match)
- [@max()](#max)
- [@min()](#min)
- [@none()](#none)
- [@not()](#not)
- [@notEmpty()](#notempty)
- [@oneWay()](#oneway)
- [@or()](#or)
- [@readOnly()](#readonly)
- [@reads()](#reads)
- [@setDiff()](#setdiff)
- [@sort()](#sort)
- [@sum()](#sum)
- [@union()](#union)
- [@uniq()](#uniq)
- [@uniqBy()](#uniqby)
## Snippets
### `@tracked`
**Prefix:** `@tracked`

**Description**:
```
@tracked
```
**Generated code**:
```js
@tracked
```
### `@service`
**Prefix:** `@service`

**Description**:
```
@service
```
**Generated code**:
```js
@service()
```
### `@observer`
**Prefix:** `@observer`

**Description**:
```
@observer
```
**Generated code**:
```js
@observer('property')
() {
  
}
```
### `@on`
**Prefix:** `@on`

**Description**:
```
@on
```
**Generated code**:
```js
@on('property')
() {
  
}
```
### `@computed`
**Prefix:** `@computed`

**Description**:
```
@computed
```
**Generated code**:
```js
@computed('property')
() {
  
})
```
### `@action`
**Prefix:** `@action`

**Description**:
```
@action
```
**Generated code**:
```js
@action
() {
  
}
```
### `@alias()`
**Prefix:** `@alias`

**Description**:
```
@alias()
```
**Generated code**:
```js
@alias('key')
```
### `@and()`
**Prefix:** `@and`

**Description**:
```
@and()
```
**Generated code**:
```js
@and('key1', 'key2')
```
### `@bool()`
**Prefix:** `@bool`

**Description**:
```
@bool()
```
**Generated code**:
```js
@bool(key)
```
### `@collect()`
**Prefix:** `@collect`

**Description**:
```
@collect()
```
**Generated code**:
```js
@collect(keys)
```
### `@empty()`
**Prefix:** `@empty`

**Description**:
```
@empty()
```
**Generated code**:
```js
@empty('key')
```
### `@equal()`
**Prefix:** `@equal`

**Description**:
```
@equal()
```
**Generated code**:
```js
@equal('key', value)
```
### `@filter()`
**Prefix:** `@filter`

**Description**:
```
@filter()
```
**Generated code**:
```js
@filter(key)
(item, index}) {
  return item;
})
```
### `@filterBy()`
**Prefix:** `@filterBy`

**Description**:
```
@filterBy()
```
**Generated code**:
```js
@filterBy('key', propertyKey, value)
```
### `@gt()`
**Prefix:** `@gt`

**Description**:
```
@gt()
```
**Generated code**:
```js
@gt('key', value)
```
### `@gte()`
**Prefix:** `@gte`

**Description**:
```
@gte()
```
**Generated code**:
```js
@gte('key', value)
```
### `@intersect()`
**Prefix:** `@intersect`

**Description**:
```
@intersect()
```
**Generated code**:
```js
@intersect('key1', 'key2')
```
### `@lt()`
**Prefix:** `@lt`

**Description**:
```
@lt()
```
**Generated code**:
```js
@lt('key', value)
```
### `@lte()`
**Prefix:** `@lte`

**Description**:
```
@lte()
```
**Generated code**:
```js
@lte('key', value)
```
### `@map()`
**Prefix:** `@map`

**Description**:
```
@map()
```
**Generated code**:
```js
@map(key)
(item, index}) {
  return item;
})
```
### `@mapBy()`
**Prefix:** `@mapBy`

**Description**:
```
@mapBy()
```
**Generated code**:
```js
@mapBy('key', 'propertyKey')
```
### `@match()`
**Prefix:** `@match`

**Description**:
```
@match()
```
**Generated code**:
```js
@match('key', regExp)
```
### `@max()`
**Prefix:** `@max`

**Description**:
```
@max()
```
**Generated code**:
```js
@max('key')
```
### `@min()`
**Prefix:** `@min`

**Description**:
```
@min()
```
**Generated code**:
```js
@min('key')
```
### `@none()`
**Prefix:** `@none`

**Description**:
```
@none()
```
**Generated code**:
```js
@none('key')
```
### `@not()`
**Prefix:** `@not`

**Description**:
```
@not()
```
**Generated code**:
```js
@not('key')
```
### `@notEmpty()`
**Prefix:** `@notEmpty`

**Description**:
```
@notEmpty()
```
**Generated code**:
```js
@notEmpty('key')
```
### `@oneWay()`
**Prefix:** `@oneWay`

**Description**:
```
@oneWay()
```
**Generated code**:
```js
@oneWay('key')
```
### `@or()`
**Prefix:** `@or`

**Description**:
```
@or()
```
**Generated code**:
```js
@or('key1', 'key2')
```
### `@readOnly()`
**Prefix:** `@readOnly`

**Description**:
```
@readOnly()
```
**Generated code**:
```js
@readOnly('key')
```
### `@reads()`
**Prefix:** `@reads`

**Description**:
```
@reads()
```
**Generated code**:
```js
@reads('key')
```
### `@setDiff()`
**Prefix:** `@setDiff`

**Description**:
```
@setDiff()
```
**Generated code**:
```js
@setDiff('key1', 'key2')
```
### `@sort()`
**Prefix:** `@sort`

**Description**:
```
@sort()
```
**Generated code**:
```js
@sort('itemsKey', 'sortDefinition')
```
### `@sum()`
**Prefix:** `@sum`

**Description**:
```
@sum()
```
**Generated code**:
```js
@sum('key')
```
### `@union()`
**Prefix:** `@union`

**Description**:
```
@union()
```
**Generated code**:
```js
@union('key1', 'key2')
```
### `@uniq()`
**Prefix:** `@uniq`

**Description**:
```
@uniq()
```
**Generated code**:
```js
@uniq('key', 'propertyKey')
```
### `@uniqBy()`
**Prefix:** `@uniqBy`

**Description**:
```
@uniqBy()
```
**Generated code**:
```js
@uniqBy('key')
```