"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[81118,62078],{15909:(e,t,r)=>{r.d(t,{D:()=>a});var o=r(80292);function a(e){(null===e||void 0===e?void 0:e.writtenProperties)&&e.writtenProperties.forEach((e=>{let{target:t,propName:r,newOrigin:a}=e;(0,o.l)(t)&&a&&t.originOf(r)!==a&&t.updateOrigin(r,a)}))}},80292:(e,t,r)=>{function o(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>o})},81118:(e,t,r)=>{r.d(t,{xp:()=>j,Vt:()=>P});var o=r(27366),a=r(76200),s=r(10064),n=r(32718),i=r(66978),l=r(35995),c=r(49861),u=(r(93169),r(84936),r(38511)),p=r(69912),d=r(31201),h=r(15909),v=r(53866),y=r(90724),f=r(78952),m=r(25899),g=r(45948),w=r(30494);let S=null;function I(){return S}var x=r(7575),_=r(98995),b=r(32698),R=r(40739),O=r(76926),N=r(9634);const P=e=>{let t=class extends e{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,i.Ds)((async(e,t,r)=>{switch(e){case j.SAVE:return this._save(t);case j.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return f.Z.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new f.Z(o):null}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return v.Z.fromJSON(o,r)}const o=t.store,a=this._readSpatialReference(t);return null==a||null==(null===o||void 0===o?void 0:o.extent)||!Array.isArray(o.extent)||o.extent.some((e=>e<Z))?null:new v.Z({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:a})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){var r;const o=null===(r=this.portalItem)||void 0===r?void 0:r.title;if("item-title"===this.sublayerTitleMode)return(0,m.a7)(this.url,t.name);let a=t.name;if(!a&&this.url){const e=(0,m.Qc)(this.url);null!=e&&(a=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&o&&(a=o+" - "+a),(0,m.ld)(a)}set url(e){const t=(0,m.XG)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:n.Z.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,m.wH)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,l.mN)(e);return null!=this.layerId&&(t.path="".concat(t.path,"/layers/").concat(this.layerId)),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,w.T)(this.parsedUrl.path,this.rootNode,e,this.customParameters,this.apiKey,n.Z.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===(null===e||void 0===e?void 0:e.type)){var t,r;const o=e.rootIndex%e.pageSize,a=null===(t=e.rootPage)||void 0===t||null===(t=t.nodes)||void 0===t?void 0:t[o];if(null==(null===a||void 0===a||null===(r=a.obb)||void 0===r?void 0:r.center)||null==a.obb.halfSize)throw new s.Z("sceneservice:invalid-node-page","Invalid node page.");if(a.obb.center[0]<Z||null==this.fullExtent||this.fullExtent.hasZ)return;const n=a.obb.halfSize,i=a.obb.center[2],l=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);this.fullExtent.zmin=i-l,this.fullExtent.zmax=i+l}else if("node"===(null===e||void 0===e?void 0:e.type)){var o;const t=null===(o=e.rootNode)||void 0===o?void 0:o.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<Z)return;const r=t[2],a=t[3],{fullExtent:s}=this;s&&(s.zmin=r-a,s.zmax=r+a)}}async _fetchService(e){if(null==this.url)throw new s.Z("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await(0,a.Z)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var t,r;const o=await(0,a.Z)(null!==(t=null===(r=this.parsedUrl)||void 0===r?void 0:r.path)&&void 0!==t?t:"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});o.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let s=!1;if(o.data.layerType&&"Voxel"===o.data.layerType&&(s=!0),s)return this._fetchVoxelServiceLayer();const n=o.data;this.read(n,this._getServiceContext()),this.validateLayer(n)}async _fetchVoxelServiceLayer(e){var t;const r=(await(0,a.Z)((null===(t=this.parsedUrl)||void 0===t?void 0:t.path)+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:null===(e=this.portalItem)||void 0===e?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const a of o)e.typeKeywords.push(a);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===A.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){var r,o;const a={...U,...t};let n=_.default.from(e);if(!n)throw new s.Z("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,O.w)(n),n.id&&(n=n.clone(),n.id=null);const i=n.portal||x.Z.getDefault();await this._ensureLoadBeforeSave(),n.type=T,n.portal=i;const l=(0,b.Y)(n,"portal-item",!0),c={layers:[this.write({},l)]};return await Promise.all(null!==(r=l.resources.pendingOperations)&&void 0!==r?r:[]),await this._validateAgainstJSONSchema(c,l,a),n.url=this.url,n.title||(n.title=this.title),this._updateTypeKeywords(n,a,A.newItem),await i.signIn(),await(null===(o=i.user)||void 0===o?void 0:o.addItem({item:n,folder:null===a||void 0===a?void 0:a.folder,data:c})),await(0,R.H)(this.resourceReferences,l),this.portalItem=n,(0,h.D)(l),l.portalItem=n,n}async _save(e){var t;const r={...U,...e};if(!this.portalItem)throw new s.Z("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,O.w)(this.portalItem),this.portalItem.type!==T)throw new s.Z("sceneservice:portal-item-wrong-type",'Portal item needs to have type "'.concat(T,'"'));await this._ensureLoadBeforeSave();const o=(0,b.Y)(this.portalItem,"portal-item",!0),a={layers:[this.write({},o)]};return await Promise.all(null!==(t=o.resources.pendingOperations)&&void 0!==t?t:[]),await this._validateAgainstJSONSchema(a,o,r),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,r,A.existingItem),await(0,R.b)(this.portalItem,a,this.resourceReferences,o),(0,h.D)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,r){const o=null===r||void 0===r?void 0:r.validationOptions;(0,N.z)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:null===o||void 0===o?void 0:o.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const a=null===o||void 0===o?void 0:o.enabled,i=I();if(a&&i){const t=(await i()).validate(e,r.portalItemLayerType);if(!t.length)return;const a="Layer item did not validate:\n".concat(t.join("\n"));if(n.Z.getLogger(this).error("_validateAgainstJSONSchema(): ".concat(a)),"throw"===o.failPolicy){const e=t.map((e=>new s.Z("sceneservice:schema-validation",e)));throw new s.Z("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return(0,o._)([(0,c.Cb)(g.id)],t.prototype,"id",void 0),(0,o._)([(0,c.Cb)({type:f.Z})],t.prototype,"spatialReference",void 0),(0,o._)([(0,u.r)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),(0,o._)([(0,c.Cb)({type:v.Z})],t.prototype,"fullExtent",void 0),(0,o._)([(0,u.r)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),(0,o._)([(0,c.Cb)({readOnly:!0,type:y.Z})],t.prototype,"heightModelInfo",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],t.prototype,"minScale",void 0),(0,o._)([(0,c.Cb)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],t.prototype,"maxScale",void 0),(0,o._)([(0,c.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,o._)([(0,u.r)("version",["store.version"])],t.prototype,"readVersion",null),(0,o._)([(0,c.Cb)({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,o._)([(0,c.Cb)({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),(0,o._)([(0,c.Cb)({type:String})],t.prototype,"title",void 0),(0,o._)([(0,u.r)("portal-item","title")],t.prototype,"readTitlePortalItem",null),(0,o._)([(0,u.r)("service","title",["name"])],t.prototype,"readTitleService",null),(0,o._)([(0,c.Cb)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],t.prototype,"layerId",void 0),(0,o._)([(0,c.Cb)(g.HQ)],t.prototype,"url",null),(0,o._)([(0,d.c)("url")],t.prototype,"writeUrl",null),(0,o._)([(0,c.Cb)()],t.prototype,"parsedUrl",null),(0,o._)([(0,c.Cb)({readOnly:!0})],t.prototype,"store",void 0),(0,o._)([(0,c.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],t.prototype,"rootNode",void 0),t=(0,o._)([(0,p.j)("esri.layers.mixins.SceneService")],t),t},Z=-1e38;var A,E;(E=A||(A={}))[E.existingItem=0]="existingItem",E[E.newItem=1]="newItem";const T="Scene Service",U={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var j;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(j||(j={}))},30494:(e,t,r)=>{r.d(t,{T:()=>s});var o=r(76200),a=r(10064);async function s(e,t,r,s,n,i,l){let c=null;if(null!=r){const t="".concat(e,"/nodepages/"),a=t+Math.floor(r.rootIndex/r.nodesPerPage);try{return{type:"page",rootPage:(await(0,o.Z)(a,{query:{f:"json",...s,token:n},responseType:"json",signal:l})).data,rootIndex:r.rootIndex,pageSize:r.nodesPerPage,lodMetric:r.lodSelectionMetricType,urlPrefix:t}}catch(h){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",a,h),c=h}}if(!t)return null;const u=null===t||void 0===t?void 0:t.split("/").pop(),p="".concat(e,"/nodes/"),d=p+u;try{return{type:"node",rootNode:(await(0,o.Z)(d,{query:{f:"json",...s,token:n},responseType:"json",signal:l})).data,urlPrefix:p}}catch(h){throw new a.Z("sceneservice:root-node-missing","Root node missing.",{pageError:c,nodeError:h,url:d})}}},32698:(e,t,r)=>{r.d(t,{Y:()=>n,h:()=>s});var o=r(35995),a=r(7575);function s(e,t){return{...i(e,t),readResourcePaths:[]}}function n(e,t,r){const a=(0,o.mN)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:a?{rootPath:a.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,o.mN)(e.itemUrl),portal:e.portal||a.Z.getDefault(),portalItem:e}}},62078:(e,t,r)=>{r.d(t,{FO:()=>d,W7:()=>h,addOrUpdateResources:()=>i,fetchResources:()=>n,removeAllResources:()=>c,removeResource:()=>l});var o=r(76200),a=r(10064),s=r(35995);async function n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;await e.load(r);const o=(0,s.v_)(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:i="asc",sortField:l="resource"}=t,c={query:{start:a,num:n,sortOrder:i,sortField:l,token:e.apiKey},signal:null===r||void 0===r?void 0:r.signal},u=await e.portal.request(o,c);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((t=>{let{created:r,size:o,resource:a}=t;return{created:new Date(r),size:o,resource:e.resourceFromPath(a)}}))}}async function i(e,t,r,o){const n=new Map;for(const{resource:s,content:l,compress:c,access:p}of t){if(!s.hasPath())throw new a.Z("portal-item-resource-".concat(r,":invalid-path"),"Resource does not have a valid path");const[e,t]=u(s.path),o="".concat(e,"/").concat(null!==c&&void 0!==c?c:"","/").concat(null!==p&&void 0!==p?p:"");n.has(o)||n.set(o,{prefix:e,compress:c,access:p,files:[]}),n.get(o).files.push({fileName:t,content:l})}await e.load(o);const i=(0,s.v_)(e.userItemUrl,"add"===r?"addResources":"updateResources");for(const{prefix:a,compress:s,access:l,files:c}of n.values()){const t=25;for(let r=0;r<c.length;r+=t){const n=c.slice(r,r+t),u=new FormData;a&&"."!==a&&u.append("resourcesPrefix",a),s&&u.append("compress","true"),l&&u.append("access",l);let p=0;for(const{fileName:e,content:t}of n)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(i,{method:"post",body:u,signal:null===o||void 0===o?void 0:o.signal})}}}async function l(e,t,r){if(!t.hasPath())throw new a.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const o=(0,s.v_)(e.userItemUrl,"removeResources");await e.portal.request(o,{method:"post",query:{resource:t.path},signal:null===r||void 0===r?void 0:r.signal}),t.portalItem=null}async function c(e,t){await e.load(t);const r=(0,s.v_)(e.userItemUrl,"removeResources");return e.portal.request(r,{method:"post",query:{deleteAll:!0},signal:null===t||void 0===t?void 0:t.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function p(e){const[t,r]=function(e){const t=(0,s.Ml)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),".".concat(t)]}(e),[o,a]=u(t);return[o,a,r]}async function d(e){return"blob"===e.type?e.blob:"json"===e.type?new Blob([e.jsonString],{type:"application/json"}):(await(0,o.Z)(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,o]=p(e.path);return e.portalItem.resourceFromPath((0,s.v_)(r,t+o))}},40739:(e,t,r)=>{r.d(t,{H:()=>i,b:()=>l});var o=r(10064),a=r(66978),s=r(71907),n=r(62078);async function i(e,t,r){const o=await c(e,t,r);await u(o,t,r)}async function l(e,t,r,o,a){const s=await c(r,o,a);await e.update({data:t}),await u(s,o,a)}async function c(e,t,i){if(null===t||void 0===t||!t.resources)return;const l=t.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=t.portalItem;const c=new Set(t.resources.toKeep.map((e=>e.resource.path))),u=new Set,p=[];c.forEach((t=>{l.delete(t),e.paths.push(t)}));const d=[],h=[],v=[];for(const r of t.resources.toUpdate)if(l.delete(r.resource.path),c.has(r.resource.path)||u.has(r.resource.path)){const{resource:t,content:o,finish:a}=r,i=(0,n.W7)(t,(0,s.DO)());e.paths.push(i.path),d.push({resource:i,content:await(0,n.FO)(o),compress:r.compress}),a&&v.push((()=>a(i)))}else{e.paths.push(r.resource.path),h.push({resource:r.resource,content:await(0,n.FO)(r.content),compress:r.compress});const t=r.finish;t&&v.push((()=>t(r.resource))),u.add(r.resource.path)}for(const r of t.resources.toAdd)if(e.paths.push(r.resource.path),l.has(r.resource.path))l.delete(r.resource.path);else{d.push({resource:r.resource,content:await(0,n.FO)(r.content),compress:r.compress});const e=r.finish;e&&v.push((()=>e(r.resource)))}if(d.length||h.length){const{addOrUpdateResources:e}=await Promise.resolve().then(r.bind(r,62078));await e(t.portalItem,d,"add",i),await e(t.portalItem,h,"update",i)}if(v.forEach((e=>e())),0===p.length)return l;const y=await(0,a.UO)(p);if((0,a.k_)(i),y.length>0)throw new o.Z("save:resources","Failed to save one or more resources",{errors:y});return l}async function u(e,t,r){if(!e||!t.portalItem)return;const o=[];for(const a of e){const e=t.portalItem.resourceFromPath(a);o.push(e.portalItem.removeResource(e,r))}await(0,a.as)(o)}},76926:(e,t,r)=>{r.d(t,{w:()=>n});var o=r(42265),a=r(10064),s=r(66660);function n(e){if(o.default.apiKey&&(0,s.r)(e.portal.url))throw new a.Z("save-api-key-utils:api-key-not-supported","Saving is not supported on ".concat(e.portal.url," when using an api key"))}}}]);
//# sourceMappingURL=81118.a5f7d11f.chunk.js.map