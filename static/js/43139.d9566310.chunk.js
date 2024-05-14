"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[43139],{28458:(e,a,r)=>{r.d(a,{L:()=>n});var t=r(41226);class n{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const n=await(0,t.T)(e,a);return this._serviceMetadatas.set(e,n),n}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const t=await e.fetchData();return r.set(a,t),t}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&"object"==typeof r&&(a?a(r):r.customParameters)||null}}},84076:(e,a,r)=>{r.d(a,{w:()=>u});var t=r(19545),n=r(76200),l=r(10064),i=r(66978),s=r(25899),o=r(7575),c=r(98995);async function u(e,a){var r,u;const v=(0,s.Qc)(e);if(!v)throw new l.Z("invalid-url","Invalid scene service url");const m={...a,sceneServerUrl:v.url.path,layerId:null!==(r=v.sublayer)&&void 0!==r?r:void 0};if(null!==(u=m.sceneLayerItem)&&void 0!==u||(m.sceneLayerItem=await async function(e){const a=(await d(e)).serviceItemId;if(!a)return null;const r=new c.default({id:a,apiKey:e.apiKey}),l=await async function(e){const a=null===t.id||void 0===t.id?void 0:t.id.findServerInfo(e.sceneServerUrl);if(null!==a&&void 0!==a&&a.owningSystemUrl)return a.owningSystemUrl;const r=e.sceneServerUrl.replace(/(.*\/rest)\/.*/i,"$1")+"/info";try{const a=(await(0,n.Z)(r,{query:{f:"json"},responseType:"json",signal:e.signal})).data.owningSystemUrl;if(a)return a}catch(f){(0,i.r9)(f)}return null}(e);null!=l&&(r.portal=new o.Z({url:l}));try{return r.load({signal:e.signal})}catch(p){return(0,i.r9)(p),null}}(m)),null==m.sceneLayerItem)return y(m.sceneServerUrl.replace("/SceneServer","/FeatureServer"),m);const f=await async function(e){let{sceneLayerItem:a,signal:r}=e;if(!a)return null;try{const e=(await a.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},{signal:r})).find((e=>"Feature Service"===e.type))||null;if(!e)return null;const t=new c.default({portal:e.portal,id:e.id});return await t.load(),t}catch(t){return(0,i.r9)(t),null}}(m);if(null===f||void 0===f||!f.url)throw new l.Z("related-service-not-found","Could not find feature service through portal item relationship");m.featureServiceItem=f;const p=await y(f.url,m);return p.portalItem=f,p}async function d(e){if(e.rootDocument)return e.rootDocument;const a={query:{f:"json",...e.customParameters,token:e.apiKey},responseType:"json",signal:e.signal};try{const r=await(0,n.Z)(e.sceneServerUrl,a);e.rootDocument=r.data}catch{e.rootDocument={}}return e.rootDocument}async function y(e,a){var r,t,i;const o=(0,s.Qc)(e);if(!o)throw new l.Z("invalid-feature-service-url","Invalid feature service url");const c=o.url.path,u=a.layerId;if(null==u)return{serverUrl:c};const y=d(a),v=a.featureServiceItem?await a.featureServiceItem.fetchData("json"):null,m=null===(r=(null===v||void 0===v||null===(t=v.layers)||void 0===t?void 0:t[0])||(null===v||void 0===v||null===(i=v.tables)||void 0===i?void 0:i[0]))||void 0===r?void 0:r.customParameters,f=e=>{const r={query:{f:"json",...m},responseType:"json",authMode:e,signal:a.signal};return(0,n.Z)(c,r)},p=f("anonymous").catch((()=>f("no-prompt"))),[w,h]=await Promise.all([p,y]),S=null===h||void 0===h?void 0:h.layers,L=w.data&&w.data.layers;if(!Array.isArray(L))throw new Error("expected layers array");if(Array.isArray(S)){for(let n=0;n<Math.min(S.length,L.length);n++)if(S[n].id===u)return{serverUrl:c,layerId:L[n].id}}else if(null!=u&&u<L.length)return{serverUrl:c,layerId:L[u].id};throw new Error("could not find matching associated sublayer")}},97827:(e,a,r)=>{r.d(a,{$O:()=>l,CD:()=>y,H2:()=>d,Ok:()=>i,Q4:()=>o,XX:()=>c,_Y:()=>u,bS:()=>n,uE:()=>s});var t=r(84076);function n(e){const a={id:e.id,name:e.name};return"Oriented Imagery Layer"===e.type&&(a.layerType="OrientedImageryLayer"),a}async function l(e,a,r){var t,l;if(null==(null===(t=e)||void 0===t?void 0:t.layers)||null==(null===(l=e)||void 0===l?void 0:l.tables)){var i,o,c;const t=await r.fetchServiceMetadata(a,{customParameters:null===(i=s(e))||void 0===i?void 0:i.customParameters});(e=e||{}).layers=e.layers||(null===t||void 0===t||null===(o=t.layers)||void 0===o?void 0:o.map(n)),e.tables=e.tables||(null===t||void 0===t||null===(c=t.tables)||void 0===c?void 0:c.map(n))}return e}function i(e){const{layers:a,tables:r}=e;return null!==a&&void 0!==a&&a.length?a[0].id:null!==r&&void 0!==r&&r.length?r[0].id:null}function s(e){if(!e)return null;const{layers:a,tables:r}=e;return null!==a&&void 0!==a&&a.length?a[0]:null!==r&&void 0!==r&&r.length?r[0]:null}function o(e){var a,r,t,n;return(null!==(a=null===e||void 0===e||null===(r=e.layers)||void 0===r?void 0:r.length)&&void 0!==a?a:0)+(null!==(t=null===e||void 0===e||null===(n=e.tables)||void 0===n?void 0:n.length)&&void 0!==t?t:0)}function c(e){var a;const r=[];return null!==e&&void 0!==e&&null!==(a=e.layers)&&void 0!==a&&a.forEach((e=>{"SubtypeGroupLayer"===e.layerType&&r.push(e.id)})),r}function u(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"OrientedImageryLayer"===a})).map((e=>{let{id:a}=e;return a}))}function d(e){var a;return null===e||void 0===e||null===(a=e.layers)||void 0===a?void 0:a.filter((e=>{let{layerType:a}=e;return"CatalogLayer"===a})).map((e=>{let{id:a}=e;return a}))}async function y(e,a,r){var l,i,o;if(null===e||void 0===e||!e.url)return null!==(l=a)&&void 0!==l?l:{};if(null!==(i=a)&&void 0!==i||(a={}),!a.layers){var c;const t=await r.fetchServiceMetadata(e.url);a.layers=null===(c=t.layers)||void 0===c?void 0:c.map(n)}const{serverUrl:u,portalItem:d}=await(0,t.w)(e.url,{sceneLayerItem:e,customParameters:null===(o=s(a))||void 0===o?void 0:o.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==u)return a.tables=[],a;if(!a.tables&&d){const e=await d.fetchData();if(null!==e&&void 0!==e&&e.tables)a.tables=e.tables.map(n);else{var y,v;const t=await r.fetchServiceMetadata(u,{customParameters:null===(y=s(e))||void 0===y?void 0:y.customParameters});a.tables=null===t||void 0===t||null===(v=t.tables)||void 0===v?void 0:v.map(n)}}if(a.tables)for(const t of a.tables)t.url="".concat(u,"/").concat(t.id);return a}},43139:(e,a,r)=>{r.d(a,{fromItem:()=>d,v:()=>y});var t=r(10064),n=r(84076),l=r(28458),i=r(37933),s=r(19610),o=r(98995),c=r(97827),u=r(73117);async function d(e){!e.portalItem||e.portalItem instanceof o.default||(e={...e,portalItem:new o.default(e.portalItem)});const a=await async function(e){await e.load();const a=new l.L;return async function(e){const a=e.className,r=s.T[a];return{constructor:await r(),properties:e.properties}}(await y(e,a))}(e.portalItem);return new(0,a.constructor)({portalItem:e.portalItem,...a.properties})}async function y(e,a){switch(e.type){case"3DTiles Service":return{className:"IntegratedMesh3DTilesLayer"};case"CSV":return{className:"CSVLayer"};case"Feature Collection":return async function(e){await e.load();const a=(0,u._$)(e,"Map Notes"),r=(0,u._$)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,u._$)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,c.Q4)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Feature Service":return async function(e,a){const r=await v(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}(e,a);case"Feed":case"Stream Service":return{className:"StreamLayer"};case"GeoJson":return{className:"GeoJSONLayer"};case"Group Layer":return{className:"GroupLayer"};case"Image Service":return async function(e,a){var r,t,n,l;await e.load();const i=null!==(r=null===(t=e.typeKeywords)||void 0===t?void 0:t.map((e=>e.toLowerCase())))&&void 0!==r?r:[];if(i.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(i.includes("tiled imagery"))return{className:"ImageryTileLayer"};const s=await a.fetchItemData(e),o=null===s||void 0===s?void 0:s.layerType;if("ArcGISTiledImageServiceLayer"===o)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===o)return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),u=null===(n=c.cacheType)||void 0===n?void 0:n.toLowerCase(),d=null===(l=c.capabilities)||void 0===l?void 0:l.toLowerCase().includes("tilesonly");return"map"===u||d?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e,a);case"KML":return{className:"KMLLayer"};case"Map Service":return async function(e,a){return await async function(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}(e,a);case"Media Layer":return{className:"MediaLayer"};case"Scene Service":return async function(e,a){const r=await v(e,a,(async()=>{try{var r;if(!e.url)return[];const{serverUrl:t}=await(0,n.w)(e.url,{sceneLayerItem:e}),l=await a.fetchServiceMetadata(t);return null!==(r=null===l||void 0===l?void 0:l.tables)&&void 0!==r?r:[]}catch{return[]}}));if("object"==typeof r){var t;const n={};let l;if(null!=r.id?(n.layerId=r.id,l="".concat(e.url,"/layers/").concat(r.id)):l=e.url,null!==(t=e.typeKeywords)&&void 0!==t&&t.length)for(const a of Object.keys(i.fb))if(e.typeKeywords.includes(a))return{className:i.fb[a]};const s=await a.fetchServiceMetadata(l,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,c.uE)(e))||void 0===a?void 0:a.customParameters}))});return{className:i.fb[null===s||void 0===s?void 0:s.layerType]||"SceneLayer",properties:n}}if(!1===r){const r=await a.fetchServiceMetadata(e.url);if("Voxel"===(null===r||void 0===r?void 0:r.layerType))return{className:"VoxelLayer"}}return{className:"GroupLayer"}}(e,a);case"Vector Tile Service":return{className:"VectorTileLayer"};case"WFS":return{className:"WFSLayer"};case"WMS":return{className:"WMSLayer"};case"WMTS":return{className:"WMTSLayer"};default:throw new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function v(e,a,r){const{url:t,type:n}=e,l="Feature Service"===n;if(!t)return{};if(/\/\d+$/.test(t)){if(l){const r=await a.fetchServiceMetadata(t,{customParameters:await a.fetchCustomParameters(e,(e=>{var a;return null===(a=(0,c.uE)(e))||void 0===a?void 0:a.customParameters}))});if("Oriented Imagery Layer"===r.type)return{id:r.id,className:"OrientedImageryLayer",sourceJSON:r}}return{}}await e.load();let i=await a.fetchItemData(e);if(l){const e=await(0,c.$O)(i,t,a),r=m(e);if("object"==typeof r){const a=(0,c.XX)(e),t=(0,c._Y)(e),n=(0,c.H2)(e);r.className=null!=r.id&&a.includes(r.id)?"SubtypeGroupLayer":null!=r.id&&null!==t&&void 0!==t&&t.includes(r.id)?"OrientedImageryLayer":null!=r.id&&null!==n&&void 0!==n&&n.includes(r.id)?"CatalogLayer":"FeatureLayer"}return r}if("Scene Service"===n&&(i=await(0,c.CD)(e,i,a)),(0,c.Q4)(i)>0)return m(i);const s=await a.fetchServiceMetadata(t);return r&&(s.tables=await r()),m(s)}function m(e){return 1===(0,c.Q4)(e)&&{id:(0,c.Ok)(e)}}},41226:(e,a,r)=>{r.d(a,{T:()=>n});var t=r(76200);async function n(e,a){const{data:r}=await(0,t.Z)(e,{responseType:"json",query:{f:"json",...null===a||void 0===a?void 0:a.customParameters,token:null===a||void 0===a?void 0:a.apiKey}});return r}}}]);
//# sourceMappingURL=43139.d9566310.chunk.js.map