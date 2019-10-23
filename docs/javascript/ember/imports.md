# javascript - ember - imports
## Table of Contents
- [Ember.Application](#emberapplication)
- [Ember.getOwner](#embergetowner)
- [Ember.onLoad](#emberonload)
- [Ember.runLoadHooks](#emberrunloadhooks)
- [Ember.setOwner](#embersetowner)
- [Ember.DefaultResolver](#emberdefaultresolver)
- [Ember.ApplicationInstance](#emberapplicationinstance)
- [Ember.Namespace](#embernamespace)
- [Ember.Resolver](#emberresolver)
- [Ember.Array](#emberarray)
- [Ember.A](#embera)
- [Ember.isArray](#emberisarray)
- [Ember.makeArray](#embermakearray)
- [Ember.MutableArray](#embermutablearray)
- [Ember.ArrayProxy](#emberarrayproxy)
- [Ember.FEATURES](#emberfeatures)
- [Ember.FEATURES.isEnabled](#emberfeaturesisenabled)
- [Ember.Component](#embercomponent)
- [Ember._componentManagerCapabilities](#ember_componentmanagercapabilities)
- [Ember._setComponentManager](#ember_setcomponentmanager)
- [Ember._getComponentTemplate](#ember_getcomponenttemplate)
- [Ember._setComponentTemplate](#ember_setcomponenttemplate)
- [Ember._templateOnlyComponent](#ember_templateonlycomponent)
- [Ember._setModifierManager](#ember_setmodifiermanager)
- [Ember._modifierManagerCapabilities](#ember_modifiermanagercapabilities)
- [Ember.Checkbox](#embercheckbox)
- [Ember.Helper](#emberhelper)
- [Ember.Helper.helper](#emberhelperhelper)
- [Ember.TextArea](#embertextarea)
- [Ember.TextField](#embertextfield)
- [Ember.Controller](#embercontroller)
- [Ember.inject.controller](#emberinjectcontroller)
- [Ember.assert](#emberassert)
- [Ember.debug](#emberdebug)
- [Ember.inspect](#emberinspect)
- [Ember.Debug.registerDeprecationHandler](#emberdebugregisterdeprecationhandler)
- [Ember.Debug.registerWarnHandler](#emberdebugregisterwarnhandler)
- [Ember.runInDebug](#emberrunindebug)
- [Ember.warn](#emberwarn)
- [Ember.ContainerDebugAdapter](#embercontainerdebugadapter)
- [Ember.DataAdapter](#emberdataadapter)
- [Ember.Engine](#emberengine)
- [Ember.getEngineParent](#embergetengineparent)
- [Ember.EngineInstance](#emberengineinstance)
- [Ember.Enumerable](#emberenumerable)
- [Ember.Error](#embererror)
- [Ember.Instrumentation.instrument](#emberinstrumentationinstrument)
- [Ember.Instrumentation.reset](#emberinstrumentationreset)
- [Ember.Instrumentation.subscribe](#emberinstrumentationsubscribe)
- [Ember.Instrumentation.unsubscribe](#emberinstrumentationunsubscribe)
- [Ember.Map](#embermap)
- [Ember.MapWithDefault](#embermapwithdefault)
- [Ember.Object](#emberobject)
- [Ember._action](#ember_action)
- [Ember.aliasMethod](#emberaliasmethod)
- [Ember.computed](#embercomputed)
- [Ember.defineProperty](#emberdefineproperty)
- [Ember.get](#emberget)
- [Ember.getProperties](#embergetproperties)
- [Ember.getWithDefault](#embergetwithdefault)
- [Ember.notifyPropertyChange](#embernotifypropertychange)
- [Ember.observer](#emberobserver)
- [Ember.set](#emberset)
- [Ember.setProperties](#embersetproperties)
- [Ember.trySet](#embertryset)
- [Ember._dependentKeyCompat](#ember_dependentkeycompat)
- [Ember.ComputedProperty](#embercomputedproperty)
- [Ember.computed.alias](#embercomputedalias)
- [Ember.computed.and](#embercomputedand)
- [Ember.computed.bool](#embercomputedbool)
- [Ember.computed.collect](#embercomputedcollect)
- [Ember.computed.deprecatingAlias](#embercomputeddeprecatingalias)
- [Ember.computed.empty](#embercomputedempty)
- [Ember.computed.equal](#embercomputedequal)
- [Ember.expandProperties](#emberexpandproperties)
- [Ember.computed.filter](#embercomputedfilter)
- [Ember.computed.filterBy](#embercomputedfilterby)
- [Ember.computed.filterProperty](#embercomputedfilterproperty)
- [Ember.computed.gt](#embercomputedgt)
- [Ember.computed.gte](#embercomputedgte)
- [Ember.computed.intersect](#embercomputedintersect)
- [Ember.computed.lt](#embercomputedlt)
- [Ember.computed.lte](#embercomputedlte)
- [Ember.computed.map](#embercomputedmap)
- [Ember.computed.mapBy](#embercomputedmapby)
- [Ember.computed.mapProperty](#embercomputedmapproperty)
- [Ember.computed.match](#embercomputedmatch)
- [Ember.computed.max](#embercomputedmax)
- [Ember.computed.min](#embercomputedmin)
- [Ember.computed.none](#embercomputednone)
- [Ember.computed.not](#embercomputednot)
- [Ember.computed.notEmpty](#embercomputednotempty)
- [Ember.computed.oneWay](#embercomputedoneway)
- [Ember.computed.or](#embercomputedor)
- [Ember.computed.readOnly](#embercomputedreadonly)
- [Ember.computed.reads](#embercomputedreads)
- [Ember.computed.setDiff](#embercomputedsetdiff)
- [Ember.computed.sort](#embercomputedsort)
- [Ember.computed.sum](#embercomputedsum)
- [Ember.computed.union](#embercomputedunion)
- [Ember.computed.uniq](#embercomputeduniq)
- [Ember.computed.uniqBy](#embercomputeduniqby)
- [Ember.CoreObject](#embercoreobject)
- [Ember.Evented](#emberevented)
- [Ember.on](#emberon)
- [Ember.addListener](#emberaddlistener)
- [Ember.removeListener](#emberremovelistener)
- [Ember.sendEvent](#embersendevent)
- [Ember.cacheFor](#embercachefor)
- [Ember.copy](#embercopy)
- [Ember.guidFor](#emberguidfor)
- [Ember.Mixin](#embermixin)
- [Ember.Observable](#emberobservable)
- [Ember.addObserver](#emberaddobserver)
- [Ember.removeObserver](#emberremoveobserver)
- [Ember.PromiseProxyMixin](#emberpromiseproxymixin)
- [Ember.ObjectProxy](#emberobjectproxy)
- [Ember.assign](#emberassign)
- [Ember.create](#embercreate)
- [Ember.platform.hasPropertyAccessors](#emberplatformhaspropertyaccessors)
- [Ember.keys](#emberkeys)
- [Ember.merge](#embermerge)
- [Ember.AutoLocation](#emberautolocation)
- [Ember.HashLocation](#emberhashlocation)
- [Ember.HistoryLocation](#emberhistorylocation)
- [Ember.LinkComponent](#emberlinkcomponent)
- [Ember.Location](#emberlocation)
- [Ember.NoneLocation](#embernonelocation)
- [Ember.Route](#emberroute)
- [Ember.Router](#emberrouter)
- [Ember.run.begin](#emberrunbegin)
- [Ember.run.bind](#emberrunbind)
- [Ember.run.cancel](#emberruncancel)
- [Ember.run.debounce](#emberrundebounce)
- [Ember.run.end](#emberrunend)
- [Ember.run.join](#emberrunjoin)
- [Ember.run.later](#emberrunlater)
- [Ember.run.next](#emberrunnext)
- [Ember.run.once](#emberrunonce)
- [Ember.run](#emberrun)
- [Ember.run.schedule](#emberrunschedule)
- [Ember.run.scheduleOnce](#emberrunscheduleonce)
- [Ember.run.throttle](#emberrunthrottle)
- [Ember.Service](#emberservice)
- [Ember.inject.service](#emberinjectservice)
- [Ember.String.camelize](#emberstringcamelize)
- [Ember.String.capitalize](#emberstringcapitalize)
- [Ember.String.classify](#emberstringclassify)
- [Ember.String.dasherize](#emberstringdasherize)
- [Ember.String.decamelize](#emberstringdecamelize)
- [Ember.String.fmt](#emberstringfmt)
- [Ember.String.loc](#emberstringloc)
- [Ember.String.underscore](#emberstringunderscore)
- [Ember.String.w](#emberstringw)
- [Ember.String.htmlSafe](#emberstringhtmlsafe)
- [Ember.String.isHTMLSafe](#emberstringishtmlsafe)
- [Ember.HTMLBars.compile](#emberhtmlbarscompile)
- [Ember.HTMLBars.precompile](#emberhtmlbarsprecompile)
- [Ember.HTMLBars.template](#emberhtmlbarstemplate)
- [Ember.Test.registerAsyncHelper](#embertestregisterasynchelper)
- [Ember.Test.registerHelper](#embertestregisterhelper)
- [Ember.Test.registerWaiter](#embertestregisterwaiter)
- [Ember.Test.unregisterHelper](#embertestunregisterhelper)
- [Ember.Test.unregisterWaiter](#embertestunregisterwaiter)
- [Ember.Test.Adapter](#embertestadapter)
- [Ember.compare](#embercompare)
- [Ember.isBlank](#emberisblank)
- [Ember.isEmpty](#emberisempty)
- [Ember.isEqual](#emberisequal)
- [Ember.isNone](#emberisnone)
- [Ember.isPresent](#emberispresent)
- [Ember.tryInvoke](#embertryinvoke)
- [Ember.typeOf](#embertypeof)
- [Ember.VERSION](#emberversion)
- [Ember._tracked](#ember_tracked)
- [Ember.$](#ember)
- [Ember.RSVP](#emberrsvp)
- [Ember.RSVP.Promise](#emberrsvppromise)
- [Ember.RSVP.all](#emberrsvpall)
- [Ember.RSVP.allSettled](#emberrsvpallsettled)
- [Ember.RSVP.defer](#emberrsvpdefer)
- [Ember.RSVP.denodeify](#emberrsvpdenodeify)
- [Ember.RSVP.filter](#emberrsvpfilter)
- [Ember.RSVP.hash](#emberrsvphash)
- [Ember.RSVP.hashSettled](#emberrsvphashsettled)
- [Ember.RSVP.map](#emberrsvpmap)
- [Ember.RSVP.off](#emberrsvpoff)
- [Ember.RSVP.on](#emberrsvpon)
- [Ember.RSVP.race](#emberrsvprace)
- [Ember.RSVP.reject](#emberrsvpreject)
- [Ember.RSVP.resolve](#emberrsvpresolve)
## Snippets
### `Ember.Application`
**Prefix:** `imApplication`

**Description**:
```
Ember.Application
```
**Generated code**:
```js
import Application from '@ember/application';
```
### `Ember.getOwner`
**Prefix:** `imgetOwner`

**Description**:
```
Ember.getOwner
```
**Generated code**:
```js
import { getOwner } from '@ember/application';
```
### `Ember.onLoad`
**Prefix:** `imonLoad`

**Description**:
```
Ember.onLoad
```
**Generated code**:
```js
import { onLoad } from '@ember/application';
```
### `Ember.runLoadHooks`
**Prefix:** `imrunLoadHooks`

**Description**:
```
Ember.runLoadHooks
```
**Generated code**:
```js
import { runLoadHooks } from '@ember/application';
```
### `Ember.setOwner`
**Prefix:** `imsetOwner`

**Description**:
```
Ember.setOwner
```
**Generated code**:
```js
import { setOwner } from '@ember/application';
```
### `Ember.DefaultResolver`
**Prefix:** `imGlobalsResolver`

**Description**:
```
Ember.DefaultResolver
```
**Generated code**:
```js
import GlobalsResolver from '@ember/application/globals-resolver';
```
### `Ember.ApplicationInstance`
**Prefix:** `imApplicationInstance`

**Description**:
```
Ember.ApplicationInstance
```
**Generated code**:
```js
import ApplicationInstance from '@ember/application/instance';
```
### `Ember.Namespace`
**Prefix:** `imNamespace`

**Description**:
```
Ember.Namespace
```
**Generated code**:
```js
import Namespace from '@ember/application/namespace';
```
### `Ember.Resolver`
**Prefix:** `imResolver`

**Description**:
```
Ember.Resolver
```
**Generated code**:
```js
import Resolver from '@ember/application/resolver';
```
### `Ember.Array`
**Prefix:** `imEmberArray`

**Description**:
```
Ember.Array
```
**Generated code**:
```js
import EmberArray from '@ember/array';
```
### `Ember.A`
**Prefix:** `imA`

**Description**:
```
Ember.A
```
**Generated code**:
```js
import { A } from '@ember/array';
```
### `Ember.isArray`
**Prefix:** `imisArray`

**Description**:
```
Ember.isArray
```
**Generated code**:
```js
import { isArray } from '@ember/array';
```
### `Ember.makeArray`
**Prefix:** `immakeArray`

**Description**:
```
Ember.makeArray
```
**Generated code**:
```js
import { makeArray } from '@ember/array';
```
### `Ember.MutableArray`
**Prefix:** `imMutableArray`

**Description**:
```
Ember.MutableArray
```
**Generated code**:
```js
import MutableArray from '@ember/array/mutable';
```
### `Ember.ArrayProxy`
**Prefix:** `imArrayProxy`

**Description**:
```
Ember.ArrayProxy
```
**Generated code**:
```js
import ArrayProxy from '@ember/array/proxy';
```
### `Ember.FEATURES`
**Prefix:** `imFEATURES`

**Description**:
```
Ember.FEATURES
```
**Generated code**:
```js
import { FEATURES } from '@ember/canary-features';
```
### `Ember.FEATURES.isEnabled`
**Prefix:** `imisEnabled`

**Description**:
```
Ember.FEATURES.isEnabled
```
**Generated code**:
```js
import { isEnabled } from '@ember/canary-features';
```
### `Ember.Component`
**Prefix:** `imComponent`

**Description**:
```
Ember.Component
```
**Generated code**:
```js
import Component from '@ember/component';
```
### `Ember._componentManagerCapabilities`
**Prefix:** `imcapabilities`

**Description**:
```
Ember._componentManagerCapabilities
```
**Generated code**:
```js
import { capabilities } from '@ember/component';
```
### `Ember._setComponentManager`
**Prefix:** `imsetComponentManager`

**Description**:
```
Ember._setComponentManager
```
**Generated code**:
```js
import { setComponentManager } from '@ember/component';
```
### `Ember._getComponentTemplate`
**Prefix:** `imgetComponentTemplate`

**Description**:
```
Ember._getComponentTemplate
```
**Generated code**:
```js
import { getComponentTemplate } from '@ember/component';
```
### `Ember._setComponentTemplate`
**Prefix:** `imsetComponentTemplate`

**Description**:
```
Ember._setComponentTemplate
```
**Generated code**:
```js
import { setComponentTemplate } from '@ember/component';
```
### `Ember._templateOnlyComponent`
**Prefix:** `imtemplateOnlyComponent`

**Description**:
```
Ember._templateOnlyComponent
```
**Generated code**:
```js
import templateOnlyComponent from '@ember/component/template-only';
```
### `Ember._setModifierManager`
**Prefix:** `imsetModifierManager`

**Description**:
```
Ember._setModifierManager
```
**Generated code**:
```js
import { setModifierManager } from '@ember/modifier';
```
### `Ember._modifierManagerCapabilities`
**Prefix:** `imcapabilities`

**Description**:
```
Ember._modifierManagerCapabilities
```
**Generated code**:
```js
import { capabilities } from '@ember/modifier';
```
### `Ember.Checkbox`
**Prefix:** `imCheckbox`

**Description**:
```
Ember.Checkbox
```
**Generated code**:
```js
import Checkbox from '@ember/component/checkbox';
```
### `Ember.Helper`
**Prefix:** `imHelper`

**Description**:
```
Ember.Helper
```
**Generated code**:
```js
import Helper from '@ember/component/helper';
```
### `Ember.Helper.helper`
**Prefix:** `imbuildHelper`

**Description**:
```
Ember.Helper.helper
```
**Generated code**:
```js
import { helper } from '@ember/component/helper';
```
### `Ember.TextArea`
**Prefix:** `imTextArea`

**Description**:
```
Ember.TextArea
```
**Generated code**:
```js
import TextArea from '@ember/component/text-area';
```
### `Ember.TextField`
**Prefix:** `imTextField`

**Description**:
```
Ember.TextField
```
**Generated code**:
```js
import TextField from '@ember/component/text-field';
```
### `Ember.Controller`
**Prefix:** `imController`

**Description**:
```
Ember.Controller
```
**Generated code**:
```js
import Controller from '@ember/controller';
```
### `Ember.inject.controller`
**Prefix:** `iminject`

**Description**:
```
Ember.inject.controller
```
**Generated code**:
```js
import { inject as controller } from '@ember/controller';
```
### `Ember.assert`
**Prefix:** `imassert`

**Description**:
```
Ember.assert
```
**Generated code**:
```js
import { assert } from '@ember/debug';
```
### `Ember.debug`
**Prefix:** `imdebug`

**Description**:
```
Ember.debug
```
**Generated code**:
```js
import { debug } from '@ember/debug';
```
### `Ember.inspect`
**Prefix:** `iminspect`

**Description**:
```
Ember.inspect
```
**Generated code**:
```js
import { inspect } from '@ember/debug';
```
### `Ember.Debug.registerDeprecationHandler`
**Prefix:** `imregisterDeprecationHandler`

**Description**:
```
Ember.Debug.registerDeprecationHandler
```
**Generated code**:
```js
import { registerDeprecationHandler } from '@ember/debug';
```
### `Ember.Debug.registerWarnHandler`
**Prefix:** `imregisterWarnHandler`

**Description**:
```
Ember.Debug.registerWarnHandler
```
**Generated code**:
```js
import { registerWarnHandler } from '@ember/debug';
```
### `Ember.runInDebug`
**Prefix:** `imrunInDebug`

**Description**:
```
Ember.runInDebug
```
**Generated code**:
```js
import { runInDebug } from '@ember/debug';
```
### `Ember.warn`
**Prefix:** `imwarn`

**Description**:
```
Ember.warn
```
**Generated code**:
```js
import { warn } from '@ember/debug';
```
### `Ember.ContainerDebugAdapter`
**Prefix:** `imContainerDebugAdapter`

**Description**:
```
Ember.ContainerDebugAdapter
```
**Generated code**:
```js
import ContainerDebugAdapter from '@ember/debug/container-debug-adapter';
```
### `Ember.DataAdapter`
**Prefix:** `imDataAdapter`

**Description**:
```
Ember.DataAdapter
```
**Generated code**:
```js
import DataAdapter from '@ember/debug/data-adapter';
```
### `Ember.Engine`
**Prefix:** `imEngine`

**Description**:
```
Ember.Engine
```
**Generated code**:
```js
import Engine from '@ember/engine';
```
### `Ember.getEngineParent`
**Prefix:** `imgetEngineParent`

**Description**:
```
Ember.getEngineParent
```
**Generated code**:
```js
import { getEngineParent } from '@ember/engine';
```
### `Ember.EngineInstance`
**Prefix:** `imEngineInstance`

**Description**:
```
Ember.EngineInstance
```
**Generated code**:
```js
import EngineInstance from '@ember/engine/instance';
```
### `Ember.Enumerable`
**Prefix:** `imEnumerable`

**Description**:
```
Ember.Enumerable
```
**Generated code**:
```js
import Enumerable from '@ember/enumerable';
```
### `Ember.Error`
**Prefix:** `imEmberError`

**Description**:
```
Ember.Error
```
**Generated code**:
```js
import EmberError from '@ember/error';
```
### `Ember.Instrumentation.instrument`
**Prefix:** `iminstrument`

**Description**:
```
Ember.Instrumentation.instrument
```
**Generated code**:
```js
import { instrument } from '@ember/instrumentation';
```
### `Ember.Instrumentation.reset`
**Prefix:** `imreset`

**Description**:
```
Ember.Instrumentation.reset
```
**Generated code**:
```js
import { reset } from '@ember/instrumentation';
```
### `Ember.Instrumentation.subscribe`
**Prefix:** `imsubscribe`

**Description**:
```
Ember.Instrumentation.subscribe
```
**Generated code**:
```js
import { subscribe } from '@ember/instrumentation';
```
### `Ember.Instrumentation.unsubscribe`
**Prefix:** `imunsubscribe`

**Description**:
```
Ember.Instrumentation.unsubscribe
```
**Generated code**:
```js
import { unsubscribe } from '@ember/instrumentation';
```
### `Ember.Map`
**Prefix:** `imEmberMap`

**Description**:
```
Ember.Map
```
**Generated code**:
```js
import EmberMap from '@ember/map';
```
### `Ember.MapWithDefault`
**Prefix:** `imMapWithDefault`

**Description**:
```
Ember.MapWithDefault
```
**Generated code**:
```js
import MapWithDefault from '@ember/map/with-default';
```
### `Ember.Object`
**Prefix:** `imEmberObject`

**Description**:
```
Ember.Object
```
**Generated code**:
```js
import EmberObject from '@ember/object';
```
### `Ember._action`
**Prefix:** `imaction`

**Description**:
```
Ember._action
```
**Generated code**:
```js
import { action } from '@ember/object';
```
### `Ember.aliasMethod`
**Prefix:** `imaliasMethod`

**Description**:
```
Ember.aliasMethod
```
**Generated code**:
```js
import { aliasMethod } from '@ember/object';
```
### `Ember.computed`
**Prefix:** `imcomputed`

**Description**:
```
Ember.computed
```
**Generated code**:
```js
import { computed } from '@ember/object';
```
### `Ember.defineProperty`
**Prefix:** `imdefineProperty`

**Description**:
```
Ember.defineProperty
```
**Generated code**:
```js
import { defineProperty } from '@ember/object';
```
### `Ember.get`
**Prefix:** `imget`

**Description**:
```
Ember.get
```
**Generated code**:
```js
import { get } from '@ember/object';
```
### `Ember.getProperties`
**Prefix:** `imgetProperties`

**Description**:
```
Ember.getProperties
```
**Generated code**:
```js
import { getProperties } from '@ember/object';
```
### `Ember.getWithDefault`
**Prefix:** `imgetWithDefault`

**Description**:
```
Ember.getWithDefault
```
**Generated code**:
```js
import { getWithDefault } from '@ember/object';
```
### `Ember.notifyPropertyChange`
**Prefix:** `imnotifyPropertyChange`

**Description**:
```
Ember.notifyPropertyChange
```
**Generated code**:
```js
import { notifyPropertyChange } from '@ember/object';
```
### `Ember.observer`
**Prefix:** `imobserver`

**Description**:
```
Ember.observer
```
**Generated code**:
```js
import { observer } from '@ember/object';
```
### `Ember.set`
**Prefix:** `imset`

**Description**:
```
Ember.set
```
**Generated code**:
```js
import { set } from '@ember/object';
```
### `Ember.setProperties`
**Prefix:** `imsetProperties`

**Description**:
```
Ember.setProperties
```
**Generated code**:
```js
import { setProperties } from '@ember/object';
```
### `Ember.trySet`
**Prefix:** `imtrySet`

**Description**:
```
Ember.trySet
```
**Generated code**:
```js
import { trySet } from '@ember/object';
```
### `Ember._dependentKeyCompat`
**Prefix:** `imdependentKeyCompat`

**Description**:
```
Ember._dependentKeyCompat
```
**Generated code**:
```js
import { dependentKeyCompat } from '@ember/object/compat';
```
### `Ember.ComputedProperty`
**Prefix:** `imComputedProperty`

**Description**:
```
Ember.ComputedProperty
```
**Generated code**:
```js
import ComputedProperty from '@ember/object/computed';
```
### `Ember.computed.alias`
**Prefix:** `imalias`

**Description**:
```
Ember.computed.alias
```
**Generated code**:
```js
import { alias } from '@ember/object/computed';
```
### `Ember.computed.and`
**Prefix:** `imand`

**Description**:
```
Ember.computed.and
```
**Generated code**:
```js
import { and } from '@ember/object/computed';
```
### `Ember.computed.bool`
**Prefix:** `imbool`

**Description**:
```
Ember.computed.bool
```
**Generated code**:
```js
import { bool } from '@ember/object/computed';
```
### `Ember.computed.collect`
**Prefix:** `imcollect`

**Description**:
```
Ember.computed.collect
```
**Generated code**:
```js
import { collect } from '@ember/object/computed';
```
### `Ember.computed.deprecatingAlias`
**Prefix:** `imdeprecatingAlias`

**Description**:
```
Ember.computed.deprecatingAlias
```
**Generated code**:
```js
import { deprecatingAlias } from '@ember/object/computed';
```
### `Ember.computed.empty`
**Prefix:** `imempty`

**Description**:
```
Ember.computed.empty
```
**Generated code**:
```js
import { empty } from '@ember/object/computed';
```
### `Ember.computed.equal`
**Prefix:** `imequal`

**Description**:
```
Ember.computed.equal
```
**Generated code**:
```js
import { equal } from '@ember/object/computed';
```
### `Ember.expandProperties`
**Prefix:** `imexpandProperties`

**Description**:
```
Ember.expandProperties
```
**Generated code**:
```js
import { expandProperties } from '@ember/object/computed';
```
### `Ember.computed.filter`
**Prefix:** `imfilter`

**Description**:
```
Ember.computed.filter
```
**Generated code**:
```js
import { filter } from '@ember/object/computed';
```
### `Ember.computed.filterBy`
**Prefix:** `imfilterBy`

**Description**:
```
Ember.computed.filterBy
```
**Generated code**:
```js
import { filterBy } from '@ember/object/computed';
```
### `Ember.computed.filterProperty`
**Prefix:** `imfilterProperty`

**Description**:
```
Ember.computed.filterProperty
```
**Generated code**:
```js
import { filterProperty } from '@ember/object/computed';
```
### `Ember.computed.gt`
**Prefix:** `imgt`

**Description**:
```
Ember.computed.gt
```
**Generated code**:
```js
import { gt } from '@ember/object/computed';
```
### `Ember.computed.gte`
**Prefix:** `imgte`

**Description**:
```
Ember.computed.gte
```
**Generated code**:
```js
import { gte } from '@ember/object/computed';
```
### `Ember.computed.intersect`
**Prefix:** `imintersect`

**Description**:
```
Ember.computed.intersect
```
**Generated code**:
```js
import { intersect } from '@ember/object/computed';
```
### `Ember.computed.lt`
**Prefix:** `imlt`

**Description**:
```
Ember.computed.lt
```
**Generated code**:
```js
import { lt } from '@ember/object/computed';
```
### `Ember.computed.lte`
**Prefix:** `imlte`

**Description**:
```
Ember.computed.lte
```
**Generated code**:
```js
import { lte } from '@ember/object/computed';
```
### `Ember.computed.map`
**Prefix:** `immap`

**Description**:
```
Ember.computed.map
```
**Generated code**:
```js
import { map } from '@ember/object/computed';
```
### `Ember.computed.mapBy`
**Prefix:** `immapBy`

**Description**:
```
Ember.computed.mapBy
```
**Generated code**:
```js
import { mapBy } from '@ember/object/computed';
```
### `Ember.computed.mapProperty`
**Prefix:** `immapProperty`

**Description**:
```
Ember.computed.mapProperty
```
**Generated code**:
```js
import { mapProperty } from '@ember/object/computed';
```
### `Ember.computed.match`
**Prefix:** `immatch`

**Description**:
```
Ember.computed.match
```
**Generated code**:
```js
import { match } from '@ember/object/computed';
```
### `Ember.computed.max`
**Prefix:** `immax`

**Description**:
```
Ember.computed.max
```
**Generated code**:
```js
import { max } from '@ember/object/computed';
```
### `Ember.computed.min`
**Prefix:** `immin`

**Description**:
```
Ember.computed.min
```
**Generated code**:
```js
import { min } from '@ember/object/computed';
```
### `Ember.computed.none`
**Prefix:** `imnone`

**Description**:
```
Ember.computed.none
```
**Generated code**:
```js
import { none } from '@ember/object/computed';
```
### `Ember.computed.not`
**Prefix:** `imnot`

**Description**:
```
Ember.computed.not
```
**Generated code**:
```js
import { not } from '@ember/object/computed';
```
### `Ember.computed.notEmpty`
**Prefix:** `imnotEmpty`

**Description**:
```
Ember.computed.notEmpty
```
**Generated code**:
```js
import { notEmpty } from '@ember/object/computed';
```
### `Ember.computed.oneWay`
**Prefix:** `imoneWay`

**Description**:
```
Ember.computed.oneWay
```
**Generated code**:
```js
import { oneWay } from '@ember/object/computed';
```
### `Ember.computed.or`
**Prefix:** `imor`

**Description**:
```
Ember.computed.or
```
**Generated code**:
```js
import { or } from '@ember/object/computed';
```
### `Ember.computed.readOnly`
**Prefix:** `imreadOnly`

**Description**:
```
Ember.computed.readOnly
```
**Generated code**:
```js
import { readOnly } from '@ember/object/computed';
```
### `Ember.computed.reads`
**Prefix:** `imreads`

**Description**:
```
Ember.computed.reads
```
**Generated code**:
```js
import { reads } from '@ember/object/computed';
```
### `Ember.computed.setDiff`
**Prefix:** `imsetDiff`

**Description**:
```
Ember.computed.setDiff
```
**Generated code**:
```js
import { setDiff } from '@ember/object/computed';
```
### `Ember.computed.sort`
**Prefix:** `imsort`

**Description**:
```
Ember.computed.sort
```
**Generated code**:
```js
import { sort } from '@ember/object/computed';
```
### `Ember.computed.sum`
**Prefix:** `imsum`

**Description**:
```
Ember.computed.sum
```
**Generated code**:
```js
import { sum } from '@ember/object/computed';
```
### `Ember.computed.union`
**Prefix:** `imunion`

**Description**:
```
Ember.computed.union
```
**Generated code**:
```js
import { union } from '@ember/object/computed';
```
### `Ember.computed.uniq`
**Prefix:** `imuniq`

**Description**:
```
Ember.computed.uniq
```
**Generated code**:
```js
import { uniq } from '@ember/object/computed';
```
### `Ember.computed.uniqBy`
**Prefix:** `imuniqBy`

**Description**:
```
Ember.computed.uniqBy
```
**Generated code**:
```js
import { uniqBy } from '@ember/object/computed';
```
### `Ember.CoreObject`
**Prefix:** `imCoreObject`

**Description**:
```
Ember.CoreObject
```
**Generated code**:
```js
import CoreObject from '@ember/object/core';
```
### `Ember.Evented`
**Prefix:** `imEvented`

**Description**:
```
Ember.Evented
```
**Generated code**:
```js
import Evented from '@ember/object/evented';
```
### `Ember.on`
**Prefix:** `imon`

**Description**:
```
Ember.on
```
**Generated code**:
```js
import { on } from '@ember/object/evented';
```
### `Ember.addListener`
**Prefix:** `imaddListener`

**Description**:
```
Ember.addListener
```
**Generated code**:
```js
import { addListener } from '@ember/object/events';
```
### `Ember.removeListener`
**Prefix:** `imremoveListener`

**Description**:
```
Ember.removeListener
```
**Generated code**:
```js
import { removeListener } from '@ember/object/events';
```
### `Ember.sendEvent`
**Prefix:** `imsendEvent`

**Description**:
```
Ember.sendEvent
```
**Generated code**:
```js
import { sendEvent } from '@ember/object/events';
```
### `Ember.cacheFor`
**Prefix:** `imcacheFor`

**Description**:
```
Ember.cacheFor
```
**Generated code**:
```js
import { cacheFor } from '@ember/object/internals';
```
### `Ember.copy`
**Prefix:** `imcopy`

**Description**:
```
Ember.copy
```
**Generated code**:
```js
import { copy } from '@ember/object/internals';
```
### `Ember.guidFor`
**Prefix:** `imguidFor`

**Description**:
```
Ember.guidFor
```
**Generated code**:
```js
import { guidFor } from '@ember/object/internals';
```
### `Ember.Mixin`
**Prefix:** `imMixin`

**Description**:
```
Ember.Mixin
```
**Generated code**:
```js
import Mixin from '@ember/object/mixin';
```
### `Ember.Observable`
**Prefix:** `imObservable`

**Description**:
```
Ember.Observable
```
**Generated code**:
```js
import Observable from '@ember/object/observable';
```
### `Ember.addObserver`
**Prefix:** `imaddObserver`

**Description**:
```
Ember.addObserver
```
**Generated code**:
```js
import { addObserver } from '@ember/object/observers';
```
### `Ember.removeObserver`
**Prefix:** `imremoveObserver`

**Description**:
```
Ember.removeObserver
```
**Generated code**:
```js
import { removeObserver } from '@ember/object/observers';
```
### `Ember.PromiseProxyMixin`
**Prefix:** `imPromiseProxyMixin`

**Description**:
```
Ember.PromiseProxyMixin
```
**Generated code**:
```js
import PromiseProxyMixin from '@ember/object/promise-proxy-mixin';
```
### `Ember.ObjectProxy`
**Prefix:** `imObjectProxy`

**Description**:
```
Ember.ObjectProxy
```
**Generated code**:
```js
import ObjectProxy from '@ember/object/proxy';
```
### `Ember.assign`
**Prefix:** `imassign`

**Description**:
```
Ember.assign
```
**Generated code**:
```js
import { assign } from '@ember/polyfills';
```
### `Ember.create`
**Prefix:** `imcreate`

**Description**:
```
Ember.create
```
**Generated code**:
```js
import { create } from '@ember/polyfills';
```
### `Ember.platform.hasPropertyAccessors`
**Prefix:** `imhasPropertyAccessors`

**Description**:
```
Ember.platform.hasPropertyAccessors
```
**Generated code**:
```js
import { hasPropertyAccessors } from '@ember/polyfills';
```
### `Ember.keys`
**Prefix:** `imkeys`

**Description**:
```
Ember.keys
```
**Generated code**:
```js
import { keys } from '@ember/polyfills';
```
### `Ember.merge`
**Prefix:** `immerge`

**Description**:
```
Ember.merge
```
**Generated code**:
```js
import { merge } from '@ember/polyfills';
```
### `Ember.AutoLocation`
**Prefix:** `imAutoLocation`

**Description**:
```
Ember.AutoLocation
```
**Generated code**:
```js
import AutoLocation from '@ember/routing/auto-location';
```
### `Ember.HashLocation`
**Prefix:** `imHashLocation`

**Description**:
```
Ember.HashLocation
```
**Generated code**:
```js
import HashLocation from '@ember/routing/hash-location';
```
### `Ember.HistoryLocation`
**Prefix:** `imHistoryLocation`

**Description**:
```
Ember.HistoryLocation
```
**Generated code**:
```js
import HistoryLocation from '@ember/routing/history-location';
```
### `Ember.LinkComponent`
**Prefix:** `imLinkComponent`

**Description**:
```
Ember.LinkComponent
```
**Generated code**:
```js
import LinkComponent from '@ember/routing/link-component';
```
### `Ember.Location`
**Prefix:** `imLocation`

**Description**:
```
Ember.Location
```
**Generated code**:
```js
import Location from '@ember/routing/location';
```
### `Ember.NoneLocation`
**Prefix:** `imNoneLocation`

**Description**:
```
Ember.NoneLocation
```
**Generated code**:
```js
import NoneLocation from '@ember/routing/none-location';
```
### `Ember.Route`
**Prefix:** `imRoute`

**Description**:
```
Ember.Route
```
**Generated code**:
```js
import Route from '@ember/routing/route';
```
### `Ember.Router`
**Prefix:** `imEmberRouter`

**Description**:
```
Ember.Router
```
**Generated code**:
```js
import EmberRouter from '@ember/routing/router';
```
### `Ember.run.begin`
**Prefix:** `imbegin`

**Description**:
```
Ember.run.begin
```
**Generated code**:
```js
import { begin } from '@ember/runloop';
```
### `Ember.run.bind`
**Prefix:** `imbind`

**Description**:
```
Ember.run.bind
```
**Generated code**:
```js
import { bind } from '@ember/runloop';
```
### `Ember.run.cancel`
**Prefix:** `imcancel`

**Description**:
```
Ember.run.cancel
```
**Generated code**:
```js
import { cancel } from '@ember/runloop';
```
### `Ember.run.debounce`
**Prefix:** `imdebounce`

**Description**:
```
Ember.run.debounce
```
**Generated code**:
```js
import { debounce } from '@ember/runloop';
```
### `Ember.run.end`
**Prefix:** `imend`

**Description**:
```
Ember.run.end
```
**Generated code**:
```js
import { end } from '@ember/runloop';
```
### `Ember.run.join`
**Prefix:** `imjoin`

**Description**:
```
Ember.run.join
```
**Generated code**:
```js
import { join } from '@ember/runloop';
```
### `Ember.run.later`
**Prefix:** `imlater`

**Description**:
```
Ember.run.later
```
**Generated code**:
```js
import { later } from '@ember/runloop';
```
### `Ember.run.next`
**Prefix:** `imnext`

**Description**:
```
Ember.run.next
```
**Generated code**:
```js
import { next } from '@ember/runloop';
```
### `Ember.run.once`
**Prefix:** `imonce`

**Description**:
```
Ember.run.once
```
**Generated code**:
```js
import { once } from '@ember/runloop';
```
### `Ember.run`
**Prefix:** `imrun`

**Description**:
```
Ember.run
```
**Generated code**:
```js
import { run } from '@ember/runloop';
```
### `Ember.run.schedule`
**Prefix:** `imschedule`

**Description**:
```
Ember.run.schedule
```
**Generated code**:
```js
import { schedule } from '@ember/runloop';
```
### `Ember.run.scheduleOnce`
**Prefix:** `imscheduleOnce`

**Description**:
```
Ember.run.scheduleOnce
```
**Generated code**:
```js
import { scheduleOnce } from '@ember/runloop';
```
### `Ember.run.throttle`
**Prefix:** `imthrottle`

**Description**:
```
Ember.run.throttle
```
**Generated code**:
```js
import { throttle } from '@ember/runloop';
```
### `Ember.Service`
**Prefix:** `imService`

**Description**:
```
Ember.Service
```
**Generated code**:
```js
import Service from '@ember/service';
```
### `Ember.inject.service`
**Prefix:** `iminject`

**Description**:
```
Ember.inject.service
```
**Generated code**:
```js
import { inject as service } from '@ember/service';
```
### `Ember.String.camelize`
**Prefix:** `imcamelize`

**Description**:
```
Ember.String.camelize
```
**Generated code**:
```js
import { camelize } from '@ember/string';
```
### `Ember.String.capitalize`
**Prefix:** `imcapitalize`

**Description**:
```
Ember.String.capitalize
```
**Generated code**:
```js
import { capitalize } from '@ember/string';
```
### `Ember.String.classify`
**Prefix:** `imclassify`

**Description**:
```
Ember.String.classify
```
**Generated code**:
```js
import { classify } from '@ember/string';
```
### `Ember.String.dasherize`
**Prefix:** `imdasherize`

**Description**:
```
Ember.String.dasherize
```
**Generated code**:
```js
import { dasherize } from '@ember/string';
```
### `Ember.String.decamelize`
**Prefix:** `imdecamelize`

**Description**:
```
Ember.String.decamelize
```
**Generated code**:
```js
import { decamelize } from '@ember/string';
```
### `Ember.String.fmt`
**Prefix:** `imfmt`

**Description**:
```
Ember.String.fmt
```
**Generated code**:
```js
import { fmt } from '@ember/string';
```
### `Ember.String.loc`
**Prefix:** `imloc`

**Description**:
```
Ember.String.loc
```
**Generated code**:
```js
import { loc } from '@ember/string';
```
### `Ember.String.underscore`
**Prefix:** `imunderscore`

**Description**:
```
Ember.String.underscore
```
**Generated code**:
```js
import { underscore } from '@ember/string';
```
### `Ember.String.w`
**Prefix:** `imw`

**Description**:
```
Ember.String.w
```
**Generated code**:
```js
import { w } from '@ember/string';
```
### `Ember.String.htmlSafe`
**Prefix:** `imhtmlSafe`

**Description**:
```
Ember.String.htmlSafe
```
**Generated code**:
```js
import { htmlSafe } from '@ember/template';
```
### `Ember.String.isHTMLSafe`
**Prefix:** `imisHTMLSafe`

**Description**:
```
Ember.String.isHTMLSafe
```
**Generated code**:
```js
import { isHTMLSafe } from '@ember/template';
```
### `Ember.HTMLBars.compile`
**Prefix:** `imcompileTemplate`

**Description**:
```
Ember.HTMLBars.compile
```
**Generated code**:
```js
import { compileTemplate } from '@ember/template-compilation';
```
### `Ember.HTMLBars.precompile`
**Prefix:** `imprecompileTemplate`

**Description**:
```
Ember.HTMLBars.precompile
```
**Generated code**:
```js
import { precompileTemplate } from '@ember/template-compilation';
```
### `Ember.HTMLBars.template`
**Prefix:** `imcreateTemplateFactory`

**Description**:
```
Ember.HTMLBars.template
```
**Generated code**:
```js
import { createTemplateFactory } from '@ember/template-factory';
```
### `Ember.Test.registerAsyncHelper`
**Prefix:** `imregisterAsyncHelper`

**Description**:
```
Ember.Test.registerAsyncHelper
```
**Generated code**:
```js
import { registerAsyncHelper } from '@ember/test';
```
### `Ember.Test.registerHelper`
**Prefix:** `imregisterHelper`

**Description**:
```
Ember.Test.registerHelper
```
**Generated code**:
```js
import { registerHelper } from '@ember/test';
```
### `Ember.Test.registerWaiter`
**Prefix:** `imregisterWaiter`

**Description**:
```
Ember.Test.registerWaiter
```
**Generated code**:
```js
import { registerWaiter } from '@ember/test';
```
### `Ember.Test.unregisterHelper`
**Prefix:** `imunregisterHelper`

**Description**:
```
Ember.Test.unregisterHelper
```
**Generated code**:
```js
import { unregisterHelper } from '@ember/test';
```
### `Ember.Test.unregisterWaiter`
**Prefix:** `imunregisterWaiter`

**Description**:
```
Ember.Test.unregisterWaiter
```
**Generated code**:
```js
import { unregisterWaiter } from '@ember/test';
```
### `Ember.Test.Adapter`
**Prefix:** `imTestAdapter`

**Description**:
```
Ember.Test.Adapter
```
**Generated code**:
```js
import TestAdapter from '@ember/test/adapter';
```
### `Ember.compare`
**Prefix:** `imcompare`

**Description**:
```
Ember.compare
```
**Generated code**:
```js
import { compare } from '@ember/utils';
```
### `Ember.isBlank`
**Prefix:** `imisBlank`

**Description**:
```
Ember.isBlank
```
**Generated code**:
```js
import { isBlank } from '@ember/utils';
```
### `Ember.isEmpty`
**Prefix:** `imisEmpty`

**Description**:
```
Ember.isEmpty
```
**Generated code**:
```js
import { isEmpty } from '@ember/utils';
```
### `Ember.isEqual`
**Prefix:** `imisEqual`

**Description**:
```
Ember.isEqual
```
**Generated code**:
```js
import { isEqual } from '@ember/utils';
```
### `Ember.isNone`
**Prefix:** `imisNone`

**Description**:
```
Ember.isNone
```
**Generated code**:
```js
import { isNone } from '@ember/utils';
```
### `Ember.isPresent`
**Prefix:** `imisPresent`

**Description**:
```
Ember.isPresent
```
**Generated code**:
```js
import { isPresent } from '@ember/utils';
```
### `Ember.tryInvoke`
**Prefix:** `imtryInvoke`

**Description**:
```
Ember.tryInvoke
```
**Generated code**:
```js
import { tryInvoke } from '@ember/utils';
```
### `Ember.typeOf`
**Prefix:** `imtypeOf`

**Description**:
```
Ember.typeOf
```
**Generated code**:
```js
import { typeOf } from '@ember/utils';
```
### `Ember.VERSION`
**Prefix:** `imVERSION`

**Description**:
```
Ember.VERSION
```
**Generated code**:
```js
import { VERSION } from '@ember/version';
```
### `Ember._tracked`
**Prefix:** `imtracked`

**Description**:
```
Ember._tracked
```
**Generated code**:
```js
import { tracked } from '@glimmer/tracking';
```
### `Ember.$`
**Prefix:** `im$`

**Description**:
```
Ember.$
```
**Generated code**:
```js
import $ from 'jquery';
```
### `Ember.RSVP`
**Prefix:** `imRSVP`

**Description**:
```
Ember.RSVP
```
**Generated code**:
```js
import RSVP from 'rsvp';
```
### `Ember.RSVP.Promise`
**Prefix:** `imPromise`

**Description**:
```
Ember.RSVP.Promise
```
**Generated code**:
```js
import { Promise } from 'rsvp';
```
### `Ember.RSVP.all`
**Prefix:** `imall`

**Description**:
```
Ember.RSVP.all
```
**Generated code**:
```js
import { all } from 'rsvp';
```
### `Ember.RSVP.allSettled`
**Prefix:** `imallSettled`

**Description**:
```
Ember.RSVP.allSettled
```
**Generated code**:
```js
import { allSettled } from 'rsvp';
```
### `Ember.RSVP.defer`
**Prefix:** `imdefer`

**Description**:
```
Ember.RSVP.defer
```
**Generated code**:
```js
import { defer } from 'rsvp';
```
### `Ember.RSVP.denodeify`
**Prefix:** `imdenodeify`

**Description**:
```
Ember.RSVP.denodeify
```
**Generated code**:
```js
import { denodeify } from 'rsvp';
```
### `Ember.RSVP.filter`
**Prefix:** `imfilter`

**Description**:
```
Ember.RSVP.filter
```
**Generated code**:
```js
import { filter } from 'rsvp';
```
### `Ember.RSVP.hash`
**Prefix:** `imhash`

**Description**:
```
Ember.RSVP.hash
```
**Generated code**:
```js
import { hash } from 'rsvp';
```
### `Ember.RSVP.hashSettled`
**Prefix:** `imhashSettled`

**Description**:
```
Ember.RSVP.hashSettled
```
**Generated code**:
```js
import { hashSettled } from 'rsvp';
```
### `Ember.RSVP.map`
**Prefix:** `immap`

**Description**:
```
Ember.RSVP.map
```
**Generated code**:
```js
import { map } from 'rsvp';
```
### `Ember.RSVP.off`
**Prefix:** `imoff`

**Description**:
```
Ember.RSVP.off
```
**Generated code**:
```js
import { off } from 'rsvp';
```
### `Ember.RSVP.on`
**Prefix:** `imon`

**Description**:
```
Ember.RSVP.on
```
**Generated code**:
```js
import { on } from 'rsvp';
```
### `Ember.RSVP.race`
**Prefix:** `imrace`

**Description**:
```
Ember.RSVP.race
```
**Generated code**:
```js
import { race } from 'rsvp';
```
### `Ember.RSVP.reject`
**Prefix:** `imreject`

**Description**:
```
Ember.RSVP.reject
```
**Generated code**:
```js
import { reject } from 'rsvp';
```
### `Ember.RSVP.resolve`
**Prefix:** `imresolve`

**Description**:
```
Ember.RSVP.resolve
```
**Generated code**:
```js
import { resolve } from 'rsvp';
```