/*! For license information please see 32883.1e97a3d2.chunk.js.LICENSE.txt */
(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[32883,25572,45286,57148,66324,25708,45966],{25572:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=25572,e.exports=t},26170:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalciteInputTimeZone:()=>w,defineCustomElement:()=>y});var o=i(33850),s=i(4593),n=i(94002),c=i(1314),a=i(30769),l=i(33150),r=i(81054),d=i(22232),m=i(6641),h=i(93512),u=i(36177);const b=60,p=["CET","CST6CDT","EET","EST","EST5EDT","Factory","HST","MET","MST","MST7MDT","PST8PDT","UTC","WET"];function f(e){return e.replace(":15",".25").replace(":30",".5").replace(":45",".75").replace("\u2212","-")}let g;async function v(e,t,o,s){const n=s.getTime(),c=Intl.supportedValuesOf("timeZone");return"offset"===o?(g||(g=Promise.all([i.e(54358).then(i.bind(i,54358)),i.e(90425).then(i.bind(i,90425))])),g.then((async i=>{let[{groupTimeZones:o},{DateEngine:s}]=i;const c=await o({dateEngine:new s,groupDateRange:1,startDate:new Date(n).toISOString()}),a=new Intl.ListFormat(e,{style:"long",type:"conjunction"});return c.forEach((e=>{const t=[];let i=0;e.tzs.forEach(((e,o)=>{p.includes(e)&&i++,t[o]=i})),e.tzs=e.tzs.filter((e=>!p.includes(e))),e.labelTzIndices=e.labelTzIndices.map((e=>e-t[e])).filter((t=>t>=0&&t<e.tzs.length))})),c.map((i=>{let{labelTzIndices:o,tzs:s}=i;const c=s[0],l=f(C(c,e,n)),r=function(e,t){const i=C(e,"en-US",t).replace("GMT","");return""===i?0:Number(f(i))*b}(c,n),d=o.map((e=>{const i=s[e];return t[i]||i.split("/").pop()})),m=function(e,t,i){return e.timeZoneLabel.replace("{offset}",t).replace("{cities}",i)}(t,l,a.format(d));return{label:m,value:r,filterValue:s.map((e=>x(e)))}})).filter((e=>!!e)).sort(((e,t)=>e.value-t.value))}))):c.map((e=>({label:x(e),value:e,filterValue:e}))).filter((e=>!!e)).sort()}function x(e){return e.replace(/_/g," ")}function C(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return(0,c.b)(t,{timeZone:e,timeZoneName:"shortOffset"}).formatToParts(i).find((e=>{let{type:t}=e;return"timeZoneName"===t})).value}const T=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInputTimeZoneBeforeClose=(0,o.yM)(this,"calciteInputTimeZoneBeforeClose",6),this.calciteInputTimeZoneBeforeOpen=(0,o.yM)(this,"calciteInputTimeZoneBeforeOpen",6),this.calciteInputTimeZoneChange=(0,o.yM)(this,"calciteInputTimeZoneChange",6),this.calciteInputTimeZoneClose=(0,o.yM)(this,"calciteInputTimeZoneClose",6),this.calciteInputTimeZoneOpen=(0,o.yM)(this,"calciteInputTimeZoneOpen",6),this.setComboboxRef=e=>{this.comboboxEl=e},this.onComboboxBeforeClose=e=>{e.stopPropagation(),this.calciteInputTimeZoneBeforeClose.emit()},this.onComboboxBeforeOpen=e=>{e.stopPropagation(),this.calciteInputTimeZoneBeforeOpen.emit()},this.onComboboxChange=e=>{e.stopPropagation();const t=e.target,i=this.findTimeZoneItem(t.selectedItems[0].getAttribute("data-value")),o="".concat(i.value);this.value!==o&&(this.value=o,this.selectedTimeZoneItem=i,this.calciteInputTimeZoneChange.emit())},this.onComboboxClose=e=>{e.stopPropagation(),this.open=!1,this.calciteInputTimeZoneClose.emit()},this.onComboboxOpen=e=>{this.open=!0,e.stopPropagation(),this.calciteInputTimeZoneOpen.emit()},this.disabled=!1,this.form=void 0,this.maxItems=0,this.messages=void 0,this.messageOverrides=void 0,this.mode="offset",this.name=void 0,this.open=!1,this.overlayPositioning="absolute",this.referenceDate=void 0,this.required=!1,this.scale="m",this.value=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}handleTimeZoneItemPropsChange(){this.createTimeZoneItems()}handleValueChange(e,t){const i=this.findTimeZoneItem(e);i?this.selectedTimeZoneItem=i:this.value=t}async setFocus(){await(0,l.c)(this),await this.comboboxEl.setFocus()}effectiveLocaleWatcher(){(0,a.u)(this,this.effectiveLocale)}onLabelClick(){this.setFocus()}findTimeZoneItem(e){const t=e;return this.timeZoneItems.find((e=>{let{value:i}=e;return i==t}))}async createTimeZoneItems(){var e;return this.effectiveLocale&&this.messages?v(this.effectiveLocale,this.messages,this.mode,this.referenceDate instanceof Date?this.referenceDate:new Date(null!==(e=this.referenceDate)&&void 0!==e?e:Date.now())):[]}connectedCallback(){(0,r.c)(this),(0,s.c)(this),(0,c.c)(this),(0,a.c)(this)}disconnectedCallback(){(0,r.d)(this),(0,s.d)(this),(0,c.d)(this),(0,a.d)(this)}async componentWillLoad(){var e;(0,l.a)(this),await(0,a.s)(this),this.timeZoneItems=await this.createTimeZoneItems();const t="offset"===this.mode?-1*(new Date).getTimezoneOffset():(new Intl.DateTimeFormat).resolvedOptions().timeZone,i=null!==(e=this.value)&&void 0!==e?e:t;this.selectedTimeZoneItem=this.findTimeZoneItem(i),this.selectedTimeZoneItem||(this.selectedTimeZoneItem=this.findTimeZoneItem(t));const o="".concat(this.selectedTimeZoneItem.value);(0,r.a)(this,o),this.value=o}componentDidLoad(){(0,l.s)(this)}componentDidRender(){(0,n.u)(this)}render(){return(0,o.h)(o.AA,null,(0,o.h)("calcite-combobox",{clearDisabled:!0,disabled:this.disabled,label:this.messages.chooseTimeZone,lang:this.effectiveLocale,maxItems:this.maxItems,onCalciteComboboxBeforeClose:this.onComboboxBeforeClose,onCalciteComboboxBeforeOpen:this.onComboboxBeforeOpen,onCalciteComboboxChange:this.onComboboxChange,onCalciteComboboxClose:this.onComboboxClose,onCalciteComboboxOpen:this.onComboboxOpen,open:this.open,overlayPositioning:this.overlayPositioning,scale:this.scale,selectionMode:"single-persist",ref:this.setComboboxRef},this.timeZoneItems.map((e=>{const t=this.selectedTimeZoneItem===e,{label:i,value:s}=e;return(0,o.h)("calcite-combobox-item",{"data-value":s,key:i,selected:t,textLabel:i,value:"".concat(e.filterValue)})}))),(0,o.h)(r.H,{component:this}))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["handleTimeZoneItemPropsChange","effectiveLocaleWatcher"],messages:["handleTimeZoneItemPropsChange"],mode:["handleTimeZoneItemPropsChange"],referenceDate:["handleTimeZoneItemPropsChange"],value:["handleValueChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}"}},[17,"calcite-input-time-zone",{disabled:[516],form:[513],maxItems:[514,"max-items"],messages:[1040],messageOverrides:[1040],mode:[513],name:[513],open:[1540],overlayPositioning:[513,"overlay-positioning"],referenceDate:[1,"reference-date"],required:[516],scale:[513],value:[1025],defaultMessages:[32],effectiveLocale:[32],setFocus:[64]}]);function I(){if("undefined"===typeof customElements)return;["calcite-input-time-zone","calcite-chip","calcite-combobox","calcite-combobox-item","calcite-icon"].forEach((e=>{switch(e){case"calcite-input-time-zone":customElements.get(e)||customElements.define(e,T);break;case"calcite-chip":customElements.get(e)||(0,d.d)();break;case"calcite-combobox":customElements.get(e)||(0,m.d)();break;case"calcite-combobox-item":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,u.d)()}}))}I();const w=T,y=I},93512:(e,t,i)=>{"use strict";i.d(t,{C:()=>C,d:()=>T});var o=i(33850),s=i(38244),n=i(66151),c=i(54964),a=i(94002),l=i(43632),r=i(9339),d=i(36177);const m="icon",h="icon--active",u="icon--indent",b="icon--custom",p="icon--dot",f="label--single",g="label",v="label--active",x="label--selected",C=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteComboboxItemChange=(0,o.yM)(this,"calciteComboboxItemChange",6),this.itemClickHandler=()=>{this.toggleSelected()},this.disabled=!1,this.selected=!1,this.active=!1,this.ancestors=void 0,this.guid=(0,c.g)(),this.icon=void 0,this.iconFlipRtl=!1,this.textLabel=void 0,this.value=void 0,this.filterDisabled=void 0,this.selectionMode="multiple",this.scale="m"}selectedWatchHandler(){this.calciteComboboxItemChange.emit()}connectedCallback(){this.ancestors=(0,l.g)(this.el),(0,s.c)(this),(0,a.c)(this)}disconnectedCallback(){(0,s.d)(this),(0,a.d)(this)}componentDidRender(){(0,a.u)(this)}toggleSelected(){const e="single-persist"===this.selectionMode;this.disabled||e&&this.selected||(this.selected=!this.selected)}renderIcon(e){return this.icon?(0,o.h)("calcite-icon",{class:{[b]:!!this.icon,[h]:this.icon&&this.selected,[u]:!0},flipRtl:this.iconFlipRtl,icon:this.icon||e,key:"icon",scale:(0,r.g)(this.scale)}):null}renderSelectIndicator(e,t){return e?(0,o.h)("span",{class:{[m]:!0,[p]:!0,[u]:!0}}):(0,o.h)("calcite-icon",{class:{[m]:!0,[h]:this.selected,[u]:!0},flipRtl:this.iconFlipRtl,icon:t,key:"indicator",scale:(0,r.g)(this.scale)})}renderChildren(){return(0,n.g)(this.el)?(0,o.h)("ul",{key:"default-slot-container"},(0,o.h)("slot",null)):null}render(){const e=(0,l.i)(this.selectionMode),t=e&&!this.disabled,i=e?"dot":"check",s=this.disabled?"":i,n={[g]:!0,[x]:this.selected,[v]:this.active,[f]:e},c=(0,l.a)(this.el);return(0,o.h)(o.AA,{"aria-hidden":"true"},(0,o.h)("div",{class:"container scale--".concat(this.scale),style:{"--calcite-combobox-item-spacing-indent-multiplier":"".concat(c)}},(0,o.h)("li",{class:n,id:this.guid,onClick:this.itemClickHandler},this.renderSelectIndicator(t,s),this.renderIcon(s),(0,o.h)("span",{class:"title"},this.textLabel)),this.renderChildren()))}get el(){return this}static get watchers(){return{selected:["selectedWatchHandler"]}}static get style(){return'@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([hidden]){display:none}[hidden]{display:none}.scale--s{font-size:var(--calcite-font-size--2);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-item-spacing-indent:0.5rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--m{font-size:var(--calcite-font-size--1);line-height:1rem;--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-item-spacing-indent:0.75rem;--calcite-combobox-item-selector-icon-size:1rem}.scale--l{font-size:var(--calcite-font-size-0);line-height:1.25rem;--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.625rem;--calcite-combobox-item-spacing-indent:1rem;--calcite-combobox-item-selector-icon-size:1.5rem}.container{--calcite-combobox-item-indent-value:calc(\n    var(--calcite-combobox-item-spacing-indent) * var(--calcite-combobox-item-spacing-indent-multiplier)\n  )}:host(:focus){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host,ul{margin:0px;display:flex;flex-direction:column;padding:0px}:host(:focus),ul:focus{outline:2px solid transparent;outline-offset:2px}.label{position:relative;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:100%;cursor:pointer;align-items:center;color:var(--calcite-ui-text-3);text-decoration-line:none;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);outline-color:transparent;word-wrap:break-word;word-break:break-word;padding-block:var(--calcite-combobox-item-spacing-unit-s);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host([disabled]) .label{cursor:default}.label--selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.label--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.label:hover,.label:active{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration-line:none;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.title{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon{display:inline-flex;opacity:0;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);color:var(--calcite-ui-border-1)}.icon--indent{padding-inline-start:var(--calcite-combobox-item-indent-value)}.icon--custom{margin-block-start:-1px;padding-inline-start:var(--calcite-combobox-item-spacing-unit-l);color:var(--calcite-ui-text-3)}.icon--active{color:var(--calcite-ui-text-1)}.icon--dot{display:flex;justify-content:center;min-inline-size:var(--calcite-combobox-item-selector-icon-size)}.icon--dot:before{text-align:start;content:"\u2022"}.label--active .icon{opacity:1}.label--selected .icon{opacity:1;color:var(--calcite-ui-brand)}:host(:hover[disabled]) .icon{opacity:1}'}},[1,"calcite-combobox-item",{disabled:[516],selected:[1540],active:[516],ancestors:[1040],guid:[513],icon:[513],iconFlipRtl:[516,"icon-flip-rtl"],textLabel:[513,"text-label"],value:[8],filterDisabled:[516,"filter-disabled"],selectionMode:[513,"selection-mode"],scale:[1]}]);function T(){if("undefined"===typeof customElements)return;["calcite-combobox-item","calcite-icon"].forEach((e=>{switch(e){case"calcite-combobox-item":customElements.get(e)||customElements.define(e,C);break;case"calcite-icon":customElements.get(e)||(0,d.d)()}}))}T()}}]);
//# sourceMappingURL=32883.1e97a3d2.chunk.js.map