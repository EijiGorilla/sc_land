/*! For license information please see 83990.734f6481.chunk.js.LICENSE.txt */
(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[83990,25572,45286,57148,66324,25708,45966],{25572:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=25572,e.exports=t},79988:(e,t,o)=>{"use strict";o.d(t,{E:()=>m,a:()=>u,b:()=>d,g:()=>r,o:()=>l,q:()=>h,t:()=>x});var a=o(33850),i=o(66151),n=o(84327),c=o(3503);const l=150,s=e=>e.reduce(((e,t)=>e+t),0)/e.length,r=e=>{const t=e.filter((e=>e.slot!==n.S.menuActions)),o=null===t||void 0===t?void 0:t.length;return{actionWidth:o?s(t.map((e=>e.clientWidth||0))):0,actionHeight:o?s(t.map((e=>e.clientHeight||0))):0}},d=e=>{let{layout:t,actionCount:o,actionWidth:a,width:i,actionHeight:n,height:c,groupCount:l}=e;return Math.max(o-(e=>{let{width:t,actionWidth:o,layout:a,height:i,actionHeight:n,groupCount:c}=e;const l="horizontal"===a?t:i,s="horizontal"===a?o:n;return Math.floor((l-2*c)/s)})({width:i,actionWidth:a,layout:t,height:c,actionHeight:n,groupCount:l}),0)},h=e=>Array.from(e.querySelectorAll("calcite-action")).filter((e=>!e.closest("calcite-action-menu")||e.slot===c.S.trigger)),u=e=>{let{actionGroups:t,expanded:o,overflowCount:i}=e,c=i;t.reverse().forEach((e=>{let t=0;const i=h(e).reverse();i.forEach((e=>{e.slot===n.S.menuActions&&(e.removeAttribute("slot"),e.textEnabled=o)})),c>0&&i.some((e=>(i.filter((e=>!e.slot)).length>1&&i.length>2&&!e.closest("calcite-action-menu")&&(e.textEnabled=!0,e.setAttribute("slot",n.S.menuActions),t++,t>1&&c--),c<1))),(0,a.xE)(e)}))},p="chevrons-left",g="chevrons-right";function x(e){let{el:t,expanded:o}=e;h(t).filter((e=>e.slot!==n.S.menuActions)).forEach((e=>e.textEnabled=o)),t.querySelectorAll("calcite-action-group, calcite-action-menu").forEach((e=>e.expanded=o))}const m=e=>{let{expanded:t,expandText:o,collapseText:n,toggle:c,el:l,position:s,tooltip:r,ref:d,scale:h}=e;const u="rtl"===(0,i.b)(l),x=t?n:o,m=[p,g];u&&m.reverse();const f="end"===function(e,t){var o;return e||(null===(o=t.closest("calcite-shell-panel"))||void 0===o?void 0:o.position)||"start"}(s,l),v=f?m[1]:m[0],b=f?m[0]:m[1],y=(0,a.h)("calcite-action",{icon:t?v:b,onClick:c,scale:h,text:x,textEnabled:t,title:t||r?null:x,ref:e=>(e=>{let{tooltip:t,referenceElement:o,expanded:a,ref:i}=e;return t&&(t.referenceElement=!a&&o?o:null),i&&i(o),o})({tooltip:r,referenceElement:e,expanded:t,ref:d})});return y}},50838:(e,t,o)=>{"use strict";o.r(t),o.d(t,{CalciteActionPad:()=>E,defineCustomElement:()=>k});var a=o(33850),i=o(38244),n=o(66151),c=o(33150),l=o(1314),s=o(30769),r=o(79988),d=o(46609),h=o(78538),u=o(84327),p=o(3503),g=o(36177),x=o(66530),m=o(98776);const f="action-group--end",v="container",b="expand-tooltip",y=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionPadToggle=(0,a.yM)(this,"calciteActionPadToggle",6),this.mutationObserver=(0,d.c)("mutation",(()=>this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group"))))),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const t=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach((e=>{t.includes(e)||(e.menuOpen=!1)}))}},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionPadToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const t=(0,n.s)(e).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-action-group")));this.setGroupLayout(t)},this.handleTooltipSlotChange=e=>{const t=(0,n.s)(e).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-tooltip")));this.expandTooltip=t[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.expandTooltip=void 0,this.effectiveLocale="",this.defaultMessages=void 0}expandedHandler(e){(0,r.t)({el:this.el,expanded:e})}layoutHandler(){this.updateGroups()}onMessagesChange(){}effectiveLocaleChange(){(0,s.u)(this,this.effectiveLocale)}connectedCallback(){(0,i.c)(this),(0,l.c)(this),(0,s.c)(this)}disconnectedCallback(){(0,l.d)(this),(0,s.d)(this),(0,i.d)(this)}async componentWillLoad(){(0,c.a)(this);const{el:e,expanded:t}=this;(0,r.t)({el:e,expanded:t}),await(0,s.s)(this)}componentDidLoad(){(0,c.s)(this)}async setFocus(){var e;await(0,c.c)(this),null===(e=this.el)||void 0===e||e.focus()}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach((e=>e.layout=this.layout))}renderBottomActionGroup(){const{expanded:e,expandDisabled:t,messages:o,el:i,position:n,toggleExpand:c,scale:l,layout:s,actionsEndGroupLabel:d}=this,h=t?null:(0,a.h)(r.E,{collapseText:o.collapse,el:i,expandText:o.expand,expanded:e,position:n,scale:l,toggle:c,tooltip:this.expandTooltip,ref:this.setExpandToggleRef});return h?(0,a.h)("calcite-action-group",{class:f,label:d,layout:s,scale:l},(0,a.h)("slot",{name:b,onSlotchange:this.handleTooltipSlotChange}),h):null}render(){return(0,a.h)(a.AA,{onCalciteActionMenuOpen:this.actionMenuOpenHandler},(0,a.h)("div",{class:v},(0,a.h)("slot",{onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-action-pad",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],expandTooltip:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);function w(){if("undefined"===typeof customElements)return;["calcite-action-pad","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-pad":customElements.get(e)||customElements.define(e,y);break;case"calcite-action":customElements.get(e)||(0,h.d)();break;case"calcite-action-group":customElements.get(e)||(0,u.d)();break;case"calcite-action-menu":customElements.get(e)||(0,p.d)();break;case"calcite-icon":customElements.get(e)||(0,g.d)();break;case"calcite-loader":customElements.get(e)||(0,x.d)();break;case"calcite-popover":customElements.get(e)||(0,m.d)()}}))}w();const E=y,k=w}}]);
//# sourceMappingURL=83990.734f6481.chunk.js.map