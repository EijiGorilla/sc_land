"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[9192],{80573:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(27366),s=r(7138),i=r(63780),o=r(11582),l=r(79056),a=r(46784),p=r(49861),u=(r(93169),r(32718),r(69912));let c=0,d=class extends((0,a.eC)((0,o.J)((0,l.IG)(s.Z)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${c++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(i.pC)}};(0,n._)([(0,p.Cb)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,n._)([(0,p.Cb)({type:String})],d.prototype,"title",void 0),(0,n._)([(0,p.Cb)({clonable:!1,value:null})],d.prototype,"parent",null),(0,n._)([(0,p.Cb)({readOnly:!0})],d.prototype,"isEditable",null),d=(0,n._)([(0,u.j)("esri.analysis.Analysis")],d);const y=d},97613:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(27366),s=r(84314),i=r(7138),o=r(11582),l=r(46784),a=r(92026),p=r(49861),u=(r(93169),r(32718),r(84936),r(69912)),c=r(96866),d=r(848),y=r(64575);let g=class extends((0,l.eC)((0,o.J)(i.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,a._W)(this.position,e.position)&&(0,a._W)(this.elevationInfo,e.elevationInfo)&&(0,s.kk)(this.feature,e.feature)}};(0,n._)([(0,p.Cb)({type:d.Z,json:{write:{isRequired:!0}}})],g.prototype,"position",void 0),(0,n._)([(0,p.Cb)({type:y.Z}),(0,c.B)()],g.prototype,"elevationInfo",void 0),(0,n._)([(0,p.Cb)(s.rX)],g.prototype,"feature",void 0),g=(0,n._)([(0,u.j)("esri.analysis.LineOfSightAnalysisObserver")],g);const h=g},33985:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(27366),s=r(84314),i=r(11582),o=r(46784),l=r(92026),a=r(49861),p=(r(93169),r(32718),r(84936),r(69912)),u=r(96866),c=r(848),d=r(64575);let y=class extends((0,o.eC)(i.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,l._W)(this.position,e.position)&&(0,l._W)(this.elevationInfo,e.elevationInfo)&&(0,s.kk)(this.feature,e.feature)}};(0,n._)([(0,a.Cb)({type:c.Z}),(0,u.B)()],y.prototype,"position",void 0),(0,n._)([(0,a.Cb)({type:d.Z}),(0,u.B)()],y.prototype,"elevationInfo",void 0),(0,n._)([(0,a.Cb)(s.rX)],y.prototype,"feature",void 0),y=(0,n._)([(0,p.j)("esri.analysis.LineOfSightAnalysisTarget")],y);const g=y},84314:(e,t,r)=>{function n(e,t){return s(e)===s(t)}function s(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let r=null;return r=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==r?null:`o-${t}-${r}`}r.d(t,{kk:()=>n,pD:()=>s,rX:()=>i});const i={json:{write:{writer:function(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}}},96866:(e,t,r)=>{r.d(t,{B:()=>y});var n=r(10064),s=r(9997),i=r(80292),o=r(35995),l=r(71907),a=r(33397),p=r(25265),u=r(49861),c=r(22892),d=r(53283);function y(e){const t=e?.origins??[void 0];return(r,n)=>{const s=function(e,t,r){if("resource"===e?.type)return function(e,t,r){const n=(0,a.Oe)(t,r);return{type:String,read:(e,t,r)=>{const s=(0,d.r)(e,t,r);return n.type===String?s:"function"==typeof n.type?new n.type({url:s}):void 0},write:{writer(t,s,l,a){if(!a?.resources)return"string"==typeof t?void(s[l]=(0,d.t)(t,a)):void(s[l]=t.write({},a));const u=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,d.t)(u,{...a,verifyItemRelativeUrls:a?.verifyItemRelativeUrls?{writtenUrls:a.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},d.M.NO),b=n.type!==String&&(!(0,i.l)(this)||a?.origin&&this.originIdOf(r)>(0,p.M9)(a.origin)),v={object:this,propertyName:r,value:t,targetUrl:y,dest:s,targetPropertyName:l,context:a,params:e};a?.portalItem&&y&&!(0,o.YP)(y)?b&&e?.contentAddressed?g(v):b?function(e){const{context:t,targetUrl:r,params:n,value:s,dest:i,targetPropertyName:l}=e;if(!t.portalItem)return;const a=t.portalItem.resourceFromPath(r),p=f(s,r,t),u=(0,c.B)(p),d=(0,o.Ml)(a.path),y=n?.compress??!1;u===d?(t.resources&&h({...e,resource:a,content:p,compress:y,updates:t.resources.toUpdate}),i[l]=r):g(e)}(v):function(e){let{context:t,targetUrl:r,dest:n,targetPropertyName:s}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(r),compress:!1}),n[s]=r)}(v):a?.portalItem&&(null==y||null!=(0,d.i)(y)||(0,o.jc)(y)||b)?g(v):s[l]=y}}}}(e,t,r);switch(e?.type??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=d.b;return{read:e,write:t}}}}(e,r,n);for(const e of t){const t=(0,u.CJ)(r,e,n);for(const e in s)t[e]=s[e]}}}function g(e){const{targetUrl:t,params:r,value:i,context:a,dest:p,targetPropertyName:u}=e;if(!a.portalItem)return;const y=(0,d.p)(t),g=f(i,t,a);if(r?.contentAddressed&&"json"!==g.type)return void a.messages?.push(new n.Z("persistable:contentAddressingUnsupported",`Property "${u}" is trying to serializing a resource with content of type ${g.type} with content addressing. Content addressing is only supported for json resources.`,{content:g}));const b=r?.contentAddressed&&"json"===g.type?(0,s.F)(g.jsonString):y?.filename??(0,l.DO)(),v=(0,o.v_)(r?.prefix??y?.prefix,b),m=`${v}.${(0,c.B)(g)}`;if(r?.contentAddressed&&a.resources&&"json"===g.type){const e=a.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===m}))??a.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===m}));if(e)return void(p[u]=e.resource.itemRelativeUrl)}const j=a.portalItem.resourceFromPath(m);(0,o.jc)(t)&&a.resources&&a.resources.pendingOperations.push((0,o.gi)(t).then((e=>{j.path=`${v}.${(0,c.B)({type:"blob",blob:e})}`,p[u]=j.itemRelativeUrl})).catch((()=>{})));const _=r?.compress??!1;a.resources&&h({...e,resource:j,content:g,compress:_,updates:a.resources.toAdd}),p[u]=j.itemRelativeUrl}function h(e){let{object:t,propertyName:r,updates:n,resource:s,content:i,compress:o}=e;n.push({resource:s,content:i,compress:o,finish:e=>{!function(e,t,r){"string"==typeof e[t]?e[t]=r.url:e[t].url=r.url}(t,r,e)}})}function f(e,t,r){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(r))}}},80292:(e,t,r)=>{function n(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{l:()=>n})},39192:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(27366),s=r(80573),i=r(97613),o=r(33985),l=r(80987),a=r(60354),p=r(94172),u=r(49861),c=(r(93169),r(32718),r(84936),r(69912)),d=r(79803),y=r(41414),g=r(74509);const h=l.Z.ofType(o.Z);let f=class extends s.Z{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,p.YP)((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null)}),p.tX))}get targets(){return this._get("targets")||new h}set targets(e){this._set("targets",(0,a.Z)(e,this.targets,h))}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==this.observer?.position||null==e)return null;const t=e=>"absolute-height"===(0,g.VW)(e.position,e.elevationInfo),r=this.observer.position,n=(0,y.al)(r.x,r.y,r.z,r.x,r.y,r.z);for(const i of this.targets)if(null!=i.position){const t=(0,d.projectOrLoad)(i.position,e);if(null!=t.pending)return{pending:t.pending,extent:null};if(null!=t.geometry){const{x:e,y:r,z:s}=t.geometry;(0,y.pp)(n,[e,r,s])}}const s=(0,y.HH)(n,e);return t(this.observer)&&this.targets.every(t)||(s.zmin=void 0,s.zmax=void 0),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll()}};(0,n._)([(0,u.Cb)({type:["line-of-sight"]})],f.prototype,"type",void 0),(0,n._)([(0,u.Cb)({type:i.Z,json:{read:!0,write:!0}})],f.prototype,"observer",void 0),(0,n._)([(0,u.Cb)({cast:a.R,type:h,nonNullable:!0,json:{read:!0,write:!0}})],f.prototype,"targets",null),(0,n._)([(0,u.Cb)({value:null,readOnly:!0})],f.prototype,"extent",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],f.prototype,"spatialReference",null),(0,n._)([(0,u.Cb)({readOnly:!0})],f.prototype,"requiredPropertiesForEditing",null),f=(0,n._)([(0,c.j)("esri.analysis.LineOfSightAnalysis")],f);const b=f;var v=r(97642),m=r(30651),j=r(6061);const _=l.Z.ofType(o.Z);let I=class extends((0,j.q)((0,v.R)(m.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new b,this.opacity=1}initialize(){this.addHandles((0,p.YP)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),p.tX))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new l.Z}set targets(e){(0,a.Z)(e,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new b)}};(0,n._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],I.prototype,"type",void 0),(0,n._)([(0,u.Cb)({type:["LineOfSightLayer"]})],I.prototype,"operationalLayerType",void 0),(0,n._)([(0,u.Cb)({type:i.Z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],I.prototype,"observer",null),(0,n._)([(0,u.Cb)({type:_,json:{read:!0,write:{ignoreOrigin:!0}}})],I.prototype,"targets",null),(0,n._)([(0,u.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],I.prototype,"analysis",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],I.prototype,"fullExtent",null),(0,n._)([(0,u.Cb)({readOnly:!0})],I.prototype,"spatialReference",null),(0,n._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],I.prototype,"opacity",void 0),(0,n._)([(0,u.Cb)({type:["show","hide"]})],I.prototype,"listMode",void 0),I=(0,n._)([(0,c.j)("esri.layers.LineOfSightLayer")],I);const w=I},22892:(e,t,r)=>{r.d(t,{B:()=>s});var n=r(35995);function s(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,n.Ml)(e);return a[t]||o}(e.url)}(e)]||l}const i={},o="text/plain",l=i[o],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const p in a)i[a[p]]=p}}]);
//# sourceMappingURL=9192.3d3fabd6.chunk.js.map