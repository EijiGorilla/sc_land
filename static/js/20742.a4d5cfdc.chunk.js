/*! For license information please see 20742.a4d5cfdc.chunk.js.LICENSE.txt */
(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[20742,25572,45286,57148,66324,25708,45966],{25572:t=>{function e(t){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=()=>[],e.resolve=e,e.id=25572,t.exports=e},69319:(t,e,i)=>{"use strict";i.r(e),i.d(e,{CalciteTileSelect:()=>E,defineCustomElement:()=>B});var n=i(33850),o=i(54964),a=i(94002),c=i(33150),l=i(36177),s=i(2212),d=i(5416);const r="description",h="description-only",u="heading",p="heading-only",g="icon",b="icon-only",m="input-alignment-end",v="input-alignment-start",f="input-enabled",k="large-visual",x="width-auto",y="width-full",w=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTileSelectChange=(0,n.yM)(this,"calciteTileSelectChange",6),this.guid="calcite-tile-select-".concat((0,o.g)()),this.checked=!1,this.description=void 0,this.disabled=!1,this.heading=void 0,this.hidden=!1,this.icon=void 0,this.iconFlipRtl=!1,this.name=void 0,this.inputEnabled=!1,this.inputAlignment="start",this.type="radio",this.value=void 0,this.width="auto",this.focused=!1}checkedChanged(t){this.input.checked=t}nameChanged(t){this.input.name=t}async setFocus(){var t;return await(0,c.c)(this),null===(t=this.input)||void 0===t?void 0:t.setFocus()}checkboxChangeHandler(t){const e=t.target;e===this.input&&(this.checked=e.checked),t.stopPropagation(),this.calciteTileSelectChange.emit()}checkboxFocusBlurHandler(t){t.target===this.input&&(this.focused=t.detail),t.stopPropagation()}radioButtonChangeHandler(t){const e=t.target;e===this.input&&(this.checked=e.checked),t.stopPropagation(),this.calciteTileSelectChange.emit()}radioButtonCheckedChangeHandler(t){const e=t.target;e===this.input&&(this.checked=e.checked),t.stopPropagation()}radioButtonFocusBlurHandler(t){const e=t.target;e===this.input&&(this.focused=e.focused),t.stopPropagation()}clickHandler(t){if(this.disabled)return;const e=t.target;["calcite-tile","calcite-tile-select"].includes(e.localName)&&this.input.click()}pointerEnterHandler(){if(this.disabled)return;const{localName:t}=this.input;"calcite-radio-button"!==t&&"calcite-checkbox"!==t||(this.input.hovered=!0)}pointerLeaveHandler(){if(this.disabled)return;const{localName:t}=this.input;"calcite-radio-button"!==t&&"calcite-checkbox"!==t||(this.input.hovered=!1)}connectedCallback(){this.renderInput(),(0,a.c)(this)}componentWillLoad(){(0,c.a)(this)}componentDidLoad(){(0,c.s)(this)}disconnectedCallback(){this.input.parentNode.removeChild(this.input),(0,a.d)(this)}componentDidRender(){(0,a.u)(this)}renderInput(){this.input=document.createElement("radio"===this.type?"calcite-radio-button":"calcite-checkbox"),this.input.checked=this.checked,this.input.disabled=this.disabled,this.input.hidden=this.hidden,this.input.id=this.guid,this.input.label=this.heading||this.name||"",this.name&&(this.input.name=this.name),this.value&&(this.input.value=null!=this.value?this.value.toString():""),this.el.insertAdjacentElement("beforeend",this.input)}render(){const{checked:t,description:e,disabled:i,focused:o,heading:a,icon:c,inputAlignment:l,inputEnabled:s,width:d,iconFlipRtl:w}=this;return(0,n.h)("div",{class:{checked:t,container:!0,[r]:Boolean(e),[h]:Boolean(!a&&!c&&e),disabled:i,focused:o,[u]:Boolean(a),[p]:a&&!c&&!e,[g]:Boolean(c),[b]:!a&&c&&!e,[m]:"end"===l,[v]:"start"===l,[f]:s,[k]:a&&c&&!e,[x]:"auto"===d,[y]:"full"===d}},(0,n.h)("calcite-tile",{active:t,description:e,embed:!0,heading:a,icon:c,iconFlipRtl:w}),(0,n.h)("slot",null))}get el(){return this}static get watchers(){return{checked:["checkedChanged"],name:["nameChanged"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host .container{background-color:var(--calcite-ui-foreground-1);box-shadow:0 0 0 1px var(--calcite-ui-border-2);box-sizing:border-box;cursor:pointer;display:inline-block;block-size:100%;max-inline-size:300px;padding:0.75rem;position:relative;vertical-align:top;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host .container.checked{z-index:var(--calcite-app-z-index);box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host .container.heading-only{align-items:center}:host .container:not(.input-enabled) ::slotted(calcite-checkbox),:host .container:not(.input-enabled) ::slotted(calcite-radio-button){position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host .container.focused{outline-color:transparent}:host .container.focused:not(.disabled):not(.input-enabled){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:-4px;box-shadow:0 0 0 1px var(--calcite-ui-brand), inset 0 0 0 2px var(--calcite-ui-foreground-1)}:host .container.input-enabled.input-alignment-start.width-auto.heading-only,:host .container.input-enabled.input-alignment-start.width-auto.icon-only,:host .container.input-enabled.input-alignment-start.width-auto.description-only,:host .container.input-enabled.input-alignment-start.width-auto.heading.description,:host .container.input-enabled.input-alignment-start.width-auto.icon.description,:host .container.input-enabled.input-alignment-start.width-auto.heading.icon.description{display:inline-grid;grid-template-columns:max-content 1fr}:host .container.input-enabled.input-alignment-start.heading-only,:host .container.input-enabled.input-alignment-start.icon-only,:host .container.input-enabled.input-alignment-start.description-only,:host .container.input-enabled.input-alignment-start.heading.description,:host .container.input-enabled.input-alignment-start.icon.description,:host .container.input-enabled.input-alignment-start.heading.icon.description{gap:0.75rem}:host .container.input-enabled.input-alignment-start calcite-tile{order:1}:host .container.input-enabled.input-alignment-start.large-visual ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-start.large-visual ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-start:0.75rem}:host .container.input-enabled.input-alignment-end.width-auto.heading-only,:host .container.input-enabled.input-alignment-end.width-auto.icon-only{display:inline-grid;grid-gap:0.75rem;grid-template-columns:max-content 1fr}:host .container.input-enabled.input-alignment-end.heading-only,:host .container.input-enabled.input-alignment-end.icon-only{gap:0.75rem}:host .container.input-enabled.input-alignment-end.description-only ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.description-only ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.heading.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.heading.description ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.icon.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.icon.description ::slotted(calcite-radio-button),:host .container.input-enabled.input-alignment-end.heading.icon.description ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.heading.icon.description ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-end:0.75rem}:host .container.input-enabled.input-alignment-end.large-visual ::slotted(calcite-checkbox),:host .container.input-enabled.input-alignment-end.large-visual ::slotted(calcite-radio-button){position:absolute;inset-block-start:0.75rem;inset-inline-end:0.75rem}:host .container.width-full{display:flex;max-inline-size:none}:host .container.width-full calcite-tile{flex:1 1 auto}:host(:hover) .container:not(.input-enabled){box-shadow:0 0 0 1px var(--calcite-ui-brand)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tile-select",{checked:[1540],description:[513],disabled:[516],heading:[513],hidden:[516],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],name:[520],inputEnabled:[516,"input-enabled"],inputAlignment:[513,"input-alignment"],type:[513],value:[8],width:[513],focused:[32],setFocus:[64]},[[0,"calciteCheckboxChange","checkboxChangeHandler"],[0,"calciteInternalCheckboxFocus","checkboxFocusBlurHandler"],[0,"calciteInternalCheckboxBlur","checkboxFocusBlurHandler"],[0,"calciteRadioButtonChange","radioButtonChangeHandler"],[0,"calciteInternalRadioButtonCheckedChange","radioButtonCheckedChangeHandler"],[0,"calciteInternalRadioButtonFocus","radioButtonFocusBlurHandler"],[0,"calciteInternalRadioButtonBlur","radioButtonFocusBlurHandler"],[0,"click","clickHandler"],[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"]]]);function C(){if("undefined"===typeof customElements)return;["calcite-tile-select","calcite-icon","calcite-link","calcite-tile"].forEach((t=>{switch(t){case"calcite-tile-select":customElements.get(t)||customElements.define(t,w);break;case"calcite-icon":customElements.get(t)||(0,l.d)();break;case"calcite-link":customElements.get(t)||(0,s.d)();break;case"calcite-tile":customElements.get(t)||(0,d.d)()}}))}C();const E=w,B=C},38244:(t,e,i)=>{"use strict";i.d(e,{c:()=>s,d:()=>d});var n=i(33850),o=i(46609);const a=new Set;let c;const l={childList:!0};function s(t){c||(c=(0,o.c)("mutation",r)),c.observe(t.el,l)}function d(t){a.delete(t.el),r(c.takeRecords()),c.disconnect();for(const[e]of a.entries())c.observe(e,l)}function r(t){t.forEach((t=>{let{target:e}=t;(0,n.xE)(e)}))}},5416:(t,e,i)=>{"use strict";i.d(e,{T:()=>h,d:()=>u});var n=i(33850),o=i(38244),a=i(66151),c=i(94002),l=i(36177),s=i(2212);const d="content-start",r="content-end",h=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.description=void 0,this.disabled=!1,this.embed=!1,this.focused=!1,this.heading=void 0,this.hidden=!1,this.href=void 0,this.icon=void 0,this.iconFlipRtl=!1}connectedCallback(){(0,o.c)(this),(0,c.c)(this)}disconnectedCallback(){(0,o.d)(this),(0,c.d)(this)}componentDidRender(){(0,c.u)(this)}renderTile(){const{icon:t,el:e,heading:i,description:o,iconFlipRtl:c}=this,l=i&&t&&!o,s=l?{height:"64px",width:"64px"}:void 0;return(0,n.h)("div",{class:{container:!0,"large-visual":l}},t&&(0,n.h)("div",{class:"icon"},(0,n.h)("calcite-icon",{flipRtl:c,icon:t,scale:"l",style:s})),(0,n.h)("div",{class:"content-container"},(0,a.g)(e,d)?(0,n.h)("div",{class:"content-slot-container"},(0,n.h)("slot",{name:d})):null,(0,n.h)("div",{class:"content"},i&&(0,n.h)("div",{class:"heading"},i),o&&(0,n.h)("div",{class:"description"},o)),(0,a.g)(e,r)?(0,n.h)("div",{class:"content-slot-container"},(0,n.h)("slot",{name:r})):null))}render(){return(0,n.h)(n.HY,null,this.href?(0,n.h)("calcite-link",{disabled:this.disabled,href:this.href},this.renderTile()):this.renderTile())}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{box-sizing:border-box;display:inline-block;-webkit-user-select:none;user-select:none;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .container{pointer-events:none;display:grid;grid-template-columns:repeat(1, minmax(0, 1fr));gap:0.5rem}:host .content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;gap:0.5rem;inline-size:10%}:host .content-container{display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;padding:0px;color:var(--calcite-ui-text-2);outline-color:transparent}:host .content-slot-container{display:flex;align-items:center;background-color:var(--calcite-ui-foreground-1)}:host .content-slot-container:first-child{padding-inline:0 0.75rem}:host .content-slot-container:last-child{padding-inline:0.75rem 0}:host .heading{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host .large-visual{align-items:center;text-align:center;min-block-size:12rem}:host .large-visual .icon{display:flex;justify-content:center;align-self:flex-end}:host .large-visual .content-container{align-self:center}:host .description{pointer-events:none;overflow-wrap:break-word;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([href]) .heading,:host([href]:hover) .heading{text-decoration-line:underline;color:var(--calcite-ui-text-link)}:host(:not([embed])){padding:0.75rem;box-shadow:0 0 0 1px var(--calcite-ui-border-2)}:host(:not([embed])[href]:hover){cursor:pointer;box-shadow:0 0 0 2px var(--calcite-ui-brand)}:host(:not([embed])[href]:active){box-shadow:0 0 0 3px var(--calcite-ui-brand)}:host([icon][heading]:not([description]):not([embed])){padding:0px}:host([icon][heading]:not([description])) .icon{display:flex;justify-content:center}:host([icon][heading]:not([description])) .large-visual{text-align:center}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tile",{active:[516],description:[513],disabled:[516],embed:[516],focused:[516],heading:[513],hidden:[516],href:[513],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"]}]);function u(){if("undefined"===typeof customElements)return;["calcite-tile","calcite-icon","calcite-link"].forEach((t=>{switch(t){case"calcite-tile":customElements.get(t)||customElements.define(t,h);break;case"calcite-icon":customElements.get(t)||(0,l.d)();break;case"calcite-link":customElements.get(t)||(0,s.d)()}}))}u()}}]);
//# sourceMappingURL=20742.a4d5cfdc.chunk.js.map