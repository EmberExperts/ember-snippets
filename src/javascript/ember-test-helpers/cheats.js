module.exports = {
  "await click(...)": {
    "prefix": "click",
    "body": "await click('${1:selector}');",
    "description": "await click(...)"
  },
  "await doubleClick(...)": {
    "prefix": "doubleClick",
    "body": "await doubleClick('${1:selector}');",
    "description": "await doubleClick(...)"
  },
  "await tap(...)": {
    "prefix": "tap",
    "body": "await tap('${1:selector}');",
    "description": "await tap(...)"
  },
  "await focus(...)": {
    "prefix": "focus",
    "body": "await focus('${1:selector}');",
    "description": "await focus(...)"
  },
  "await blur(...)": {
    "prefix": "blur",
    "body": "await blur('${1:selector}');",
    "description": "await blur(...)"
  },
  "await triggerKeyEvent(...)": {
    "prefix": "triggerKeyEvent",
    "body": "await triggerKeyEvent('${1:sel}', '${2:type}', '${3:key}', '${4:mods}');",
    "description": "await triggerKeyEvent(...)"
  },
  "await triggerEvent(...)": {
    "prefix": "triggerEvent",
    "body": "await triggerEvent('${1:selector}', '${2:type}', '${3:options}');",
    "description": "await triggerEvent(...)"
  },
  "await fillIn(...)": {
    "prefix": "fillIn",
    "body": "await fillIn('${1:selector}', '${2:text}');",
    "description": "await fillIn(...)"
  },
  "await find(...)": {
    "prefix": "find",
    "body": "find('${1:selector}');",
    "description": "await find(...)"
  },
  "await findAll(...)": {
    "prefix": "findAll",
    "body": "findAll('${1:selector}');",
    "description": "await findAll(...)"
  },
  "getRootElement()": {
    "prefix": "getRootElement",
    "body": "getRootElement();",
    "description": "getRootElement()"
  },
  "await visit(...)": {
    "prefix": "visit",
    "body": "await visit('${1:url}');",
    "description": "await visit(...)"
  },
  "currentRouteName()": {
    "prefix": "currentRouteName",
    "body": "currentRouteName();",
    "description": "currentRouteName()"
  },
  "currentURL(...)": {
    "prefix": "currentURL",
    "body": "currentURL();",
    "description": "currentURL(...)"
  },
  "await render(...)": {
    "prefix": "render",
    "body": "await render(hbs`$1`);",
    "description": "await render(...)"
  },
  "await clearRender()": {
    "prefix": "render",
    "body": "await clearRender();",
    "description": "await clearRender()"
  },
  "await waitFor(...)": {
    "prefix": "waitFor",
    "body": "await waitFor('${1:selector}'${2:, { timeout: 1000, count: 1 \\}});",
    "description": "await waitFor(...)"
  },
  "await waitUntil(...)": {
    "prefix": "waitUntil",
    "body": "await waitUntil(() => { $1; }${2:, { timeout: 1000 \\}});",
    "description": "await waitUntil(...)"
  },
  "await settled()": {
    "prefix": "settled",
    "body": "await settled();",
    "description": "await settled()"
  },
  "isSettled()": {
    "prefix": "isSettled",
    "body": "isSettled();",
    "description": "isSettled()"
  },
  "getSettledState()": {
    "prefix": "getSettledState",
    "body": "getSettledState();",
    "description": "getSettledState()"
  },
  "await this.pauseTest(...)": {
    "prefix": "pauseTest",
    "body": "await this.pauseTest();",
    "description": "await this.pauseTest(...)"
  },
  "andThen(...)": {
    "prefix": "and",
    "body": "andThen(() => {\n\t${1}\n});",
    "description": "andThen(...)"
  }
};
