# javascript
## ember-test-helpers
### `await click(...)`
**Prefix:** `click`

**Description**:
```
await click(...)
```
**Generated code**:
```js
await click('${1:selector}');
```
### `await doubleClick(...)`
**Prefix:** `doubleClick`

**Description**:
```
await doubleClick(...)
```
**Generated code**:
```js
await doubleClick('${1:selector}');
```
### `await tap(...)`
**Prefix:** `tap`

**Description**:
```
await tap(...)
```
**Generated code**:
```js
await tap('${1:selector}');
```
### `await focus(...)`
**Prefix:** `focus`

**Description**:
```
await focus(...)
```
**Generated code**:
```js
await focus('${1:selector}');
```
### `await blur(...)`
**Prefix:** `blur`

**Description**:
```
await blur(...)
```
**Generated code**:
```js
await blur('${1:selector}');
```
### `await triggerKeyEvent(...)`
**Prefix:** `triggerKeyEvent`

**Description**:
```
await triggerKeyEvent(...)
```
**Generated code**:
```js
await triggerKeyEvent('${1:sel}', '${2:type}', '${3:key}', '${4:mods}');
```
### `await triggerEvent(...)`
**Prefix:** `triggerEvent`

**Description**:
```
await triggerEvent(...)
```
**Generated code**:
```js
await triggerEvent('${1:selector}', '${2:type}', '${3:options}');
```
### `await fillIn(...)`
**Prefix:** `fillIn`

**Description**:
```
await fillIn(...)
```
**Generated code**:
```js
await fillIn('${1:selector}', '${2:text}');
```
### `await find(...)`
**Prefix:** `find`

**Description**:
```
await find(...)
```
**Generated code**:
```js
find('${1:selector}');
```
### `await findAll(...)`
**Prefix:** `findAll`

**Description**:
```
await findAll(...)
```
**Generated code**:
```js
findAll('${1:selector}');
```
### `getRootElement()`
**Prefix:** `getRootElement`

**Description**:
```
getRootElement()
```
**Generated code**:
```js
getRootElement();
```
### `await visit(...)`
**Prefix:** `visit`

**Description**:
```
await visit(...)
```
**Generated code**:
```js
await visit('${1:url}');
```
### `currentRouteName()`
**Prefix:** `currentRouteName`

**Description**:
```
currentRouteName()
```
**Generated code**:
```js
currentRouteName();
```
### `currentURL(...)`
**Prefix:** `currentURL`

**Description**:
```
currentURL(...)
```
**Generated code**:
```js
currentURL();
```
### `await render(...)`
**Prefix:** `render`

**Description**:
```
await render(...)
```
**Generated code**:
```js
await render(hbs`$1`);
```
### `await clearRender()`
**Prefix:** `render`

**Description**:
```
await clearRender()
```
**Generated code**:
```js
await clearRender();
```
### `await waitFor(...)`
**Prefix:** `waitFor`

**Description**:
```
await waitFor(...)
```
**Generated code**:
```js
await waitFor('${1:selector}'${2:, { timeout: 1000, count: 1 \}});
```
### `await waitUntil(...)`
**Prefix:** `waitUntil`

**Description**:
```
await waitUntil(...)
```
**Generated code**:
```js
await waitUntil(() => { $1; }${2:, { timeout: 1000 \}});
```
### `await settled()`
**Prefix:** `settled`

**Description**:
```
await settled()
```
**Generated code**:
```js
await settled();
```
### `isSettled()`
**Prefix:** `isSettled`

**Description**:
```
isSettled()
```
**Generated code**:
```js
isSettled();
```
### `getSettledState()`
**Prefix:** `getSettledState`

**Description**:
```
getSettledState()
```
**Generated code**:
```js
getSettledState();
```
### `await this.pauseTest(...)`
**Prefix:** `pauseTest`

**Description**:
```
await this.pauseTest(...)
```
**Generated code**:
```js
await this.pauseTest();
```
### `andThen(...)`
**Prefix:** `and`

**Description**:
```
andThen(...)
```
**Generated code**:
```js
andThen(() => {
	
});
```