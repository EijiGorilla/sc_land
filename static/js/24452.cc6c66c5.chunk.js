"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[24452,62078],{15909:(e,t,r)=>{r.d(t,{D:()=>o});var a=r(80292);function o(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:o}=e;(0,a.l)(t)&&o&&t.originOf(r)!==o&&t.updateOrigin(r,o)}))}},80292:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>a})},24452:(e,t,r)=>{r.d(t,{save:()=>h,saveAs:()=>v});var a=r(65286),o=r(32698),n=r(73117),s=r(40739);const i="Media Layer",c="media-layer-save",l="media-layer-save-as",u=["media-layer:unsupported-source"];function p(e){return{isValid:"media"===e.type,errorMessage:"Layer.type should be 'media'"}}function d(e){return(0,o.Y)(e,"portal-item",!0)}function f(e){return e.layerJSON}async function m(e,t){const{title:r,fullExtent:a}=e;t.title||(t.title=r),t.extent=a?await(0,n.$o)(a):null,(0,n.ck)(t,n.hz.METADATA)}async function h(e,t){return(0,a.a1)({layer:e,itemType:i,validateLayer:p,createJSONContext:e=>d(e),createItemData:f,errorNamePrefix:c,supplementalUnsupportedErrors:u,saveResources:(t,r)=>(0,s.H)(e.resourceReferences,r)},t)}async function v(e,t,r){return(0,a.po)({layer:e,itemType:i,validateLayer:p,createJSONContext:e=>d(e),createItemData:f,errorNamePrefix:l,supplementalUnsupportedErrors:u,newItem:t,setItemProperties:m,saveResources:(t,r)=>(0,s.H)(e.resourceReferences,r)},r)}},65286:(e,t,r)=>{r.d(t,{a1:()=>g,po:()=>I});var a=r(10064),o=r(15909),n=r(7575),s=r(98995),i=r(32698),c=r(73117),l=r(76926),u=r(9634);async function p(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),function(e,t,r){const o=r(e);if(!o.isValid)throw new a.Z("".concat(t,":invalid-parameters"),o.errorMessage,{layer:e})}(t,r,o)}function d(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function f(e){const{item:t,errorNamePrefix:r,layer:o,validateItem:n}=e;if((0,l.w)(t),function(e){const{item:t,itemType:r,additionalItemType:o,errorNamePrefix:n,layer:s}=e,i=[r];if(o&&i.push(o),!i.includes(t.type)){const e=i.map((e=>"'".concat(e,"'"))).join(", ");throw new a.Z("".concat(n,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:s})}}(e),n){const e=n(t);if(!e.isValid)throw new a.Z("".concat(r,":invalid-parameters"),e.errorMessage,{layer:o})}}function m(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new a.Z("".concat(r,":portal-item-not-set"),d(t,"requires the portalItem property to be set"));if(!o.loaded)throw new a.Z("".concat(r,":portal-item-not-loaded"),d(t,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:o})}function h(e){var t,r,a,o;const{newItem:i,itemType:c}=e;let l=s.default.from(i);return l.id&&(l=l.clone(),l.id=null),null!==(r=(t=l).type)&&void 0!==r||(t.type=c),null!==(o=(a=l).portal)&&void 0!==o||(a.portal=n.Z.getDefault()),f({...e,item:l}),l}function v(e){return(0,i.Y)(e,"portal-item")}async function w(e,t,r){var a,o;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const n=e.write({},t);return await Promise.all(null!==(a=null===(o=t.resources)||void 0===o?void 0:o.pendingOperations)&&void 0!==a?a:[]),(0,u.z)(t,{errorName:"layer-write:unsupported"},r),n}function y(e){(0,c.qj)(e,c.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function g(e,t){const{layer:r,createItemData:a,createJSONContext:n,saveResources:s,supplementalUnsupportedErrors:i}=e;await p(e),m(e);const c=r.portalItem,l=n?n(c):v(c),u=await w(r,l,{...t,supplementalUnsupportedErrors:i}),d=await a({layer:r,layerJSON:u},c);return y(c),await c.update({data:d}),(0,o.D)(l),await(null===s||void 0===s?void 0:s(c,l)),c}async function I(e,t){const{layer:r,createItemData:a,createJSONContext:n,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:c}=e;await p(e);const l=h(e),u=n?n(l):v(l),d=await w(r,u,{...t,supplementalUnsupportedErrors:c}),f=await a({layer:r,layerJSON:d},l);return await s(r,l),y(l),await async function(e,t,r){var a;const o=e.portal;await o.signIn(),await(null===(a=o.user)||void 0===a?void 0:a.addItem({item:e,data:t,folder:null===r||void 0===r?void 0:r.folder}))}(l,f,t),r.portalItem=l,(0,o.D)(u),await(null===i||void 0===i?void 0:i(l,u)),l}},32698:(e,t,r)=>{r.d(t,{Y:()=>s,h:()=>n});var a=r(35995),o=r(7575);function n(e,t){return{...i(e,t),readResourcePaths:[]}}function s(e,t,r){const o=(0,a.mN)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:o?{rootPath:o.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,a.mN)(e.itemUrl),portal:e.portal||o.Z.getDefault(),portalItem:e}}},62078:(e,t,r)=>{r.d(t,{FO:()=>d,W7:()=>f,addOrUpdateResources:()=>i,fetchResources:()=>s,removeAllResources:()=>l,removeResource:()=>c});var a=r(76200),o=r(10064),n=r(35995);async function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const a=(0,n.v_)(e.itemUrl,"resources"),{start:o=1,num:s=10,sortOrder:i="asc",sortField:c="resource"}=t,l={query:{start:o,num:s,sortOrder:i,sortField:c,token:e.apiKey},signal:null===r||void 0===r?void 0:r.signal},u=await e.portal.request(a,l);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:a,resource:o}=t;return{created:new Date(r),size:a,resource:e.resourceFromPath(o)}}))}}async function i(e,t,r,a){const s=new Map;for(const{resource:n,content:c,compress:l,access:p}of t){if(!n.hasPath())throw new o.Z("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");const[e,t]=u(n.path),a="".concat(e,"/").concat(null!==l&&void 0!==l?l:"","/").concat(null!==p&&void 0!==p?p:"");s.has(a)||s.set(a,{prefix:e,compress:l,access:p,files:[]}),s.get(a).files.push({fileName:t,content:c})}await e.load(a);const i=(0,n.v_)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:o,compress:n,access:c,files:l}of s.values()){const t=25;for(let r=0;r<l.length;r+=t){const s=l.slice(r,r+t),u=new FormData;o&&"."!==o&&u.append("resourcesPrefix",o),n&&u.append("compress","true"),c&&u.append("access",c);let p=0;for(const{fileName:e,content:t}of s)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(i,{method:"post",body:u,signal:null===a||void 0===a?void 0:a.signal})}}}async function c(e,t,r){if(!t.hasPath())throw new o.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const a=(0,n.v_)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:t.path},signal:null===r||void 0===r?void 0:r.signal}),t.portalItem=null}async function l(e,t){await e.load(t);const r=(0,n.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=(0,n.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[a,o]=u(t);return[a,o,r]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,a.Z)(e.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[r,,a]=p(e.path);return e.portalItem.resourceFromPath((0,n.v_)(r,t+a))}},40739:(e,t,r)=>{r.d(t,{H:()=>i,b:()=>c});var a=r(10064),o=r(66978),n=r(71907),s=r(62078);async function i(e,t,r){const a=await l(e,t,r);await u(a,t,r)}async function c(e,t,r,a,o){const n=await l(r,a,o);await e.update({data:t}),await u(n,a,o)}async function l(e,t,i){if(null===t||void 0===t||!t.resources)return;const c=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const l=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,p=[];l.forEach((t=>{c.delete(t),e.paths.push(t)}));const d=[],f=[],m=[];for(const r of t.resources.toUpdate)if(c.delete(r.resource.path),l.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:a,finish:o}=r,i=(0,s.W7)(t,(0,n.DO)());e.paths.push(i.path),d.push({resource:i,content:await(0,s.FO)(a),compress:r.compress}),o&&m.push((()=>o(i)))}else{e.paths.push(r.resource.path),f.push({resource:r.resource,content:await(0,s.FO)(r.content),compress:r.compress});const t=r.finish;t&&m.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),c.has(r.resource.path))c.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,s.FO)(r.content),compress:r.compress});const e=r.finish;e&&m.push((()=>e(r.resource)))}if(d.length||f.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,62078));await e(t.portalItem,d,"add",i),await e(t.portalItem,f,"update",i)}if(m.forEach((e=>e())),0===p.length)return c;const h=await(0,o.UO)(p);if((0,o.k_)(i),h.length>0)throw new a.Z("save:resources","Failed to save one or more resources",{errors:h});return c}async function u(e,t,r){if(!e||!t.portalItem)return;const a=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);a.push(e.portalItem.removeResource(e,r))}await(0,o.as)(a)}},76926:(e,t,r)=>{r.d(t,{w:()=>s});var a=r(42265),o=r(10064),n=r(66660);function s(e){if(a.default.apiKey&&(0,n.r)(e.portal.url))throw new o.Z("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}}}]);
//# sourceMappingURL=24452.cc6c66c5.chunk.js.map