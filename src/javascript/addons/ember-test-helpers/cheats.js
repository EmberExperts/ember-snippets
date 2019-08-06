module.exports = {
  "await click(...)": {
    "prefix": "click",
    "leftLabel": "Ember Test",
    "body": "await click('${1:selector}');",
    "description": "await click(...)"
  },
  "await doubleClick(...)": {
    "prefix": "doubleClick",
    "leftLabel": "Ember Test",
    "body": "await doubleClick('${1:selector}');",
    "description": "await doubleClick(...)"
  },
  "await tap(...)": {
    "prefix": "tap",
    "leftLabel": "Ember Test",
    "body": "await tap('${1:selector}');",
    "description": "await tap(...)"
  },
  "await focus(...)": {
    "prefix": "focus",
    "leftLabel": "Ember Test",
    "body": "await focus('${1:selector}');",
    "description": "await focus(...)"
  },
  "await blur(...)": {
    "prefix": "blur",
    "leftLabel": "Ember Test",
    "body": "await blur('${1:selector}');",
    "description": "await blur(...)"
  },
  "await triggerKeyEvent(...)": {
    "prefix": "triggerKeyEvent",
    "leftLabel": "Ember Test",
    "body": "await triggerKeyEvent('${1:sel}', '${2:type}', '${3:key}', '${4:mods}');",
    "description": "await triggerKeyEvent(...)"
  },
  "await triggerEvent(...)": {
    "prefix": "triggerEvent",
    "leftLabel": "Ember Test",
    "body": "await triggerEvent('${1:selector}', '${2:type}', '${3:options}');",
    "description": "await triggerEvent(...)"
  },
  "await fillIn(...)": {
    "prefix": "fillIn",
    "leftLabel": "Ember Test",
    "body": "await fillIn('${1:selector}', '${2:text}');",
    "description": "await fillIn(...)"
  },
  "await find(...)": {
    "prefix": "find",
    "leftLabel": "Ember Test",
    "body": "find('${1:selector}');",
    "description": "await find(...)"
  },
  "await findAll(...)": {
    "prefix": "findAll",
    "leftLabel": "Ember Test",
    "body": "findAll('${1:selector}');",
    "description": "await findAll(...)"
  },
  "getRootElement()": {
    "prefix": "getRootElement",
    "leftLabel": "Ember Test",
    "body": "getRootElement();",
    "description": "getRootElement()"
  },
  "await visit(...)": {
    "prefix": "visit",
    "leftLabel": "Ember Test",
    "body": "await visit('${1:url}');",
    "description": "await visit(...)"
  },
  "currentRouteName()": {
    "prefix": "currentRouteName",
    "leftLabel": "Ember Test",
    "body": "currentRouteName();",
    "description": "currentRouteName()"
  },
  "currentURL(...)": {
    "prefix": "currentURL",
    "leftLabel": "Ember Test",
    "body": "currentURL();",
    "description": "currentURL(...)"
  },
  "await render(...)": {
    "prefix": "render",
    "leftLabel": "Ember Test",
    "body": "await render(hbs`$1`);",
    "description": "await render(...)"
  },
  "await clearRender()": {
    "prefix": "render",
    "leftLabel": "Ember Test",
    "body": "await clearRender();",
    "description": "await clearRender()"
  },
  "await waitFor(...)": {
    "prefix": "waitFor",
    "leftLabel": "Ember Test",
    "body": "await waitFor('${1:selector}'${2:, { timeout: 1000, count: 1 \\}});",
    "description": "await waitFor(...)"
  },
  "await waitUntil(...)": {
    "prefix": "waitUntil",
    "leftLabel": "Ember Test",
    "body": "await waitUntil(() => { $1; }${2:, { timeout: 1000 \\}});",
    "description": "await waitUntil(...)"
  },
  "await settled()": {
    "prefix": "settled",
    "leftLabel": "Ember Test",
    "body": "await settled();",
    "description": "await settled()"
  },
  "isSettled()": {
    "prefix": "isSettled",
    "leftLabel": "Ember Test",
    "body": "isSettled();",
    "description": "isSettled()"
  },
  "getSettledState()": {
    "prefix": "getSettledState",
    "leftLabel": "Ember Test",
    "body": "getSettledState();",
    "description": "getSettledState()"
  },
  "await this.pauseTest(...)": {
    "prefix": "pauseTest",
    "leftLabel": "Ember Test",
    "body": "await this.pauseTest();",
    "description": "await this.pauseTest(...)"
  },
  "andThen(...)": {
    "prefix": "and",
    "leftLabel": "Ember Test",
    "body": "andThen(() => {\n\t${1}\n});",
    "description": "andThen(...)"
  }
};
