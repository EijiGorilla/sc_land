"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[4200],{14200:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var r=i(27366),s=i(80987),n=i(49861),a=(i(93169),i(32718),i(84936),i(69912)),l=i(42069);const o=e=>{let t=class extends e{constructor(){super(...arguments),this.layerViews=new s.Z}get dynamicGroupLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.dynamicGroupLayer))}get footprintLayerView(){return this.layerViews.find((e=>e.layer===this.layer?.footprintLayer))}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return(0,r._)([(0,n.Cb)()],t.prototype,"layer",void 0),(0,r._)([(0,n.Cb)()],t.prototype,"layerViews",void 0),(0,r._)([(0,n.Cb)({readOnly:!0})],t.prototype,"dynamicGroupLayerView",null),(0,r._)([(0,n.Cb)({readOnly:!0})],t.prototype,"footprintLayerView",null),t=(0,r._)([(0,a.j)("esri.views.layers.CatalogLayerView")],t),t};var d=i(67581);let p=class extends(o((0,l.A)(d.Z))){constructor(){super(...arguments),this.type="catalog-3d",this.layerViews=new s.Z}};(0,r._)([(0,n.Cb)()],p.prototype,"layerViews",void 0),p=(0,r._)([(0,a.j)("esri.views.3d.layers.CatalogLayerView3D")],p);const y=p},42069:(e,t,i)=>{i.d(t,{A:()=>p});var r=i(27366),s=i(42537),n=i(66978),a=i(94172),l=i(49861),o=(i(93169),i(32718),i(84936),i(69912)),d=i(5354);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,s.kB)((()=>e.abort()))),await(0,a.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,n.k_)(t);const i=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,r._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,r._)([(0,l.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,r._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},67581:(e,t,i)=>{i.d(t,{Z:()=>v});var r=i(27366),s=i(7138),n=i(91505),a=i(79056),l=i(32718),o=i(92026),d=i(67426),p=i(49861),y=(i(93169),i(84936),i(69912)),u=i(46634),h=i(69787);let c=class extends((0,a.IG)((0,d.v)(n.Z.EventedMixin(s.Z)))){constructor(e){super(e),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";l.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,h.Cy)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,h.Cy)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,r._)([(0,p.Cb)()],c.prototype,"view",void 0),(0,r._)([(0,p.Cb)()],c.prototype,"fullOpacity",null),(0,r._)([(0,p.Cb)()],c.prototype,"layer",void 0),(0,r._)([(0,p.Cb)()],c.prototype,"parent",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,r._)([(0,p.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,r._)([(0,p.Cb)()],c.prototype,"updateSuspended",null),(0,r._)([(0,p.Cb)()],c.prototype,"visible",null),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"visibleAtCurrentScale",null),(0,r._)([(0,p.Cb)({readOnly:!0})],c.prototype,"visibleAtCurrentTimeExtent",null),c=(0,r._)([(0,y.j)("esri.views.layers.LayerView")],c);const v=c}}]);
//# sourceMappingURL=4200.bddcc2fd.chunk.js.map