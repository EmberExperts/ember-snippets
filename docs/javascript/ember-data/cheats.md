# javascript
## ember-data
### `findAll(...)`
**Prefix:** `findAll`

**Description**:
```
findAll(...)
```
**Generated code**:
```js
this.store.findAll('${1:model}');
```
### `findRecord(...)`
**Prefix:** `findRecord`

**Description**:
```
findRecord(...)
```
**Generated code**:
```js
this.store.findRecord('${1:model}', params.${1:model}_id);
```
### `peekAll(...)`
**Prefix:** `peekAll`

**Description**:
```
peekAll(...)
```
**Generated code**:
```js
this.store.peekAll('${1:model}');
```
### `peekRecord(...)`
**Prefix:** `peekRecord`

**Description**:
```
peekRecord(...)
```
**Generated code**:
```js
this.store.peekRecord('${1:model}', params.${1:model}_id);
```
### `query(...)`
**Prefix:** `queryAll`

**Description**:
```
query(...)
```
**Generated code**:
```js
this.store.query('${1:model}', { ${2:queryKey}: ${3:queryValue}});
```
### `queryRecord(...)`
**Prefix:** `queryRecord`

**Description**:
```
queryRecord(...)
```
**Generated code**:
```js
this.store.queryRecord('${1:model}', { ${2:queryKey}: ${3:queryValue}});
```