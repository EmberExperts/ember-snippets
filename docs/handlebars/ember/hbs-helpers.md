# handlebars - ember
## Table of Contents
- [#each](#each)
- [#each-in](#eachin)
- [#each/else](#eachelse)
- [#if hasBlock](#if-hasblock)
- [#if hasBlockParams](#if-hasblockparams)
- [if](#if)
- [#if](#if)
- [#if/else](#ifelse)
- [unless](#unless)
- [else](#else)
- [#unless](#unless)
- [#unless/else](#unlesselse)
- [with](#with)
- [log](#log)
- [yield](#yield)
## Snippets
### `#each`
**Prefix:** `each`

**Description**:
```
The {{#each}} helper loops over elements in a collection.
```
**Generated code**:
```js
{{#each  as ||}}
  
{{/each}}
```
### `#each-in`
**Prefix:** `each-in`

**Description**:
```
The {{each-in}} helper loops over properties on an object.
```
**Generated code**:
```js
{{#each-in  as | |}}
  
{{/each-in}}
```
### `#each/else`
**Prefix:** `eachelse`

**Description**:
```
The {{#each}} helper loops over elements in a collection.
```
**Generated code**:
```js
{{#each  as ||}}
  
{{else}}
  
{{/each}}
```
### `#if hasBlock`
**Prefix:** `ifhasBlock`

**Description**:
```
Indicates if the component was invoked with a block.
```
**Generated code**:
```js
{{#if (hasBlock)}}
  
{{/if}}
```
### `#if hasBlockParams`
**Prefix:** `ifhasBlockParams`

**Description**:
```
Indicates if the component was invoked with block params.
```
**Generated code**:
```js
{{#if (hasBlockParams)}}
  
{{/if}}
```
### `if`
**Prefix:** `if`

**Description**:
```
The if helper allows you to conditionally render one of two branches, depending on the 'truthiness' of a property.
```
**Generated code**:
```js
{{if   }}
```
### `#if`
**Prefix:** `if`

**Description**:
```
The if helper allows you to conditionally render one of two branches, depending on the 'truthiness' of a property.
```
**Generated code**:
```js
{{#if }}
  
{{/if}}
```
### `#if/else`
**Prefix:** `if`

**Description**:
```
The if helper allows you to conditionally render one of two branches, depending on the 'truthiness' of a property.
```
**Generated code**:
```js
{{#if }}
  
{{else}}
  
{{/if}}
```
### `unless`
**Prefix:** `unless`

**Description**:
```
unless
```
**Generated code**:
```js
{{unless   }}
```
### `else`
**Prefix:** `else`

**Description**:
```
else
```
**Generated code**:
```js
{{else}}
```
### `#unless`
**Prefix:** `unless`

**Description**:
```
The unless helper is the inverse of the if helper. It displays if a value is falsey ("not true" or "is false"). 
```
**Generated code**:
```js
{{#unless }}
  
{{/unless}}
```
### `#unless/else`
**Prefix:** `unless`

**Description**:
```
The unless helper is the inverse of the if helper. It displays if a value is falsey ("not true" or "is false"). 
```
**Generated code**:
```js
{{#unless }}
  
{{else}}
  
{{/unless}}
```
### `with`
**Prefix:** `with`

**Description**:
```
with
```
**Generated code**:
```js
{{#with  as ||}}
  
{{/with}}
```
### `log`
**Prefix:** `log`

**Description**:
```
log allows you to output the value of variables in the current rendering context. log also accepts primitive types such as strings or numbers.
```
**Generated code**:
```js
{{log }}
```
### `yield`
**Prefix:** `yield`

**Description**:
```
{{yield}} denotes an area of a template that will be rendered inside of another template.
```
**Generated code**:
```js
{{yield}}
```