"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[983],{10983:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var r=i(27366),a=i(52639),s=i(93169),o=i(94172),n=i(49861),l=(i(32718),i(84936),i(69912)),d=i(43629),u=i(26279),c=i(42069),h=i(58890),p=i(67581),g=i(69787);let y=class extends((0,d.N)((0,c.A)(p.Z))){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._needsNormals=!(0,s.Z)("disable-feature:im-shading"),this.drapeTargetType=u.al.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var e,t;return null!==(e=null===(t=this._controller)||void 0===t?void 0:t.updatingProgress)&&void 0!==e?e:0}get lodFactor(){var e,t;return null!==(e=null===(t=this.view)||void 0===t||null===(t=t.qualitySettings)||void 0===t||null===(t=t.sceneService)||void 0===t||null===(t=t.integratedMesh)||void 0===t?void 0:t.lodFactor)&&void 0!==e?e:1}get progressiveLoadFactor(){return this.lodFactor>=1?.2:1}get visibleAtCurrentScale(){return(0,g.GB)(this.i3slayer.effectiveScaleRange,this.view.terrainScale)}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add((()=>this.layer.modifications),(()=>this._loadModifications()),o.nn),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){return new a.Z({layer:this.layer,sourceLayer:this.layer})}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),null==this.layer.modifications)return void(this._modifications=[]);const e=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange((()=>e),(()=>this._modifications=e.toArray()),o.nn),"modifications")}};(0,r._)([(0,n.Cb)()],y.prototype,"layer",void 0),(0,r._)([(0,n.Cb)()],y.prototype,"i3slayer",null),(0,r._)([(0,n.Cb)(h.q)],y.prototype,"updatingProgress",void 0),(0,r._)([(0,n.Cb)()],y.prototype,"updatingProgressValue",null),(0,r._)([(0,n.Cb)()],y.prototype,"lodFactor",null),(0,r._)([(0,n.Cb)({readOnly:!0})],y.prototype,"progressiveLoadFactor",null),(0,r._)([(0,n.Cb)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),y=(0,r._)([(0,l.j)("esri.views.3d.layers.IntegratedMeshLayerView3D")],y);const v=y}}]);
//# sourceMappingURL=983.81a47233.chunk.js.map