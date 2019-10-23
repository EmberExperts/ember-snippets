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
await click('selector');
```
### `await doubleClick(...)`
**Prefix:** `doubleClick`

**Description**:
```
await doubleClick(...)
```
**Generated code**:
```js
await doubleClick('selector');
```
### `await tap(...)`
**Prefix:** `tap`

**Description**:
```
await tap(...)
```
**Generated code**:
```js
await tap('selector');
```
### `await focus(...)`
**Prefix:** `focus`

**Description**:
```
await focus(...)
```
**Generated code**:
```js
await focus('selector');
```
### `await blur(...)`
**Prefix:** `blur`

**Description**:
```
await blur(...)
```
**Generated code**:
```js
await blur('selector');
```
### `await triggerKeyEvent(...)`
**Prefix:** `triggerKeyEvent`

**Description**:
```
await triggerKeyEvent(...)
```
**Generated code**:
```js
await triggerKeyEvent('sel', 'type', 'key', 'mods');
```
### `await triggerEvent(...)`
**Prefix:** `triggerEvent`

**Description**:
```
await triggerEvent(...)
```
**Generated code**:
```js
await triggerEvent('selector', 'type', 'options');
```
### `await fillIn(...)`
**Prefix:** `fillIn`

**Description**:
```
await fillIn(...)
```
**Generated code**:
```js
await fillIn('selector', 'text');
```
### `await find(...)`
**Prefix:** `find`

**Description**:
```
await find(...)
```
**Generated code**:
```js
find('selector');
```
### `await findAll(...)`
**Prefix:** `findAll`

**Description**:
```
await findAll(...)
```
**Generated code**:
```js
findAll('selector');
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
await visit('url');
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
await waitFor('selector', { timeout: 1000, count: 1 \}});
```
### `await waitUntil(...)`
**Prefix:** `waitUntil`

**Description**:
```
await waitUntil(...)
```
**Generated code**:
```js
await waitUntil(() => { $1; }, { timeout: 1000 \}});
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