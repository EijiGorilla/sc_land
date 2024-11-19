"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[8456],{14317:(e,t,i)=>{i.d(t,{h:()=>s});var n=i(62044),a=(i(63780),i(44927),i(84652),i(32718),i(86710));i(83217);function s(e,t,i){if(null==e?.timeInfo)return null;const{datesInUnknownTimezone:s=!1,timeOffset:r,useViewTime:l}=e;let o=e.timeExtent;s&&(o=function(e){if(!e)return e;const{start:t,end:i}=e;return new n.Z({start:null!=t?(0,a.Nm)(t,t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,a.Nm)(i,i.getTimezoneOffset(),"minutes"):i})}(o));let u=l?t&&o?t.intersection(o):t||o:o;return!u||u.isEmpty||u.isAllTime?u:(r&&(u=u.offset(-r.value,r.unit)),s&&(u=function(e){if(!e)return e;const{start:t,end:i}=e;return new n.Z({start:null!=t?(0,a.Nm)(t,-t.getTimezoneOffset(),"minutes"):t,end:null!=i?(0,a.Nm)(i,-i.getTimezoneOffset(),"minutes"):i})}(u)),u.equals(i)?i:u)}},8456:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var n=i(27366),a=i(66978),s=i(94172),r=(i(32718),i(93169),i(84936),i(10064)),l=i(69912),o=i(69229),u=i(49861),d=i(848),p=i(14317),h=i(21149),m=i(24405);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}get timeExtent(){return(0,p.h)(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(e,t){const{layer:i}=this;if(!e)throw new r.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:n}=i,s=(0,m.V5)(i,t);if(!n||null==s)return[];const l=await s.getRequiredFields();(0,a.k_)(t);const o=new h.Z;o.timeExtent=this.timeExtent,o.geometry=e,o.outFields=l,o.outSpatialReference=e.spatialReference;const{resolution:u,spatialReference:p}=this.view,c="2d"===this.view.type?new d.Z(u,u,p):new d.Z(.5*u,.5*u,p),{returnTopmostRaster:f,showNoDataRecords:g}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},w={returnDomainValues:!0,returnTopmostRaster:f,pixelSize:c,showNoDataRecords:g,signal:t?.signal};return i.queryVisibleRasters(o,w).then((e=>e))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return(0,n._)([(0,u.Cb)()],t.prototype,"layer",void 0),(0,n._)([(0,u.Cb)()],t.prototype,"suspended",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],t.prototype,"timeExtent",null),(0,n._)([(0,u.Cb)()],t.prototype,"view",void 0),t=(0,n._)([(0,l.j)("esri.views.layers.ImageryLayerView")],t),t};let f=class extends(c(o.Z)){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=(0,a.Ds)((async e=>{this.redraw(((e,t)=>this._redrawImage(e,t)),e)}),2e3)}initialize(){this.addHandles([(0,s.gx)((()=>this.view.basemapTerrain.ready),(()=>this._initializeMaximumDataResolution()),{once:!0,initial:!0}),this.layer.on("redraw",(()=>this._updatingHandles.addPromise(this.redrawDebounced())))]),this._updatingHandles.add((()=>this.layer?.exportImageServiceParameters?.version),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())})),this._updatingHandles.add((()=>this.layer?.renderer),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())})),this._updatingHandles.add((()=>this.timeExtent),(()=>this._updatingHandles.addPromise(this.refreshDebounced())))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,i){t.imageOrCanvasElement?e.image=t.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,i))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||null==e.pixelData)throw new Error;const i=e.image,n=i.getContext("2d"),a=await this.layer.applyRenderer(e.pixelData,{signal:t}),s=this.layer.applyFilter(a).pixelBlock;if(null==s)throw new Error;i.width=s.width,i.height=s.height;const r=n.createImageData(s.width,s.height);r.data.set(s.getAsRGBA()),n.putImageData(r,0,0)}};f=(0,n._)([(0,l.j)("esri.views.3d.layers.ImageryLayerView3D")],f);const g=f},24405:(e,t,i)=>{i.d(t,{V5:()=>s,e7:()=>a,zc:()=>r});var n=i(37270);async function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.popupTemplate;if(null==t)return[];const i=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:a}=t,{objectIdField:s,typeIdField:r,globalIdField:l,relationships:o}=e;if(i.includes("*"))return["*"];const u=a?(0,n.CH)(e):[],d=(0,n.Q0)(e.fieldsIndex,[...i,...u]);return r&&d.push(r),d&&s&&e.fieldsIndex?.has(s)&&!d.includes(s)&&d.push(s),d&&l&&e.fieldsIndex?.has(l)&&!d.includes(l)&&d.push(l),o&&o.forEach((t=>{const{keyField:i}=t;d&&i&&e.fieldsIndex?.has(i)&&!d.includes(i)&&d.push(i)})),d}function s(e,t){return e.popupTemplate?e.popupTemplate:null!=t&&t.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function r(e,t){return null!=s(e,{defaultPopupTemplateEnabled:t})}}}]);
//# sourceMappingURL=8456.69b19522.chunk.js.map