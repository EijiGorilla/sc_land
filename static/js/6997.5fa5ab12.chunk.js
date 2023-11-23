"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[6997],{44041:(e,t,r)=>{r.d(t,{R:()=>m});var s=r(27366),i=r(7138),a=r(76672),l=r(49861),o=(r(25243),r(63780),r(93169),r(69912)),n=r(82582),y=r(45948),p=r(87072),h=r(58132);const u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let m=class extends i.Z{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,p.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,h.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(u[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null===(e=this.floors)||void 0===e||!e.length),r=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return r.length?JSON.stringify(r.reduce(((e,t)=>{const r=(0,p.f)(this.floors,t),s=(0,a._)(r,t.definitionExpression);return null!=s&&(e[t.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=this.scale,s=t=>{t.visible&&(0===r||(0,n.o2)(r,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(s):e.unshift(t))};t&&t.forEach(s);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,r)=>e[r]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"dynamicLayers",null),(0,s._)([(0,l.Cb)()],m.prototype,"floors",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"hasDynamicLayers",null),(0,s._)([(0,l.Cb)()],m.prototype,"layer",null),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"layers",null),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"layerDefs",null),(0,s._)([(0,l.Cb)({type:Number})],m.prototype,"scale",void 0),(0,s._)([(0,l.Cb)(y.qG)],m.prototype,"timeExtent",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"version",null),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"visibleSublayers",null),m=(0,s._)([(0,o.j)("esri.layers.mixins.ExportImageParameters")],m)},46997:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var s=r(27366),i=(r(32718),r(25243),r(63780),r(93169),r(10064),r(69912)),a=r(69229),l=r(49861),o=r(45948),n=r(44041);const y=e=>{let t=class extends e{initialize(){this.exportImageParameters=new n.R({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e,t;return null!==(e=null===(t=this.view)||void 0===t?void 0:t.floors)&&void 0!==e?e:null}get exportImageVersion(){var e;return null!==(e=this.exportImageParameters)&&void 0!==e&&e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var e;return!!super.canResume()&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}};return(0,s._)([(0,l.Cb)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"floors",null),(0,s._)([(0,l.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,l.Cb)()],t.prototype,"layer",void 0),(0,s._)([(0,l.Cb)()],t.prototype,"suspended",void 0),(0,s._)([(0,l.Cb)(o.qG)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,i.j)("esri.views.layers.MapImageLayerView")],t),t};var p=r(84848),h=r(45008);let u=class extends(y(a.Z)){constructor(){super(...arguments),this.type="map-image-3d"}initialize(){this._updatingHandles.add((()=>this.exportImageVersion),(()=>this._updatingHandles.addPromise(this.refreshDebounced()))),this._popupHighlightHelper=new p.VF({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,h.K)(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})}destroy(){var e;null===(e=this._popupHighlightHelper)||void 0===e||e.destroy()}fetchPopupFeatures(e,t){return this._popupHighlightHelper.fetchPopupFeatures(e,t)}getFetchOptions(){return{timeExtent:this.timeExtent}}};u=(0,s._)([(0,i.j)("esri.views.3d.layers.MapImageLayerView3D")],u);const m=u}}]);
//# sourceMappingURL=6997.5fa5ab12.chunk.js.map