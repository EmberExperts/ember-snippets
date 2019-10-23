# javascript - ember-data - cheats
## Table of Contents
- [findAll(...)](#findall)
- [findRecord(...)](#findrecord)
- [peekAll(...)](#peekall)
- [peekRecord(...)](#peekrecord)
- [query(...)](#query)
- [queryRecord(...)](#queryrecord)
## Snippets
### `findAll(...)`
**Prefix:** `findAll`

**Description**:
```
findAll(...)
```
**Generated code**:
```js
this.store.findAll('model');
```
### `findRecord(...)`
**Prefix:** `findRecord`

**Description**:
```
findRecord(...)
```
**Generated code**:
```js
this.store.findRecord('model', params.model_id);
```
### `peekAll(...)`
**Prefix:** `peekAll`

**Description**:
```
peekAll(...)
```
**Generated code**:
```js
this.store.peekAll('model');
```
### `peekRecord(...)`
**Prefix:** `peekRecord`

**Description**:
```
peekRecord(...)
```
**Generated code**:
```js
this.store.peekRecord('model', params.model_id);
```
### `query(...)`
**Prefix:** `queryAll`

**Description**:
```
query(...)
```
**Generated code**:
```js
this.store.query('model', { queryKey: queryValue);
```
### `queryRecord(...)`
**Prefix:** `queryRecord`

**Description**:
```
queryRecord(...)
```
**Generated code**:
```js
this.store.queryRecord('model', { queryKey: queryValue);
```