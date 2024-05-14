"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[86728],{36231:(e,t,i)=>{i.d(t,{q:()=>a});var r,s,n,l=i(84397),o={exports:{}};r=o,s=function(){function e(i,r,s,n,l){for(;n>s;){if(n-s>600){var o=n-s+1,a=r-s+1,u=Math.log(o),d=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*d*(o-d)/o)*(a-o/2<0?-1:1);e(i,r,Math.max(s,Math.floor(r-a*d/o+c)),Math.min(n,Math.floor(r+(o-a)*d/o+c)),l)}var p=i[r],h=s,g=n;for(t(i,s,r),l(i[n],p)>0&&t(i,s,n);h<g;){for(t(i,h,g),h++,g--;l(i[h],p)<0;)h++;for(;l(i[g],p)>0;)g--}0===l(i[s],p)?t(i,s,g):t(i,++g,n),g<=r&&(s=g+1),r<=g&&(n=g-1)}}function t(e,t,i){var r=e[t];e[t]=e[i],e[i]=r}function i(e,t){return e<t?-1:e>t?1:0}return function(t,r,s,n,l){e(t,r,s||0,n||t.length-1,l||i)}},void 0!==(n=s())&&(r.exports=n);const a=(0,l.g)(o.exports)},85403:(e,t,i)=>{function r(e,t){return e?t?4:3:t?3:2}function s(e,t,i,s){if(null===t||void 0===t||!t.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const o=e.coords,a=[],u=i?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:c}=t,p=r(i,s);let h=0;for(const r of d){const e=n(u,c,h,r,i,s);e&&a.push(e),h+=r*p}if(a.sort(((e,t)=>{let r=e[2]-t[2];return 0===r&&i&&(r=e[4]-t[4]),r})),a.length){let e=6*a[0][2];o[0]=a[0][0]/e,o[1]=a[0][1]/e,i&&(e=6*a[0][4],o[2]=0!==e?a[0][3]/e:0),(o[0]<u[0]||o[0]>u[1]||o[1]<u[2]||o[1]>u[3]||i&&(o[2]<u[4]||o[2]>u[5]))&&(o.length=0)}if(!o.length){const e=t.lengths[0]?l(c,0,d[0],i,s):null;if(!e)return null;o[0]=e[0],o[1]=e[1],i&&e.length>2&&(o[2]=e[2])}return e}function n(e,t,i,s,n,l){const o=r(n,l);let a=i,u=i+o,d=0,c=0,p=0,h=0,g=0;for(let r=0,v=s-1;r<v;r++,a+=o,u+=o){const i=t[a],r=t[a+1],s=t[a+2],l=t[u],o=t[u+1],y=t[u+2];let v=i*o-l*r;h+=v,d+=(i+l)*v,c+=(r+o)*v,n&&(v=i*y-l*s,p+=(s+y)*v,g+=v),i<e[0]&&(e[0]=i),i>e[1]&&(e[1]=i),r<e[2]&&(e[2]=r),r>e[3]&&(e[3]=r),n&&(s<e[4]&&(e[4]=s),s>e[5]&&(e[5]=s))}if(h>0&&(h*=-1),g>0&&(g*=-1),!h)return null;const y=[d,c,.5*h];return n&&(y[3]=p,y[4]=.5*g),y}function l(e,t,i,s,n){const l=r(s,n);let c=t,p=t+l,h=0,g=0,y=0,v=0;for(let r=0,b=i-1;r<b;r++,c+=l,p+=l){const t=e[c],i=e[c+1],r=e[c+2],n=e[p],l=e[p+1],b=e[p+2],f=s?a(t,i,r,n,l,b):o(t,i,n,l);if(f)if(h+=f,s){const e=d(t,i,r,n,l,b);g+=f*e[0],y+=f*e[1],v+=f*e[2]}else{const e=u(t,i,n,l);g+=f*e[0],y+=f*e[1]}}return h>0?s?[g/h,y/h,v/h]:[g/h,y/h]:i>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function o(e,t,i,r){const s=i-e,n=r-t;return Math.sqrt(s*s+n*n)}function a(e,t,i,r,s,n){const l=r-e,o=s-t,a=n-i;return Math.sqrt(l*l+o*o+a*a)}function u(e,t,i,r){return[e+.5*(i-e),t+.5*(r-t)]}function d(e,t,i,r,s,n){return[e+.5*(r-e),t+.5*(s-t),i+.5*(n-i)]}i.d(t,{Y:()=>s})},77835:(e,t,i)=>{i.d(t,{n:()=>l});var r=i(85403),s=i(3182),n=i(80457);const l={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new s.u_(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(null==e.centroid&&(e.centroid=(0,r.Y)(new n.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)}},79240:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var r=i(27366),s=i(10064),n=i(92026),l=i(94172),o=i(49861),a=(i(93169),i(32718),i(84936),i(69912)),u=i(42069),d=i(60487),c=i(79510),p=i(77098),h=i(20488),g=i(61712),y=i(78485),v=i(67581);let b=class extends((0,u.A)(v.Z)){constructor(){super(...arguments),this.type="graphics-3d",this.symbologySnappingSupported=!0,this._slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null,this.ignoresMemoryFactor=!0}initialize(){this._set("processor",new c.D({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.addHandles(this.layer.on("graphic-update",(e=>this.processor.graphicsCore.graphicUpdateHandler(e)))),this.addResolvingPromise((0,g.E)(this).then((e=>this.fullExtentInLocalViewSpatialReference=e))),this.layer.internal?this.notifyChange("updating"):this.addHandles((0,l.gx)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.ready}),(()=>()=>this.notifyChange("updating")),{once:!0}))}destroy(){this._updatingHandles.removeAll(),this._set("processor",(0,n.SC)(this.processor))}get loadedGraphics(){return this.layer.graphics}get legendEnabled(){var e;return this.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.frustumVisibilitySuspended)}get slicePlaneEnabled(){const e=this.layer.internal;return this._slicePlaneEnabled&&!e}set slicePlaneEnabled(e){this._slicePlaneEnabled=e}getSuspendInfo(){var e,t,i,r;const s=super.getSuspendInfo();return s.outsideScaleRange=null!==(e=null===(t=this.processor)||void 0===t?void 0:t.scaleVisibilitySuspended)&&void 0!==e&&e,s.outsideOfView=null!==(i=null===(r=this.processor)||void 0===r?void 0:r.frustumVisibilitySuspended)&&void 0!==i&&i,s}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var i;return null===(i=this.processor)||void 0===i?void 0:i.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}queryGraphics(){return Promise.resolve(this.loadedGraphics)}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return this.processor.highlight(e)}async elevationAlignPointsInFeatures(e,t){const{processor:i}=this;if(null==(null===i||void 0===i?void 0:i.graphics3DGraphics))throw new s.Z("graphicslayerview3d:missing-processor","A Graphics3D processor is needed to resolve graphics elevation.");const{graphics3DGraphics:r}=i;return(0,d.W)(this.view,this.layer,(e=>"number"==typeof e?r.get(e):void 0),e,t)}async queryForSymbologySnapping(e,t){return(0,p.c)(this.processor,e,t)}get updatePolicy(){var e;return(null===(e=this.processor)||void 0===e?void 0:e.graphicsCore.effectiveUpdatePolicy)||y.j.SYNC}canResume(){var e;return super.canResume()&&!(null!==(e=this.processor)&&void 0!==e&&e.scaleVisibilitySuspended)}isUpdating(){var e,t;return this.view&&this.layer&&!((null===(e=this.processor)||void 0===e||!e.updating)&&(this.layer.internal||null!==(t=this.view.basemapTerrain)&&void 0!==t&&t.ready))}get performanceInfo(){return new h.W(this.usedMemory,this.loadedGraphics.length,-1,-1)}get usedMemory(){var e,t;return null!==(e=null===(t=this.processor)||void 0===t||null===(t=t.graphicsCore)||void 0===t?void 0:t.usedMemory)&&void 0!==e?e:0}get unloadedMemory(){var e;return null===(e=this.processor)||void 0===e||null===(e=e.graphicsCore)||void 0===e?void 0:e.unprocessedMemoryEstimate}};(0,r._)([(0,o.Cb)()],b.prototype,"loadedGraphics",null),(0,r._)([(0,o.Cb)({readOnly:!0})],b.prototype,"legendEnabled",null),(0,r._)([(0,o.Cb)()],b.prototype,"layer",void 0),(0,r._)([(0,o.Cb)({readOnly:!0})],b.prototype,"processor",void 0),(0,r._)([(0,o.Cb)()],b.prototype,"_slicePlaneEnabled",void 0),(0,r._)([(0,o.Cb)({type:Boolean})],b.prototype,"slicePlaneEnabled",null),b=(0,r._)([(0,a.j)("esri.views.3d.layers.GraphicsLayerView3D")],b);const f=b},42069:(e,t,i)=>{i.d(t,{A:()=>d});var r=i(27366),s=i(42537),n=i(66978),l=i(94172),o=i(49861),a=(i(93169),i(32718),i(84936),i(69912)),u=i(5354);const d=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,u.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,s.kB)((()=>e.abort()))),await(0,l.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,n.k_)(t);const i=(0,u.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,r._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,o.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,a.j)("esri.views.3d.layers.LayerView3D")],t),t}},79510:(e,t,i)=>{i.d(t,{D:()=>G});var r=i(27366),s=i(52639),n=i(7138),l=i(80987),o=i(42537),a=i(92026),u=i(66978),d=i(94172),c=i(49861),p=(i(93169),i(32718),i(84936),i(69912)),h=i(48732),g=i(46634),y=i(30651),v=i(37818),b=i(34610),f=i(21149),m=i(26279),C=i(61310),_=i(67032),I=i(57848),w=i(84328),S=i(46568),E=i(59453),V=i(96387),P=i(68401),O=i(78485);let G=class extends n.Z{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=m.Lw.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null,this._updatingHandles=new g.R}initialize(){const{layer:e}=this,t="effectiveScaleRange"in e?e:null,i=this.scaleVisibilityEnabled&&null!=t,r=new _.w({owner:this,layer:this.owner.layer,preferredUpdatePolicy:O.j.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(e,t)=>new I._({graphicsCoreOwner:this,graphicsCore:e,queryGraphicUIDsInExtent:t,elevationProvider:this.view.elevationProvider}),scaleVisibility:i?(e,i)=>new E.c({graphicsCoreOwner:this,layer:t,queryGraphicUIDsInExtent:i,graphicsCore:e,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:e=>new S.d(e)}});if(this._set("graphicsCore",r),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new w.L({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const e=this.owner;this._updatingHandles.add((()=>e.fullOpacity),(()=>this.graphicsCore.opacityChange()))}if("elevationInfo"in e){const t=e;this._updatingHandles.add((()=>t.elevationInfo),((e,t)=>{(0,h.Hg)(e,t)&&this._updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())}))}this._set("initializePromise",this._initializeAsync()),this._updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(e){if((0,u.D_)(e))return;throw e}this.destroyed||(this.addHandles((0,d.YP)((()=>this.view.clippingArea),(()=>this._updateClippingExtent()),d.Z_)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this._updatingHandles.destroy(),this._set("frustumVisibility",(0,a.SC)(this.frustumVisibility)),this._set("graphicsCore",(0,a.SC)(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.scaleVisibility}get elevationAlignment(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.elevationAlignment}get objectStates(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.objectStates}get scaleVisibilitySuspended(){return!(null==this.scaleVisibility||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return null!=this.frustumVisibility&&this.frustumVisibility.suspended}get suspended(){var e;return null!==(e=this.owner.suspended)&&void 0!==e&&e}get updating(){var e;return!!(null!==(e=this.graphicsCore)&&void 0!==e&&e.updating||null!=this.scaleVisibility&&this.scaleVisibility.updating||null!=this.frustumVisibility&&this.frustumVisibility.updating||this._updatingHandles.updating)}get graphics3DGraphics(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return null===(e=this.graphicsCore)||void 0===e?void 0:e.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var e;return null!==(e=this.owner.fullOpacity)&&void 0!==e?e:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,t,i){const r=(0,b.Kb)(e,{renderer:t,arcade:i});if(null!==r&&void 0!==r&&r.color){const e=r.color;e[0]=e[0]/255,e[1]=e[1]/255,e[2]=e[2]/255}return r}getRenderingInfoAsync(e,t,i,r){return(0,b.xn)(e,{renderer:t,arcade:i,...r})}getHit(e){if(this.owner.loadedGraphics){const t=this.owner.loadedGraphics.find((t=>t.uid===e));if(t){const e=this.layer instanceof y.Z?this.layer:null,i=(0,v.mW)(t,e);return{type:"graphic",graphic:i,layer:i.layer}}}return null}whenGraphicBounds(e,t){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,t):Promise.reject()}computeAttachmentOrigin(e,t){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,t):null}getSymbolLayerSize(e,t){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,t):null}maskOccludee(e){const{set:t,handle:i}=this.objectStates.acquireSet(P.V_.MaskOccludee,null);return this.objectStates.setUid(t,e.uid),i}highlight(e){if(e instanceof f.Z)return x;if("number"==typeof e)return this.highlight([e]);if(e instanceof s.Z)return this.highlight([e]);if(e instanceof l.Z&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof s.Z){const t=e.map((e=>e.uid)),{set:i,handle:r}=this.objectStates.acquireSet(P.V_.Highlight,null);return this.objectStates.setUids(i,t),r}if("number"==typeof e[0]){const t=e,{set:i,handle:r}=this.objectStates.acquireSet(P.V_.Highlight,null);return this.objectStates.setObjectIds(i,t),r}}return x}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:t}=this;if(null==e&&null==t)return;const i=i=>{let{computedExtent:r,extentPadding:s}=i;this._suspendResumeExtent=(0,V.Go)(r,this._suspendResumeExtent,C.PY,s),null!=e&&e.setExtent(this._suspendResumeExtent),null!=t&&t.setExtent(this._suspendResumeExtent)};this.addHandles((0,d.YP)((()=>{var e,t;return{computedExtent:null===(e=this.graphicsCore)||void 0===e?void 0:e.computedExtent,extentPadding:null===(t=this.graphicsCore)||void 0===t?void 0:t.extentPadding}}),(e=>i(e)),d.tX))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};(0,r._)([(0,c.Cb)()],G.prototype,"type",void 0),(0,r._)([(0,c.Cb)({constructOnly:!0})],G.prototype,"owner",void 0),(0,r._)([(0,c.Cb)()],G.prototype,"layer",null),(0,r._)([(0,c.Cb)()],G.prototype,"view",null),(0,r._)([(0,c.Cb)({constructOnly:!0})],G.prototype,"graphicsCore",void 0),(0,r._)([(0,c.Cb)()],G.prototype,"scaleVisibility",null),(0,r._)([(0,c.Cb)({constructOnly:!0})],G.prototype,"frustumVisibility",void 0),(0,r._)([(0,c.Cb)()],G.prototype,"elevationAlignment",null),(0,r._)([(0,c.Cb)()],G.prototype,"objectStates",null),(0,r._)([(0,c.Cb)()],G.prototype,"scaleVisibilitySuspended",null),(0,r._)([(0,c.Cb)({readOnly:!0})],G.prototype,"frustumVisibilitySuspended",null),(0,r._)([(0,c.Cb)()],G.prototype,"suspended",null),(0,r._)([(0,c.Cb)({readOnly:!0})],G.prototype,"updating",null),(0,r._)([(0,c.Cb)()],G.prototype,"loadedGraphics",null),(0,r._)([(0,c.Cb)()],G.prototype,"fullOpacity",null),(0,r._)([(0,c.Cb)()],G.prototype,"slicePlaneEnabled",null),(0,r._)([(0,c.Cb)()],G.prototype,"drapeSourceType",void 0),(0,r._)([(0,c.Cb)()],G.prototype,"updatePolicy",null),(0,r._)([(0,c.Cb)({constructOnly:!0})],G.prototype,"scaleVisibilityEnabled",void 0),(0,r._)([(0,c.Cb)({constructOnly:!0})],G.prototype,"frustumVisibilityEnabled",void 0),(0,r._)([(0,c.Cb)()],G.prototype,"initializePromise",void 0),G=(0,r._)([(0,p.j)("esri.views.3d.layers.graphics.GraphicsProcessor")],G);const x=(0,o.kB)()},60487:(e,t,i)=>{i.d(t,{W:()=>p});i(59486);var r=i(66978),s=i(12400),n=i(68859),l=i(55946),o=i(74509),a=i(69691),u=i(78935),d=i(8821),c=i(78952);async function p(e,t,i,p,h){var g;const{elevationProvider:y,renderCoordsHelper:v}=e,{elevationInfo:b}=t,{pointsInFeatures:f,spatialReference:m}=p,C=c.Z.fromJSON(m),_=(0,d.WI)(b,!0),I=await(0,d.kr)(_,C,h);(0,r.k_)(h);const w=[],S=new Set,E=new Set,V=new u.o,P=(0,l.T)(0,0,0,c.Z.WGS84),O=new a.Lm,G=(0,s.Ue)();P.spatialReference=C;const x=null!==(g=e.elevationProvider.spatialReference)&&void 0!==g?g:e.spatialReference;for(const{objectId:r,points:s}of f){const e=i(r);if(null==e){for(const e of s){var R;w.push(null!==(R=e.z)&&void 0!==R?R:0)}S.add(r);continue}e.isDraped&&E.add(r);const l=e.graphic.geometry;V.setFromElevationInfo((0,o.Jn)(l,b)),V.updateFeatureExpressionInfoContext(I,e.graphic,t);for(const{x:t,y:i,z:r}of s)P.x=t,P.y=i,P.z=null!==r&&void 0!==r?r:0,await(0,n.U)(P,G,x,0,{signal:h}),(0,a.qZ)(G,y,V,v,O),w.push(O.z)}return{elevations:w,drapedObjectIds:E,failedObjectIds:S}}},77098:(e,t,i)=>{i.d(t,{c:()=>n});var r=i(66978),s=i(819);async function n(e,t,i){var n;if(null==e||0===t.candidates.length)return l;const o=null!==(n=e.graphics3DGraphicsByObjectID)&&void 0!==n?n:e.graphics3DGraphics,a=[],u=[],{renderer:d}=e,c=null!=d&&"arcadeRequired"in d&&d.arcadeRequired?(0,s.LC)():null,p=async(t,r)=>{let{graphic:s,graphics3DSymbol:n}=r;const l=await c,o=await e.getRenderingInfoAsync(s,d,l,{signal:i});return null==o?[]:n.queryForSnapping(t,g,o,i)},{candidates:h,spatialReference:g}=t;for(let r=0;r<h.length;++r){const e=h[r],{objectId:t}=e,i="number"==typeof t?null===o||void 0===o?void 0:o.get(t):void 0;if(null==i)continue;const{graphics3DSymbol:s}=i;s.symbologySnappingSupported&&(a.push(p(e,i)),u.push(r))}if(0===a.length)return l;const y=await Promise.all(a);(0,r.k_)(i);const v=[],b=[];for(let r=0;r<y.length;++r){const e=y[r],t=u[r];for(const i of e)v.push(i),b.push(t)}return{candidates:v,sourceCandidateIndices:b}}const l={candidates:[],sourceCandidateIndices:[]}},61712:(e,t,i)=>{i.d(t,{E:()=>n});var r=i(81753),s=i(67387);function n(e){const t=e.view.spatialReference,i=e.layer.fullExtent,n=null!=i&&i.spatialReference;if(null==i||!n)return Promise.resolve(null);if(n.equals(t))return Promise.resolve(i.clone());const l=(0,r.iV)(i,t);return null!=l?Promise.resolve(l):e.view.state.isLocal?(0,s.projectGeometry)(i,t,e.layer.portalItem).then((t=>!e.destroyed&&t?t:null)).catch((()=>null)):Promise.resolve(null)}},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var r=i(27366),s=i(7138),n=i(91505),l=i(79056),o=i(32718),a=i(92026),u=i(67426),d=i(49861),c=(i(93169),i(84936),i(69912)),p=i(46634);let h=class extends((0,l.IG)((0,u.v)(n.Z.EventedMixin(s.Z)))){constructor(e){super(e),this._updatingHandles=new p.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",r=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(r,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,r;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(r=this.parent)||void 0===r?void 0:r.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,r._)([(0,d.Cb)()],h.prototype,"fullOpacity",null),(0,r._)([(0,d.Cb)()],h.prototype,"layer",void 0),(0,r._)([(0,d.Cb)()],h.prototype,"parent",void 0),(0,r._)([(0,d.Cb)({readOnly:!0})],h.prototype,"suspended",null),(0,r._)([(0,d.Cb)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,r._)([(0,d.Cb)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,r._)([(0,d.Cb)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,r._)([(0,d.Cb)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,r._)([(0,d.Cb)()],h.prototype,"visible",null),(0,r._)([(0,d.Cb)()],h.prototype,"view",void 0),h=(0,r._)([(0,c.j)("esri.views.layers.LayerView")],h);const g=h}}]);
//# sourceMappingURL=86728.4e4b098a.chunk.js.map