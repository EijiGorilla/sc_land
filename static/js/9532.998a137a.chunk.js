"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[9532],{9532:(e,t,o)=>{o.r(t),o.d(t,{default:()=>te});var r=o(27366),i=o(44055),n=o(76200),s=o(10064),l=o(84652),d=o(32718),a=o(97642),p=o(18202),u=o(66978),c=o(35995),y=o(49861),h=(o(93169),o(38511)),f=o(69912),b=o(31201),v=o(30651),m=o(27961),C=o(11936),w=o(46671),g=o(6061),_=o(29598),T=o(56811),j=o(81118),S=o(25243),x=o(27135),I=o(46784);o(84936);let V=class extends I.wq{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,r._)([(0,y.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],V.prototype,"field",void 0),(0,r._)([(0,y.Cb)({readOnly:!0,nonNullable:!0,json:{read:!1}})],V.prototype,"type",void 0),V=(0,r._)([(0,f.j)("esri.layers.pointCloudFilters.PointCloudFilter")],V);const R=V;var P;let Z=P=class extends R{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new P({field:this.field,requiredClearBits:(0,l.d9)(this.requiredClearBits),requiredSetBits:(0,l.d9)(this.requiredSetBits)})}};(0,r._)([(0,y.Cb)({type:[S.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],Z.prototype,"requiredClearBits",void 0),(0,r._)([(0,y.Cb)({type:[S.z8],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],Z.prototype,"requiredSetBits",void 0),(0,r._)([(0,x.J)({pointCloudBitfieldFilter:"bitfield"})],Z.prototype,"type",void 0),Z=P=(0,r._)([(0,f.j)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],Z);const q=Z;var F;let B=F=class extends R{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new F({field:this.field,includedReturns:(0,l.d9)(this.includedReturns)})}};(0,r._)([(0,y.Cb)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],B.prototype,"includedReturns",void 0),(0,r._)([(0,x.J)({pointCloudReturnFilter:"return"})],B.prototype,"type",void 0),B=F=(0,r._)([(0,f.j)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],B);const N=B;var z;let O=z=class extends R{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new z({field:this.field,mode:this.mode,values:(0,l.d9)(this.values)})}};(0,r._)([(0,y.Cb)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],O.prototype,"mode",void 0),(0,r._)([(0,x.J)({pointCloudValueFilter:"value"})],O.prototype,"type",void 0),(0,r._)([(0,y.Cb)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],O.prototype,"values",void 0),O=z=(0,r._)([(0,f.j)("esri.layers.pointCloudFilters.PointCloudValueFilter")],O);const k={key:"type",base:R,typeMap:{value:O,bitfield:q,return:N}};var A,D=o(45948),K=o(83040),M=o(25610),L=o(89860),E=o(21134),U=o(2632);let J=A=class extends U.Z{constructor(e){super(e),this.type="point-cloud-rgb",this.field=null}clone(){return new A({...this.cloneProperties(),field:(0,l.d9)(this.field)})}};(0,r._)([(0,x.J)({pointCloudRGBRenderer:"point-cloud-rgb"})],J.prototype,"type",void 0),(0,r._)([(0,y.Cb)({type:String,json:{write:!0}})],J.prototype,"field",void 0),J=A=(0,r._)([(0,f.j)("esri.renderers.PointCloudRGBRenderer")],J);const G=J;var W=o(89431),X=o(87005);const $={key:"type",base:U.Z,typeMap:{"point-cloud-class-breaks":E.Z,"point-cloud-rgb":G,"point-cloud-stretch":W.Z,"point-cloud-unique-value":X.Z},errorContext:"renderer"};var Y=o(74509),H=o(81085);const Q=(0,M.v)();let ee=class extends((0,j.Vt)((0,C.Y)((0,g.q)((0,_.I)((0,T.M)((0,a.R)((0,w.N)((0,m.V)(v.Z))))))))){constructor(){super(...arguments),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return null!==t&&void 0!==t&&t.domain?t.domain:null}readServiceFields(e,t,o){return Array.isArray(e)?e.map((e=>{const t=new K.Z;return"FieldTypeInteger"===e.type&&((e=(0,l.d9)(e)).type="esriFieldTypeInteger"),t.read(e,o),t})):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map((e=>new K.Z({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,o,r){(0,p.RB)("layerDefinition.drawingInfo.renderer",e.write({},r),t)}load(e){const t=null!=e?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(u.r9).then((()=>this._fetchService(t)));return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){const t=(0,H.eZ)(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var t;const o=this.fieldsIndex.get("RETURNS");if(!o)return;const r=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((e=>e.fieldName===o.name));if(!r)return;const i=new L.Z({name:"pcl-returns-decoded",title:o.alias||o.name,expression:"\n        var returnValue = $feature.".concat(o.name,';\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      ')});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var t;const o=this.fieldsIndex.get("RGB");if(!o)return;const r=null===(t=e.fieldInfos)||void 0===t?void 0:t.find((e=>e.fieldName===o.name));if(!r)return;const i=new L.Z({name:"pcl-rgb-decoded",title:o.alias||o.name,expression:"\n        var rgb = $feature.".concat(o.name,';\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      ')});e.expressionInfos=[...e.expressionInfos||[],i],r.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){if(await this.load(t),!this.attributeStorageInfo)throw new s.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const o=this.fieldsIndex.get(e);if(!o)throw new s.Z("pointcloudlayer:field-unexisting","Field '".concat(e,"' does not exist on the layer"));for(const r of this.attributeStorageInfo)if(r.name===o.name){const e=(0,c.v_)(this.parsedUrl.path,"./statistics/".concat(r.key));return(0,n.Z)(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new s.Z("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(j.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(j.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new s.Z("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new s.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((t=>t.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;(0,Y.LR)(d.Z.getLogger(this),(0,Y.Uy)("Point cloud layers","absolute-height",e)),(0,Y.LR)(d.Z.getLogger(this),(0,Y.kf)("Point cloud layers",e))}};(0,r._)([(0,y.Cb)({type:["PointCloudLayer"]})],ee.prototype,"operationalLayerType",void 0),(0,r._)([(0,y.Cb)(D.C_)],ee.prototype,"popupEnabled",void 0),(0,r._)([(0,y.Cb)({type:i.Z,json:{name:"popupInfo",write:!0}})],ee.prototype,"popupTemplate",void 0),(0,r._)([(0,y.Cb)({readOnly:!0,json:{read:!1}})],ee.prototype,"defaultPopupTemplate",null),(0,r._)([(0,y.Cb)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],ee.prototype,"opacity",void 0),(0,r._)([(0,y.Cb)({type:["show","hide"]})],ee.prototype,"listMode",void 0),(0,r._)([(0,y.Cb)({types:[k],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],ee.prototype,"filters",void 0),(0,r._)([(0,y.Cb)({type:[K.Z]})],ee.prototype,"fields",void 0),(0,r._)([(0,y.Cb)(Q.fieldsIndex)],ee.prototype,"fieldsIndex",void 0),(0,r._)([(0,h.r)("service","fields",["fields","attributeStorageInfo"])],ee.prototype,"readServiceFields",null),(0,r._)([(0,y.Cb)(Q.outFields)],ee.prototype,"outFields",void 0),(0,r._)([(0,y.Cb)({readOnly:!0})],ee.prototype,"attributeStorageInfo",void 0),(0,r._)([(0,y.Cb)(D.PV)],ee.prototype,"elevationInfo",null),(0,r._)([(0,y.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ee.prototype,"path",void 0),(0,r._)([(0,y.Cb)(D.rn)],ee.prototype,"legendEnabled",void 0),(0,r._)([(0,y.Cb)({types:$,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:$},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],ee.prototype,"renderer",void 0),(0,r._)([(0,b.c)("renderer")],ee.prototype,"writeRenderer",null),(0,r._)([(0,y.Cb)({json:{read:!1},readOnly:!0})],ee.prototype,"type",void 0),ee=(0,r._)([(0,f.j)("esri.layers.PointCloudLayer")],ee);const te=ee},21134:(e,t,o)=>{o.d(t,{Z:()=>m});var r,i=o(27366),n=o(84652),s=o(49861),l=(o(93169),o(32718),o(27135)),d=o(69912),a=o(2632),p=o(87125),u=o(51995),c=o(46784),y=o(25243);let h=r=class extends c.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new r({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,n.d9)(this.color)})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,i._)([(0,s.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],h.prototype,"minValue",void 0),(0,i._)([(0,s.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],h.prototype,"maxValue",void 0),(0,i._)([(0,s.Cb)({type:u.Z,json:{type:[y.z8],write:!0}})],h.prototype,"color",void 0),h=r=(0,i._)([(0,d.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],h);const f=h;var b;let v=b=class extends a.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new b({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,n.d9)(this.colorClassBreakInfos),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,i._)([(0,l.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],v.prototype,"type",void 0),(0,i._)([(0,s.Cb)({json:{write:!0},type:String})],v.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:p.I,json:{write:!0}})],v.prototype,"legendOptions",void 0),(0,i._)([(0,s.Cb)({type:a.Z.fieldTransformTypeKebabDict.apiValues,json:{type:a.Z.fieldTransformTypeKebabDict.jsonValues,read:a.Z.fieldTransformTypeKebabDict.read,write:a.Z.fieldTransformTypeKebabDict.write}})],v.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.Cb)({type:[f],json:{write:!0}})],v.prototype,"colorClassBreakInfos",void 0),v=b=(0,i._)([(0,d.j)("esri.renderers.PointCloudClassBreaksRenderer")],v);const m=v},2632:(e,t,o)=>{o.d(t,{Z:()=>j});var r,i=o(27366),n=o(43404),s=o(46784),l=o(84652),d=o(49861),a=(o(93169),o(32718),o(69912));o(84936);let p=r=class extends s.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new r({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,i._)([(0,d.Cb)({type:String,json:{write:!0}})],p.prototype,"field",void 0),(0,i._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"minValue",void 0),(0,i._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"maxValue",void 0),p=r=(0,i._)([(0,a.j)("esri.renderers.support.pointCloud.ColorModulation")],p);const u=p,c=new n.X({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let y=class extends s.wq{};(0,i._)([(0,d.Cb)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],y.prototype,"type",void 0),y=(0,i._)([(0,a.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],y);const h=y;var f,b=o(27135);let v=f=class extends h{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new f({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,i._)([(0,b.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],v.prototype,"type",void 0),(0,i._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],v.prototype,"size",void 0),(0,i._)([(0,d.Cb)({type:Boolean,json:{write:!0}})],v.prototype,"useRealWorldSymbolSizes",void 0),v=f=(0,i._)([(0,a.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],v);const m=v;var C;let w=C=class extends h{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new C({scaleFactor:this.scaleFactor})}};(0,i._)([(0,b.J)({pointCloudSplatAlgorithm:"splat"})],w.prototype,"type",void 0),(0,i._)([(0,d.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],w.prototype,"scaleFactor",void 0),w=C=(0,i._)([(0,a.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],w);const g={key:"type",base:h,typeMap:{"fixed-size":m,splat:w}},_=(0,n.w)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let T=class extends s.wq{constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,l.d9)(this.pointSizeAlgorithm),colorModulation:(0,l.d9)(this.colorModulation),pointsPerInch:(0,l.d9)(this.pointsPerInch)}}};(0,i._)([(0,d.Cb)({type:_.apiValues,readOnly:!0,nonNullable:!0,json:{type:_.jsonValues,read:!1,write:_.write}})],T.prototype,"type",void 0),(0,i._)([(0,d.Cb)({types:g,json:{write:!0}})],T.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,d.Cb)({type:u,json:{write:!0}})],T.prototype,"colorModulation",void 0),(0,i._)([(0,d.Cb)({json:{write:!0},nonNullable:!0,type:Number})],T.prototype,"pointsPerInch",void 0),T=(0,i._)([(0,a.j)("esri.renderers.PointCloudRenderer")],T),(T||(T={})).fieldTransformTypeKebabDict=new n.X({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const j=T},89431:(e,t,o)=>{o.d(t,{Z:()=>y});var r,i=o(27366),n=o(84652),s=o(49861),l=(o(93169),o(32718),o(27135)),d=o(69912),a=o(2632),p=o(87125),u=o(57203);let c=r=class extends a.Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new r({...this.cloneProperties(),field:(0,n.d9)(this.field),fieldTransformType:(0,n.d9)(this.fieldTransformType),stops:(0,n.d9)(this.stops),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,i._)([(0,l.J)({pointCloudStretchRenderer:"point-cloud-stretch"})],c.prototype,"type",void 0),(0,i._)([(0,s.Cb)({json:{write:!0},type:String})],c.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:p.I,json:{write:!0}})],c.prototype,"legendOptions",void 0),(0,i._)([(0,s.Cb)({type:a.Z.fieldTransformTypeKebabDict.apiValues,json:{type:a.Z.fieldTransformTypeKebabDict.jsonValues,read:a.Z.fieldTransformTypeKebabDict.read,write:a.Z.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.Cb)({type:[u.Z],json:{write:!0}})],c.prototype,"stops",void 0),c=r=(0,i._)([(0,d.j)("esri.renderers.PointCloudStretchRenderer")],c);const y=c},87005:(e,t,o)=>{o.d(t,{Z:()=>m});var r,i=o(27366),n=o(84652),s=o(49861),l=(o(93169),o(32718),o(27135)),d=o(69912),a=o(2632),p=o(87125),u=o(51995),c=o(46784),y=o(25243);let h=r=class extends c.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new r({description:this.description,label:this.label,values:(0,n.d9)(this.values),color:(0,n.d9)(this.color)})}};(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"description",void 0),(0,i._)([(0,s.Cb)({type:String,json:{write:!0}})],h.prototype,"label",void 0),(0,i._)([(0,s.Cb)({type:[String],json:{write:!0}})],h.prototype,"values",void 0),(0,i._)([(0,s.Cb)({type:u.Z,json:{type:[y.z8],write:!0}})],h.prototype,"color",void 0),h=r=(0,i._)([(0,d.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],h);const f=h;var b;let v=b=class extends a.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new b({...this.cloneProperties(),field:(0,n.d9)(this.field),fieldTransformType:(0,n.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,n.d9)(this.colorUniqueValueInfos),legendOptions:(0,n.d9)(this.legendOptions)})}};(0,i._)([(0,l.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],v.prototype,"type",void 0),(0,i._)([(0,s.Cb)({json:{write:!0},type:String})],v.prototype,"field",void 0),(0,i._)([(0,s.Cb)({type:a.Z.fieldTransformTypeKebabDict.apiValues,json:{type:a.Z.fieldTransformTypeKebabDict.jsonValues,read:a.Z.fieldTransformTypeKebabDict.read,write:a.Z.fieldTransformTypeKebabDict.write}})],v.prototype,"fieldTransformType",void 0),(0,i._)([(0,s.Cb)({type:[f],json:{write:!0}})],v.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,s.Cb)({type:p.I,json:{write:!0}})],v.prototype,"legendOptions",void 0),v=b=(0,i._)([(0,d.j)("esri.renderers.PointCloudUniqueValueRenderer")],v);const m=v}}]);
//# sourceMappingURL=9532.998a137a.chunk.js.map