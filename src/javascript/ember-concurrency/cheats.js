module.exports = {
  "didCancel(error)": {
    "prefix": "didCancel",
    "body": "didCancel(${1:error})",
    "description": "Returns true if the object passed to it is a TaskCancelation error."
  },
  "task(...)": {
    "prefix": "task",
    "body": "task(function *() {\n// yield\n})",
    "description": "A Task is a cancelable, restartable, asynchronous operation that is driven by a generator function."
  },
  "taskGroup()": {
    "prefix": "taskGroup",
    "body": "taskGroup()",
    "description": "Task Group provide a means for applying task modifiers to groups of tasks."
  },
  "timeout(ms)": {
    "prefix": "timeout",
    "body": "yield timeout(${1:0});",
    "description": "Yielding timeout(ms) will pause a task for the duration of time passed in, in milliseconds."
  },
  "waitForEvent(eventName)": {
    "prefix": "waitForEvent",
    "body": "yield waitForEvent(${1:eventName});",
    "description": "Use waitForEvent to pause the task until an event is fired."
  },
  "waitForProperty(propertyName)": {
    "prefix": "waitForProperty",
    "body": "yield waitForProperty(${1:propertyName});",
    "description": "Use waitForProperty to pause the task until a property on an object changes to some expected value."
  },
  "waitForQueue(queueName)": {
    "prefix": "waitForQueue",
    "body": "yield waitForQueue(${1:queueName});",
    "description": "Use waitForQueue to pause the task until a certain run loop queue is reached."
  },
};
