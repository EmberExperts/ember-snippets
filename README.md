<p align="center">
 <img src="https://raw.githubusercontent.com/Exelord/ember-snippets/master/icon.png" alt="Ember Snippets Logo">
</p>

# ember-snippets

All-in-one snippets for Ember apps. Forget about syntax, focus on development.

Supported editors:
- vscode: https://marketplace.visualstudio.com/items?itemName=exelord.ember-snippets

**WARNING!** In most cases, snippets are up-to-date which means they assume you use the latest Ember, Ember-data or any other addon with our snippets.

## What's included?

Following snippets are just a selected subset. 

**Full documentation can be found in (`/docs`)[https://github.com/Exelord/ember-snippets/tree/master/docs] folder**

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
import Component from '@glimmer/component';

class Component extends Component {
  
}

```

#### 4. Handlebars snippets
Take the advantage of faster templating by using HBS snippets, eg:
```
yield -> {{yield}}

debugger -> {{debugger}}

on -> {{on }}

if -> 
{{#if }}
 
{{/if}}

eachelse -> 
{{#each as ||}}
 
{{else}}
 
{{/each}}

linkto ->
<LinkTo @route=>
 
</LinkTo> 
```

## Contribution
Is this package missing your favorite addon or snippet? It's super easy to contribute!

1. Create a new folder in `src/javascript` for JS or `src/handlebars` for HBS with you addon name, eg. `my-addon`
2. Create files like `cheats.js`, `imports.js` or `skeletons.js`
3. Fill in the files with following structure:
 ```js
  module.exports = {
    "superFunction": {
      "prefix": "imsuperFunction",
      "body": "import { superFunction } from 'my-addon';",
      "description": "superFunction allows you to do super things"
    },
  }
 ```