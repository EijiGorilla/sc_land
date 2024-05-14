"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[7016,84178],{7016:(n,e,t)=>{t.r(e),t.d(e,{registerFunctions:()=>R});var r=t(19545),a=t(72741),i=t(62357),o=t(22564),c=t(47238),l=t(44715),u=t(93249),s=t(95435),f=t(92007),d=t(68860),w=t(53866),h=t(32238),y=t(84178),m=t(77577),p=t(585),g=t(80885),v=t(29909),I=t(77981),Z=t(7575),H=t(76200);async function A(n,e,t){var a;if(!(null===r.id||void 0===r.id?void 0:r.id.findCredential(n.restUrl)))return null;if("loaded"===n.loadStatus&&""===e&&null!==(a=n.user)&&void 0!==a&&a.sourceJSON&&!1===t)return n.user.sourceJSON;const i={responseType:"json",query:{f:"json"}};if(t&&(i.query.returnUserLicenseTypeExtensions=!0),""===e){const e=await(0,H.Z)(n.restUrl+"/community/self",i);if(e.data){const n=e.data;if(null!==n&&void 0!==n&&n.username)return n}return null}const o=await(0,H.Z)(n.restUrl+"/community/users/"+e,i);if(o.data){const n=o.data;return n.error?null:n}return null}function V(n){return 0===r.i8.indexOf("4.")?g.Z.fromExtent(n):new g.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function P(n,e,t){if((0,l.H)(n,2,2,e,t),n[0]instanceof h.Z&&n[1]instanceof h.Z);else if(n[0]instanceof h.Z&&null===n[1]);else if(n[1]instanceof h.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new o.aV(e,o.rH.InvalidParameter,t)}async function L(n,e){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let t=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(t=(0,s._R)(n.spatialReference)/(0,d.c9)(n.spatialReference));let r=0;if("polyline"===n.type)for(const i of n.paths)for(let n=1;n<i.length;n++)r+=(0,s.AW)(i[n],i[n-1],t);else if("polygon"===n.type)for(const i of n.rings){for(let n=1;n<i.length;n++)r+=(0,s.AW)(i[n],i[n-1],t);(i[0][0]!==i[i.length-1][0]||i[0][1]!==i[i.length-1][1]||void 0!==i[0][2]&&i[0][2]!==i[i.length-1][2])&&(r+=(0,s.AW)(i[0],i[i.length-1],t))}else"extent"===n.type&&(r+=2*(0,s.AW)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],t),r+=2*(0,s.AW)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],t),r*=2,r+=4*Math.abs((0,l.K)(n.zmax,0)*t-(0,l.K)(n.zmin,0)*t));const a=new v.Z({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return(0,y.planarLength)(a,e)}function R(n){"async"===n.mode&&(n.functions.disjoint=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null===a[0]||null===a[1]||(0,y.disjoint)(a[0],a[1]))))},n.functions.intersects=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.intersects)(a[0],a[1]))))},n.functions.touches=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.touches)(a[0],a[1]))))},n.functions.crosses=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.crosses)(a[0],a[1]))))},n.functions.within=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.within)(a[0],a[1]))))},n.functions.contains=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.contains)(a[0],a[1]))))},n.functions.overlaps=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null!==a[0]&&null!==a[1]&&(0,y.overlaps)(a[0],a[1]))))},n.functions.equals=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>((0,l.H)(a,2,2,e,t),a[0]===a[1]||(a[0]instanceof h.Z&&a[1]instanceof h.Z?(0,y.equals)(a[0],a[1]):((0,l.k)(a[0])&&(0,l.k)(a[1])||!!((0,l.n)(a[0])&&(0,l.n)(a[1])||(0,l.m)(a[0])&&(0,l.m)(a[1])))&&a[0].equals(a[1])))))},n.functions.relate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,3,3,e,t),a[0]instanceof h.Z&&a[1]instanceof h.Z)return(0,y.relate)(a[0],a[1],(0,l.j)(a[2]));if(a[0]instanceof h.Z&&null===a[1])return!1;if(a[1]instanceof h.Z&&null===a[0])return!1;if(null===a[0]&&null===a[1])return!1;throw new o.aV(e,o.rH.InvalidParameter,t)}))},n.functions.intersection=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null===a[0]||null===a[1]?null:(0,y.intersect)(a[0],a[1]))))},n.functions.union=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{const i=[];if(0===(a=(0,l.I)(a)).length)throw new o.aV(e,o.rH.WrongNumberOfParameters,t);if(1===a.length)if((0,l.o)(a[0])){const n=(0,l.I)(a[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);i.push(n[r])}}else{if(!(0,l.q)(a[0])){if(a[0]instanceof h.Z)return(0,l.x)((0,c.r1)(a[0]),e.spatialReference);if(null===a[0])return null;throw new o.aV(e,o.rH.InvalidParameter,t)}{const n=(0,l.I)(a[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);i.push(n[r])}}}else for(let c=0;c<a.length;c++)if(null!==a[c]){if(!(a[c]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);i.push(a[c])}return 0===i.length?null:(0,y.union)(i)}))},n.functions.difference=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null!==a[0]&&null===a[1]?(0,c.r1)(a[0]):null===a[0]?null:(0,y.difference)(a[0],a[1]))))},n.functions.symmetricdifference=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>(P(a=(0,l.I)(a),e,t),null===a[0]&&null===a[1]?null:null===a[0]?(0,c.r1)(a[1]):null===a[1]?(0,c.r1)(a[0]):(0,y.symmetricDifference)(a[0],a[1]))))},n.functions.clip=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,2,e,t),!(a[1]instanceof w.Z)&&null!==a[1])throw new o.aV(e,o.rH.InvalidParameter,t);if(null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return null===a[1]?null:(0,y.clip)(a[0],a[1])}))},n.functions.cut=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,2,e,t),!(a[1]instanceof v.Z)&&null!==a[1])throw new o.aV(e,o.rH.InvalidParameter,t);if(null===a[0])return[];if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return null===a[1]?[(0,c.r1)(a[0])]:(0,y.cut)(a[0],a[1])}))},n.functions.area=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if((0,l.H)(a,1,2,e,t),null===(a=(0,l.I)(a))[0])return 0;if((0,l.u)(a[0])){const n=await a[0].sumArea((0,c.EI)((0,l.K)(a[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new o.aV(e,o.rH.Cancelled,t);return n}if((0,l.o)(a[0])||(0,l.q)(a[0])){const n=(0,l.J)(a[0],e.spatialReference);return null===n?0:(0,y.planarArea)(n,(0,c.EI)((0,l.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.planarArea)(a[0],(0,c.EI)((0,l.K)(a[1],-1)))}))},n.functions.areageodetic=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if((0,l.H)(a,1,2,e,t),null===(a=(0,l.I)(a))[0])return 0;if((0,l.u)(a[0])){const n=await a[0].sumArea((0,c.EI)((0,l.K)(a[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new o.aV(e,o.rH.Cancelled,t);return n}if((0,l.o)(a[0])||(0,l.q)(a[0])){const n=(0,l.J)(a[0],e.spatialReference);return null===n?0:(0,y.geodesicArea)(n,(0,c.EI)((0,l.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.geodesicArea)(a[0],(0,c.EI)((0,l.K)(a[1],-1)))}))},n.functions.length=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if((0,l.H)(a,1,2,e,t),null===(a=(0,l.I)(a))[0])return 0;if((0,l.u)(a[0])){const n=await a[0].sumLength((0,c.Lz)((0,l.K)(a[1],-1)),!1,e.abortSignal);if(e.abortSignal.aborted)throw new o.aV(e,o.rH.Cancelled,t);return n}if((0,l.o)(a[0])||(0,l.q)(a[0])){const n=(0,l.L)(a[0],e.spatialReference);return null===n?0:(0,y.planarLength)(n,(0,c.Lz)((0,l.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.planarLength)(a[0],(0,c.Lz)((0,l.K)(a[1],-1)))}))},n.functions.length3d=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if((0,l.H)(a,1,2,e,t),null===(a=(0,l.I)(a))[0])return 0;if((0,l.o)(a[0])||(0,l.q)(a[0])){const n=(0,l.L)(a[0],e.spatialReference);return null===n?0:!0===n.hasZ?L(n,(0,c.Lz)((0,l.K)(a[1],-1))):(0,y.planarLength)(n,(0,c.Lz)((0,l.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return!0===a[0].hasZ?L(a[0],(0,c.Lz)((0,l.K)(a[1],-1))):(0,y.planarLength)(a[0],(0,c.Lz)((0,l.K)(a[1],-1)))}))},n.functions.lengthgeodetic=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if((0,l.H)(a,1,2,e,t),null===(a=(0,l.I)(a))[0])return 0;if((0,l.u)(a[0])){const n=await a[0].sumLength((0,c.Lz)((0,l.K)(a[1],-1)),!0,e.abortSignal);if(e.abortSignal.aborted)throw new o.aV(e,o.rH.Cancelled,t);return n}if((0,l.o)(a[0])||(0,l.q)(a[0])){const n=(0,l.L)(a[0],e.spatialReference);return null===n?0:(0,y.geodesicLength)(n,(0,c.Lz)((0,l.K)(a[1],-1)))}if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.geodesicLength)(a[0],(0,c.Lz)((0,l.K)(a[1],-1)))}))},n.functions.distance=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{a=(0,l.I)(a),(0,l.H)(a,2,3,e,t);let i=a[0];((0,l.o)(a[0])||(0,l.q)(a[0]))&&(i=(0,l.M)(a[0],e.spatialReference));let u=a[1];if(((0,l.o)(a[1])||(0,l.q)(a[1]))&&(u=(0,l.M)(a[1],e.spatialReference)),!(i instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(u instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.distance)(i,u,(0,c.Lz)((0,l.K)(a[2],-1)))}))},n.functions.distancegeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{a=(0,l.I)(a),(0,l.H)(a,2,3,e,t);const i=a[0],u=a[1];if(!(i instanceof p.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(u instanceof p.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const s=new v.Z({paths:[],spatialReference:i.spatialReference});return s.addPath([i,u]),(0,y.geodesicLength)(s,(0,c.Lz)((0,l.K)(a[2],-1)))}))},n.functions.densify=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,l.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);if(i<=0)throw new o.aV(e,o.rH.InvalidParameter,t);return a[0]instanceof g.Z||a[0]instanceof v.Z?(0,y.densify)(a[0],i,(0,c.Lz)((0,l.K)(a[2],-1))):a[0]instanceof w.Z?(0,y.densify)(V(a[0]),i,(0,c.Lz)((0,l.K)(a[2],-1))):a[0]}))},n.functions.densifygeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,l.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);if(i<=0)throw new o.aV(e,o.rH.InvalidParameter,t);return a[0]instanceof g.Z||a[0]instanceof v.Z?(0,y.geodesicDensify)(a[0],i,(0,c.Lz)((0,l.K)(a[2],-1))):a[0]instanceof w.Z?(0,y.geodesicDensify)(V(a[0]),i,(0,c.Lz)((0,l.K)(a[2],-1))):a[0]}))},n.functions.generalize=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,4,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,l.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.generalize)(a[0],i,(0,l.h)((0,l.K)(a[2],!0)),(0,c.Lz)((0,l.K)(a[3],-1)))}))},n.functions.buffer=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,l.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);return 0===i?(0,c.r1)(a[0]):(0,y.buffer)(a[0],i,(0,c.Lz)((0,l.K)(a[2],-1)))}))},n.functions.buffergeodetic=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,3,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,l.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);return 0===i?(0,c.r1)(a[0]):(0,y.geodesicBuffer)(a[0],i,(0,c.Lz)((0,l.K)(a[2],-1)))}))},n.functions.offset=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,6,e,t),null===a[0])return null;if(!(a[0]instanceof g.Z||a[0]instanceof v.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const i=(0,l.g)(a[1]);if(isNaN(i))throw new o.aV(e,o.rH.InvalidParameter,t);const u=(0,l.g)((0,l.K)(a[4],10));if(isNaN(u))throw new o.aV(e,o.rH.InvalidParameter,t);const s=(0,l.g)((0,l.K)(a[5],0));if(isNaN(s))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.offset)(a[0],i,(0,c.Lz)((0,l.K)(a[2],-1)),(0,l.j)((0,l.K)(a[3],"round")).toLowerCase(),u,s)}))},n.functions.rotate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{a=(0,l.I)(a),(0,l.H)(a,2,3,e,t);let i=a[0];if(null===i)return null;if(!(i instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);i instanceof w.Z&&(i=g.Z.fromExtent(i));const c=(0,l.g)(a[1]);if(isNaN(c))throw new o.aV(e,o.rH.InvalidParameter,t);const u=(0,l.K)(a[2],null);if(null===u)return(0,y.rotate)(i,c);if(u instanceof p.Z)return(0,y.rotate)(i,c,u);throw new o.aV(e,o.rH.InvalidParameter,t)}))},n.functions.centroid=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,1,1,e,t),null===a[0])return null;let i=a[0];if(((0,l.o)(a[0])||(0,l.q)(a[0]))&&(i=(0,l.M)(a[0],e.spatialReference)),null===i)return null;if(!(i instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return i instanceof p.Z?(0,l.x)((0,c.r1)(a[0]),e.spatialReference):i instanceof g.Z?i.centroid:i instanceof v.Z?(0,s.s9)(i):i instanceof m.Z?(0,s.Ay)(i):i instanceof w.Z?i.center:null}))},n.functions.measuretocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,2,e,t),null===a[0])return null;let c=a[0];if(((0,l.o)(a[0])||(0,l.q)(a[0]))&&(c=(0,l.L)(a[0],e.spatialReference)),null===c)return null;if(!(c instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(c instanceof v.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if((0,l.b)(!1===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);const u=(0,f.Tv)(c,a[1]);return u?i.Z.convertObjectToArcadeDictionary(u,(0,l.N)(e),!1,!0):null}))},n.functions.pointtocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,2,e,t),null===a[0])return null;let c=a[0];if(((0,l.o)(a[0])||(0,l.q)(a[0]))&&(c=(0,l.L)(a[0],e.spatialReference)),null===c)return null;if(!(c instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(c instanceof v.Z))throw new o.aV(e,o.rH.InvalidParameter,t);const u=a[1];if(null===u)return null;if(!(u instanceof p.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if((0,l.b)(!1===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);const s=(0,f.zq)(c,u);return s?i.Z.convertObjectToArcadeDictionary(s,(0,l.N)(e),!1,!0):null}))},n.functions.distancetocoordinate=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,2,e,t),null===a[0])return null;let c=a[0];if(((0,l.o)(a[0])||(0,l.q)(a[0]))&&(c=(0,l.L)(a[0],e.spatialReference)),null===c)return null;if(!(c instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(c instanceof v.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if((0,l.b)(!1===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);const u=(0,f.qt)(c,a[1]);return u?i.Z.convertObjectToArcadeDictionary(u,(0,l.N)(e),!1,!0):null}))},n.functions.multiparttosinglepart=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{a=(0,l.I)(a),(0,l.H)(a,1,1,e,t);const i=[];if(null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);if(a[0]instanceof p.Z)return[(0,l.x)((0,c.r1)(a[0]),e.spatialReference)];if(a[0]instanceof w.Z)return[(0,l.x)((0,c.r1)(a[0]),e.spatialReference)];const u=await(0,y.simplify)(a[0]);if(u instanceof g.Z){const n=[],e=[];for(let t=0;t<u.rings.length;t++)if(u.isClockwise(u.rings[t])){const e=(0,I.im)({rings:[u.rings[t]],hasZ:!0===u.hasZ,hazM:!0===u.hasM,spatialReference:u.spatialReference.toJSON()});n.push(e)}else e.push({ring:u.rings[t],pt:u.getPoint(t,0)});for(let t=0;t<e.length;t++)for(let r=0;r<n.length;r++)if(n[r].contains(e[t].pt)){n[r].addRing(e[t].ring);break}return n}if(u instanceof v.Z){const n=[];for(let e=0;e<u.paths.length;e++){const t=(0,I.im)({paths:[u.paths[e]],hasZ:!0===u.hasZ,hazM:!0===u.hasM,spatialReference:u.spatialReference.toJSON()});n.push(t)}return n}if(a[0]instanceof m.Z){const n=(0,l.x)((0,c.r1)(a[0]),e.spatialReference);for(let e=0;e<n.points.length;e++)i.push(n.getPoint(e));return i}return null}))},n.functions.issimple=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,1,1,e,t),null===a[0])return!0;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.isSimple)(a[0])}))},n.functions.simplify=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,1,1,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.simplify)(a[0])}))},n.functions.convexhull=function(e,t){return n.standardFunctionAsync(e,t,((n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,1,1,e,t),null===a[0])return null;if(!(a[0]instanceof h.Z))throw new o.aV(e,o.rH.InvalidParameter,t);return(0,y.convexHull)(a[0])}))},n.functions.getuser=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,c)=>{(0,l.H)(c,0,2,e,t);let s=(0,l.K)(c[1],""),f=!0===s;if(s=!0===s||!1===s?"":(0,l.j)(s),0===c.length||c[0]instanceof a.Z){var d;let n=null;n=null!==(d=e.services)&&void 0!==d&&d.portal?e.services.portal:Z.Z.getDefault(),c.length>0&&(n=(0,u._)(c[0],n));const t=await A(n,s,f);if(t){const n=JSON.parse(JSON.stringify(t));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return i.Z.convertObjectToArcadeDictionary(n,(0,l.N)(e))}return null}let w=null;if((0,l.u)(c[0])&&(w=c[0]),w){var h;if(f=!1,s)return null;await w.load();const n=await w.getOwningSystemUrl();if(!n){if(!s){const n=await w.getIdentityUser();return n?i.Z.convertObjectToArcadeDictionary({username:n},(0,l.N)(e)):null}return null}let t=null;t=null!==(h=e.services)&&void 0!==h&&h.portal?e.services.portal:Z.Z.getDefault(),t=(0,u._)(new a.Z(n),t);const r=await A(t,s,f);if(r){const n=JSON.parse(JSON.stringify(r));for(const e of["lastLogin","created","modified"])void 0!==n[e]&&null!==n[e]&&(n[e]=new Date(n[e]));return i.Z.convertObjectToArcadeDictionary(n,(0,l.N)(e))}return null}throw new o.aV(e,o.rH.InvalidParameter,t)}))}),n.functions.nearestcoordinate=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,2,e,t),!(a[0]instanceof h.Z||null===a[0]))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(a[1]instanceof p.Z||null===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);if(null===a[0]||null===a[1])return null;const c=await(0,y.nearestCoordinate)(a[0],a[1]);return null===c?null:i.Z.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},(0,l.N)(e),!1,!0)}))},n.functions.nearestvertex=function(e,t){return n.standardFunctionAsync(e,t,(async(n,r,a)=>{if(a=(0,l.I)(a),(0,l.H)(a,2,2,e,t),!(a[0]instanceof h.Z||null===a[0]))throw new o.aV(e,o.rH.InvalidParameter,t);if(!(a[1]instanceof p.Z||null===a[1]))throw new o.aV(e,o.rH.InvalidParameter,t);if(null===a[0]||null===a[1])return null;const c=await(0,y.nearestVertex)(a[0],a[1]);return null===c?null:i.Z.convertObjectToArcadeDictionary({coordinate:c.coordinate,distance:c.distance,sideOfLine:0===c.distance?"straddle":c.isRightSide?"right":"left"},(0,l.N)(e),!1,!0)}))}}},93249:(n,e,t)=>{t.d(e,{_:()=>a});var r=t(7575);function a(n,e){return null===n?e:new r.Z({url:n.field("url")})}},84178:(n,e,t)=>{t.r(e),t.d(e,{buffer:()=>z,changeDefaultSpatialReferenceTolerance:()=>X,clearDefaultSpatialReferenceTolerance:()=>Y,clip:()=>h,contains:()=>m,convexHull:()=>x,crosses:()=>p,cut:()=>y,densify:()=>M,difference:()=>N,disjoint:()=>A,distance:()=>g,equals:()=>v,extendedSpatialReferenceInfo:()=>w,flipHorizontal:()=>E,flipVertical:()=>k,generalize:()=>C,geodesicArea:()=>B,geodesicBuffer:()=>O,geodesicDensify:()=>W,geodesicLength:()=>G,intersect:()=>S,intersectLinesToPoints:()=>Q,intersects:()=>I,isSimple:()=>L,nearestCoordinate:()=>D,nearestVertex:()=>q,nearestVertices:()=>J,offset:()=>K,overlaps:()=>V,planarArea:()=>U,planarLength:()=>_,relate:()=>P,rotate:()=>T,simplify:()=>R,symmetricDifference:()=>F,touches:()=>Z,union:()=>b,within:()=>H});t(59486);var r=t(70431),a=t(585),i=t(77981);function o(n){var e;return Array.isArray(n)?null===(e=n[0])||void 0===e?void 0:e.spatialReference:null===n||void 0===n?void 0:n.spatialReference}function c(n){return n?Array.isArray(n)?n.map(c):n.toJSON?n.toJSON():n:n}function l(n){return Array.isArray(n)?n.map((n=>(0,i.im)(n))):(0,i.im)(n)}let u;async function s(){return u||(u=(0,r.bA)("geometryEngineWorker",{strategy:"distributed"})),u}async function f(n,e){return(await s()).invoke("executeGEOperation",{operation:n,parameters:c(e)})}async function d(n,e){const t=await s();return Promise.all(t.broadcast("executeGEOperation",{operation:n,parameters:c(e)}))}function w(n){return f("extendedSpatialReferenceInfo",[n])}async function h(n,e){return l(await f("clip",[o(n),n,e]))}async function y(n,e){return l(await f("cut",[o(n),n,e]))}function m(n,e){return f("contains",[o(n),n,e])}function p(n,e){return f("crosses",[o(n),n,e])}function g(n,e,t){return f("distance",[o(n),n,e,t])}function v(n,e){return f("equals",[o(n),n,e])}function I(n,e){return f("intersects",[o(n),n,e])}function Z(n,e){return f("touches",[o(n),n,e])}function H(n,e){return f("within",[o(n),n,e])}function A(n,e){return f("disjoint",[o(n),n,e])}function V(n,e){return f("overlaps",[o(n),n,e])}function P(n,e,t){return f("relate",[o(n),n,e,t])}function L(n){return f("isSimple",[o(n),n])}async function R(n){return l(await f("simplify",[o(n),n]))}async function x(n){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return l(await f("convexHull",[o(n),n,e]))}async function N(n,e){return l(await f("difference",[o(n),n,e]))}async function F(n,e){return l(await f("symmetricDifference",[o(n),n,e]))}async function S(n,e){return l(await f("intersect",[o(n),n,e]))}async function b(n){const e=function(n,e){let t;return Array.isArray(n)?t=n:(t=[],t.push(n),null!=e&&t.push(e)),t}(n,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null);return l(await f("union",[o(e),e]))}async function K(n,e,t,r,a,i){return l(await f("offset",[o(n),n,e,t,r,a,i]))}async function z(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=[o(n),n,e,t,r];return l(await f("buffer",a))}async function O(n,e,t,r,a,i){const c=[o(n),n,e,t,r,a,i];return l(await f("geodesicBuffer",c))}async function D(n,e){let t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=await f("nearestCoordinate",[o(n),n,e,t]);return{...r,coordinate:a.Z.fromJSON(r.coordinate)}}async function q(n,e){const t=await f("nearestVertex",[o(n),n,e]);return{...t,coordinate:a.Z.fromJSON(t.coordinate)}}async function J(n,e,t,r){return(await f("nearestVertices",[o(n),n,e,t,r])).map((n=>({...n,coordinate:a.Z.fromJSON(n.coordinate)})))}function j(n){var e;return"xmin"in n?n.center:"x"in n?n:null===(e=n.extent)||void 0===e?void 0:e.center}async function T(n,e,t){var r;if(null==n)throw new $;const a=n.spatialReference;if(null==(t=null!==(r=t)&&void 0!==r?r:j(n)))throw new $;const i=n.constructor.fromJSON(await f("rotate",[a,n,e,t]));return i.spatialReference=a,i}async function E(n,e){var t;if(null==n)throw new $;const r=n.spatialReference;if(null==(e=null!==(t=e)&&void 0!==t?t:j(n)))throw new $;const a=n.constructor.fromJSON(await f("flipHorizontal",[r,n,e]));return a.spatialReference=r,a}async function k(n,e){var t;if(null==n)throw new $;const r=n.spatialReference;if(null==(e=null!==(t=e)&&void 0!==t?t:j(n)))throw new $;const a=n.constructor.fromJSON(await f("flipVertical",[r,n,e]));return a.spatialReference=r,a}async function C(n,e,t,r){return l(await f("generalize",[o(n),n,e,t,r]))}async function M(n,e,t){return l(await f("densify",[o(n),n,e,t]))}async function W(n,e,t){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return l(await f("geodesicDensify",[o(n),n,e,t,r]))}function U(n,e){return f("planarArea",[o(n),n,e])}function _(n,e){return f("planarLength",[o(n),n,e])}function B(n,e,t){return f("geodesicArea",[o(n),n,e,t])}function G(n,e,t){return f("geodesicLength",[o(n),n,e,t])}async function Q(n,e){return l(await f("intersectLinesToPoints",[o(n),n,e]))}async function X(n,e){await d("changeDefaultSpatialReferenceTolerance",[n,e])}async function Y(n){await d("clearDefaultSpatialReferenceTolerance",[n])}class $ extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=7016.1ef78cdd.chunk.js.map