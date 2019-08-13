module.exports = {
  "[ember-concurrency] didCancel": {
    "prefix": "imdidCancel",
    "body": "import { didCancel } from 'ember-concurrency';",
    "description": "Returns true if the object passed to it is a TaskCancelation error."
  },
  "[ember-concurrency] task": {
    "prefix": "imtask",
    "body": "import { task } from 'ember-concurrency';",
    "description": "A Task is a cancelable, restartable, asynchronous operation that is driven by a generator function."
  },
  "[ember-concurrency] taskGroup": {
    "prefix": "imtaskGroup",
    "body": "import { taskGroup } from 'ember-concurrency';",
    "description": "Task Group provide a means for applying task modifiers to groups of tasks."
  },
  "[ember-concurrency] timeout": {
    "prefix": "imtimeout",
    "body": "import { timeout } from 'ember-concurrency';",
    "description": "Yielding timeout(ms) will pause a task for the duration of time passed in, in milliseconds."
  },
  "[ember-concurrency] waitForEvent": {
    "prefix": "imwaitForEvent",
    "body": "import { waitForEvent } from 'ember-concurrency';",
    "description": "Use waitForEvent to pause the task until an event is fired."
  },
  "[ember-concurrency] waitForProperty": {
    "prefix": "imwaitForProperty",
    "body": "import { waitForProperty } from 'ember-concurrency';",
    "description": "Use waitForProperty to pause the task until a property on an object changes to some expected value."
  },
  "[ember-concurrency] waitForQueue": {
    "prefix": "imwaitForQueue",
    "body": "import { waitForQueue } from 'ember-concurrency';",
    "description": "Use waitForQueue to pause the task until a certain run loop queue is reached."
  },
};
