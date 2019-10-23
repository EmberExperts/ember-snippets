# javascript - ember-concurrency
## Table of Contents
- [didCancel(error)](#didcancelerror)
- [task(...)](#task)
- [taskGroup()](#taskgroup)
- [timeout(ms)](#timeoutms)
- [waitForEvent(eventName)](#waitforeventeventname)
- [waitForProperty(propertyName)](#waitforpropertypropertyname)
- [waitForQueue(queueName)](#waitforqueuequeuename)
## Snippets
### `didCancel(error)`
**Prefix:** `didCancel`

**Description**:
```
Returns true if the object passed to it is a TaskCancelation error.
```
**Generated code**:
```js
didCancel(error)
```
### `task(...)`
**Prefix:** `task`

**Description**:
```
A Task is a cancelable, restartable, asynchronous operation that is driven by a generator function.
```
**Generated code**:
```js
task(function *() {
// yield
})
```
### `taskGroup()`
**Prefix:** `taskGroup`

**Description**:
```
Task Group provide a means for applying task modifiers to groups of tasks.
```
**Generated code**:
```js
taskGroup()
```
### `timeout(ms)`
**Prefix:** `timeout`

**Description**:
```
Yielding timeout(ms) will pause a task for the duration of time passed in, in milliseconds.
```
**Generated code**:
```js
yield timeout(0);
```
### `waitForEvent(eventName)`
**Prefix:** `waitForEvent`

**Description**:
```
Use waitForEvent to pause the task until an event is fired.
```
**Generated code**:
```js
yield waitForEvent(eventName);
```
### `waitForProperty(propertyName)`
**Prefix:** `waitForProperty`

**Description**:
```
Use waitForProperty to pause the task until a property on an object changes to some expected value.
```
**Generated code**:
```js
yield waitForProperty(propertyName);
```
### `waitForQueue(queueName)`
**Prefix:** `waitForQueue`

**Description**:
```
Use waitForQueue to pause the task until a certain run loop queue is reached.
```
**Generated code**:
```js
yield waitForQueue(queueName);
```