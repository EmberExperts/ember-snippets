# javascript
## ember-concurrency
### `didCancel`
**Prefix:** `imdidCancel`

**Description**:
```
Returns true if the object passed to it is a TaskCancelation error.
```
**Generated code**:
```js
import { didCancel } from 'ember-concurrency';
```
### `task`
**Prefix:** `imtask`

**Description**:
```
A Task is a cancelable, restartable, asynchronous operation that is driven by a generator function.
```
**Generated code**:
```js
import { task } from 'ember-concurrency';
```
### `taskGroup`
**Prefix:** `imtaskGroup`

**Description**:
```
Task Group provide a means for applying task modifiers to groups of tasks.
```
**Generated code**:
```js
import { taskGroup } from 'ember-concurrency';
```
### `timeout`
**Prefix:** `imtimeout`

**Description**:
```
Yielding timeout(ms) will pause a task for the duration of time passed in, in milliseconds.
```
**Generated code**:
```js
import { timeout } from 'ember-concurrency';
```
### `waitForEvent`
**Prefix:** `imwaitForEvent`

**Description**:
```
Use waitForEvent to pause the task until an event is fired.
```
**Generated code**:
```js
import { waitForEvent } from 'ember-concurrency';
```
### `waitForProperty`
**Prefix:** `imwaitForProperty`

**Description**:
```
Use waitForProperty to pause the task until a property on an object changes to some expected value.
```
**Generated code**:
```js
import { waitForProperty } from 'ember-concurrency';
```
### `waitForQueue`
**Prefix:** `imwaitForQueue`

**Description**:
```
Use waitForQueue to pause the task until a certain run loop queue is reached.
```
**Generated code**:
```js
import { waitForQueue } from 'ember-concurrency';
```