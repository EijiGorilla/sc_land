/*! For license information please see 79812.0bb3d52e.chunk.js.LICENSE.txt */
(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[79812,25572,45286,57148,66324,25708,45966],{25572:t=>{function n(t){return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}))}n.keys=()=>[],n.resolve=n,n.id=25572,t.exports=n},22348:(t,n,e)=>{"use strict";e.r(n),e.d(n,{CalciteStack:()=>a,defineCustomElement:()=>o});var s=e(143);const a=s.a,o=s.d},143:(t,n,e)=>{"use strict";e.d(n,{S:()=>h,a:()=>u,d:()=>f});var s=e(33850),a=e(66151);const o="container",i="actions-start",c="content-start",d="content",l="content-end",r="actions-end",h={actionsStart:"actions-start",contentStart:"content-start",contentEnd:"content-end",actionsEnd:"actions-end"},u=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.handleActionsStartSlotChange=t=>{this.hasActionsStart=(0,a.e)(t)},this.handleActionsEndSlotChange=t=>{this.hasActionsEnd=(0,a.e)(t)},this.handleContentStartSlotChange=t=>{this.hasContentStart=(0,a.e)(t)},this.handleContentEndSlotChange=t=>{this.hasContentEnd=(0,a.e)(t)},this.disabled=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasContentStart=!1,this.hasContentEnd=!1}renderActionsStart(){const{hasActionsStart:t}=this;return(0,s.h)("div",{class:i,hidden:!t,key:"actions-start-container"},(0,s.h)("slot",{name:h.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{hasActionsEnd:t}=this;return(0,s.h)("div",{class:r,hidden:!t,key:"actions-end-container"},(0,s.h)("slot",{name:h.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}))}renderContentStart(){const{hasContentStart:t}=this;return(0,s.h)("div",{class:c,hidden:!t},(0,s.h)("slot",{name:h.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderDefaultContent(){return(0,s.h)("div",{class:d},(0,s.h)("slot",null))}renderContentEnd(){const{hasContentEnd:t}=this;return(0,s.h)("div",{class:l,hidden:!t},(0,s.h)("slot",{name:h.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}render(){return(0,s.h)(s.AA,null,(0,s.h)("div",{class:o},this.renderActionsStart(),this.renderContentStart(),this.renderDefaultContent(),this.renderContentEnd(),this.renderActionsEnd()))}static get style(){return":host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, 0.75rem);padding-block:var(--calcite-stack-padding-block, 0.5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-stack",{disabled:[516],hasActionsStart:[32],hasActionsEnd:[32],hasContentStart:[32],hasContentEnd:[32]}]);function f(){if("undefined"===typeof customElements)return;["calcite-stack"].forEach((t=>{if("calcite-stack"===t)customElements.get(t)||customElements.define(t,u)}))}f()}}]);
//# sourceMappingURL=79812.0bb3d52e.chunk.js.map