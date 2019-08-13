module.exports = {
  "[ember-test-helpers] await click(...)": {
    "prefix": "click",
    "body": "await click('${1:selector}');",
    "description": "await click(...)"
  },
  "[ember-test-helpers] await doubleClick(...)": {
    "prefix": "doubleClick",
    "body": "await doubleClick('${1:selector}');",
    "description": "await doubleClick(...)"
  },
  "[ember-test-helpers] await tap(...)": {
    "prefix": "tap",
    "body": "await tap('${1:selector}');",
    "description": "await tap(...)"
  },
  "[ember-test-helpers] await focus(...)": {
    "prefix": "focus",
    "body": "await focus('${1:selector}');",
    "description": "await focus(...)"
  },
  "[ember-test-helpers] await blur(...)": {
    "prefix": "blur",
    "body": "await blur('${1:selector}');",
    "description": "await blur(...)"
  },
  "[ember-test-helpers] await triggerKeyEvent(...)": {
    "prefix": "triggerKeyEvent",
    "body": "await triggerKeyEvent('${1:sel}', '${2:type}', '${3:key}', '${4:mods}');",
    "description": "await triggerKeyEvent(...)"
  },
  "[ember-test-helpers] await triggerEvent(...)": {
    "prefix": "triggerEvent",
    "body": "await triggerEvent('${1:selector}', '${2:type}', '${3:options}');",
    "description": "await triggerEvent(...)"
  },
  "[ember-test-helpers] await fillIn(...)": {
    "prefix": "fillIn",
    "body": "await fillIn('${1:selector}', '${2:text}');",
    "description": "await fillIn(...)"
  },
  "[ember-test-helpers] await find(...)": {
    "prefix": "find",
    "body": "find('${1:selector}');",
    "description": "await find(...)"
  },
  "[ember-test-helpers] await findAll(...)": {
    "prefix": "findAll",
    "body": "findAll('${1:selector}');",
    "description": "await findAll(...)"
  },
  "[ember-test-helpers] getRootElement()": {
    "prefix": "getRootElement",
    "body": "getRootElement();",
    "description": "getRootElement()"
  },
  "[ember-test-helpers] await visit(...)": {
    "prefix": "visit",
    "body": "await visit('${1:url}');",
    "description": "await visit(...)"
  },
  "[ember-test-helpers] currentRouteName()": {
    "prefix": "currentRouteName",
    "body": "currentRouteName();",
    "description": "currentRouteName()"
  },
  "[ember-test-helpers] currentURL(...)": {
    "prefix": "currentURL",
    "body": "currentURL();",
    "description": "currentURL(...)"
  },
  "[ember-test-helpers] await render(...)": {
    "prefix": "render",
    "body": "await render(hbs`$1`);",
    "description": "await render(...)"
  },
  "[ember-test-helpers] await clearRender()": {
    "prefix": "render",
    "body": "await clearRender();",
    "description": "await clearRender()"
  },
  "[ember-test-helpers] await waitFor(...)": {
    "prefix": "waitFor",
    "body": "await waitFor('${1:selector}'${2:, { timeout: 1000, count: 1 \\}});",
    "description": "await waitFor(...)"
  },
  "[ember-test-helpers] await waitUntil(...)": {
    "prefix": "waitUntil",
    "body": "await waitUntil(() => { $1; }${2:, { timeout: 1000 \\}});",
    "description": "await waitUntil(...)"
  },
  "[ember-test-helpers] await settled()": {
    "prefix": "settled",
    "body": "await settled();",
    "description": "await settled()"
  },
  "[ember-test-helpers] isSettled()": {
    "prefix": "isSettled",
    "body": "isSettled();",
    "description": "isSettled()"
  },
  "[ember-test-helpers] getSettledState()": {
    "prefix": "getSettledState",
    "body": "getSettledState();",
    "description": "getSettledState()"
  },
  "[ember-test-helpers] await this.pauseTest(...)": {
    "prefix": "pauseTest",
    "body": "await this.pauseTest();",
    "description": "await this.pauseTest(...)"
  },
  "[ember-test-helpers] andThen(...)": {
    "prefix": "and",
    "body": "andThen(() => {\n\t${1}\n});",
    "description": "andThen(...)"
  }
};
