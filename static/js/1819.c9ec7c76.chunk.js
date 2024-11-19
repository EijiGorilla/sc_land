"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[1819],{42069:(e,t,i)=>{i.d(t,{A:()=>p});var a=i(27366),r=i(42537),s=i(66978),l=i(94172),n=i(49861),o=(i(93169),i(32718),i(84936),i(69912)),h=i(5354);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),(0,h.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,r.kB)((()=>e.abort()))),await(0,l.N1)((()=>this.view.defaultsFromMap?.heightModelInfoReady),t),(0,s.k_)(t);const i=(0,h.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}};return(0,a._)([(0,n.Cb)()],t.prototype,"view",void 0),(0,a._)([(0,n.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,a._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},31819:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var a=i(27366),r=i(10064),s=i(49861),l=(i(93169),i(32718),i(84936),i(69912)),n=i(79803),o=i(42069),h=i(77385),p=i(56667),d=i(67581),u=i(13107),c=i(32645),y=i(45008);let g=class extends((0,u.Z)((0,h.r)((0,o.A)(d.Z)))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get tileInfo(){return this.layer.tileInfo}initialize(){if("web-tile"===this.layer.type){const e=this.layer.fullExtent?.spatialReference,t=this.layer.tileInfo?.spatialReference;if(null==e||null==t||!(0,n.canProjectWithoutEngine)(e,t)){const e="defaults"===this.layer.originOf("fullExtent")||null==this.layer.fullExtent?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new r.Z("layerview:incompatible-fullextent",e)))}}(0,c.Uf)(this,this.layer)&&(this._popupHighlightHelper=new c.VF({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,y.K)(e,t,this.view),layerView:this,updatingHandles:this._updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){this._popupHighlightHelper?.destroy()}async fetchTile(e,t){return(0,p.h)(this,e,t)}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?.fetchPopupFeaturesAtLocation(e,t)??[]}async doRefresh(){this.suspended||this.emit("data-changed")}};(0,a._)([(0,s.Cb)()],g.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,s.Cb)()],g.prototype,"hasMixedImageFormats",null),(0,a._)([(0,s.Cb)()],g.prototype,"layer",void 0),(0,a._)([(0,s.Cb)()],g.prototype,"tileInfo",null),g=(0,a._)([(0,l.j)("esri.views.3d.layers.TileLayerView3D")],g);const m=g},77385:(e,t,i)=>{i.d(t,{r:()=>u});var a=i(27366),r=i(10064),s=i(94172),l=i(49861),n=(i(93169),i(32718),i(84936),i(69912)),o=i(20488),h=i(58890),p=i(53379),d=i(69787);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.hasMixedImageFormats=!0}get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get visibleAtCurrentScale(){if(!(0,d.Av)(this.layer.minScale,this.layer.maxScale)||!this.view.terrainScale)return!0;const e=Math.round(this.view.basemapTerrain.tilingScheme.levelAtScale(this.view.terrainScale));return e>=this.displayLevelRange.minLevel&&e<=this.displayLevelRange.maxLevel}get dataScaleRange(){const e=this.tileInfo.lods;let t=e[0].scale,i=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:e,effectiveMaxLOD:a}=this.layer.tilemapCache;t=this.tileInfo.lodAt(e).scale,i=this.tileInfo.lodAt(a).scale}return{minScale:t,maxScale:i}}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,d.Cy)(e)&&this.visibleAtCurrentTimeExtent||!1}get dataLevelRange(){const{minScale:e,maxScale:t}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,t)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,t=this.layer.maxScale||this.dataScaleRange.maxScale,i=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale&&i.maxLevel++,i}get performanceInfo(){return new o.W(this.view.basemapTerrain.getUsedMemoryForLayerView(this))}getTileUrl(e){return this.layer.getTileUrl(e[0],e[1],e[2])}_addTilingSchemeMatchPromise(){if(null==this.fullExtent)return this.addResolvingPromise(Promise.reject(new r.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e)return this.addResolvingPromise(Promise.reject(e));this.addResolvingPromise((0,s.N1)((()=>this.view?.basemapTerrain?.tilingSchemeLocked)).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t="tilemapCache"in this.layer?this.layer.tilemapCache?.effectiveMaxLOD:void 0,i=this._getTileInfoCompatibilityError(this.tileInfo,e,t);if(i)throw i})))}_getTileInfoSupportError(e,t){const i=(0,p.er)(e,t,this.view.spatialReference,this.view.state.viewingMode,"tilemapCache"in this.layer?this.layer.tilemapCache?.effectiveMaxLOD:void 0);if(!i)return;const a={layer:this.layer,error:i};switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":return new r.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",a);default:return new r.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",a)}}_getTileInfoCompatibilityError(e,t,i){return null!=e&&t.compatibleWith(e,i)?null:new r.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},a=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!a)return i;const r=a.levels[0],s=e=>{const t=Math.log(r.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,s(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,s(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,a._)([(0,l.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,a._)([(0,l.Cb)(h.q)],t.prototype,"updatingProgress",void 0),(0,a._)([(0,l.Cb)(h.V)],t.prototype,"updatingProgressValue",void 0),(0,a._)([(0,l.Cb)()],t.prototype,"hasMixedImageFormats",void 0),(0,a._)([(0,l.Cb)()],t.prototype,"fullExtent",null),(0,a._)([(0,l.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,a._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),(0,a._)([(0,l.Cb)()],t.prototype,"dataScaleRange",null),(0,a._)([(0,l.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,a._)([(0,l.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,a._)([(0,l.Cb)()],t.prototype,"layer",void 0),t=(0,a._)([(0,n.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},56667:(e,t,i)=>{i.d(t,{h:()=>n});var a=i(32718),r=i(66978),s=i(71684),l=i(53379);async function n(e,t,i){const n=e.layer;if((0,l.FZ)(n)){const s=await n.fetchTile(t[0],t[1],t[2],i);if((0,r.Hc)(i))throw a.Z.getLogger(e).warnOnce("A call to fetchTile resolved even though the request was aborted. fetchTile should not resolve if options.signal.aborted is true."),(0,r.zE)();return s}let o=e.getTileUrl(t);(0,s.d)(n)&&n.refreshTimestamp&&(o+=`${o.includes("?")?"&":"?"}_ts=${n.refreshTimestamp}`);const h=e.hasMixedImageFormats?"image+type":"image";return i.requester.request(o,h,i)}},67581:(e,t,i)=>{i.d(t,{Z:()=>g});var a=i(27366),r=i(7138),s=i(91505),l=i(79056),n=i(32718),o=i(92026),h=i(67426),p=i(49861),d=(i(93169),i(84936),i(69912)),u=i(46634),c=i(69787);let y=class extends((0,l.IG)((0,h.v)(s.Z.EventedMixin(r.Z)))){constructor(e){super(e),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";n.Z.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,c.Cy)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,c.Cy)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,a._)([(0,p.Cb)()],y.prototype,"view",void 0),(0,a._)([(0,p.Cb)()],y.prototype,"fullOpacity",null),(0,a._)([(0,p.Cb)()],y.prototype,"layer",void 0),(0,a._)([(0,p.Cb)()],y.prototype,"parent",void 0),(0,a._)([(0,p.Cb)({readOnly:!0})],y.prototype,"suspended",null),(0,a._)([(0,p.Cb)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,a._)([(0,p.Cb)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,a._)([(0,p.Cb)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,a._)([(0,p.Cb)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,a._)([(0,p.Cb)()],y.prototype,"updateSuspended",null),(0,a._)([(0,p.Cb)()],y.prototype,"visible",null),(0,a._)([(0,p.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),(0,a._)([(0,p.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentTimeExtent",null),y=(0,a._)([(0,d.j)("esri.views.layers.LayerView")],y);const g=y},13107:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(27366),r=i(32718),s=i(66978),l=i(94172),n=(i(93169),i(84936),i(10064),i(69912));const o=e=>{let t=class extends e{initialize(){this.addHandles((0,l.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,s.D_)(e)||r.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,a._)([(0,n.j)("esri.views.layers.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=1819.c9ec7c76.chunk.js.map