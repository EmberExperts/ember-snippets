<p align="center">
 <img src="https://raw.githubusercontent.com/Exelord/ember-snippets/master/icon.png" alt="Ember Snippets Logo">
</p>

# ember-snippets

All-in-one snippets for Ember apps. Forget about syntax, focus on development.

Supported editors:
- vscode: https://marketplace.visualstudio.com/items?itemName=exelord.ember-snippets

**WARNING!** In most cases, snippets are up-to-date which means they assume you use the latest Ember, Ember-data or any other addon with our snippets.

## What's included?

Following snippets are just a selected subset. Full list available in the code: `src/**/`

### Ember Snippets

#### 1. Fully compatible Ember imports (ember-rfc176-data)
Import anything by using `im*`, eg.
```
imtypeof -> import { typeOf } from '@ember/utils';

imcomputed -> import { computed } from '@ember/object';

iminject -> import { inject as service } from '@ember/service';
```

#### 2. Cheats
Cheat with Ember API snippets in your `.js` files by using shortcuts like:
```
service -> service(),

super -> this._super(...arguments);

run -> run(() => { });

computed ->
computed('property', function() {
 // body
}),

didDestroyElement ->
didInsertElement() {
 this._super(...arguments);
 
},
```

#### 3. Skeletons
Forget about generators. Just use the skeletons for anything, eg:
```
component ->
import Component from '@ember/component';

export default Component.extend({
 // body
});

service ->
import Service from '@ember/service';

export default Service.extend({
 // body
});

helper ->
import Helper from '@ember/component/helper';

export default Helper.extend({
 compute() {
 // body
 }
});

```

#### 4. Handlebars snippets
Take the advantage of faster templating by using HBS snippets, eg:
```
yield -> {{yield}}

debugger -> {{debugger}}

on -> {{on }}

mut -> (mut )

let ->
{{#let as ||}}
 
{{/let}}

if -> 
{{#if }}
 
{{/if}}

eachelse -> 
{{#each as ||}}
 
{{else}}
 
{{/each}}

input -> <Input @value= />

linkto ->
<LinkTo @route=>
 
</LinkTo> 
```

### Addons Snippets

#### Ember Data

##### Imports
All imports according to the latest RFC: https://emberjs.github.io/rfcs/0395-ember-data-packages.html

Examples:

```
immodel -> import Model from '@ember-data/model';

imhasMany -> import { hasMany } from '@ember-data/model';

imattr -> import { attr } from '@ember-data/model';

imJSONAPIAdapter -> import JSONAPIAdapter from '@ember-data/adapter/json-api';
```

##### Cheats
Examples:

```
findAll -> this.store.findAll('model');
queryRecord -> this.store.queryRecord('model', { queryKey: queryValue});
```

##### Skeletons
Examples:

```
model ->
import Model from '@ember-data/model';

export default Model.extend({
  // body
});

jsonapiAdapter ->
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default JSONAPIAdapter.extend({
  // body
});
```

### Ember Test Helpers

##### Cheats
Examples:

```
click -> await click();
pauseTest -> await this.pauseTest();
fillIn -> await fillIn();
```

### Ember Concurrency

##### Imports
Examples:

```
imtask -> import { task } from 'ember-concurrency';
imtimeout -> import { timeout } from 'ember-concurrency';
```

##### Cheats
Examples:

```
timeout -> yield timeout(0);

task ->
task(function *() {
  // yield
})
```

## Contribution
Did I miss your favorite addon or snippet? It's super easy to contribute!

1. Create a new folder in `src/javascript/addons` for JS or `src/handlebars/addons` for HBS with you addon name, eg. `my-addon`
2. Create files like `cheats.js`, `imports.js` or `skeletons.js`
3. Fill in the files with following structure:
 ```js
  module.exports = {
    "[my-addon] superFunction": {
      "prefix": "imsuperFunction",
      "body": "import { superFunction } from 'my-addon';",
      "description": "superFunction allows you to do super things"
    },
  }
 ```