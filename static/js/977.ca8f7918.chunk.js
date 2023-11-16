/*! For license information please see 977.ca8f7918.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[977],{50977:(e,t,s)=>{s.r(t),s.d(t,{CalciteMenu:()=>i,defineCustomElement:()=>a});var n=s(53128);const i=n.C,a=n.d},88818:(e,t,s)=>{s.d(t,{u:()=>r,w:()=>c});var n=s(72021);const i=["lang","role","aria-expanded"],a=new Map;let l;function o(e,t){let s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{el:n}=e,a=s?e.globalAttributes:{};t.filter((e=>!!i.includes(e)&&!!n.hasAttribute(e))).forEach((e=>{const t=n.getAttribute(e);null!==t&&(a[e]=t)})),e.globalAttributes=a}function u(e){e.forEach((e=>{let{target:t}=e;const[s,n]=a.get(t);o(s,n.attributeFilter)}))}function c(e,t){const{el:s}=e,i={attributeFilter:t};a.set(s,[e,i]),o(e,t,!0),l||(l=(0,n.c)("mutation",u)),l.observe(s,i)}function r(e){a.delete(e.el),u(l.takeRecords()),l.disconnect();for(const[t,[,s]]of a.entries())l.observe(t,s)}},53128:(e,t,s)=>{s.d(t,{C:()=>c,d:()=>r});var n=s(51554),i=s(92358),a=s(47242),l=s(46895),o=s(52655),u=s(88818);const c=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.menuItems=[],this.handleMenuSlotChange=e=>{this.menuItems=(0,i.s)(e),this.setMenuItemLayout(this.menuItems,this.layout)},this.label=void 0,this.layout="horizontal",this.messageOverrides=void 0,this.messages=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.globalAttributes={role:"menubar"}}handleLayoutChange(e){this.setMenuItemLayout(this.menuItems,e)}onMessagesChange(){}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}connectedCallback(){(0,l.c)(this),(0,o.c)(this),(0,u.w)(this,["role"])}async componentWillLoad(){(0,a.a)(this),await(0,o.s)(this)}componentDidLoad(){(0,a.s)(this)}disconnectedCallback(){(0,l.d)(this),(0,o.d)(this),(0,u.u)(this)}async setFocus(){await(0,a.c)(this),this.el.focus()}calciteInternalNavMenuItemKeyEvent(e){const t=e.target,s=e.detail.children,n=e.detail.event.key;e.stopPropagation(),"ArrowDown"===n?"vertical"===t.layout?(0,i.i)(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&s[0].setFocus():"ArrowUp"===n?"vertical"===this.layout?(0,i.i)(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&s[s.length-1].setFocus():"ArrowRight"===n?"horizontal"===this.layout?(0,i.i)(this.menuItems,t,"next",!1):e.detail.isSubmenuOpen&&s[0].setFocus():"ArrowLeft"===n?"horizontal"===this.layout?(0,i.i)(this.menuItems,t,"previous",!1):e.detail.isSubmenuOpen&&this.focusParentElement(e.target):"Escape"===n&&this.focusParentElement(e.target),e.preventDefault()}focusParentElement(e){const t=e.parentElement;t&&((0,i.k)(t),t.open=!1)}setMenuItemLayout(e,t){e.forEach((e=>{e.layout=t,"menubar"===this.globalAttributes.role&&(e.isTopLevelItem=!0,e.topLevelMenuLayout=this.layout)}))}render(){return(0,n.h)(n.AA,null,(0,n.h)("ul",{"aria-label":this.label,...this.globalAttributes},(0,n.h)("slot",{onSlotchange:this.handleMenuSlotChange})))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{layout:["handleLayoutChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{display:flex}ul{margin:0px;display:inline-flex;block-size:100%;align-items:center;padding:0px}:host([layout=vertical]) ul{display:flex;inline-size:100%;flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-menu",{label:[1],layout:[513],messageOverrides:[1040],messages:[1040],defaultMessages:[32],effectiveLocale:[32],globalAttributes:[32],setFocus:[64]},[[0,"calciteInternalMenuItemKeyEvent","calciteInternalNavMenuItemKeyEvent"]]]);function r(){if("undefined"===typeof customElements)return;["calcite-menu"].forEach((e=>{if("calcite-menu"===e)customElements.get(e)||customElements.define(e,c)}))}r()}}]);
//# sourceMappingURL=977.ca8f7918.chunk.js.map