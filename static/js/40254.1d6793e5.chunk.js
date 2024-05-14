"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[40254],{56547:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(63780),o=n(18722),i=n(68700),a=n(50894),u=n(32035),c=n(93311),s=n(78952),f=n(50628),l=n(74432),d=n(89414);class b{transform(e){const t=this._transform(e),n=[t.points.buffer,t.rgb.buffer];null!=t.pointIdFilterMap&&n.push(t.pointIdFilterMap.buffer);for(const r of t.attributes)"buffer"in r.values&&(0,o.eP)(r.values.buffer)&&r.values.buffer!==t.rgb.buffer&&n.push(r.values.buffer);return Promise.resolve({result:t,transferList:n})}_transform(e){const t=(0,l.Ym)(e.schema,e.geometryBuffer);let n=t.length/3,o=null;const i=new Array,a=(0,l.dH)(e.primaryAttributeData,t,n);null!=e.primaryAttributeData&&a&&i.push({attributeInfo:e.primaryAttributeData.attributeInfo,values:a});const u=(0,l.dH)(e.modulationAttributeData,t,n);null!=e.modulationAttributeData&&u&&i.push({attributeInfo:e.modulationAttributeData.attributeInfo,values:u});let c=(0,l.aE)(e.rendererInfo,a,u,n);if(e.filterInfo&&e.filterInfo.length>0&&null!=e.filterAttributesData){const a=e.filterAttributesData.filter(r.pC).map((e=>{const r=(0,l.dH)(e,t,n),o={attributeInfo:e.attributeInfo,values:r};return i.push(o),o}));o=new Uint32Array(n),n=(0,l.hv)(t,c,o,e.filterInfo,a)}for(const r of e.userAttributesData){const e=(0,l.dH)(r,t,n);i.push({attributeInfo:r.attributeInfo,values:e})}3*n<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*n))),this._applyElevationOffsetInPlace(t,n,e.elevationOffset);const f=this._transformCoordinates(t,n,d.Oo.fromData(e.obbData),s.Z.fromJSON(e.inSR),s.Z.fromJSON(e.outSR));return{obbData:e.obbData,points:f,rgb:c,attributes:i,pointIdFilterMap:o}}_transformCoordinates(e,t,n,r,o){if(!(0,f.projectBuffer)(e,r,0,e,o,0,t))throw new Error("Can't reproject");const a=(0,c.d9)(n.center),s=(0,c.Ue)(),l=(0,c.Ue)(),d=(0,c.d9)(n.halfSize);(0,i.Kx)(g,n.quaternion);const b=new Float32Array(3*t);for(let i=0;i<t;i++){let t=3*i;s[0]=e[t]-a[0],s[1]=e[t+1]-a[1],s[2]=e[t+2]-a[2],(0,u.u)(l,s,g),d[0]=Math.max(d[0],Math.abs(l[0])),d[1]=Math.max(d[1],Math.abs(l[1])),d[2]=Math.max(d[2],Math.abs(l[2])),b[t++]=s[0],b[t++]=s[1],b[t]=s[2]}return n.halfSize=d,b}_applyElevationOffsetInPlace(e,t,n){if(0!==n)for(let r=0;r<t;r++)e[3*r+2]+=n}}const g=(0,a.Ue)();function y(){return new b}},28278:(e,t,n)=>{n.d(t,{Es:()=>p,I_:()=>d,W7:()=>y,qM:()=>h});var r=n(10064),o=n(84652),i=n(32718),a=n(2821),u=n(4760);const c=()=>i.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function s(e,t,n){let o="",i=0;for(;i<n;){const a=e[t+i];if(a<128)o+=String.fromCharCode(a),i++;else if(a>=192&&a<224){if(i+1>=n)throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const u=(31&a)<<6|63&e[t+i+1];o+=String.fromCharCode(u),i+=2}else if(a>=224&&a<240){if(i+2>=n)throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const u=(15&a)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];o+=String.fromCharCode(u),i+=3}else{if(!(a>=240&&a<248))throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const u=(7&a)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(u>=65536){const e=55296+(u-65536>>10),t=56320+(1023&u);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(u);i+=4}}}return o}function f(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],a=i.valueType||i.type,u=v[a];n.fields[i.property]=u(e,r),r+=m[a].BYTES_PER_ELEMENT}return n.byteCount=r,n}function l(e,t,n){const o=[];let i,a,u=0;for(a=0;a<e;a+=1){if(i=t[a],i>0){if(o.push(s(n,u,i-1)),0!==n[u+i-1])throw new r.Z("string-array-error","Invalid string array: missing null termination.")}else o.push(null);u+=i}return o}function d(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function b(e,t,n){const i=null!=t.header?f(e,t.header):{byteOffset:0,byteCount:0,fields:{count:n}},a={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let u=i.byteCount;for(let f=0;f<t.ordering.length;f++){var c,s;const e=t.ordering[f],n=(0,o.d9)(t[e]);if(n.count=null!==(c=i.fields.count)&&void 0!==c?c:0,"String"===n.valueType){if(n.byteOffset=u,n.byteCount=i.fields[e+"ByteCount"],"UTF-8"!==n.encoding)throw new r.Z("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding});if(n.timeEncoding&&"ECMA_ISO8601"!==n.timeEncoding)throw new r.Z("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:n.timeEncoding})}else{if(!C(n.valueType))throw new r.Z("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const e=U(n.valueType);u+=u%e!=0?e-u%e:0,n.byteOffset=u,n.byteCount=e*n.valuesPerElement*n.count}}u+=null!==(s=n.byteCount)&&void 0!==s?s:0,a.entries[e]=n}return a.byteCount=u-a.byteOffset,a}function g(e,t,n){if(t!==e&&c().error("Invalid ".concat(n," buffer size\n expected: ").concat(e,", actual: ").concat(t,")")),t<e)throw new r.Z("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function y(e,t){const n=f(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,a=null!=i.vertexCount?i.vertexCount:i.count;for(const s of t.ordering){if(!t.vertexAttributes[s])continue;const e={...t.vertexAttributes[s],byteOffset:r,count:a},n=w[s]||"_"+s;o.vertexAttributes[n]=e,r+=U(e.valueType)*e.valuesPerElement*a}const u=i.faceCount;if(t.faces&&u){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:u};o.faces[e]=n,r+=U(n.valueType)*n.valuesPerElement*u}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n,r+=("UInt64"===n.valueType?8:U(n.valueType))*n.valuesPerElement*c}}return g(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function p(e,t){return e&&e.compressedAttributes&&"draco"===e.compressedAttributes.encoding?function(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}(e.compressedAttributes.attributes):e?function(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}(e):function(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}(t)}const w={position:u.T.POSITION,normal:u.T.NORMAL,color:u.T.COLOR,uv0:u.T.UV0,region:u.T.UVREGION};function h(e,t,n){if("lepcc-rgb"===e.encoding)return(0,a.IT)(t);if("lepcc-intensity"===e.encoding)return(0,a.ti)(t);if(null!=e.encoding&&""!==e.encoding)throw new r.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(c().warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(c().warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const o=b(t,e,n);g(o.byteOffset+o.byteCount,t.byteLength,"attribute");const i=o.entries.attributeValues||o.entries.objectIds;if(i){if("String"===i.valueType){const e=o.entries.attributeByteCounts,n=d(t,e),r=function(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}(t,i);return i.timeEncoding?function(e,t,n){return l(e,t,n).map((e=>{const t=e?Date.parse(e):null;return t&&!Number.isNaN(t)?t:null}))}(e.count,n,r):l(e.count,n,r)}return d(t,i)}throw new r.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},v={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function C(e){return m.hasOwnProperty(e)}function U(e){return C(e)?m[e].BYTES_PER_ELEMENT:0}},2821:(e,t,n)=>{n.d(t,{Gi:()=>s,IT:()=>g,ti:()=>w});var r=n(10064);const o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function a(e,t,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+i.identifierOffset,i.identifierLength)),version:t.getUint16(n+i.versionOffset,o),checksum:t.getUint32(n+i.checksumOffset,o)}}const u={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function c(e,t){return{sizeLo:e.getUint32(t+u.sizeLo,o),sizeHi:e.getUint32(t+u.sizeHi,o),minX:e.getFloat64(t+u.minX,o),minY:e.getFloat64(t+u.minY,o),minZ:e.getFloat64(t+u.minZ,o),maxX:e.getFloat64(t+u.maxX,o),maxY:e.getFloat64(t+u.maxY,o),maxZ:e.getFloat64(t+u.maxZ,o),errorX:e.getFloat64(t+u.errorX,o),errorY:e.getFloat64(t+u.errorY,o),errorZ:e.getFloat64(t+u.errorZ,o),count:e.getUint32(t+u.count,o),reserved:e.getUint32(t+u.reserved,o)}}function s(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:s}=a(e,t,n);if(n+=i.byteCount,"LEPCC     "!==o)throw new r.Z("lepcc-decode-error","Bad identifier");if(s>1)throw new r.Z("lepcc-decode-error","Unknown version");const l=c(t,n);if(n+=u.byteCount,l.sizeHi*2**32+l.sizeLo!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const d=new Float64Array(3*l.count),b=[],g=[],y=[],p=[];if(n=f(e,n,b),n=f(e,n,g),n=f(e,n,y),n=f(e,n,p),n!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad length");let w=0,h=0;for(let r=0;r<b.length;r++){h+=b[r];let e=0;for(let t=0;t<g[r];t++){e+=y[w];const t=p[w];d[3*w]=Math.min(l.maxX,l.minX+2*l.errorX*e),d[3*w+1]=Math.min(l.maxY,l.minY+2*l.errorY*h),d[3*w+2]=Math.min(l.maxZ,l.minZ+2*l.errorZ*t),w++}}return{errorX:l.errorX,errorY:l.errorY,errorZ:l.errorZ,result:d}}function f(e,t,n){const r=[];t=l(e,t,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,t=l(e,t,o);for(let e=0;e<o.length;e++)n.push(o[e]+r[i])}return t}function l(e,t,n){const i=new DataView(e,t),a=i.getUint8(0),u=31&a,c=!!(32&a),s=(192&a)>>6;let f=0;if(0===s)f=i.getUint32(1,o),t+=5;else if(1===s)f=i.getUint16(1,o),t+=3;else{if(2!==s)throw new r.Z("lepcc-decode-error","Bad count type");f=i.getUint8(1),t+=2}if(c)throw new r.Z("lepcc-decode-error","LUT not implemented");const l=Math.ceil(f*u/8),d=new Uint8Array(e,t,l);let b=0,g=0,y=0;const p=-1>>>32-u;for(let r=0;r<f;r++){for(;g<u;)b|=d[y]<<g,g+=8,y+=1;n[r]=b&p,b>>>=u,g-=u,g+u>32&&(b|=d[y-1]>>8-g)}return t+y}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function b(e,t){return{sizeLo:e.getUint32(t+d.sizeLo,o),sizeHi:e.getUint32(t+d.sizeHi,o),count:e.getUint32(t+d.count,o),colorMapCount:e.getUint16(t+d.colorMapCount,o),lookupMethod:e.getUint8(t+d.lookupMethod),compressionMethod:e.getUint8(t+d.compressionMethod)}}function g(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:u}=a(e,t,n);if(n+=i.byteCount,"ClusterRGB"!==o)throw new r.Z("lepcc-decode-error","Bad identifier");if(u>1)throw new r.Z("lepcc-decode-error","Unknown version");const c=b(t,n);if(n+=d.byteCount,c.sizeHi*2**32+c.sizeLo!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");if((2===c.lookupMethod||1===c.lookupMethod)&&0===c.compressionMethod){if(3*c.colorMapCount+c.count+n!==e.byteLength||c.colorMapCount>256)throw new r.Z("lepcc-decode-error","Bad count");const t=new Uint8Array(e,n,3*c.colorMapCount),o=new Uint8Array(e,n+3*c.colorMapCount,c.count),i=new Uint8Array(3*c.count);for(let e=0;e<c.count;e++){const n=o[e];i[3*e]=t[3*n],i[3*e+1]=t[3*n+1],i[3*e+2]=t[3*n+2]}return i}if(0===c.lookupMethod&&0===c.compressionMethod){if(3*c.count+n!==e.byteLength||0!==c.colorMapCount)throw new r.Z("lepcc-decode-error","Bad count");return new Uint8Array(e,n).slice()}if(c.lookupMethod<=2&&1===c.compressionMethod){if(n+3!==e.byteLength||1!==c.colorMapCount)throw new r.Z("lepcc-decode-error","Bad count");const o=t.getUint8(n),i=t.getUint8(n+1),a=t.getUint8(n+2),u=new Uint8Array(3*c.count);for(let e=0;e<c.count;e++)u[3*e]=o,u[3*e+1]=i,u[3*e+2]=a;return u}throw new r.Z("lepcc-decode-error","Bad method "+c.lookupMethod+","+c.compressionMethod)}const y={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function p(e,t){return{sizeLo:e.getUint32(t+y.sizeLo,o),sizeHi:e.getUint32(t+y.sizeHi,o),count:e.getUint32(t+y.count,o),scaleFactor:e.getUint16(t+y.scaleFactor,o),bitsPerPoint:e.getUint8(t+y.bitsPerPoint),reserved:e.getUint8(t+y.reserved)}}function w(e){const t=new DataView(e,0);let n=0;const{identifier:o,version:u}=a(e,t,n);if(n+=i.byteCount,"Intensity "!==o)throw new r.Z("lepcc-decode-error","Bad identifier");if(u>1)throw new r.Z("lepcc-decode-error","Unknown version");const c=p(t,n);if(n+=y.byteCount,c.sizeHi*2**32+c.sizeLo!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const s=new Uint16Array(c.count);if(8===c.bitsPerPoint){if(c.count+n!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const t=new Uint8Array(e,n,c.count);for(let e=0;e<c.count;e++)s[e]=t[e]*c.scaleFactor}else if(16===c.bitsPerPoint){if(2*c.count+n!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const t=new Uint16Array(e,n,c.count);for(let e=0;e<c.count;e++)s[e]=t[e]*c.scaleFactor}else{const t=[];if(l(e,n,t)!==e.byteLength)throw new r.Z("lepcc-decode-error","Bad size");for(let e=0;e<c.count;e++)s[e]=t[e]*c.scaleFactor}return s}}}]);
//# sourceMappingURL=40254.1d6793e5.chunk.js.map