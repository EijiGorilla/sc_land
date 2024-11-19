"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[9887,50],{91340:(e,t,r)=>{r.d(t,{aX:()=>A});var n=r(42265),a=r(10064),s=r(32718),i=r(80885),o=r(29909),l=r(76335),u=r(92975),d=r(81753),p=(r(59486),r(76200)),c=r(77981),f=r(23084);var h=r(35995),y=r(35594);const m=()=>s.Z.getLogger("esri.geometry.support.normalizeUtils");function g(e){return"polygon"===e[0].type}function w(e){return"polyline"===e[0].type}function b(e,t,r){if(t){const t=function(e,t){if(!(e instanceof o.Z||e instanceof i.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw m().error(e),new a.Z(e)}const r=(0,l.x3)(e),n=[];for(const a of r){const e=[];n.push(e),e.push([a[0][0],a[0][1]]);for(let r=0;r<a.length-1;r++){const n=a[r][0],s=a[r][1],i=a[r+1][0],o=a[r+1][1],l=Math.sqrt((i-n)*(i-n)+(o-s)*(o-s)),u=(o-s)/l,d=(i-n)/l,p=l/t;if(p>1){for(let o=1;o<=p-1;o++){const r=o*t,a=d*r+n,i=u*r+s;e.push([a,i])}const r=(l+Math.floor(p-1)*t)/2,a=d*r+n,i=u*r+s;e.push([a,i])}e.push([i,o])}}return function(e){return"polygon"===e.type}(e)?new i.Z({rings:n,spatialReference:e.spatialReference}):new o.Z({paths:n,spatialReference:e.spatialReference})}(e,1e6);e=(0,d.Sx)(t,!0)}return r&&(e=(0,l.Sy)(e,r)),e}function F(e,t,r){if(Array.isArray(e)){const n=e[0];if(n>t){const r=(0,l.XZ)(n,t);e[0]=n+r*(-2*t)}else if(n<r){const t=(0,l.XZ)(n,r);e[0]=n+t*(-2*r)}}else{const n=e.x;if(n>t){const r=(0,l.XZ)(n,t);e=e.clone().offset(r*(-2*t),0)}else if(n<r){const t=(0,l.XZ)(n,r);e=e.clone().offset(t*(-2*r),0)}}return e}function Z(e,t){let r=-1;for(let n=0;n<t.cutIndexes.length;n++){const a=t.cutIndexes[n],s=t.geometries[n],i=(0,l.x3)(s);for(let e=0;e<i.length;e++){const t=i[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const n=t[e][0];r=n>r?n:r}r=Number(r.toFixed(9));const n=-360*(0,l.XZ)(r,180);for(let a=0;a<t.length;a++){const t=s.getPoint(e,a);s.setPoint(e,a,t.clone().offset(n,0))}return!0}}))}if(a===r){if(g(e))for(const t of(0,l.x3)(s))e[a]=e[a].addRing(t);else if(w(e))for(const t of(0,l.x3)(s))e[a]=e[a].addPath(t)}else r=a,e[a]=s}return e}async function A(e,t,r){if(!Array.isArray(e))return A([e],t);t&&"string"!=typeof t&&m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const a="string"==typeof t?t:t?.url??n.default.geometryServiceUrl;let s,g,w,v,I,S,$,R,E=0;const x=[],O=[];for(const n of e)if(null!=n)if(s||(s=n.spatialReference,g=(0,u.C5)(s),w=s.isWebMercator,S=w?102100:4326,v=l.UZ[S].maxX,I=l.UZ[S].minX,$=l.UZ[S].plus180Line,R=l.UZ[S].minus180Line),g)if("mesh"===n.type)O.push(n);else if("point"===n.type)O.push(F(n.clone(),v,I));else if("multipoint"===n.type){const e=n.clone();e.points=e.points.map((e=>F(e,v,I))),O.push(e)}else if("extent"===n.type){const e=n.clone()._normalize(!1,!1,g);O.push(e.rings?new i.Z(e):e)}else if(n.extent){const e=n.extent,t=(0,l.XZ)(e.xmin,I)*(2*v);let r=0===t?n.clone():(0,l.Sy)(n.clone(),t);e.offset(t,0);let{xmin:a,xmax:s}=e;a=Number(a.toFixed(9)),s=Number(s.toFixed(9)),e.intersects($)&&s!==v?(E=s>E?s:E,r=b(r,w),x.push(r),O.push("cut")):e.intersects(R)&&a!==I?(E=s*(2*v)>E?s*(2*v):E,r=b(r,w,360),x.push(r),O.push("cut")):O.push(r)}else O.push(n.clone());else O.push(n);else O.push(n);let L=(0,l.XZ)(E,v),k=-90;const U=L,X=new o.Z;for(;L>0;){const e=360*L-180;X.addPath([[e,k],[e,-1*k]]),k*=-1,L--}if(x.length>0&&U>0){const t=Z(x,await async function(e,t,r,n){const a=(0,f.en)(e),s=t[0].spatialReference,i={...n,responseType:"json",query:{...a.query,f:"json",sr:(0,u.B9)(s),target:JSON.stringify({geometryType:(0,c.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},o=await(0,p.Z)(a.path+"/cut",i),{cutIndexes:l,geometries:d=[]}=o.data;return{cutIndexes:l,geometries:d.map((e=>{const t=(0,c.im)(e);return t.spatialReference=s,t}))}}(a,x,X,r)),n=[],s=[];for(let r=0;r<O.length;r++){const a=O[r];if("cut"!==a)s.push(a);else{const a=t.shift(),i=e[r];null!=i&&"polygon"===i.type&&i.rings&&i.rings.length>1&&a.rings.length>=i.rings.length?(n.push(a),s.push("simplify")):s.push(w?(0,d.$)(a):a)}}if(!n.length)return s;const i=await async function(e,t,r){const n="string"==typeof e?(0,h.mN)(e):e,a=t[0].spatialReference,s=(0,c.Ji)(t[0]),i={...r,query:{...n.query,f:"json",sr:(0,u.B9)(a),geometries:JSON.stringify((0,y.F)(t))}},{data:o}=await(0,p.Z)(n.path+"/simplify",i);return(0,y.o)(o.geometries,s,a)}(a,n,r),o=[];for(let e=0;e<s.length;e++){const t=s[e];"simplify"!==t?o.push(t):o.push(w?(0,d.$)(i.shift()):i.shift())}return o}const M=[];for(let n=0;n<O.length;n++){const e=O[n];if("cut"!==e)M.push(e);else{const e=x.shift();M.push(!0===w?(0,d.$)(e):e)}}return M}},76335:(e,t,r)=>{r.d(t,{Sy:()=>l,UZ:()=>i,XZ:()=>o,x3:()=>u});var n=r(29909),a=r(78952),s=r(77981);const i={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new n.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:a.Z.WebMercator}),minus180Line:new n.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:a.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new n.Z({paths:[[[180,-180],[180,180]]],spatialReference:a.Z.WGS84}),minus180Line:new n.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:a.Z.WGS84})}};function o(e,t){return Math.ceil((e-t)/(2*t))}function l(e,t){const r=u(e);for(const n of r)for(const e of n)e[0]+=t;return e}function u(e){return(0,s.oU)(e)?e.rings:e.paths}},29887:(e,t,r)=>{r.d(t,{Ey:()=>Z,applyEdits:()=>A,aw:()=>b,uploadAssets:()=>x});var n=r(52639),a=r(80987),s=r(10064),i=r(84652),o=r(32718),l=r(66978),u=r(35995),d=r(71907),p=r(91340),c=r(92975),f=r(56601),h=r(37270),y=r(18277),m=r(37933);function g(e){return null!=e?.applyEdits}function w(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function b(e){return e.every(w)}function F(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function Z(e){return e.every(F)}async function A(e,t,r){let n,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const p="gdbVersion"in e?e.gdbVersion:null,c=u.gdbVersion??p;if((0,f.lQ)(e)&&e.url)n=(0,f.jF)(e.url,e.layerId,c,"original-and-current-features"===u.returnServiceEditsOption);else{n=(0,l.hh)(),n.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:n.promise};e.emit("apply-edits",t)}try{const{results:l,edits:p}=await async function(e,t,r,n){if(await e.load(),!g(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,m.ln)(e))throw new s.Z(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:l}=await async function(e,t,r){const n=(0,m.S1)(e),i=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),l=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),u=null!=e.infoFor3D;if(function(e,t,r,n,a,i){if(!e||!n&&!a)throw new s.Z(`${i}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed)throw new s.Z(`${i}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&a)throw new s.Z(`${i}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&a)throw new s.Z(`${i}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}(t,n,r,!!i,!!l,`${e.type}-layer`),!n.data.isVersioned&&r?.gdbVersion)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!n.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const p={...r};if(null!=p.rollbackOnFailureEnabled||n.editing.supportsRollbackOnFailure||(p.rollbackOnFailureEnabled=!0),p.rollbackOnFailureEnabled||"original-and-current-features"!==p.returnServiceEditsOption||(!1===p.rollbackOnFailureEnabled&&o.Z.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),p.rollbackOnFailureEnabled=!0),!n.editing.supportsReturnServiceEditsInSourceSpatialReference&&p.returnServiceEditsInSourceSR)throw new s.Z(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(p.returnServiceEditsInSourceSR&&"original-and-current-features"!==p.returnServiceEditsOption)throw new s.Z(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const c=function(e,t,r){const n=function(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&a.Z.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}(e);if(n.addFeatures?.length&&!t.operations.supportsAdd)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support adding features.");if(n.updateFeatures?.length&&!t.operations.supportsUpdate)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support updating features.");if(n.deleteFeatures?.length&&!t.operations.supportsDelete)throw new s.Z(`${r}:unsupported-operation`,"Layer does not support deleting features.");return n.addFeatures=n.addFeatures.map(R),n.updateFeatures=n.updateFeatures.map(R),n.addAssetFeatures=[],n}(t,n,`${e.type}-layer`),f=r?.globalIdUsed||u,h=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(f){const{globalIdField:t}=e;if(null==t)throw new s.Z(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");c.addFeatures.forEach((e=>function(e,t){const{attributes:r}=e;null==r[t]&&(r[t]=(0,d.zS)())}(e,t)))}return c.addFeatures.forEach((t=>function(e,t,r,n){v(e,t,r,n),I(e,t)}(t,e,f,h))),c.updateFeatures.forEach((t=>function(e,t,r,n){v(e,t,r,n),I(e,t);const a=(0,m.S1)(t);if("geometry"in e&&null!=e.geometry&&!a?.editing.supportsGeometryUpdate)throw new s.Z(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,f,h))),c.deleteFeatures.forEach((t=>function(e,t,r,n){v(e,t,r,n)}(t,e,f,h))),c.addAttachments.forEach((t=>S(t,e))),c.updateAttachments.forEach((t=>S(t,e))),u&&await async function(e,t){if(null==t.infoFor3D)return;const{infoFor3D:r}=t,n=(0,y.S0)("model/gltf-binary",r.supportedFormats)??(0,y.Ow)("glb",r.supportedFormats);if(!n||!r.editFormats.includes(n))throw new s.Z(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:a}=e;for(const s of e.addFeatures??[])E(s)&&a.push(s);for(const s of e.updateFeatures??[])E(s)&&a.push(s)}(c,e),{edits:await $(c),options:p}}(e,r,n);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,l)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,r,u),c=e=>e.filter((e=>!e.error)).map(i.d9),f={edits:p,addedFeatures:c(l.addFeatureResults),updatedFeatures:c(l.updateFeatureResults),deletedFeatures:c(l.deleteFeatureResults),addedAttachments:c(l.addAttachmentResults),updatedAttachments:c(l.updateAttachmentResults),deletedAttachments:c(l.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:l.editMoment?new Date(l.editMoment):null,globalIdToObjectId:u.globalIdToObjectId};return l.editedFeatureResults?.length&&(f.editedFeatures=l.editedFeatureResults),n.resolve(f),l}catch(h){throw n.reject(h),h}}function v(e,t,r,n){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(n.length&&"attributes"in e)for(const a of n){const r=e.attributes[a.name];if(void 0!==r&&!(0,h.d2)(a,r))throw new s.Z(`${t.type}-layer:invalid-parameter`,`Big-integer field '${a.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new s.Z(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new s.Z(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function I(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:r}=e,{spatialReference:n,vertexSpace:a}=r,i=t.spatialReference,o="local"===a.type,l=(0,c.sT)(i),u=(0,c.fS)(i,n),d=u||(0,c.oR)(i)&&((0,c.oR)(n)||(0,c.sS)(n));if(!(o&&l&&d||!o&&!l&&u))throw new s.Z(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${a.type} vertex space and a spatial reference wkid:${n.wkid} to a layer with a spatial reference wkid:${i.wkid} is not supported.`)}}function S(e,t){const{feature:r,attachment:n}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!n.globalId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!n.data&&!n.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(n.data instanceof File&&n.data.name)&&!n.name)throw new s.Z(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&n.uploadId)throw new s.Z(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof n.data){const e=(0,u.sJ)(n.data);if(e&&!e.isBase64)throw new s.Z(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function $(e){const t=e.addFeatures??[],r=e.updateFeatures??[],n=t.concat(r).map((e=>e.geometry)),a=await(0,p.aX)(n),s=t.length,i=r.length;return a.slice(0,s).forEach(((e,r)=>t[r].geometry=e)),a.slice(s,s+i).forEach(((e,t)=>r[t].geometry=e)),e}function R(e){const t=new n.Z;return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}function E(e){return"mesh"===e?.geometry?.type}function x(e,t,r,n){if(!g(t))throw new s.Z(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new s.Z(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,n)}},18277:(e,t,r)=>{r.d(t,{$6:()=>y,$z:()=>s,F7:()=>a,Ow:()=>o,S0:()=>i,d1:()=>l,dm:()=>u});const n=[["binary","application/octet-stream","bin",""]];function a(e,t){return null!=p(t.name,e?.supportedFormats??[])}function s(e,t){if(!e)return!1;const r=u(t,e.supportedFormats??[]);return null!=r&&e.editFormats.includes(r)}function i(e,t){return c(function(e,t){const r=e.toLowerCase();return d(t).find((e=>f(e)===r))}(e,t))}function o(e,t){return c(p(e,t))}function l(e,t){return f(function(e,t){return d(t).find((t=>c(t)===e))}(e,t))}function u(e,t){return o(e.name,t)??i(e.type,t)}function d(e){return[...n,...e]}function p(e,t){const r=e.toLowerCase();return d(t).find((e=>h(e).some((e=>r.endsWith(e)))))}function c(e){return e?.[0]}function f(e){return e?.[1].toLowerCase()}function h(e){return e?.[2].split(",").map((e=>e.toLowerCase()))??[]}function y(e){return e.tables?.find((e=>"assetMaps"===e.role))}}}]);
//# sourceMappingURL=9887.30f4a602.chunk.js.map