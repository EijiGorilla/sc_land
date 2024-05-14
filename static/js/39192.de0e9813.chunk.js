"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[39192],{80573:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(27366),i=n(7138),o=n(63780),s=n(11582),l=n(79056),a=n(46784),u=n(49861),p=(n(93169),n(32718),n(69912));let d=0,c=class extends((0,a.eC)((0,s.J)((0,l.IG)(i.Z)))){constructor(e){super(e),this.id="".concat(Date.now().toString(16),"-analysis-").concat(d++),this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(o.pC)}};(0,r._)([(0,u.Cb)({type:String,constructOnly:!0,clonable:!1})],c.prototype,"id",void 0),(0,r._)([(0,u.Cb)({type:String})],c.prototype,"title",void 0),(0,r._)([(0,u.Cb)({clonable:!1,value:null})],c.prototype,"parent",null),(0,r._)([(0,u.Cb)({readOnly:!0})],c.prototype,"isEditable",null),c=(0,r._)([(0,p.j)("esri.analysis.Analysis")],c);const y=c},97613:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(27366),i=n(84314),o=n(7138),s=n(11582),l=n(46784),a=n(92026),u=n(49861),p=(n(93169),n(32718),n(84936),n(69912)),d=n(96866),c=n(585),y=n(64575);let v=class extends((0,l.eC)((0,s.J)(o.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,a._W)(this.position,e.position)&&(0,a._W)(this.elevationInfo,e.elevationInfo)&&(0,i.kk)(this.feature,e.feature)}};(0,r._)([(0,u.Cb)({type:c.Z,json:{write:{isRequired:!0}}})],v.prototype,"position",void 0),(0,r._)([(0,u.Cb)({type:y.Z}),(0,d.B)()],v.prototype,"elevationInfo",void 0),(0,r._)([(0,u.Cb)(i.rX)],v.prototype,"feature",void 0),v=(0,r._)([(0,p.j)("esri.analysis.LineOfSightAnalysisObserver")],v);const g=v},33985:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(27366),i=n(84314),o=n(11582),s=n(46784),l=n(92026),a=n(49861),u=(n(93169),n(32718),n(84936),n(69912)),p=n(96866),d=n(585),c=n(64575);let y=class extends((0,s.eC)(o.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,l._W)(this.position,e.position)&&(0,l._W)(this.elevationInfo,e.elevationInfo)&&(0,i.kk)(this.feature,e.feature)}};(0,r._)([(0,a.Cb)({type:d.Z}),(0,p.B)()],y.prototype,"position",void 0),(0,r._)([(0,a.Cb)({type:c.Z}),(0,p.B)()],y.prototype,"elevationInfo",void 0),(0,r._)([(0,a.Cb)(i.rX)],y.prototype,"feature",void 0),y=(0,r._)([(0,u.j)("esri.analysis.LineOfSightAnalysisTarget")],y);const v=y},84314:(e,t,n)=>{function r(e,t){return i(e)===i(t)}function i(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let n=null;return n=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==n?null:"o-".concat(t,"-").concat(n)}n.d(t,{kk:()=>r,pD:()=>i,rX:()=>o});const o={json:{write:{writer:function(e,t){var n;null!=(null===e||void 0===e||null===(n=e.layer)||void 0===n?void 0:n.objectIdField)&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}}},96866:(e,t,n)=>{n.d(t,{B:()=>y});var r=n(10064),i=n(9997),o=n(80292),s=n(35995),l=n(71907),a=n(33397),u=n(25265),p=n(49861),d=n(22892),c=n(53283);function y(e){var t;const n=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,r)=>{const i=function(e,t,n){var r;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,n){const r=(0,a.Oe)(t,n);return{type:String,read:(e,t,n)=>{const i=(0,c.r)(e,t,n);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer(t,i,l,a){if(null===a||void 0===a||!a.resources)return"string"==typeof t?void(i[l]=(0,c.t)(t,a)):void(i[l]=t.write({},a));const p=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,c.t)(p,{...a,verifyItemRelativeUrls:null!==a&&void 0!==a&&a.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},c.M.NO),f=r.type!==String&&(!(0,o.l)(this)||(null===a||void 0===a?void 0:a.origin)&&this.originIdOf(n)>(0,u.M9)(a.origin)),b={object:this,propertyName:n,value:t,targetUrl:y,dest:i,targetPropertyName:l,context:a,params:e};null!==a&&void 0!==a&&a.portalItem&&y&&!(0,s.YP)(y)?f&&null!==e&&void 0!==e&&e.contentAddressed?v(b):f?function(e){var t;const{context:n,targetUrl:r,params:i,value:o,dest:l,targetPropertyName:a}=e;if(!n.portalItem)return;const u=n.portalItem.resourceFromPath(r),p=h(o,r,n),c=(0,d.B)(p),y=(0,s.Ml)(u.path),f=null!==(t=null===i||void 0===i?void 0:i.compress)&&void 0!==t&&t;c===y?(n.resources&&g({...e,resource:u,content:p,compress:f,updates:n.resources.toUpdate}),l[a]=r):v(e)}(b):function(e){let{context:t,targetUrl:n,dest:r,targetPropertyName:i}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n),compress:!1}),r[i]=n)}(b):null!==a&&void 0!==a&&a.portalItem&&(null==y||null!=(0,c.i)(y)||(0,s.jc)(y)||f)?v(b):i[l]=y}}}}(e,t,n);switch(null!==(r=null===e||void 0===e?void 0:e.type)&&void 0!==r?r:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=c.b;return{read:e,write:t}}}}(e,t,r);for(const e of n){const n=(0,p.CJ)(t,e,r);for(const e in i)n[e]=i[e]}}}function v(e){var t,n,o,a;const{targetUrl:u,params:p,value:y,context:v,dest:f,targetPropertyName:b}=e;if(!v.portalItem)return;const m=(0,c.p)(u),j=h(y,u,v);if(null!==p&&void 0!==p&&p.contentAddressed&&"json"!==j.type)return void(null===(t=v.messages)||void 0===t||t.push(new r.Z("persistable:contentAddressingUnsupported",'Property "'.concat(b,'" is trying to serializing a resource with content of type ').concat(j.type," with content addressing. Content addressing is only supported for json resources."),{content:j})));const _=null!==p&&void 0!==p&&p.contentAddressed&&"json"===j.type?(0,i.F)(j.jsonString):null!==(n=null===m||void 0===m?void 0:m.filename)&&void 0!==n?n:(0,l.DO)(),I=(0,s.v_)(null!==(o=null===p||void 0===p?void 0:p.prefix)&&void 0!==o?o:null===m||void 0===m?void 0:m.prefix,_),w="".concat(I,".").concat((0,d.B)(j));if(null!==p&&void 0!==p&&p.contentAddressed&&v.resources&&"json"===j.type){var x;const e=null!==(x=v.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===w})))&&void 0!==x?x:v.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===w}));if(e)return void(f[b]=e.resource.itemRelativeUrl)}const C=v.portalItem.resourceFromPath(w);(0,s.jc)(u)&&v.resources&&v.resources.pendingOperations.push((0,s.gi)(u).then((e=>{C.path="".concat(I,".").concat((0,d.B)({type:"blob",blob:e})),f[b]=C.itemRelativeUrl})).catch((()=>{})));const O=null!==(a=null===p||void 0===p?void 0:p.compress)&&void 0!==a&&a;v.resources&&g({...e,resource:C,content:j,compress:O,updates:v.resources.toAdd}),f[b]=C.itemRelativeUrl}function g(e){let{object:t,propertyName:n,updates:r,resource:i,content:o,compress:s}=e;r.push({resource:i,content:o,compress:s,finish:e=>{!function(e,t,n){"string"==typeof e[t]?e[t]=n.url:e[t].url=n.url}(t,n,e)}})}function h(e,t,n){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(n))}}},80292:(e,t,n)=>{function r(e){return e&&"getAtOrigin"in e&&"originOf"in e}n.d(t,{l:()=>r})},39192:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(27366),i=n(80573),o=n(97613),s=n(33985),l=n(80987),a=n(60354),u=n(94172),p=n(49861),d=(n(93169),n(32718),n(84936),n(69912)),c=n(79803),y=n(41414),v=n(74509);const g=l.Z.ofType(s.Z);let h=class extends i.Z{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,u.YP)((()=>this._computeExtent()),(e=>{null==(null===e||void 0===e?void 0:e.pending)&&this._set("extent",null!=e?e.extent:null)}),u.tX))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",(0,a.Z)(e,this.targets,g))}get spatialReference(){var e;return null!=(null===(e=this.observer)||void 0===e?void 0:e.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[null===(e=this.observer)||void 0===e?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){var e;const t=this.spatialReference;if(null==(null===(e=this.observer)||void 0===e?void 0:e.position)||null==t)return null;const n=e=>"absolute-height"===(0,v.VW)(e.position,e.elevationInfo),r=this.observer.position,i=(0,y.al)(r.x,r.y,r.z,r.x,r.y,r.z);for(const s of this.targets)if(null!=s.position){const e=(0,c.projectOrLoad)(s.position,t);if(null!=e.pending)return{pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:n,z:r}=e.geometry;(0,y.pp)(i,[t,n,r])}}const o=(0,y.HH)(i,t);return n(this.observer)&&this.targets.every(n)||(o.zmin=void 0,o.zmax=void 0),{pending:null,extent:o}}clear(){this.observer=null,this.targets.removeAll()}};(0,r._)([(0,p.Cb)({type:["line-of-sight"]})],h.prototype,"type",void 0),(0,r._)([(0,p.Cb)({type:o.Z,json:{read:!0,write:!0}})],h.prototype,"observer",void 0),(0,r._)([(0,p.Cb)({cast:a.R,type:g,nonNullable:!0,json:{read:!0,write:!0}})],h.prototype,"targets",null),(0,r._)([(0,p.Cb)({value:null,readOnly:!0})],h.prototype,"extent",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],h.prototype,"spatialReference",null),(0,r._)([(0,p.Cb)({readOnly:!0})],h.prototype,"requiredPropertiesForEditing",null),h=(0,r._)([(0,d.j)("esri.analysis.LineOfSightAnalysis")],h);const f=h;var b=n(97642),m=n(30651),j=n(6061);const _=l.Z.ofType(s.Z);let I=class extends((0,j.q)((0,b.R)(m.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new f,this.opacity=1}initialize(){this.addHandles((0,u.YP)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),u.tX))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return null===(e=this.analysis)||void 0===e?void 0:e.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new l.Z}set targets(e){var t;(0,a.Z)(e,null===(t=this.analysis)||void 0===t?void 0:t.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new f)}};(0,r._)([(0,p.Cb)({json:{read:!1},readOnly:!0})],I.prototype,"type",void 0),(0,r._)([(0,p.Cb)({type:["LineOfSightLayer"]})],I.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.Cb)({type:o.Z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],I.prototype,"observer",null),(0,r._)([(0,p.Cb)({type:_,json:{read:!0,write:{ignoreOrigin:!0}}})],I.prototype,"targets",null),(0,r._)([(0,p.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],I.prototype,"analysis",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],I.prototype,"fullExtent",null),(0,r._)([(0,p.Cb)({readOnly:!0})],I.prototype,"spatialReference",null),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],I.prototype,"opacity",void 0),(0,r._)([(0,p.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),I=(0,r._)([(0,d.j)("esri.layers.LineOfSightLayer")],I);const w=I},22892:(e,t,n)=>{n.d(t,{B:()=>i});var r=n(35995);function i(e){return o[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Ml)(e);return a[t]||s}(e.url)}(e)]||l}const o={},s="text/plain",l=o[s],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const u in a)o[a[u]]=u}}]);
//# sourceMappingURL=39192.de0e9813.chunk.js.map