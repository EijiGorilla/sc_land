/*! For license information please see 83881.fa1c6ae5.chunk.js.LICENSE.txt */
(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[83881,25572,45286,57148,66324,25708,45966],{25572:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=25572,e.exports=t},2786:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CalciteSelect:()=>g,defineCustomElement:()=>E});var i=n(33850),s=n(66151),o=n(81054),c=n(94002),l=n(4593),a=n(33150),r=n(46609),d=n(9339),u=n(36177);const h="icon",p="icon-container",m="select";function v(e){return"CALCITE-OPTION"===e.tagName}const f=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSelectChange=(0,i.yM)(this,"calciteSelectChange",6),this.componentToNativeEl=new Map,this.mutationObserver=(0,r.c)("mutation",(()=>this.populateInternalSelect())),this.handleInternalSelectChange=()=>{const e=this.selectEl.selectedOptions[0];this.selectFromNativeOption(e),requestAnimationFrame((()=>this.emitChangeEvent()))},this.populateInternalSelect=()=>{const e=Array.from(this.el.children).filter((e=>"CALCITE-OPTION"===e.tagName||"CALCITE-OPTION-GROUP"===e.tagName));this.clearInternalSelect(),e.forEach((e=>{var t;return null===(t=this.selectEl)||void 0===t?void 0:t.append(this.toNativeElement(e))}))},this.storeSelectRef=e=>{this.selectEl=e,this.populateInternalSelect();const t=this.selectEl.selectedOptions[0];this.selectFromNativeOption(t)},this.emitChangeEvent=()=>{this.calciteSelectChange.emit()},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=null,this.selectedOption=void 0,this.width="auto"}valueHandler(e){this.el.querySelectorAll("calcite-option").forEach((t=>t.selected=t.value===e))}selectedOptionHandler(e){this.value=null===e||void 0===e?void 0:e.value}connectedCallback(){var e;const{el:t}=this;null===(e=this.mutationObserver)||void 0===e||e.observe(t,{subtree:!0,childList:!0}),(0,c.c)(this),(0,l.c)(this),(0,o.c)(this)}disconnectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),(0,c.d)(this),(0,l.d)(this),(0,o.d)(this)}componentWillLoad(){(0,a.a)(this)}componentDidLoad(){var e,t;(0,a.s)(this),(0,o.a)(this,null!==(e=null===(t=this.selectedOption)||void 0===t?void 0:t.value)&&void 0!==e?e:"")}componentDidRender(){(0,c.u)(this)}async setFocus(){await(0,a.c)(this),(0,s.k)(this.selectEl)}handleOptionOrGroupChange(e){e.stopPropagation();const t=e.target,n=this.componentToNativeEl.get(t);n&&(this.updateNativeElement(t,n),v(t)&&t.selected&&(this.deselectAllExcept(t),this.selectedOption=t))}onLabelClick(){this.setFocus()}updateNativeElement(e,t){if(t.disabled=e.disabled,t.label=e.label,v(e)){const n=t;n.selected=e.selected,n.value=e.value,n.innerText=e.label}}clearInternalSelect(){this.componentToNativeEl.forEach((e=>e.remove())),this.componentToNativeEl.clear()}selectFromNativeOption(e){if(!e)return;let t;this.componentToNativeEl.forEach(((n,i)=>{v(i)&&n===e&&(i.selected=!0,t=i,this.deselectAllExcept(i))})),t&&(this.selectedOption=t)}toNativeElement(e){if(v(e)){const t=document.createElement("option");return this.updateNativeElement(e,t),this.componentToNativeEl.set(e,t),t}if(function(e){return"CALCITE-OPTION-GROUP"===e.tagName}(e)){const t=document.createElement("optgroup");return this.updateNativeElement(e,t),Array.from(e.children).forEach((n=>{const i=this.toNativeElement(n);t.append(i),this.componentToNativeEl.set(e,i)})),this.componentToNativeEl.set(e,t),t}throw new Error("unsupported element child provided")}deselectAllExcept(e){this.el.querySelectorAll("calcite-option").forEach((t=>{t!==e&&(t.selected=!1)}))}renderChevron(){return(0,i.h)("div",{class:p},(0,i.h)("calcite-icon",{class:h,icon:"chevron-down",scale:(0,d.g)(this.scale)}))}render(){return(0,i.h)(i.HY,null,(0,i.h)("select",{"aria-label":(0,l.g)(this),class:m,disabled:this.disabled,onChange:this.handleInternalSelectChange,ref:this.storeSelectRef},(0,i.h)("slot",null)),this.renderChevron(),(0,i.h)(o.H,{component:this}))}get el(){return this}static get watchers(){return{value:["valueHandler"],selectedOption:["selectedOptionHandler"]}}static get style(){return":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;align-items:stretch;inline-size:var(--select-width)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-select-font-size:var(--calcite-font-size--2);--calcite-select-spacing-inline:0.5rem 2rem}:host([scale=s]) .icon-container{padding-inline:0.5rem}:host([scale=m]){block-size:2rem;--calcite-select-font-size:var(--calcite-font-size--1);--calcite-select-spacing-inline:0.75rem 2.5rem}:host([scale=m]) .icon-container{padding-inline:0.75rem}:host([scale=l]){block-size:44px;--calcite-select-font-size:var(--calcite-font-size-0);--calcite-select-spacing-inline:1rem 3rem}:host([scale=l]) .icon-container{padding-inline:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}.select{margin:0px;box-sizing:border-box;inline-size:100%;cursor:pointer;appearance:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);font-family:inherit;color:var(--calcite-ui-text-2);outline-color:transparent;font-size:var(--calcite-select-font-size);padding-inline:var(--calcite-select-spacing-inline);border-inline-end-width:0px}.select:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.select:hover{background-color:var(--calcite-ui-foreground-2)}select:disabled{border-color:var(--calcite-ui-border-input);--tw-bg-opacity:1}.icon-container{pointer-events:none;position:absolute;inset-block:0px;display:flex;align-items:center;border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:transparent;color:var(--calcite-ui-text-2);inset-inline-end:0px;border-inline-width:0px 1px}.select:focus~.icon-container{border-color:transparent}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-select",{disabled:[516],form:[513],label:[1],name:[513],required:[516],scale:[513],value:[1025],selectedOption:[1040],width:[513],setFocus:[64]},[[0,"calciteInternalOptionChange","handleOptionOrGroupChange"],[0,"calciteInternalOptionGroupChange","handleOptionOrGroupChange"]]]);function b(){if("undefined"===typeof customElements)return;["calcite-select","calcite-icon"].forEach((e=>{switch(e){case"calcite-select":customElements.get(e)||customElements.define(e,f);break;case"calcite-icon":customElements.get(e)||(0,u.d)()}}))}b();const g=f,E=b},9339:(e,t,n)=>{"use strict";function i(e){return"l"===e?"m":"s"}n.d(t,{g:()=>i})},81054:(e,t,n)=>{"use strict";n.d(t,{H:()=>E,a:()=>v,c:()=>u,d:()=>m,f:()=>h,r:()=>d,s:()=>r});var i=n(66151),s=n(33850);const o="hidden-form-input";function c(e){return"checked"in e}const l=new WeakMap,a=new WeakSet;function r(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function d(e){var t;null===(t=e.formEl)||void 0===t||t.reset()}function u(e){const{el:t,value:n}=e,s=h(e);if(!s||function(e,t){if((0,i.c)(t.parentElement,"[form]"))return!0;const n="calciteInternalFormComponentRegister";let s=!1;return e.addEventListener(n,(e=>{s=e.composedPath().some((e=>a.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(n,{bubbles:!0,composed:!0})),s}(s,t))return;e.formEl=s,e.defaultValue=n,c(e)&&(e.defaultChecked=e.checked);const o=(e.onFormReset||p).bind(e);s.addEventListener("reset",o),l.set(e.el,o),a.add(t)}function h(e){const{el:t,form:n}=e;return n?(0,i.q)(t,{id:n}):(0,i.c)(t,"form")}function p(){c(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:n}=e;if(!n)return;const i=l.get(t);n.removeEventListener("reset",i),l.delete(t),e.formEl=null,a.delete(t)}function v(e,t){e.defaultValue=t}const f=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},b=e=>e.removeEventListener("change",f);function g(e,t,n){var i;const{defaultValue:s,disabled:o,form:l,name:a,required:r}=e;t.defaultValue=s,t.disabled=o,t.name=a,t.required=r,t.tabIndex=-1,l?t.setAttribute("form",l):t.removeAttribute("form"),c(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?n||"on":""):t.value=n||"",null===(i=e.syncHiddenFormInput)||void 0===i||i.call(e,t)}const E=e=>{let{component:t}=e;return function(e){const{el:t,formEl:n,name:i,value:s}=e,{ownerDocument:c}=t,l=t.querySelectorAll('input[slot="'.concat(o,'"]'));if(!n||!i)return void l.forEach((e=>{b(e),e.remove()}));const a=Array.isArray(s)?s:[s],r=[],d=new Set;let u;l.forEach((t=>{const n=a.find((e=>e==t.value));null!=n?(d.add(n),g(e,t,n)):r.push(t)})),a.forEach((t=>{if(d.has(t))return;let n=r.pop();n||(n=c.createElement("input"),n.slot=o),u||(u=c.createDocumentFragment()),u.append(n),n.addEventListener("change",f),g(e,n,t)})),u&&t.append(u),r.forEach((e=>{b(e),e.remove()}))}(t),(0,s.h)("slot",{name:o})}},36177:(e,t,n)=>{"use strict";n.d(t,{I:()=>u,d:()=>h});var i=n(33850),s=n(66151),o=n(46609);const c="flip-rtl",l={},a={},r={s:16,m:24,l:32};async function d(e){let{icon:t,scale:n}=e;const s=r[n],o=function(e){const t=!isNaN(Number(e.charAt(0))),n=e.split("-");if(n.length>0){const t=/[a-z]/i;e=n.map(((e,n)=>e.replace(t,(function(e,t){return 0===n&&0===t?e:e.toUpperCase()})))).join("")}return t?"i".concat(e):e}(t),c="F"===o.charAt(o.length-1),d=c?o.substring(0,o.length-1):o,u="".concat(d).concat(s).concat(c?"F":"");if(l[u])return l[u];a[u]||(a[u]=fetch((0,i.K3)("./assets/icon/".concat(u,".json"))).then((e=>e.json())).catch((()=>(console.error('"'.concat(u,'" is not a valid calcite-ui-icon name')),""))));const h=await a[u];return l[u]=h,h}const u=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){var e;null===(e=this.intersectionObserver)||void 0===e||e.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:e,flipRtl:t,pathData:n,scale:o,textLabel:l}=this,a=(0,s.b)(e),d=r[o],u=!!l,h=[].concat(n||"");return(0,i.h)(i.AA,{"aria-hidden":(0,s.t)(!u),"aria-label":u?l:null,role:u?"img":null},(0,i.h)("svg",{"aria-hidden":"true",class:{[c]:"rtl"===a&&t,svg:!0},fill:"currentColor",height:"100%",viewBox:"0 0 ".concat(d," ").concat(d),width:"100%",xmlns:"http://www.w3.org/2000/svg"},h.map((e=>"string"===typeof e?(0,i.h)("path",{d:e}):(0,i.h)("path",{d:e.d,opacity:"opacity"in e?e.opacity:1})))))}async loadIconPathData(){const{icon:e,scale:t,visible:n}=this;if(!i.Z5.isBrowser||!e||!n)return;const s=await d({icon:e,scale:t});e===this.icon&&(this.pathData=s)}waitUntilVisible(e){this.intersectionObserver=(0,o.c)("intersection",(t=>{t.forEach((t=>{t.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,e())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):e()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]}]);function h(){if("undefined"===typeof customElements)return;["calcite-icon"].forEach((e=>{if("calcite-icon"===e)customElements.get(e)||customElements.define(e,u)}))}h()},94002:(e,t,n)=>{"use strict";n.d(t,{c:()=>f,d:()=>b,g:()=>s,u:()=>h});var i=n(33850);function s(){if(!i.Z5.isBrowser)return"";const e=navigator.userAgentData;return null!==e&&void 0!==e&&e.brands?e.brands.map((e=>{let{brand:t,version:n}=e;return"".concat(t,"/").concat(n)})).join(" "):navigator.userAgent}const o=/firefox/i.test(s()),c=o?new WeakMap:null;function l(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function a(e){const t=e.target;if(o&&!c.get(t))return;const{disabled:n}=t;n&&e.preventDefault()}const r=["mousedown","mouseup","click"];function d(e){if(o&&!c.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const u={capture:!0};function h(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void p(e);v(e),"function"===typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function p(e){e.el.click=l,function(e){if(!e)return;e.addEventListener("pointerdown",a,u),r.forEach((t=>e.addEventListener(t,d,u)))}(o?m(e):e.el)}function m(e){return c.get(e.el)}function v(e){delete e.el.click,function(e){if(!e)return;e.removeEventListener("pointerdown",a,u),r.forEach((t=>e.removeEventListener(t,d,u)))}(o?m(e):e.el)}function f(e){if(!e.disabled||!o)return;const t=e.el.parentElement||e.el;c.set(e.el,t),p(e)}function b(e){o&&(c.delete(e.el),v(e))}},4593:(e,t,n)=>{"use strict";n.d(t,{a:()=>c,c:()=>m,d:()=>v,g:()=>b,l:()=>o});var i=n(66151);const s="calciteInternalLabelClick",o="calciteInternalLabelConnected",c="calciteInternalLabelDisconnected",l="calcite-label",a=new WeakMap,r=new WeakMap,d=new WeakMap,u=new WeakMap,h=new WeakSet,p=e=>{const{id:t}=e,n=t&&(0,i.q)(e,{selector:"".concat(l,'[for="').concat(t,'"]')});if(n)return n;const s=(0,i.c)(e,l);return!s||function(e,t){let n;const i="custom-element-ancestor-check",s=i=>{i.stopImmediatePropagation();const s=i.composedPath();n=s.slice(s.indexOf(t),s.indexOf(e))};e.addEventListener(i,s,{once:!0}),t.dispatchEvent(new CustomEvent(i,{composed:!0,bubbles:!0})),e.removeEventListener(i,s);const o=n.filter((n=>n!==t&&n!==e)).filter((e=>{var t;return null===(t=e.tagName)||void 0===t?void 0:t.includes("-")}));return o.length>0}(s,e)?null:s};function m(e){const t=p(e.el);if(r.has(t)&&t===e.labelEl||!t&&h.has(e))return;const n=w.bind(e);if(t){e.labelEl=t;const i=a.get(t)||[];i.push(e),a.set(t,i.sort(f)),r.has(e.labelEl)||(r.set(e.labelEl,g),e.labelEl.addEventListener(s,g)),h.delete(e),document.removeEventListener(o,d.get(e)),u.set(e,n),document.addEventListener(c,n)}else h.has(e)||(n(),document.removeEventListener(c,u.get(e)))}function v(e){if(h.delete(e),document.removeEventListener(o,d.get(e)),document.removeEventListener(c,u.get(e)),d.delete(e),u.delete(e),!e.labelEl)return;const t=a.get(e.labelEl);1===t.length&&(e.labelEl.removeEventListener(s,r.get(e.labelEl)),r.delete(e.labelEl)),a.set(e.labelEl,t.filter((t=>t!==e)).sort(f)),e.labelEl=null}function f(e,t){return(0,i.y)(e.el,t.el)?-1:1}function b(e){var t;return e.label||(null===(t=e.labelEl)||void 0===t||null===(t=t.textContent)||void 0===t?void 0:t.trim())||""}function g(e){const t=e.detail.sourceEvent.target,n=a.get(this),i=n.find((e=>e.el===t));if(n.includes(i))return;const s=n[0];s.disabled||s.onLabelClick(e)}function E(){h.has(this)&&m(this)}function w(){h.add(this);const e=d.get(this)||E.bind(this);d.set(this,e),document.addEventListener(o,e)}},33150:(e,t,n)=>{"use strict";n.d(t,{a:()=>c,b:()=>a,c:()=>r,s:()=>l});var i=n(33850);const s=new WeakMap,o=new WeakMap;function c(e){o.set(e,new Promise((t=>s.set(e,t))))}function l(e){s.get(e)()}function a(e){return o.get(e)}async function r(e){if(await a(e),i.Z5.isBrowser)return(0,i.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},46609:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var i=n(33850);function s(e,t,n){if(!i.Z5.isBrowser)return;const s=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new s(t,n)}}}]);
//# sourceMappingURL=83881.fa1c6ae5.chunk.js.map