"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[8023],{28023:(e,t,s)=>{s.r(t),s.d(t,{execute:()=>r});var a=s(10064);function r(e,t){let s=t.responseType;s?"array-buffer"!==s&&"blob"!==s&&"json"!==s&&"native"!==s&&"native-request-init"!==s&&"text"!==s&&(s="text"):s="json",t.responseType=s;const r=t.signal;return delete t.signal,globalThis.invokeStaticMessage("request",{url:e,options:t},{signal:r}).then((async n=>{let o,l,u,i,c;if(n.data)if(n.data instanceof ArrayBuffer){if(!("json"!==s&&"text"!==s&&"blob"!==s||(o=new Blob([n.data]),"json"!==s&&"text"!==s||(i=await o.text(),"json"!==s)))){try{l=JSON.parse(i||null)}catch(b){const s={...b,url:e,requestOptions:t};throw new a.Z("request:server",b.message,s)}if(l.error){const s={...l.error,url:e,requestOptions:t};throw new a.Z("request:server",l.error.message,s)}}}else"native"===s&&(n.data.signal=r,u=await fetch(n.data.url,n.data),n.httpStatus=u.status);switch(s){case"blob":c=o;break;case"json":c=l;break;case"native":c=u;break;case"text":c=i;break;default:c=n.data}return{data:c,httpStatus:n.httpStatus,requestOptions:t,ssl:n.ssl,url:e}}))}}}]);
//# sourceMappingURL=8023.02040254.chunk.js.map