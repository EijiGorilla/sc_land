/*! For license information please see 54358.27ac02c2.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[54358],{54358:(t,n,e)=>{e.r(n),e.d(n,{groupTimeZones:()=>d});const o=(()=>{const t=Intl.supportedValuesOf("timeZone");return[...new Set([...t,"Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9"])]})(),l={startDate:(new Date).toISOString(),groupDateRange:365,debug:!1},a=new Set(["Europe","Asia","America","America/Argentina","Africa","Australia","Pacific","Atlantic","Antarctica","Arctic","Indian"]),c=t=>{if(t.includes("Istanbul"))return"Europe";const n=t.lastIndexOf("/");return-1===n?t:t.slice(0,n)},i=t=>a.has(t),r=function(t,n,e,o){let l=arguments.length>4&&void 0!==arguments[4]&&arguments[4];const a=new Map;l&&console.log("Initializing data starting ".concat(n," with ").concat(e," days in the future, comparing ").concat(t.length," timezones"));const r=((t,n,e)=>{const o=[];let l=e.create(t);for(let a=0;a<=n;a++)l=e.increase(l),o.push(e.formatToIsoDateString(l));return o})(n,e,o);return t.map((t=>{const n=t.label,e=c(n),l=r.map((t=>{const e="".concat(t,"-").concat(n);let l=a.get(e);return l||(l=o.isoToTimeZone(t,n),a.set(e,l),l)}));return{...t,continent:e,isRegularContinent:i(e),dates:l}}))},s=(t,n,e)=>t.length===n.length&&t.every(((t,o)=>e.same(t,n[o]))),u=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;const e=t.filter((t=>{let{label:n}=t;return i(c(n))}));if(0===e.length)return[0];return function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;const e=t.length;if(e<=n)return t;const o=Math.min(e-2,n-2),l=(e-1)/(o+1);return[t[0],...Array.from({length:o},((n,e)=>t[Math.round((e+1)*l)])),t[e-1]]}(e.map((n=>t.indexOf(n))),n)};async function d(t){var n,e;const{debug:a,groupDateRange:c,hooks:i,startDate:d,dateEngine:g}={...l,...t},T=[];if(!g)throw new Error("dateEngine is required");const G=o.map((t=>({label:t})));null===i||void 0===i||null===(n=i.onBeforeTimeZoneMetadataCreate)||void 0===n||n.call(i,G);const f=r(G,d,c,g,a);null===i||void 0===i||null===(e=i.onTimeZoneMetadataCreate)||void 0===e||e.call(i,f);for(const o of f){var E,M;const{label:t,continent:n,dates:e}=o;if(o.visited)continue;o.visited=!0;const l={labelTzIndices:void 0,tzs:[{label:t}]};null===i||void 0===i||null===(E=i.onGroupCreate)||void 0===E||E.call(i,l,o);for(const o of f.filter((t=>!t.visited))){const{label:t,continent:a,isRegularContinent:c,dates:r}=o;if((n===a||!c)&&s(e,r,g)){var p;const n={label:t};l.tzs.push(n),null===i||void 0===i||null===(p=i.onGroupTimeZoneAdd)||void 0===p||p.call(i,l,n,o),o.visited=!0}}T.push(l),null===i||void 0===i||null===(M=i.onGroupAdd)||void 0===M||M.call(i,l)}const h=T.map((t=>{var n,e;null===i||void 0===i||null===(n=i.onBeforeFinalGroupCreate)||void 0===n||n.call(i,t),t.tzs=t.tzs.sort(((t,n)=>t.label.localeCompare(n.label)));const o={labelTzIndices:u(t.tzs,7),tzs:t.tzs.map((t=>t.label))};return null===i||void 0===i||null===(e=i.onFinalGroupCreate)||void 0===e||e.call(i,o,t),o})).sort(((t,n)=>n.tzs.length-t.tzs.length));if(a){const t=o.map((t=>h.some((n=>n.tzs.includes(t)))?null:t)).filter(Boolean);if(t.length>0)throw new Error("There are ".concat(t.length," missing timezones: ").concat(t.toString()))}return null!==i&&void 0!==i&&i.onFinalGroupingCreate?i.onFinalGroupingCreate(h):h}}}]);
//# sourceMappingURL=54358.27ac02c2.chunk.js.map