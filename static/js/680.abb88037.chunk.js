"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[680],{89623:(e,t,r)=>{r.d(t,{Z:()=>x});var i=r(27366),s=r(7138),a=r(10064),o=r(93169),n=r(66978),l=r(35995),u=r(49861),p=(r(32718),r(84936),r(69912)),y=r(92975),d=r(18277),c=r(64020),h=r(23084),f=r(34211),b=(r(59486),r(5192)),m=r(21149),g=r(53866);var S=r(24246),I=r(77946),w=r(90851),v=r(49818);let _=class extends s.Z{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return(0,l.mN)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),i=null!=e.outStatistics?.[0],s=(0,o.Z)("featurelayer-pbf-statistics"),a=!i||s;let n;if(this.pbfSupported&&a)try{n=await(0,w.t)(this.url,r,t)}catch(l){if("query:parsing-pbf"!==l.name)throw l;this.pbfSupported=!1}return this.pbfSupported&&a||(n=await(0,I.F)(this.url,r,t)),this._normalizeFields(n.fields),n}async featureSetFromJSON(e,t,i){if(!this._queryIs3DObjectFormat(e)||null==this.infoFor3D||!t.features)return v.Z.fromJSON(t);const{meshFeatureSetFromJSON:s}=await(0,n.Hl)(Promise.all([r.e(3899),r.e(5367)]).then(r.bind(r,75367)),i);return s(e,this.infoFor3D,t)}executeForCount(e,t){return(0,f.P)(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return async function(e,t,r){const i=(0,h.en)(e),s=await(0,b.Vr)(i,m.Z.from(t),{...r}),a=s.data.extent;return!a||isNaN(a.xmin)||isNaN(a.ymin)||isNaN(a.xmax)||isNaN(a.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:g.Z.fromJSON(a)}}(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return(0,S.G)(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,t){const[{default:i},{executeRelationshipQuery:s}]=await(0,n.Hl)(Promise.all([Promise.resolve().then(r.bind(r,99086)),r.e(2964).then(r.bind(r,12964))]),t);return e=i.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:i},{executeRelationshipQueryForCount:s}]=await(0,n.Hl)(Promise.all([Promise.resolve().then(r.bind(r,99086)),r.e(2964).then(r.bind(r,12964))]),t);return e=i.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:i,fetchAttachments:s,processAttachmentQueryResult:a}=await(0,n.Hl)(r.e(9301).then(r.bind(r,59301)),t),o=(0,h.en)(this.url);return a(o,await(this.queryAttachmentsSupported?i(o,e,t):s(o,e,t)))}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:i}=await(0,n.Hl)(r.e(2200).then(r.bind(r,82200)),t);return i(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:i}=await(0,n.Hl)(r.e(5182).then(r.bind(r,75182)),t);return i(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:i}=await(0,n.Hl)(r.e(5641).then(r.bind(r,55641)),t);return i(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:i}=await(0,n.Hl)(r.e(9406).then(r.bind(r,19406)),t);return i(this.parsedUrl,e,t)}_normalizeQuery(e){let t=m.Z.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?c.n.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(null!=r&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:i,queryFormats:s}=r,o=(0,d.S0)("model/gltf-binary",i)??(0,d.Ow)("glb",i),n=(0,d.S0)("model/gltf+json",i)??(0,d.Ow)("gltf",i);for(const e of s){if(e===o){t.formatOf3DObjects=e;break}e!==n||t.formatOf3DObjects||(t.formatOf3DObjects=e)}if(!t.formatOf3DObjects)throw new a.Z("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!(0,y.fS)(t.outSpatialReference,this.sourceSpatialReference))throw new a.Z("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(null==t.outFields||!t.outFields.includes("*")){t=t===e?t.clone():t,null==t.outFields&&(t.outFields=[]);const{originX:i,originY:s,originZ:a,translationX:o,translationY:n,translationZ:l,scaleX:u,scaleY:p,scaleZ:y,rotationX:d,rotationY:c,rotationZ:h,rotationDeg:f}=r.transformFieldRoles;t.outFields.push(i,s,a,o,n,l,u,p,y,d,c,h,f)}}return t}_normalizeFields(e){if(null!=this.fieldsIndex&&null!=e)for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return null!=this.infoFor3D&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,i._)([(0,u.Cb)({type:c.n})],_.prototype,"dynamicDataSource",void 0),(0,i._)([(0,u.Cb)()],_.prototype,"fieldsIndex",void 0),(0,i._)([(0,u.Cb)()],_.prototype,"gdbVersion",void 0),(0,i._)([(0,u.Cb)()],_.prototype,"infoFor3D",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],_.prototype,"parsedUrl",null),(0,i._)([(0,u.Cb)()],_.prototype,"pbfSupported",void 0),(0,i._)([(0,u.Cb)()],_.prototype,"queryAttachmentsSupported",void 0),(0,i._)([(0,u.Cb)()],_.prototype,"sourceSpatialReference",void 0),(0,i._)([(0,u.Cb)({type:String})],_.prototype,"url",void 0),_=(0,i._)([(0,p.j)("esri.layers.graphics.sources.support.QueryTask")],_);const x=_},6741:(e,t,r)=>{r.d(t,{O:()=>g});var i=r(27366),s=r(76200),a=r(77427),o=r(66978),n=r(35995),l=r(49901),u=r(49861),p=(r(93169),r(32718),r(84936),r(38511)),y=r(69912),d=r(25265),c=r(53866),h=r(78952),f=r(25899),b=r(70361),m=r(73117);const g=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(e,t){const r=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!r)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const i=this.type,s="tile"!==i&&!!t.supportsDynamicLayers,a=r.includes("query"),o=r.includes("map"),n=!!t.exportTilesAllowed,u=r.includes("tilemap"),p=r.includes("data"),y="tile"!==i&&(!t.tileInfo||s),d="tile"!==i&&(!t.tileInfo||s),c="tile"!==i,h=t.cimVersion&&l.G.parse(t.cimVersion),f=h?.since(1,4)??!1,b=h?.since(2,0)??!1;return{operations:{supportsExportMap:o,supportsExportTiles:n,supportsIdentify:a,supportsQuery:p,supportsTileMap:u},exportMap:o?{supportsArcadeExpressionForLabeling:f,supportsSublayersChanges:c,supportsDynamicLayers:s,supportsSublayerVisibility:y,supportsSublayerDefinitionExpression:d,supportsCIMSymbols:b}:null,exportTiles:n?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchRelatedService(e){const t=this.portalItem;if(!t||!(0,m.Fj)(t))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=t.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},e).then((e=>e.find((e=>"Feature Service"===e.type))??null),(()=>null)));const r=await this._relatedFeatureServicePromise;return(0,o.k_)(e),r?{itemId:r.id,url:r.url}:null}async fetchSublayerInfo(e,t){const{source:r}=e;if(this?.portalItem&&"tile"===this.type&&"map-layer"===r?.type&&(0,m.Fj)(this.portalItem)&&e.originIdOf("url")<d.s3.SERVICE){const i=await this.fetchRelatedService(t);i&&(e.url=(0,n.v_)(i.url,r.mapLayerId.toString()),e.layerItemId=i.itemId)}const{url:i}=e;let a;if("data-layer"===r.type)a=(await(0,s.Z)(i,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...t})).data;else if(i&&e.originIdOf("url")>d.s3.SERVICE)try{const e=await this._fetchAllLayersAndTablesFromService(i),t=(0,f.Qc)(i)?.sublayer??r.mapLayerId;a=e.get(t)}catch{}else{let i=e.id;"map-layer"===r?.type&&(i=r.mapLayerId);try{a=(await this.fetchAllLayersAndTables(t)).get(i)}catch{}}return a}async fetchAllLayersAndTables(e){return this._fetchAllLayersAndTablesFromService(this.parsedUrl?.path,e)}async _fetchAllLayersAndTablesFromService(e,t){await this.load(t),this._allLayersAndTablesMap||=new Map;const r=(0,f.Qc)(e),i=(0,a.s1)(this._allLayersAndTablesMap,r?.url.path,(()=>(0,s.Z)((0,n.v_)(r?.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{const t=new Map,{layers:r,tables:i}=e.data,s=[...r??[],...i??[]];for(const a of s)t.set(a.id,a);return{result:t}}),(e=>({error:e}))))),l=await i;if((0,o.k_)(t),"result"in l)return l.result;throw l.error}};return(0,i._)([(0,u.Cb)({readOnly:!0})],t.prototype,"capabilities",void 0),(0,i._)([(0,p.r)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),(0,i._)([(0,u.Cb)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,i._)([(0,u.Cb)({type:c.Z})],t.prototype,"fullExtent",void 0),(0,i._)([(0,u.Cb)(b.id)],t.prototype,"id",void 0),(0,i._)([(0,u.Cb)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),(0,i._)([(0,u.Cb)(b.C_)],t.prototype,"popupEnabled",void 0),(0,i._)([(0,u.Cb)({type:h.Z})],t.prototype,"spatialReference",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],t.prototype,"version",void 0),(0,i._)([(0,p.r)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=(0,i._)([(0,y.j)("esri.layers.mixins.ArcGISMapService")],t),t}},18870:(e,t,r)=>{r.d(t,{x:()=>m});var i=r(27366),s=r(80987),a=r(77178),o=r(10064),n=r(32718),l=r(94172),u=r(49861),p=(r(93169),r(84936),r(23879)),y=r(69912),d=r(25265),c=r(77990),h=r(58132);const f=s.Z.ofType(c.Z);function b(e,t){e&&e.forEach((e=>{t(e),e.sublayers&&e.sublayers.length&&b(e.sublayers,t)}))}const m=e=>{let t=class extends e{constructor(){super(...arguments),this.allSublayers=new a.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[d.s3.SERVICE]:{},[d.s3.PORTAL_ITEM]:{},[d.s3.WEB_SCENE]:{},[d.s3.WEB_MAP]:{}},this.subtables=null,this.addHandles([(0,l.YP)((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),l.Z_),(0,l.YP)((()=>this.subtables),((e,t)=>this._handleSublayersChange(e,t)),l.Z_)])}destroy(){this.allSublayers.destroy()}readSublayers(e,t){if(!t||!e)return;const{sublayersSourceJSON:r}=this,i=(0,d.M9)(t.origin);if(i<d.s3.SERVICE)return;if(r[i]={context:t,visibleLayers:e.visibleLayers||r[i].visibleLayers,layers:e.layers||r[i].layers},i>d.s3.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:s,origin:a}=this.createSublayersForOrigin("web-document"),o=(0,p.vw)(this);o.setDefaultOrigin(a),this._set("sublayers",new f(s)),o.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const t=(0,d.M9)("web-document"===e?"web-map":e);let r=d.s3.SERVICE,i=this.sublayersSourceJSON[d.s3.SERVICE].layers,s=this.sublayersSourceJSON[d.s3.SERVICE].context,a=null;const o=[d.s3.PORTAL_ITEM,d.s3.WEB_SCENE,d.s3.WEB_MAP].filter((e=>e<=t));for(const d of o){const e=this.sublayersSourceJSON[d];(0,h.ac)(e.layers)&&(r=d,i=e.layers,s=e.context,e.visibleLayers&&(a={visibleLayers:e.visibleLayers,context:e.context}))}const n=[d.s3.PORTAL_ITEM,d.s3.WEB_SCENE,d.s3.WEB_MAP].filter((e=>e>r&&e<=t));let l=null;for(const d of n){const{layers:e,visibleLayers:t,context:r}=this.sublayersSourceJSON[d];e&&(l={layers:e,context:r}),t&&(a={visibleLayers:t,context:r})}const u=function(e,t){const r=[],i={};return e?(e.forEach((e=>{const s=new c.Z;if(s.read(e,t),i[s.id]=s,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=i[e.parentLayerId];t.sublayers||(t.sublayers=[]),t.sublayers.unshift(s)}else r.unshift(s)})),r):r}(i,s),p=new Map,y=new Set;if(l)for(const d of l.layers)p.set(d.id,d);if(a?.visibleLayers)for(const d of a.visibleLayers)y.add(d);return b(u,(e=>{l&&e.read(p.get(e.id),l.context),a&&e.read({defaultVisibility:y.has(e.id)},a.context)})),{origin:(0,d.x3)(r),sublayers:new f({items:u})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.removeHandles("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.addHandles([e.on("after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,t.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.addHandles(e.on("before-changes",(e=>{n.Z.getLogger("esri.layers.TileLayer").error(new o.Z("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return(0,i._)([(0,u.Cb)({readOnly:!0})],t.prototype,"allSublayers",void 0),(0,i._)([(0,u.Cb)({readOnly:!0,type:s.Z.ofType(c.Z)})],t.prototype,"serviceSublayers",void 0),(0,i._)([(0,u.Cb)({value:null,type:f,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),(0,i._)([(0,u.Cb)({type:f,json:{read:{source:"tables"}}})],t.prototype,"subtables",void 0),t=(0,i._)([(0,y.j)("esri.layers.mixins.SublayersOwner")],t),t}},77990:(e,t,r)=>{r.d(t,{Z:()=>te});var i,s=r(27366),a=(r(59486),r(44055)),o=(r(94931),r(15126),r(98689),r(57823),r(32066),r(49018),r(34999),r(28189),r(9014),r(40464)),n=r(76200),l=r(51508),u=r(80987),p=r(10064),y=r(93169),d=r(79056),c=r(84652),h=r(54472),f=r(32718),b=r(97642),m=r(76672),g=r(35995),S=r(49861),I=r(89125),w=r(38511),v=r(69912),_=r(31201),x=r(25243),C=r(25265),F=r(23879),O=r(89623),E=r(62594),D=r(87165),L=r(83040),T=r(52410),P=r(37270),V=r(77748),A=r(85116),j=r(71065),R=r(62170),q=r(49630),Z=r(64020),N=r(23505),M=r(23084),k=r(99837),Q=r(21149),U=r(81085),J=r(53866),B=r(78952),H=r(27823);function $(e){return"esriSMS"===e?.type}function z(e,t,r){const i=this.originIdOf(t)>=(0,C.M9)(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&"map-image"===r.layer?.type&&(r.writeSublayerStructure||i)}}function G(e,t,r){return{enabled:!!r&&"tile"===r.layer?.type&&(r.origin&&this.originIdOf(t)>=(0,C.M9)(r.origin)||this._isOverridden(t))}}function K(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function W(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=(0,C.M9)(r.origin))}}let Y=0;const X=new Set(["layer","parent","loaded","loadStatus","loadError","loadWarnings"]);let ee=i=class extends((0,b.R)((0,d.IG)(h.Z))){constructor(e){super(e),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.isTable=!1,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.spatialReference=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:t,url:r}=this;if(!t&&!r)throw new p.Z("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const i=t?await t.fetchSublayerInfo(this,e):(await(0,n.Z)(r,{responseType:"json",query:{f:"json"},...e})).data;i&&(this.sourceJSON=i,this.read({layerDefinition:i},{origin:"service",layer:t,url:(0,M.en)(r)}))})()),this}readCapabilities(e,t){t=t.layerDefinition||t;const{operations:{supportsQuery:r,supportsQueryAttachments:i},query:{supportsFormatPBF:s,supportsOrderBy:a,supportsPagination:o},data:{supportsAttachment:n},queryRelated:l}=(0,q.h)(t,this.url);return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:r,supportsQueryAttachments:i},data:{supportsAttachment:n},query:{supportsFormatPBF:s,supportsOrderBy:a,supportsPagination:o},queryRelated:l}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}readMaxScaleRange(e,t){return{minScale:(t=t.layerDefinition||t).minScale??0,maxScale:t.maxScale??0}}get fieldsIndex(){return new T.Z(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields)for(const r of t.fields)if("esriFieldTypeGlobalID"===r.type)return r.name}get id(){return this._get("id")??Y++}set id(e){this._get("id")!==e&&(!1!==this.layer?.capabilities?.exportMap?.supportsDynamicLayers?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}readIsTable(e,t){return"Table"===t.type}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},i)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers?.forEach((t=>t.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition?.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition?.maxScale||0}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;const r=t.fields?.find((e=>"esriFieldTypeOID"===e.type));return r?.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const{layerDefinition:r}=t;return 1-.01*(r?.transparency??r?.drawingInfo?.transparency??0)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=(0,x.vU)(this.parent.id):t.parentLayerId=-1}get queryTask(){if(!this.layer)return null;const{capabilities:e,fieldsIndex:t,layer:r,url:i}=this,{spatialReference:s}=r,a="gdbVersion"in r?r.gdbVersion:void 0,o=(0,y.Z)("featurelayer-pbf")&&e?.query.supportsFormatPBF;return new O.Z({fieldsIndex:t,gdbVersion:a,pbfSupported:o,queryAttachmentsSupported:e?.operations?.supportsQueryAttachments??!1,sourceSpatialReference:s,url:i})}set renderer(e){if((0,P.YN)(e,this.fieldsIndex),e)for(const t of e.getSymbols())if((0,l.dU)(t)){f.Z.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new N.R({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return(0,x.se)(u.Z.ofType(i),e)}writeSublayers(e,t,r){this.sublayers?.length&&(t[r]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTitle(e,t){return t.layerDefinition?.name??t.name}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const e=t.fields.find((e=>e.name.toLowerCase()===r));e&&(r=e.name)}return r}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,t=this.source;if(!e)return null;if(this._lastParsedUrl=e,"map-layer"===t?.type)return`${e.path}/${t.mapLayerId}`;const r={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${(0,g.B7)(r)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=(0,F.vw)(this),t=new i;return(0,F.vw)(t).store=e.clone(X),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return(0,U.eZ)(this,e)}createQuery(){return new Q.Z({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;const e=(await Promise.resolve().then(r.bind(r,64326))).default,{layer:t,url:i}=this;let s;if(i&&this.originIdOf("url")>C.s3.SERVICE)s=new e({url:i});else{if(!t?.parsedUrl)throw new p.Z("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const r=t.parsedUrl;s=new e({url:r.path}),r&&this.source&&("map-layer"===this.source.type?s.layerId=this.source.mapLayerId:s.dynamicDataSource=this.source)}}return null!=t?.refreshInterval&&(s.refreshInterval=t.refreshInterval),this.definitionExpression&&(s.definitionExpression=this.definitionExpression),this.floorInfo&&(s.floorInfo=(0,c.d9)(this.floorInfo)),this.originIdOf("labelingInfo")>C.s3.SERVICE&&(s.labelingInfo=(0,c.d9)(this.labelingInfo)),this.originIdOf("labelsVisible")>C.s3.DEFAULTS&&(s.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>C.s3.DEFAULTS&&(s.legendEnabled=this.legendEnabled),this.originIdOf("visible")>C.s3.DEFAULTS&&(s.visible=this.visible),this.originIdOf("minScale")>C.s3.DEFAULTS&&(s.minScale=this.minScale),this.originIdOf("maxScale")>C.s3.DEFAULTS&&(s.maxScale=this.maxScale),this.originIdOf("opacity")>C.s3.DEFAULTS&&(s.opacity=this.opacity),this.originIdOf("popupTemplate")>C.s3.DEFAULTS&&(s.popupTemplate=(0,c.d9)(this.popupTemplate)),this.originIdOf("renderer")>C.s3.SERVICE&&(s.renderer=(0,c.d9)(this.renderer)),"data-layer"===this.source?.type&&(s.dynamicDataSource=this.source.clone()),this.originIdOf("title")>C.s3.DEFAULTS&&(s.title=this.title),"map-image"===t?.type&&t.originIdOf("customParameters")>C.s3.DEFAULTS&&(s.customParameters=t.customParameters),"tile"===t?.type&&t.originIdOf("customParameters")>C.s3.DEFAULTS&&(s.customParameters=t.customParameters),s}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){return(0,E.KL)(this.types,this.typeIdField,e)}getFieldDomain(e,t){const r=t?.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}async queryAttachments(e,t){await this.load(),e=k.Z.from(e);const r=this.capabilities;if(!r?.data?.supportsAttachment)throw new p.Z("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:a,num:o,size:n,start:l,where:u}=e;if(!r?.operations?.supportsQueryAttachments&&(i?.length>0||a?.length>0||n?.length>0||o||l||u))throw new p.Z("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(s?.length||a?.length||u))throw new p.Z("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,t)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.createQuery(),t=arguments.length>1?arguments[1]:void 0;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new p.Z("queryFeatureCount:not-supported","this layer doesn't support queries.");if(!this.url)throw new p.Z("queryFeatureCount:not-supported","this layer has no url.");const r=this.layer?.apiKey;return await this.queryTask.executeForCount(e,{...t,query:{...this.layer?.customParameters,token:r}})}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.createQuery(),t=arguments.length>1?arguments[1]:void 0;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new p.Z("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new p.Z("queryFeatures:not-supported","this layer has no url.");const r=await this.queryTask.execute(e,{...t,query:{...this.layer?.customParameters,token:this.layer?.apiKey}});if(r?.features)for(const i of r.features)i.sourceLayer=this;return r}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.createQuery(),t=arguments.length>1?arguments[1]:void 0;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new p.Z("queryObjectIds:not-supported","this layer doesn't support queries.");if(!this.url)throw new p.Z("queryObjectIds:not-supported","this layer has no url.");const r=this.layer?.apiKey;return await this.queryTask.executeForIds(e,{...t,query:{...this.layer?.customParameters,token:r}})}async queryRelatedFeatures(e,t){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new p.Z("queryRelatedFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new p.Z("queryRelatedFeatures:not-supported","this layer has no url.");const r=this.layer?.apiKey;return await this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer?.customParameters,token:r}})}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new p.Z("queryRelatedFeaturesCount:not-supported","this layer doesn't support queries.");if(!this.capabilities.queryRelated.supportsCount)throw new p.Z("queryRelatedFeaturesCount:not-supported","this layer doesn't support query related counts.");if(!this.url)throw new p.Z("queryRelatedFeaturesCount:not-supported","this layer has no url.");const r=this.layer?.apiKey;return await this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer?.customParameters,token:r}})}toExportImageJSON(e){const t={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},r=(0,m._)(e,this.definitionExpression);null!=r&&(t.definitionExpression=r);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,t)=>(e[t]=this.originIdOf(t),e)),{}),s=Object.keys(i).some((e=>i[e]>C.s3.SERVICE));if(s){const e=t.drawingInfo={};if(i.renderer>C.s3.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>C.s3.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>C.s3.SERVICE)if(this.labelingInfo){!this.loaded&&this.labelingInfo?.some((e=>!e.labelPlacement))&&f.Z.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let t=this.labelingInfo;null!=this.geometryType&&(t=(0,A.a)(this.labelingInfo,H.M.toJSON(this.geometryType))),e.showLabels=!0,e.labelingInfo=t.filter((e=>e.labelPlacement)).map((e=>e.toJSON({origin:"service",layer:this.layer})))}else e.showLabels=!1;i.opacity>C.s3.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline?.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,t){if(e){const r=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const e of r)$(e.symbol)&&t(e.symbol);"symbol"in e&&$(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&$(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,i=this._get(e);let s,a;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",a="supportsModification"}const o=(0,F.vw)(this).getDefaultOrigin();if("service"!==o){if(s&&!1===this.layer?.capabilities?.exportMap?.[s])return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(a&&!1===this.capabilities?.exportMap[a])return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${a}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==o&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this.removeAllHandles()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.addHandles([e.on("after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,t.layer=null})),e.on("before-changes",(e=>{(this.layer?.capabilities?.exportMap?.supportsSublayersChanges??1)||(f.Z.getLogger(this).error(new p.Z("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,t){const{layer:r,declaredClass:i}=this;f.Z.getLogger(i).error(new p.Z("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${r?.id}'`,{reason:t,sublayer:this,layer:r}))}_getLayerDomain(e){return this.fieldsIndex.get(e)?.domain??null}};ee.test={isMapImageLayerOverridePolicy:e=>e===K||e===z,isTileImageLayerOverridePolicy:e=>e===G},(0,s._)([(0,S.Cb)({readOnly:!0})],ee.prototype,"capabilities",void 0),(0,s._)([(0,w.r)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],ee.prototype,"readCapabilities",null),(0,s._)([(0,S.Cb)()],ee.prototype,"defaultPopupTemplate",null),(0,s._)([(0,S.Cb)({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:z}}})],ee.prototype,"definitionExpression",null),(0,s._)([(0,S.Cb)({readOnly:!0})],ee.prototype,"effectiveScaleRange",null),(0,s._)([(0,w.r)("service","maxScaleRange",["minScale","maxScale"])],ee.prototype,"readMaxScaleRange",null),(0,s._)([(0,S.Cb)({type:[L.Z],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],ee.prototype,"fields",void 0),(0,s._)([(0,S.Cb)({readOnly:!0})],ee.prototype,"fieldsIndex",null),(0,s._)([(0,S.Cb)({type:j.Z,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:z},origins:{"web-scene":{read:!1,write:!1}}}})],ee.prototype,"floorInfo",null),(0,s._)([(0,S.Cb)({type:J.Z,json:{read:{source:"layerDefinition.extent"}}})],ee.prototype,"fullExtent",void 0),(0,s._)([(0,S.Cb)({type:H.M.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:H.M.read}}}}})],ee.prototype,"geometryType",void 0),(0,s._)([(0,S.Cb)({type:String})],ee.prototype,"globalIdField",void 0),(0,s._)([(0,w.r)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],ee.prototype,"readGlobalIdFieldFromService",null),(0,s._)([(0,S.Cb)({type:x.z8,json:{write:{ignoreOrigin:!0}}})],ee.prototype,"id",null),(0,s._)([(0,S.Cb)({readOnly:!0})],ee.prototype,"isTable",void 0),(0,s._)([(0,w.r)("service","isTable",["type"])],ee.prototype,"readIsTable",null),(0,s._)([(0,S.Cb)({value:null,type:[V.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:K}}})],ee.prototype,"labelingInfo",null),(0,s._)([(0,_.c)("labelingInfo")],ee.prototype,"writeLabelingInfo",null),(0,s._)([(0,S.Cb)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:K}}})],ee.prototype,"labelsVisible",null),(0,s._)([(0,S.Cb)({value:null})],ee.prototype,"layer",null),(0,s._)([(0,S.Cb)({type:String,json:{write:{overridePolicy:G}}})],ee.prototype,"layerItemId",void 0),(0,s._)([(0,S.Cb)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:W}}})],ee.prototype,"legendEnabled",void 0),(0,s._)([(0,S.Cb)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],ee.prototype,"listMode",null),(0,s._)([(0,S.Cb)({type:Number,value:0,json:{write:{overridePolicy:K}}})],ee.prototype,"minScale",null),(0,s._)([(0,w.r)("minScale",["minScale","layerDefinition.minScale"])],ee.prototype,"readMinScale",null),(0,s._)([(0,S.Cb)({type:Number,value:0,json:{write:{overridePolicy:K}}})],ee.prototype,"maxScale",null),(0,s._)([(0,w.r)("maxScale",["maxScale","layerDefinition.maxScale"])],ee.prototype,"readMaxScale",null),(0,s._)([(0,S.Cb)()],ee.prototype,"objectIdField",void 0),(0,s._)([(0,w.r)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],ee.prototype,"readObjectIdFieldFromService",null),(0,s._)([(0,S.Cb)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:K}}})],ee.prototype,"opacity",null),(0,s._)([(0,w.r)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],ee.prototype,"readOpacity",null),(0,s._)([(0,_.c)("opacity")],ee.prototype,"writeOpacity",null),(0,s._)([(0,S.Cb)({json:{type:x.z8,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:K}}})],ee.prototype,"parent",void 0),(0,s._)([(0,_.c)("parent")],ee.prototype,"writeParent",null),(0,s._)([(0,S.Cb)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:W,writer(e,t,r){t[r]=!e}}}})],ee.prototype,"popupEnabled",void 0),(0,s._)([(0,S.Cb)({type:a.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:W}}})],ee.prototype,"popupTemplate",void 0),(0,s._)([(0,S.Cb)({readOnly:!0})],ee.prototype,"queryTask",null),(0,s._)([(0,S.Cb)({type:[R.Z],readOnly:!0,json:{origins:{service:{read:{source:"layerDefinition.relationships"}}}}})],ee.prototype,"relationships",void 0),(0,s._)([(0,S.Cb)({types:o.A,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:K},origins:{"web-scene":{types:o.o,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:K}}}}})],ee.prototype,"renderer",null),(0,s._)([(0,S.Cb)({types:{key:"type",base:null,typeMap:{"data-layer":Z.n,"map-layer":N.R}},cast(e){if(e){if("mapLayerId"in e)return(0,x.TJ)(N.R,e);if("dataSource"in e)return(0,x.TJ)(Z.n,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:K}}})],ee.prototype,"source",null),(0,s._)([(0,S.Cb)()],ee.prototype,"sourceJSON",void 0),(0,s._)([(0,S.Cb)({type:B.Z,json:{origins:{service:{read:{source:"layerDefinition.extent.spatialReference"}}}}})],ee.prototype,"spatialReference",void 0),(0,s._)([(0,S.Cb)({value:null,json:{type:[x.z8],write:{target:"subLayerIds",allowNull:!0,overridePolicy:K}}})],ee.prototype,"sublayers",null),(0,s._)([(0,I.p)("sublayers")],ee.prototype,"castSublayers",null),(0,s._)([(0,_.c)("sublayers")],ee.prototype,"writeSublayers",null),(0,s._)([(0,S.Cb)({type:String,json:{name:"name",write:{overridePolicy:W}}})],ee.prototype,"title",void 0),(0,s._)([(0,w.r)("service","title",["name","layerDefinition.name"])],ee.prototype,"readTitle",null),(0,s._)([(0,S.Cb)({type:String})],ee.prototype,"typeIdField",void 0),(0,s._)([(0,S.Cb)({json:{read:!1},readOnly:!0,value:"sublayer"})],ee.prototype,"type",void 0),(0,s._)([(0,w.r)("typeIdField",["layerDefinition.typeIdField"])],ee.prototype,"readTypeIdField",null),(0,s._)([(0,S.Cb)({type:[D.Z],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],ee.prototype,"types",void 0),(0,s._)([(0,S.Cb)({type:String,json:{name:"layerUrl",write:{overridePolicy:G}}})],ee.prototype,"url",null),(0,s._)([(0,S.Cb)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:K}}})],ee.prototype,"visible",null),(0,s._)([(0,_.c)("visible")],ee.prototype,"writeVisible",null),ee=i=(0,s._)([(0,v.j)("esri.layers.support.Sublayer")],ee);const te=ee},83690:(e,t,r)=>{r.d(t,{V:()=>o,g:()=>a});var i=r(10064),s=r(66978);async function a(e,t,r){let a;try{a=await createImageBitmap(e)}catch(o){throw new i.Z("request:server",`Unable to load ${t}`,{url:t,error:o})}return(0,s.k_)(r),a}async function o(e,t,r,a,o){let n;try{n=await createImageBitmap(e)}catch(l){throw new i.Z("request:server",`Unable to load tile ${t}/${r}/${a}`,{error:l,level:t,row:r,col:a})}return(0,s.k_)(o),n}},58132:(e,t,r)=>{r.d(t,{FN:()=>a,QV:()=>s,ac:()=>n});var i=r(25265);function s(e,t,r){const i=t.flatten((e=>{let{sublayers:t}=e;return t})).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!o(e,t))}function a(e,t,r){return!!e.some((e=>{const t=e.source,s=!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(null==t.gdbVersion||t.gdbVersion===r);return e.commitProperty("renderer"),e.commitProperty("labelingInfo"),e.commitProperty("opacity"),e.commitProperty("labelsVisible"),!s||e.originIdOf("renderer")>i.s3.SERVICE||e.originIdOf("labelingInfo")>i.s3.SERVICE||e.originIdOf("opacity")>i.s3.SERVICE||e.originIdOf("labelsVisible")>i.s3.SERVICE}))||!o(e,t)}function o(e,t){if(!e?.length||null==t)return!0;const r=t.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const s=r.length;for(const{id:a}of e){for(;i<s&&r[i]!==a;)i++;if(i>=s)return!1}return!0}function n(e){return!!e&&e.some((e=>null!=e.minScale||null!=e.layerDefinition?.minScale))}}}]);
//# sourceMappingURL=680.abb88037.chunk.js.map