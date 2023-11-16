/*! For license information please see 6171.fabbff25.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[6171],{56171:(e,t,i)=>{i.r(t),i.d(t,{CalciteRadioButton:()=>p,defineCustomElement:()=>f});var o=i(51554),a=i(20226),s=i(92358),n=i(85955),c=i(14387),d=i(13160),r=i(74310),h=i(47242);const l="container",u=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalRadioButtonBlur=(0,o.yM)(this,"calciteInternalRadioButtonBlur",6),this.calciteRadioButtonChange=(0,o.yM)(this,"calciteRadioButtonChange",6),this.calciteInternalRadioButtonCheckedChange=(0,o.yM)(this,"calciteInternalRadioButtonCheckedChange",6),this.calciteInternalRadioButtonFocus=(0,o.yM)(this,"calciteInternalRadioButtonFocus",6),this.selectItem=(e,t)=>{e[t].click()},this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((e=>e.name===this.name)),this.isFocusable=()=>{const e=this.queryButtons(),t=e.find((e=>!e.disabled)),i=e.find((e=>e.checked));return t===this.el&&!i},this.check=()=>{this.disabled||(this.focused=!0,this.setFocus(),this.checked||(this.uncheckAllRadioButtonsInGroup(),this.checked=!0,this.calciteRadioButtonChange.emit()))},this.clickHandler=()=>{this.disabled||this.check()},this.setContainerEl=e=>{this.containerEl=e},this.handleKeyDown=e=>{const{key:t}=e,{el:i}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(t))return;if(" "===t)return this.check(),void e.preventDefault();let o=t;"rtl"===(0,s.b)(i)&&("ArrowRight"===t&&(o="ArrowLeft"),"ArrowLeft"===t&&(o="ArrowRight"));const n=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((e=>e.name===this.name));let c=0;const d=n.length;switch(n.some(((e,t)=>{if(e.checked)return c=t,!0})),o){case"ArrowLeft":case"ArrowUp":return e.preventDefault(),void this.selectItem(n,(0,a.g)(Math.max(c-1,-1),d));case"ArrowRight":case"ArrowDown":return e.preventDefault(),void this.selectItem(n,(0,a.g)(c+1,d));default:return}},this.onContainerBlur=()=>{this.focused=!1,this.calciteInternalRadioButtonBlur.emit()},this.onContainerFocus=()=>{this.disabled||(this.focused=!0,this.calciteInternalRadioButtonFocus.emit())},this.checked=!1,this.disabled=!1,this.focused=!1,this.form=void 0,this.guid=void 0,this.hidden=!1,this.hovered=!1,this.label=void 0,this.name=void 0,this.required=!1,this.scale="m",this.value=void 0}checkedChanged(e){e&&this.uncheckOtherRadioButtonsInGroup(),this.calciteInternalRadioButtonCheckedChange.emit()}disabledChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}hiddenChanged(){this.updateTabIndexOfOtherRadioButtonsInGroup()}nameChanged(){this.checkLastRadioButton()}async setFocus(){await(0,h.c)(this),this.disabled||(0,s.k)(this.containerEl)}syncHiddenFormInput(e){e.type="radio"}onLabelClick(e){if(this.disabled||this.hidden)return;const t=e.currentTarget,i=t.for?this.rootNode.querySelector('calcite-radio-button[id="'.concat(t.for,'"]')):t.querySelector('calcite-radio-button[name="'.concat(this.name,'"]'));i&&(i.focused=!0,this.setFocus(),i.checked||(this.uncheckOtherRadioButtonsInGroup(),i.checked=!0,this.calciteRadioButtonChange.emit()))}checkLastRadioButton(){const e=this.queryButtons().filter((e=>e.checked));if((null===e||void 0===e?void 0:e.length)>1){const t=e[e.length-1];e.filter((e=>e!==t)).forEach((e=>{e.checked=!1,e.emitCheckedChange()}))}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){this.queryButtons().forEach((e=>{e.checked&&(e.checked=!1,e.focused=!1)}))}uncheckOtherRadioButtonsInGroup(){this.queryButtons().filter((e=>e.guid!==this.guid)).forEach((e=>{e.checked&&(e.checked=!1,e.focused=!1)}))}updateTabIndexOfOtherRadioButtonsInGroup(){this.queryButtons().filter((e=>e.guid!==this.guid&&!e.disabled)).forEach((e=>{(0,o.xE)(e)}))}getTabIndex(){if(!this.disabled)return this.checked||this.isFocusable()?0:-1}pointerEnterHandler(){this.disabled||(this.hovered=!0)}pointerLeaveHandler(){this.disabled||(this.hovered=!1)}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||"calcite-radio-button-".concat((0,c.g)()),this.name&&this.checkLastRadioButton(),(0,d.c)(this),(0,r.c)(this),(0,n.c)(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentWillLoad(){(0,h.a)(this)}componentDidLoad(){(0,h.s)(this),this.focused&&!this.disabled&&this.setFocus()}disconnectedCallback(){(0,d.d)(this),(0,r.d)(this),(0,n.d)(this),this.updateTabIndexOfOtherRadioButtonsInGroup()}componentDidRender(){(0,d.u)(this)}render(){const e=this.getTabIndex();return(0,o.h)(o.AA,{onClick:this.clickHandler,onKeyDown:this.handleKeyDown},(0,o.h)("div",{"aria-checked":(0,s.t)(this.checked),"aria-label":(0,r.g)(this),class:l,onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,role:"radio",tabIndex:e,ref:this.setContainerEl},(0,o.h)("div",{class:"radio"})),(0,o.h)(n.H,{component:this}))}get el(){return this}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"],hidden:["hiddenChanged"],name:["nameChanged"]}}static get style(){return':host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}'}},[1,"calcite-radio-button",{checked:[1540],disabled:[516],focused:[1540],form:[513],guid:[1537],hidden:[516],hovered:[1540],label:[1],name:[513],required:[516],scale:[513],value:[1032],setFocus:[64],emitCheckedChange:[64]},[[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"]]]);function b(){if("undefined"===typeof customElements)return;["calcite-radio-button"].forEach((e=>{if("calcite-radio-button"===e)customElements.get(e)||customElements.define(e,u)}))}b();const p=u,f=b}}]);
//# sourceMappingURL=6171.fabbff25.chunk.js.map