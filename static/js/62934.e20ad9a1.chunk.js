/*! For license information please see 62934.e20ad9a1.chunk.js.LICENSE.txt */
(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[62934,25572,45286,57148,66324,25708,45966],{25572:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=25572,e.exports=t},3503:(e,t,n)=>{"use strict";n.d(t,{A:()=>E,S:()=>v,d:()=>x});var i=n(33850),o=n(37078),l=n(66151),s=n(54964),a=n(95155),c=n(33150),u=n(78538),r=n(36177),d=n(66530),h=n(98776);const p="menu",m="default-trigger",v={tooltip:"tooltip",trigger:"trigger"},g="ellipsis",f=["ArrowUp","ArrowDown","End","Home"],E=(0,i.GH)(class extends i.mv{constructor(){var e;super(),e=this,this.__registerHost(),this.__attachShadow(),this.calciteActionMenuOpen=(0,i.yM)(this,"calciteActionMenuOpen",6),this.actionElements=[],this.guid="calcite-action-menu-".concat((0,s.g)()),this.menuId="".concat(this.guid,"-menu"),this.menuButtonId="".concat(this.guid,"-menu-button"),this.connectMenuButtonEl=()=>{const{menuButtonId:e,menuId:t,open:n,label:i}=this,o=this.slottedMenuButtonEl||this.defaultMenuButtonEl;this.menuButtonEl!==o&&(this.disconnectMenuButtonEl(),this.menuButtonEl=o,this.setTooltipReferenceElement(),o&&(o.active=n,o.setAttribute("aria-controls",t),o.setAttribute("aria-expanded",(0,l.t)(n)),o.setAttribute("aria-haspopup","true"),o.id||(o.id=e),o.label||(o.label=i),o.text||(o.text=i),o.addEventListener("pointerdown",this.menuButtonClick),o.addEventListener("keydown",this.menuButtonKeyDown)))},this.disconnectMenuButtonEl=()=>{const{menuButtonEl:e}=this;e&&(e.removeEventListener("pointerdown",this.menuButtonClick),e.removeEventListener("keydown",this.menuButtonKeyDown))},this.setMenuButtonEl=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-action")));this.slottedMenuButtonEl=t[0],this.connectMenuButtonEl()},this.setDefaultMenuButtonEl=e=>{this.defaultMenuButtonEl=e,this.connectMenuButtonEl()},this.handleCalciteActionClick=()=>{this.open=!1,this.setFocus()},this.menuButtonClick=e=>{(0,l.j)(e)&&this.toggleOpen()},this.updateTooltip=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-tooltip")));this.tooltipEl=t[0],this.setTooltipReferenceElement()},this.setTooltipReferenceElement=()=>{const{tooltipEl:e,expanded:t,menuButtonEl:n,open:i}=this;e&&(e.referenceElement=t||i?null:n)},this.updateAction=(e,t)=>{const{guid:n,activeMenuItemIndex:i}=this,o="".concat(n,"-action-").concat(t);e.tabIndex=-1,e.setAttribute("role","menuitem"),e.id||(e.id=o),e.toggleAttribute("data-active",t===i)},this.updateActions=e=>{null===e||void 0===e||e.forEach(this.updateAction)},this.handleDefaultSlotChange=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-action")));this.actionElements=t},this.menuButtonKeyDown=e=>{const{key:t}=e,{actionElements:n,activeMenuItemIndex:i,open:o}=this;if(n.length){if((0,a.i)(t)){if(e.preventDefault(),!o)return void this.toggleOpen();const t=n[i];t?t.click():this.toggleOpen(!1)}if("Tab"!==t)return"Escape"===t?(this.toggleOpen(!1),void e.preventDefault()):void this.handleActionNavigation(e,t,n);this.open=!1}},this.handleActionNavigation=(e,t,n)=>{if(!this.isValidKey(t,f))return;if(e.preventDefault(),!this.open)return this.toggleOpen(),"Home"!==t&&"ArrowDown"!==t||(this.activeMenuItemIndex=0),void("End"!==t&&"ArrowUp"!==t||(this.activeMenuItemIndex=n.length-1));"Home"===t&&(this.activeMenuItemIndex=0),"End"===t&&(this.activeMenuItemIndex=n.length-1);const i=this.activeMenuItemIndex;"ArrowUp"===t&&(this.activeMenuItemIndex=(0,o.g)(Math.max(i-1,-1),n.length)),"ArrowDown"===t&&(this.activeMenuItemIndex=(0,o.g)(i+1,n.length))},this.toggleOpenEnd=()=>{this.setFocus(),this.el.removeEventListener("calcitePopoverOpen",this.toggleOpenEnd)},this.toggleOpen=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!e.open;e.el.addEventListener("calcitePopoverOpen",e.toggleOpenEnd),e.open=t},this.appearance="solid",this.expanded=!1,this.flipPlacements=void 0,this.label=void 0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.scale=void 0,this.menuButtonEl=void 0,this.activeMenuItemIndex=-1}componentWillLoad(){(0,c.a)(this)}componentDidLoad(){(0,c.s)(this)}disconnectedCallback(){this.disconnectMenuButtonEl()}expandedHandler(){this.open=!1,this.setTooltipReferenceElement()}openHandler(e){this.activeMenuItemIndex=this.open?0:-1,this.menuButtonEl&&(this.menuButtonEl.active=e),this.calciteActionMenuOpen.emit(),this.setTooltipReferenceElement()}closeCalciteActionMenuOnClick(e){if(!(0,l.j)(e))return;e.composedPath().includes(this.el)||(this.open=!1)}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}async setFocus(){return await(0,c.c)(this),(0,l.k)(this.menuButtonEl)}renderMenuButton(){const{appearance:e,label:t,scale:n,expanded:o}=this;return(0,i.h)("slot",{name:v.trigger,onSlotchange:this.setMenuButtonEl},(0,i.h)("calcite-action",{appearance:e,class:m,icon:g,scale:n,text:t,textEnabled:o,ref:this.setDefaultMenuButtonEl}))}renderMenuItems(){const{actionElements:e,activeMenuItemIndex:t,open:n,menuId:o,menuButtonEl:l,label:s,placement:a,overlayPositioning:c,flipPlacements:u}=this,r=e[t],d=(null===r||void 0===r?void 0:r.id)||null;return(0,i.h)("calcite-popover",{flipPlacements:u,focusTrapDisabled:!0,label:s,offsetDistance:0,open:n,overlayPositioning:c,placement:a,pointerDisabled:!0,referenceElement:l},(0,i.h)("div",{"aria-activedescendant":d,"aria-labelledby":null===l||void 0===l?void 0:l.id,class:p,id:o,onClick:this.handleCalciteActionClick,role:"menu",tabIndex:-1},(0,i.h)("slot",{onSlotchange:this.handleDefaultSlotChange})))}render(){return(0,i.h)(i.HY,null,this.renderMenuButton(),this.renderMenuItems(),(0,i.h)("slot",{name:v.tooltip,onSlotchange:this.updateTooltip}))}isValidKey(e,t){return!!t.find((t=>t===e))}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],open:["openHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}static get style(){return":host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1);color:var(--calcite-ui-text-2)}.menu ::slotted(calcite-action){margin:0.125rem;display:flex;outline-color:transparent}.menu ::slotted(calcite-action[data-active]){outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          );outline-offset:0px}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{flex-direction:column;flex-wrap:nowrap;outline:2px solid transparent;outline-offset:2px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-action-menu",{appearance:[513],expanded:[516],flipPlacements:[16],label:[1],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],scale:[513],menuButtonEl:[32],activeMenuItemIndex:[32],setFocus:[64]},[[9,"pointerdown","closeCalciteActionMenuOnClick"]]]);function x(){if("undefined"===typeof customElements)return;["calcite-action-menu","calcite-action","calcite-icon","calcite-loader","calcite-popover"].forEach((e=>{switch(e){case"calcite-action-menu":customElements.get(e)||customElements.define(e,E);break;case"calcite-action":customElements.get(e)||(0,u.d)();break;case"calcite-icon":customElements.get(e)||(0,r.d)();break;case"calcite-loader":customElements.get(e)||(0,d.d)();break;case"calcite-popover":customElements.get(e)||(0,h.d)()}}))}x()},37078:(e,t,n)=>{"use strict";function i(e,t){return(e+t)%t}n.d(t,{g:()=>i})},54147:(e,t,n)=>{"use strict";n.r(t),n.d(t,{CalciteActionMenu:()=>o,defineCustomElement:()=>l});var i=n(3503);const o=i.A,l=i.d}}]);
//# sourceMappingURL=62934.e20ad9a1.chunk.js.map