"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[9969],{99969:(e,t,a)=>{a.r(t),a.d(t,{CIMSymbolRasterizer:()=>z});var i=a(51995),r=a(76200),n=a(66978),o=a(17842),s=a(81400),l=a(82272),h=a(51e3);class c{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}async fetchResource(e,t){const a=this._resourceMap.get(e);if(a)return{width:a.width,height:a.height};let i=this._inFlightResourceMap.get(e);return i?i.then((e=>({width:e.width,height:e.height}))):(i=(0,h.n$)(e,t),this._inFlightResourceMap.set(e,i),i.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,l.mx)(e)}}var m=a(66726),g=a(78915),u=a(16889),f=a(26554),d=a(691),y=a(6388),p=a(31027);class w{constructor(e){this._resourceManager=e,this._lazyRasterizationCanvas=null}dispose(){this._lazyRasterizationCanvas=null}get _rasterizationCanvas(){return null==this._lazyRasterizationCanvas&&(this._lazyRasterizationCanvas=document.createElement("canvas"),this._lazyRasterizationCanvas.getContext("2d",{willReadFrequently:!0})),this._lazyRasterizationCanvas}rasterizeJSONResource(e,t,a){if("simple-fill"===e.type||"esriSFS"===e.type){const[a,i,r]=(0,f.Y)(this._rasterizationCanvas,e.style,t);return{size:[i,r],image:new Uint32Array(a.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:(0,u.fp)(Math.ceil(t))}}if("simple-line"===e.type||"esriSLS"===e.type||"line"===e.type&&e.dashTemplate){let t,a;if("simple-line"===e.type||"esriSLS"===e.type)switch(t=(0,g.U1)(e.style,e.cap),e.cap){case"butt":a="Butt";break;case"square":a="Square";break;default:a="Round"}else t=e.dashTemplate,a=e.cim.capStyle;const[i,r,n]=(0,f.m)(t,a);return{size:[r,n],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let i,r=null,n=null,o=1;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(i=g.B$.fromSimpleMarker(e),n=(0,y.Fp)(i)):e.cim&&"CIMHatchFill"===e.cim.type?(i=g.B$.fromCIMHatchFill(e.cim,t),r=new d.Z(i.frame.xmin,-i.frame.ymax,i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin),o=t):e.cim.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.cim.markerPlacement.type?(i=g.B$.fromCIMInsidePolygon(e.cim),r=new d.Z(i.frame.xmin,-i.frame.ymax,i.frame.xmax-i.frame.xmin,i.frame.ymax-i.frame.ymin)):(i=e.cim,e.avoidSDFRasterization||(n=(0,y.Fp)(i))),n&&!a){const[e,t,a]=(0,y.RL)(n);return e?{size:[t,a],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0,rasterizationScale:o}:null}const[s,l,h,c,m]=g.B$.rasterize(this._rasterizationCanvas,i,r,this._resourceManager,!a);return s?{size:[l,h],image:new Uint32Array(s.buffer),sdf:!1,simplePattern:!1,anchorX:c,anchorY:m}:null}rasterizeImageResource(e,t,a,i){this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=t;const r=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?r.putImageData(a,0,0):(a.setAttribute("width","".concat(e,"px")),a.setAttribute("height","".concat(t,"px")),r.drawImage(a,0,0,e,t));const n=r.getImageData(0,0,e,t),o=new Uint8Array(n.data);if(i)for(const g of i)if(g&&g.oldColor&&4===g.oldColor.length&&g.newColor&&4===g.newColor.length){const[e,t,a,i]=g.oldColor,[r,n,s,l]=g.newColor;if(e===r&&t===n&&a===s&&i===l)continue;for(let h=0;h<o.length;h+=4)e===o[h]&&t===o[h+1]&&a===o[h+2]&&i===o[h+3]&&(o[h]=r,o[h+1]=n,o[h+2]=s,o[h+3]=l)}let s;for(let g=0;g<o.length;g+=4)s=o[g+3]/255,o[g]=o[g]*s,o[g+1]=o[g+1]*s,o[g+2]=o[g+2]*s;let l=o,h=e,c=t;const m=512;if(h>=m||c>=m){const a=h/c;a>1?(h=m,c=Math.round(m/a)):(c=m,h=Math.round(m*a)),l=new Uint8Array(4*h*c);const i=new Uint8ClampedArray(l.buffer);(0,p.TT)(o,e,t,i,h,c,!1)}return{size:[h,c],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}var C=a(22532),v=a(49729),M=a(83748);const _=e=>null!==e&&void 0!==e&&e.scaleFactor?e.scaleFactor:1;class z{constructor(e,t){this._spatialReference=e,this._avoidSDF=t,this._resourceCache=new Map,this._lazyImageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new C.Z,this._cimResourceManager=new c,this._rasterizer=new w(this._cimResourceManager)}get _imageDataCanvas(){var e;return null!==(e=this._lazyImageDataCanvas)&&void 0!==e||(this._lazyImageDataCanvas=document.createElement("canvas")),this._lazyImageDataCanvas}get _imageDataContext(){return this._imageDataCanvas.getContext("2d",{willReadFrequently:!0})}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,a,i,r,n,o,s,l){if(!e)return null;const{data:h}=e;if(!h||"CIMSymbolReference"!==h.type||!h.symbol)return null;const{symbol:c}=h;n||(n=(0,p.JW)(c));const u=await g.E0.resolveSymbolOverrides(h,t,this._spatialReference,r,n,o,s),f=this._imageDataCanvas,d=this._cimResourceManager,y=[];g.B$.fetchResources(u,d,y),g.B$.fetchFonts(u,d,y),y.length>0&&await Promise.all(y);const{width:w,height:C}=a,v=function(e,t,a,i){const r=1,n=-t/2+r,o=t/2-r,s=a/2-r,l=-a/2+r;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[n,0],[0,0],[o,0]]]};default:return"legend"===i?{rings:[[[n,s],[o,0],[o,l],[n,l],[n,s]]]}:{rings:[[[n,s],[o,s],[o,l],[n,l],[n,s]]]}}}(n,w,C,i),M=g.B$.getEnvelope(u,v,d);if(!M)return null;const _=1.3333333333333333*(window.devicePixelRatio||1);let z=1,S=0,x=0;switch(c.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;M.width>w&&(e=w/M.width);let t=1;M.height>C&&(t=C/M.height),"preview"===i&&(M.width<w&&(e=w/M.width),M.height<C&&(t=C/M.height)),z=Math.min(e,t),S=M.x+M.width/2,x=M.y+M.height/2}break;case"CIMLineSymbol":{(l||M.height>C)&&(z=C/M.height),x=M.y+M.height/2;const e=M.x*z+w/2,t=(M.x+M.width)*z+w/2,{paths:a}=v;a[0][0][0]-=e/z,a[0][2][0]-=(t-w)/z}break;case"CIMPolygonSymbol":{S=M.x+M.width/2,x=M.y+M.height/2;const e=M.x*z+w/2,t=(M.x+M.width)*z+w/2,a=M.y*z+C/2,i=(M.y+M.height)*z+C/2,{rings:r}=v;e<0&&(r[0][0][0]-=e,r[0][3][0]-=e,r[0][4][0]-=e),a<0&&(r[0][0][1]+=a,r[0][1][1]+=a,r[0][4][1]+=a),t>w&&(r[0][1][0]-=t-w,r[0][2][0]-=t-w),i>C&&(r[0][2][1]+=i-C,r[0][3][1]+=i-C)}}f.width=w*_,f.height=C*_;f.width+=2,f.height+=2;const F=this._imageDataContext,R=m.zA.createIdentity();return R.translate(-S,-x),R.scale(z*_,-z*_),R.translate(w*_/2+1,C*_/2+1),F.clearRect(0,0,f.width,f.height),new m.cD(F,d,R,!0).drawSymbol(u,v),F.getImageData(0,0,f.width,f.height)}async analyzeCIMSymbol3D(e,t,a,i,r){const o=[],l=t?{geometryType:i,spatialReference:this._spatialReference,fields:t}:null,h=[];g.B$.fetchFonts(e.data.symbol,this._cimResourceManager,h),await Promise.all(h);const c=new s._(this._cimResourceManager,l);let m;await c.analyzeSymbolReference(e.data,this._avoidSDF,o),(0,n.k_)(r);for(const n of o)"CIMPictureMarker"!==n.cim.type&&"CIMPictureFill"!==n.cim.type&&"CIMPictureStroke"!==n.cim.type||(m||(m=[]),m.push(this._fetchPictureMarkerResource(n,r))),a&&"text"===n.type&&"string"==typeof n.text&&n.text.includes("[")&&(n.text=(0,p.Qs)(a,n.text,n.cim.textCase));return m&&await Promise.all(m),o}rasterizeCIMSymbol3D(e,t,a,i,r,n){const o=[];for(const l of e){i&&"function"==typeof i.scaleFactor&&(i.scaleFactor=i.scaleFactor(t,r,n));const e=this._getRasterizedResource(l,t,a,i,r,n);if(!e)continue;let h=0,c=e.anchorX||0,m=e.anchorY||0,g=!1,u=0,f=0;if("esriGeometryPoint"===a){var s;const e=_(i);if(u=(0,p.hf)(l.offsetX,t,r,n)*e||0,f=(0,p.hf)(l.offsetY,t,r,n)*e||0,"marker"===l.type)h=(0,p.hf)(l.rotation,t,r,n)||0,g=null!==(s=l.rotateClockwise)&&void 0!==s&&s;else if("text"===l.type){if(h=(0,p.hf)(l.angle,t,r,n)||0,void 0!==l.horizontalAlignment)switch(l.horizontalAlignment){case"left":c=-.5;break;case"right":c=.5;break;default:c=0}if(void 0!==l.verticalAlignment)switch(l.verticalAlignment){case"top":m=.5;break;case"bottom":m=-.5;break;case"baseline":m=-.25;break;default:m=0}}}null!=e&&o.push({angle:h,rotateClockWise:g,anchorX:c,anchorY:m,offsetX:u,offsetY:f,rasterizedResource:e})}return this.getSymbolImage(o)}getSymbolImage(e){const t=document.createElement("canvas"),a=t.getContext("2d");let i=0,r=0,n=0,s=0;const l=[];for(let g=0;g<e.length;g++){const t=e[g],h=t.rasterizedResource;if(!h)continue;const c=h.size,m=t.offsetX,u=t.offsetY,f=t.anchorX,d=t.anchorY,y=t.rotateClockWise||!1;let p=t.angle,w=(0,o.F2)(m)-c[0]*(.5+f),C=(0,o.F2)(u)-c[1]*(.5+d),v=w+c[0],M=C+c[1];if(p){y&&(p=-p);const e=Math.sin(p*Math.PI/180),t=Math.cos(p*Math.PI/180),a=w*t-C*e,i=w*e+C*t,r=w*t-M*e,n=w*e+M*t,o=v*t-M*e,s=v*e+M*t,l=v*t-C*e,h=v*e+C*t;w=Math.min(a,r,o,l),C=Math.min(i,n,s,h),v=Math.max(a,r,o,l),M=Math.max(i,n,s,h)}i=w<i?w:i,r=C<r?C:r,n=v>n?v:n,s=M>s?M:s;const _=a.createImageData(h.size[0],h.size[1]);_.data.set(new Uint8ClampedArray(h.image.buffer));const z={offsetX:m,offsetY:u,rotateClockwise:y,angle:p,rasterizedImage:_,anchorX:f,anchorY:d};l.push(z)}t.width=n-i,t.height=s-r;const h=-i,c=s;for(let g=0;g<l.length;g++){const e=l[g],t=this._imageDataToCanvas(e.rasterizedImage),i=e.rasterizedImage.width,r=e.rasterizedImage.height,n=h-i*(.5+e.anchorX),s=c-r*(.5-e.anchorY);if(e.angle){const i=(360-e.angle)*Math.PI/180;a.save(),a.translate((0,o.F2)(e.offsetX),-(0,o.F2)(e.offsetY)),a.translate(h,c),a.rotate(i),a.translate(-h,-c),a.drawImage(t,n,s),a.restore()}else a.drawImage(t,n+(0,o.F2)(e.offsetX),s-(0,o.F2)(e.offsetY))}const m=new M.e({x:h/t.width-.5,y:c/t.height-.5});return{imageData:0!==t.width&&0!==t.height?a.getImageData(0,0,t.width,t.height):a.createImageData(1,1),anchorPosition:m}}async _fetchPictureMarkerResource(e,t){const a=e.materialHash;if(!this._pictureMarkerCache.get(a)){const i=(await(0,r.Z)(e.cim.url,{responseType:"image",signal:null===t||void 0===t?void 0:t.signal})).data;this._pictureMarkerCache.set(a,i)}}_imageDataToCanvas(e){const t=this._imageDataCanvas,a=this._imageDataContext;return t.width=e.width,t.height=e.height,a.putImageData(e,0,0),t}_imageTo32Array(e,t,a,r){const n=this._imageDataCanvas,o=this._imageDataContext;if(n.width=t,n.height=a,o.drawImage(e,0,0,t,a),r){o.save();const n=new i.Z(r);o.fillStyle=n.toHex(),o.globalCompositeOperation="multiply",o.fillRect(0,0,t,a),o.globalCompositeOperation="destination-atop",o.drawImage(e,0,0,t,a),o.restore()}return new Uint32Array(o.getImageData(0,0,t,a).data.buffer)}_getRasterizedResource(e,t,a,i,r,n){let o,l,h;if("text"===e.type)return this._rasterizeTextResource(e,t,i,r,n);({analyzedCIM:o,hash:l}=function(e,t,a,i){let r,n;"function"==typeof e.materialHash?(r=(0,e.materialHash)(t,a,i),n=(0,s.S)(e.cim,e.materialOverrides)):(r=e.materialHash,n=e.cim);return{analyzedCIM:n,hash:r}}(e,t,r,n));const c=_(i);if("CIMPictureMarker"===e.cim.type){const a=(0,p.hf)(e.size,t,r,n)*c,{image:i,width:o,height:s}=this._getPictureResource(e,a,(0,p.hf)(e.color,t,r,n));return h={image:i,size:[o,s],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0},h}(0,v.FW)(o,c,{preserveOutlineWidth:!1});const m=o;l+=a,i&&(l+=JSON.stringify(i));const g=this._resourceCache;return g.has(l)?g.get(l):(h=this._rasterizer.rasterizeJSONResource({cim:m,type:e.type,url:e.url,mosaicHash:l,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),g.set(l,h),h)}_rasterizeTextResource(e,t,a,i,r){var n,o,s;const l=_(a),h=(0,p.hf)(e.text,t,i,r);if(!h||0===h.length)return null;const c=e.cim,m=(0,p.hf)((null===c||void 0===c?void 0:c.fontFamilyName)||e.fontName,t,i,r),g=(0,p.hf)((null===c||void 0===c||null===(n=c.font)||void 0===n?void 0:n.style)||e.style,t,i,r),u=(0,p.hf)((null===c||void 0===c||null===(o=c.font)||void 0===o?void 0:o.weight)||e.weight,t,i,r),f=(0,p.hf)((null===c||void 0===c||null===(s=c.font)||void 0===s?void 0:s.decoration)||e.decoration,t,i,r),d=(0,p.hf)(e.size,t,i,r)*l,y=(0,p.hf)(e.horizontalAlignment,t,i,r),w=(0,p.hf)(e.verticalAlignment,t,i,r),C=(0,p.nn)((0,p.hf)(e.color,t,i,r)),v=(0,p.nn)((0,p.hf)(e.outlineColor,t,i,r)),M=(0,p.hf)(e.outlineSize,t,i,r),z=null!=e.backgroundColor?(0,p.nn)(e.backgroundColor):null,S=null!=e.borderLineColor?(0,p.nn)(e.borderLineColor):null,x=null!=e.borderLineWidth?e.borderLineWidth:null,F={color:C,size:d,horizontalAlignment:y,verticalAlignment:w,font:{family:m,style:g,weight:u,decoration:f},halo:{size:M||0,color:v,style:g},backgroundColor:z,borderLine:null!=S&&null!=x?{color:S,size:x}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(h,F)}_getPictureResource(e,t,a){const i=this._pictureMarkerCache.get(e.materialHash);if(!i)return null;const r=i.height/i.width,n=t?r>1?(0,o.F2)(t):(0,o.F2)(t)/r:i.width,s=t?r>1?(0,o.F2)(t)*r:(0,o.F2)(t):i.height;return{image:this._imageTo32Array(i,n,s,a),width:n,height:s}}}},26554:(e,t,a)=>{a.d(t,{Y:()=>o,m:()=>s});var i=a(46228),r=a(16889);const n=e=>"vertical"===e||"horizontal"===e||"cross"===e||"esriSFSCross"===e||"esriSFSVertical"===e||"esriSFSHorizontal"===e;function o(e,t,a){const i=(0,r.fp)(Math.ceil(a)),o=n(t)?8*i:16*i,s=2*i;e.width=o,e.height=o;const l=e.getContext("2d");l.strokeStyle="#FFFFFF",l.lineWidth=i,l.beginPath(),"vertical"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSVertical"!==t||(l.moveTo(o/2,-s),l.lineTo(o/2,o+s)),"horizontal"!==t&&"cross"!==t&&"esriSFSCross"!==t&&"esriSFSHorizontal"!==t||(l.moveTo(-s,o/2),l.lineTo(o+s,o/2)),"forward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSDiagonalCross"!==t&&"esriSFSForwardDiagonal"!==t||(l.moveTo(-s,-s),l.lineTo(o+s,o+s),l.moveTo(o-s,-s),l.lineTo(o+s,s),l.moveTo(-s,o-s),l.lineTo(s,o+s)),"backward-diagonal"!==t&&"diagonal-cross"!==t&&"esriSFSBackwardDiagonal"!==t&&"esriSFSDiagonalCross"!==t||(l.moveTo(o+s,-s),l.lineTo(-s,o+s),l.moveTo(s,-s),l.lineTo(-s,s),l.moveTo(o+s,o-s),l.lineTo(o-s,o+s)),l.stroke();const h=l.getImageData(0,0,e.width,e.height),c=new Uint8Array(h.data);let m;for(let r=0;r<c.length;r+=4)m=c[r+3]/255,c[r]=c[r]*m,c[r+1]=c[r+1]*m,c[r+2]=c[r+2]*m;return[c,e.width,e.height]}function s(e,t){const a="Butt"===t,r="Square"===t,n=!a&&!r;e.length%2==1&&(e=[...e,...e]);const o=15.5;let s=0;for(const i of e)s+=i;const l=Math.round(s*o),h=new Float32Array(31*l),c=7.75;let m=0,g=0,u=.5,f=!0;for(const i of e){for(m=g,g+=i*o;u<=g;){let e=.5;for(;e<31;){const t=(e-.5)*l+u-.5,i=n?(e-o)*(e-o):Math.abs(e-o);h[t]=f?a?Math.max(Math.max(m+c-u,i),Math.max(u-g+c,i)):i:n?Math.min((u-m)*(u-m)+i,(u-g)*(u-g)+i):r?Math.min(Math.max(u-m,i),Math.max(g-u,i)):Math.min(Math.max(u-m+c,i),Math.max(g+c-u,i)),e++}u++}f=!f}const d=h.length,y=new Uint8Array(4*d);for(let p=0;p<d;++p){const e=(n?Math.sqrt(h[p]):h[p])/o;(0,i.I)(e,y,4*p)}return[y,l,31]}}}]);
//# sourceMappingURL=9969.6f5e071e.chunk.js.map