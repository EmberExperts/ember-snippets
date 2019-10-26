# javascript - ember - functions
## Table of Contents
- [set()](#set)
- [get()](#get)
- [bind()](#bind)
- [cancel()](#cancel)
- [debounce()](#debounce)
- [later()](#later)
- [next()](#next)
- [run()](#run)
- [schedule()](#schedule)
- [scheduleOnce()](#scheduleonce)
- [throttle()](#throttle)
## Snippets
### `set()`
**Prefix:** `set`

**Description**:
```
set()
```
**Generated code**:
```js
set(this, '', );
```
### `get()`
**Prefix:** `get`

**Description**:
```
get()
```
**Generated code**:
```js
get(this, '');
```
### `bind()`
**Prefix:** `bind`

**Description**:
```
bind()
```
**Generated code**:
```js
bind(this, this.methodName);
```
### `cancel()`
**Prefix:** `cancel`

**Description**:
```
cancel()
```
**Generated code**:
```js
cancel('key');
```
### `debounce()`
**Prefix:** `debounce`

**Description**:
```
debounce()
```
**Generated code**:
```js
debounce(this, 'methodName', 500);
```
### `later()`
**Prefix:** `later`

**Description**:
```
later()
```
**Generated code**:
```js
later(this, () => { \}, 500);
```
### `next()`
**Prefix:** `next`

**Description**:
```
next()
```
**Generated code**:
```js
next(this, () => { \});
```
### `run()`
**Prefix:** `run`

**Description**:
```
run()
```
**Generated code**:
```js
run(() => { \});
```
### `schedule()`
**Prefix:** `schedule`

**Description**:
```
schedule()
```
**Generated code**:
```js
schedule('queue', this, () => { \}, );
```
### `scheduleOnce()`
**Prefix:** `scheduleOnce`

**Description**:
```
scheduleOnce()
```
**Generated code**:
```js
scheduleOnce('queue', this, () => { \}, );
```
### `throttle()`
**Prefix:** `throttle`

**Description**:
```
throttle()
```
**Generated code**:
```js
throttle(this, 'methodName', 500);
```