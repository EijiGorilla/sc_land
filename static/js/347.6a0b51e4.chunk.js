/*! For license information please see 347.6a0b51e4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[347],{30347:(e,t,s)=>{s.r(t),s.d(t,{CalciteSegmentedControl:()=>u,defineCustomElement:()=>m});var i=s(51554),n=s(92358),o=s(85955),l=s(13160),a=s(74310),r=s(47242),c=s(72021);const d=(0,i.GH)(class extends i.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSegmentedControlChange=(0,i.yM)(this,"calciteSegmentedControlChange",6),this.handleClick=e=>{this.disabled||"calcite-segmented-control-item"===e.target.localName&&this.selectItem(e.target,!0)},this.mutationObserver=(0,c.c)("mutation",(()=>this.setUpItems())),this.appearance="solid",this.disabled=!1,this.form=void 0,this.required=!1,this.name=void 0,this.layout="horizontal",this.scale="m",this.value=null,this.selectedItem=void 0,this.width="auto"}handlePropsChange(){this.handleItemPropChange()}valueHandler(e){this.getItems().forEach((t=>t.checked=t.value===e))}handleSelectedItemChange(e,t){if(this.value=null===e||void 0===e?void 0:e.value,e===t)return;const s=this.getItems(),i=s.filter((t=>t===e)).pop();i?this.selectItem(i):s[0]&&(s[0].tabIndex=0)}componentWillLoad(){(0,r.a)(this),this.setUpItems()}componentDidLoad(){(0,o.a)(this,this.value),(0,r.s)(this)}connectedCallback(){var e;(0,l.c)(this),(0,a.c)(this),(0,o.c)(this),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0}),this.handleItemPropChange()}disconnectedCallback(){var e;(0,l.d)(this),(0,a.d)(this),(0,o.d)(this),null===(e=this.mutationObserver)||void 0===e||e.unobserve(this.el)}componentDidRender(){(0,l.u)(this)}render(){return(0,i.h)(i.AA,{onClick:this.handleClick,role:"radiogroup"},(0,i.h)("slot",null),(0,i.h)(o.H,{component:this}))}handleSelected(e){e.preventDefault(),this.selectItem(e.target),e.stopPropagation()}handleKeyDown(e){const{key:t}=e,{el:s,selectedItem:i}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(t))return;let o=t;"rtl"===(0,n.b)(s)&&("ArrowRight"===t&&(o="ArrowLeft"),"ArrowLeft"===t&&(o="ArrowRight"));const l=this.getItems();let a=-1;switch(l.forEach(((e,t)=>{e===i&&(a=t)})),o){case"ArrowLeft":case"ArrowUp":e.preventDefault();const t=a<1?l[l.length-1]:l[a-1];return void this.selectItem(t,!0);case"ArrowRight":case"ArrowDown":e.preventDefault();const s=-1===a?l[1]:l[a+1]||l[0];return void this.selectItem(s,!0);case" ":return e.preventDefault(),void this.selectItem(e.target,!0);default:return}}async setFocus(){var e;await(0,r.c)(this),null===(e=this.selectedItem||this.getItems()[0])||void 0===e||e.focus()}handleItemPropChange(){this.getItems().forEach((e=>{e.appearance=this.appearance,e.layout=this.layout,e.scale=this.scale}))}onLabelClick(){this.setFocus()}getItems(){return Array.from(this.el.querySelectorAll("calcite-segmented-control-item"))}selectItem(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e===this.selectedItem)return;const s=this.getItems();let n=null;s.forEach((s=>{const i=s===e;(i&&!s.checked||!i&&s.checked)&&(s.checked=i),s.tabIndex=i?0:-1,i&&(n=s,t&&this.calciteSegmentedControlChange.emit())})),this.selectedItem=n,i.Z5.isBrowser&&n&&n.focus()}setUpItems(){const e=this.getItems(),t=e.filter((e=>e.checked)).pop();t?this.selectItem(t):e[0]&&(e[0].tabIndex=0)}get el(){return this}static get watchers(){return{appearance:["handlePropsChange"],layout:["handlePropsChange"],scale:["handlePropsChange"],value:["valueHandler"],selectedItem:["handleSelectedItemChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:var(--calcite-ui-foreground-1);inline-size:-moz-fit-content;inline-size:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([appearance=outline]){background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([layout=vertical]){flex-direction:column;align-items:flex-start;align-self:flex-start}:host([width=full]){inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content}:host([width=full]) ::slotted(calcite-segmented-control-item){flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-segmented-control-item){justify-content:flex-start}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-segmented-control",{appearance:[513],disabled:[516],form:[513],required:[516],name:[513],layout:[513],scale:[513],value:[1025],selectedItem:[1040],width:[513],setFocus:[64]},[[0,"calciteInternalSegmentedControlItemChange","handleSelected"],[0,"keydown","handleKeyDown"]]]);function h(){if("undefined"===typeof customElements)return;["calcite-segmented-control"].forEach((e=>{if("calcite-segmented-control"===e)customElements.get(e)||customElements.define(e,d)}))}h();const u=d,m=h}}]);
//# sourceMappingURL=347.6a0b51e4.chunk.js.map