/*! For license information please see 97508.b8f96135.chunk.js.LICENSE.txt */
(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[97508,25572,45286,57148,66324,25708,45966],{25572:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=25572,e.exports=t},66926:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalciteMeter:()=>E,defineCustomElement:()=>C});var n=i(33850),a=i(33150),l=i(81054),r=i(1314),s=i(66151),c=i(46609);const o="container",h="fill",d="step-line",u="label",b="label-hidden",m="label-range",v="label-value",g="unit-label",p="steps-visible",f="value-visible",L="fill-success",y="fill-warning",w="fill-danger",x=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.labelFlipMax=.8,this.labelFlipProximity=.15,this.maxPercent=100,this.minPercent=0,this.resizeObserver=(0,c.c)("resize",(()=>this.resizeHandler())),this.formatLabel=(e,t)=>{if("percent"===t){if(!this.percentFormatting){const e=(0,r.g)(this.effectiveLocale),t=new Intl.NumberFormat(e,{useGrouping:this.groupSeparator,style:"percent"});this.percentFormatting={formatter:t,locale:e}}return this.percentFormatting.formatter.format(e)}return r.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},r.n.localize(e.toString())},this.appearance="outline-fill",this.disabled=!1,this.fillType="range",this.form=void 0,this.groupSeparator=!1,this.high=void 0,this.label=void 0,this.low=void 0,this.max=100,this.min=0,this.name=void 0,this.numberingSystem=void 0,this.rangeLabels=!1,this.rangeLabelType="percent",this.scale="m",this.unitLabel="",this.value=void 0,this.valueLabel=!1,this.valueLabelType="percent",this.currentPercent=void 0,this.effectiveLocale=void 0,this.highActive=void 0,this.highPercent=void 0,this.lowActive=void 0,this.lowPercent=void 0}handleRangeChange(){this.calculateValues(),this.updateLabels()}handleLabelChange(){this.updateLabels()}async componentWillLoad(){(0,a.a)(this),this.calculateValues(),(0,l.a)(this,this.value)}componentDidLoad(){(0,a.s)(this),this.updateLabels()}connectedCallback(){var e;(0,r.c)(this),(0,l.c)(this),null===(e=this.resizeObserver)||void 0===e||e.observe(this.el)}disconnectedCallback(){var e;(0,r.d)(this),(0,l.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}resizeHandler(){this.updateLabels()}updateLabels(){this.valueLabelEl&&this.determineValueLabelPosition(),this.rangeLabels&&this.determineVisibleLabels()}calculateValues(){const{min:e,max:t,low:i,high:n,value:a}=this,l=100*(i-e)/(t-e),r=100*(n-e)/(t-e),s=100*(a-e)/(t-e);(!i||i<e||i>n||i>t)&&(this.low=e),(!n||n>t||n<i||n<e)&&(this.high=t),a||(this.value=e),this.lowPercent=l,this.highPercent=r,this.currentPercent=a?s:0,this.lowActive=!!i&&i>e&&(!a||i>a)&&(!n||i<n),this.highActive=!!n&&e<=n&&n<t&&(!a||n>a)&&(!i||n>i)}getMeterKindCssClass(){const{low:e,high:t,min:i,max:n,value:a}=this,l=e||i,r=t||n,s=a<r;return!a||!e&&s||a<l?L:a>=l&&s?y:a>=r?w:L}intersects(e,t){return e&&t&&(0,s.l)(e.getBoundingClientRect(),t.getBoundingClientRect())}determineVisibleLabels(){const{minLabelEl:e,lowLabelEl:t,highLabelEl:i,maxLabelEl:n}=this,a=this.intersects(i,n),l=this.intersects(t,i),r=this.intersects(t,n),s=this.intersects(e,i),c=this.intersects(e,t),o=this.intersects(e,n),h=b;t&&(c||r||l?t.classList.add(h):t.classList.remove(h)),i&&(s||r||a?i.classList.add(h):i.classList.remove(h)),e&&n&&(o?n.classList.add(h):n.classList.remove(h))}determineValueLabelPosition(){const{valueLabelEl:e,meterContainerEl:t,currentPercent:i}=this,n=i>100?100:i>0?i:0;n+100*(e.getBoundingClientRect().width-0)/(t.getBoundingClientRect().width-0)>=100?(e.style.insetInlineEnd="0%",e.style.removeProperty("inset-inline-start")):(e.style.insetInlineStart="".concat(n,"% "),e.style.removeProperty("inset-inline-end"))}renderMeterFill(){const{currentPercent:e,fillType:t}=this,i=this.getMeterKindCssClass();return(0,n.h)("div",{class:{[h]:!0,[i]:"single"!==t},style:{width:"".concat(e,"%")}})}renderRangeLine(e){const t={insetInlineStart:"".concat(e,"%")};return(0,n.h)("div",{class:d,style:t})}renderValueLabel(){const{currentPercent:e,valueLabelType:t,unitLabel:i,value:a}=this,l=this.formatLabel("percent"===t?e/100:a||0,t);return(0,n.h)("div",{class:{[u]:!0,[v]:!0},key:"low-label-line",ref:e=>this.valueLabelEl=e},l,i&&"percent"!==t&&(0,n.h)("span",{class:g},"\xa0",i))}renderMinLabel(){const{rangeLabelType:e,min:t,minPercent:i,unitLabel:a}=this,l={insetInlineStart:"".concat(i,"%")},r=this.formatLabel("percent"===e?i:t,e);return(0,n.h)("div",{class:{[u]:!0,[m]:!0},key:"min-label-line",style:l,ref:e=>this.minLabelEl=e},r,a&&"percent"!==e&&(0,n.h)("span",{class:g},"\xa0",a))}renderLowLabel(){const{rangeLabelType:e,low:t,lowPercent:i,highPercent:a,labelFlipProximity:l}=this,r=t?this.formatLabel("percent"===e?i/100:t,e):"",s={insetInlineStart:"".concat(i,"%")},c={insetInlineEnd:"".concat(100-i,"%")},o=(a-i)/100<l?c:s;return(0,n.h)("div",{class:{[u]:!0,[m]:!0},key:"low-label-line",style:o,ref:e=>this.lowLabelEl=e},r)}renderHighLabel(){const{rangeLabelType:e,high:t,highPercent:i,labelFlipMax:a}=this,l=t?this.formatLabel("percent"===e?i/100:t,e):"",r={insetInlineStart:"".concat(i,"%")},s={insetInlineEnd:"".concat(100-i,"%")},c=i/100>=a?s:r;return(0,n.h)("div",{class:{[u]:!0,[m]:!0},key:"high-label-line",style:c,ref:e=>this.highLabelEl=e},l)}renderMaxLabel(){const{rangeLabelType:e,max:t,maxPercent:i}=this,a={insetInlineEnd:"".concat(100-i,"%")},l=this.formatLabel("percent"===e?i/100:t,e);return(0,n.h)("div",{class:{[u]:!0,[m]:!0},key:"max-label-line",style:a,ref:e=>this.maxLabelEl=e},l)}render(){const{appearance:e,currentPercent:t,highActive:i,highPercent:a,label:l,lowActive:r,lowPercent:s,max:c,maxPercent:h,min:d,minPercent:u,rangeLabels:b,rangeLabelType:m,unitLabel:v,value:g,valueLabel:L,valueLabelType:y}=this,w=this.formatLabel(t/100,"percent"),x="".concat(g," ").concat(v),k="percent"===y?w:v?x:void 0;return(0,n.h)(n.AA,null,(0,n.h)("div",{"aria-label":l,"aria-valuemax":"percent"===m?h:c,"aria-valuemin":"percent"===m?u:d,"aria-valuenow":"percent"===y?t:g,"aria-valuetext":k,class:{[o]:!0,[p]:b,[f]:L,[e]:"outline-fill"!==e},role:"meter",ref:e=>this.meterContainerEl=e},this.renderMeterFill(),L&&this.renderValueLabel(),r&&this.renderRangeLine(s),i&&this.renderRangeLine(a),b&&this.renderMinLabel(),b&&r&&this.renderLowLabel(),b&&i&&this.renderHighLabel(),b&&this.renderMaxLabel()))}get el(){return this}static get watchers(){return{min:["handleRangeChange"],max:["handleRangeChange"],low:["handleRangeChange"],high:["handleRangeChange"],value:["handleRangeChange"],rangeLabels:["handleLabelChange"],rangeLabelType:["handleLabelChange"],unitLabel:["handleLabelChange"],valueLabel:["handleLabelChange"],valueLabelType:["handleLabelChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host{display:flex;--calcite-meter-space-internal:0.125rem;--calcite-meter-height-internal:1rem;--calcite-meter-font-size-internal:var(--calcite-font-size--1)}:host([scale=s]){--calcite-meter-height-internal:0.75rem;--calcite-meter-font-size-internal:var(--calcite-font-size--2)}:host([scale=l]){--calcite-meter-height-internal:1.5rem;--calcite-meter-font-size-internal:var(--calcite-font-size-0)}.container{position:relative;margin:0px;display:flex;inline-size:100%;align-items:center;block-size:var(--calcite-meter-height-internal);background-color:var(--calcite-ui-foreground-2);border:1px solid var(--calcite-ui-border-3);border-radius:var(--calcite-meter-height-internal)}.solid{border:1px solid var(--calcite-ui-foreground-3);background-color:var(--calcite-ui-foreground-3)}.outline{background-color:transparent}.value-visible{margin-block-start:1.5rem}.steps-visible{margin-block-end:1.5rem}.step-line{position:absolute;inset-block:0px;display:block;inline-size:var(--calcite-meter-space-internal);background-color:var(--calcite-ui-border-3)}.label{position:absolute;font-size:var(--calcite-meter-font-size-internal)}.label-hidden{visibility:hidden;opacity:0}.label-value{inset-block-end:calc(100% + 0.5em);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-1)}.label-range{color:var(--calcite-ui-text-3);inset-block-start:calc(100% + 0.5em)}.unit-label{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-3)}.label-value .unit-label{font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-2)}.fill{position:absolute;z-index:var(--calcite-app-z-index);display:block;background-color:var(--calcite-ui-brand);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-inline-start:var(--calcite-meter-space-internal);inset-block:var(--calcite-meter-space-internal);border-radius:var(--calcite-meter-height-internal);max-inline-size:calc(100% - var(--calcite-meter-space-internal) * 2);min-inline-size:calc(var(--calcite-meter-height-internal) - var(--calcite-meter-space-internal) * 2);transition-property:inline-size, background-color, box-shadow}.fill-danger{background-color:var(--calcite-ui-danger)}.fill-success{background-color:var(--calcite-ui-success)}.fill-warning{background-color:var(--calcite-ui-warning)}.solid .fill{inset-block:0;inset-inline-start:0;max-inline-size:100%;min-inline-size:calc(var(--calcite-meter-height-internal));box-shadow:0 0 0 1px var(--calcite-ui-brand)}.solid .fill-danger{box-shadow:0 0 0 1px var(--calcite-ui-danger)}.solid .fill-success{box-shadow:0 0 0 1px var(--calcite-ui-success)}.solid .fill-warning{box-shadow:0 0 0 1px var(--calcite-ui-warning)}"}},[1,"calcite-meter",{appearance:[513],disabled:[516],fillType:[513,"fill-type"],form:[513],groupSeparator:[516,"group-separator"],high:[1538],label:[1],low:[1538],max:[514],min:[514],name:[513],numberingSystem:[1,"numbering-system"],rangeLabels:[516,"range-labels"],rangeLabelType:[513,"range-label-type"],scale:[513],unitLabel:[1,"unit-label"],value:[1026],valueLabel:[516,"value-label"],valueLabelType:[513,"value-label-type"],currentPercent:[32],effectiveLocale:[32],highActive:[32],highPercent:[32],lowActive:[32],lowPercent:[32]}]);function k(){if("undefined"===typeof customElements)return;["calcite-meter"].forEach((e=>{if("calcite-meter"===e)customElements.get(e)||customElements.define(e,x)}))}k();const E=x,C=k},81054:(e,t,i)=>{"use strict";i.d(t,{H:()=>L,a:()=>v,c:()=>d,d:()=>m,f:()=>u,r:()=>h,s:()=>o});var n=i(66151),a=i(33850);const l="hidden-form-input";function r(e){return"checked"in e}const s=new WeakMap,c=new WeakSet;function o(e){const{formEl:t}=e;return!!t&&(t.requestSubmit(),!0)}function h(e){var t;null===(t=e.formEl)||void 0===t||t.reset()}function d(e){const{el:t,value:i}=e,a=u(e);if(!a||function(e,t){if((0,n.c)(t.parentElement,"[form]"))return!0;const i="calciteInternalFormComponentRegister";let a=!1;return e.addEventListener(i,(e=>{a=e.composedPath().some((e=>c.has(e))),e.stopPropagation()}),{once:!0}),t.dispatchEvent(new CustomEvent(i,{bubbles:!0,composed:!0})),a}(a,t))return;e.formEl=a,e.defaultValue=i,r(e)&&(e.defaultChecked=e.checked);const l=(e.onFormReset||b).bind(e);a.addEventListener("reset",l),s.set(e.el,l),c.add(t)}function u(e){const{el:t,form:i}=e;return i?(0,n.q)(t,{id:i}):(0,n.c)(t,"form")}function b(){r(this)?this.checked=this.defaultChecked:this.value=this.defaultValue}function m(e){const{el:t,formEl:i}=e;if(!i)return;const n=s.get(t);i.removeEventListener("reset",n),s.delete(t),e.formEl=null,c.delete(t)}function v(e,t){e.defaultValue=t}const g=e=>{e.target.dispatchEvent(new CustomEvent("calciteInternalHiddenInputChange",{bubbles:!0}))},p=e=>e.removeEventListener("change",g);function f(e,t,i){var n;const{defaultValue:a,disabled:l,form:s,name:c,required:o}=e;t.defaultValue=a,t.disabled=l,t.name=c,t.required=o,t.tabIndex=-1,s?t.setAttribute("form",s):t.removeAttribute("form"),r(e)?(t.checked=e.checked,t.defaultChecked=e.defaultChecked,t.value=e.checked?i||"on":""):t.value=i||"",null===(n=e.syncHiddenFormInput)||void 0===n||n.call(e,t)}const L=e=>{let{component:t}=e;return function(e){const{el:t,formEl:i,name:n,value:a}=e,{ownerDocument:r}=t,s=t.querySelectorAll('input[slot="'.concat(l,'"]'));if(!i||!n)return void s.forEach((e=>{p(e),e.remove()}));const c=Array.isArray(a)?a:[a],o=[],h=new Set;let d;s.forEach((t=>{const i=c.find((e=>e==t.value));null!=i?(h.add(i),f(e,t,i)):o.push(t)})),c.forEach((t=>{if(h.has(t))return;let i=o.pop();i||(i=r.createElement("input"),i.slot=l),d||(d=r.createDocumentFragment()),d.append(i),i.addEventListener("change",g),f(e,i,t)})),d&&t.append(d),o.forEach((e=>{p(e),e.remove()}))}(t),(0,a.h)("slot",{name:l})}},33150:(e,t,i)=>{"use strict";i.d(t,{a:()=>r,b:()=>c,c:()=>o,s:()=>s});var n=i(33850);const a=new WeakMap,l=new WeakMap;function r(e){l.set(e,new Promise((t=>a.set(e,t))))}function s(e){a.get(e)()}function c(e){return l.get(e)}async function o(e){if(await c(e),n.Z5.isBrowser)return(0,n.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}}}]);
//# sourceMappingURL=97508.b8f96135.chunk.js.map