/*! For license information please see 98776.99ece454.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[98776],{9444:(e,t,i)=>{i.d(t,{F:()=>r});var s=i(33850);const n="calcite-floating-ui-arrow",o="calcite-floating-ui-arrow__stroke",a={width:12,height:6,strokeWidth:1},r=e=>{let{floatingLayout:t,key:i,ref:r}=e;const{width:l,height:c,strokeWidth:d}=a,h=l/2,f="vertical"===t,p="M0,0"+" H".concat(l)+" L".concat(l-h,",").concat(c)+" Q".concat(h,",").concat(c," ").concat(h,",").concat(c)+" Z";return(0,s.h)("svg",{"aria-hidden":"true",class:n,height:l,key:i,viewBox:"0 0 ".concat(l," ").concat(l+(f?0:d)),width:l+(f?d:0),ref:r},d>0&&(0,s.h)("path",{class:o,d:p,fill:"none","stroke-width":d+1}),(0,s.h)("path",{d:p,stroke:"none"}))}},67053:(e,t,i)=>{i.d(t,{H:()=>o,c:()=>n});var s=i(33850);function n(e){return Math.min(Math.max(Math.ceil(e),1),6)}const o=(e,t)=>{const i=e.level?"h".concat(e.level):"div";return delete e.level,(0,s.h)(i,{...e},t)}},98776:(e,t,i)=>{i.d(t,{P:()=>z,d:()=>A});var s=i(33850),n=i(10438),o=i(63233),a=i(66151),r=i(54964),l=i(78995),c=i(67053),d=i(1314),h=i(30769),f=i(95155),p=i(33150),m=i(46609),u=i(9444),g=i(9339),v=i(78538),b=i(36177),E=i(66530);const y="container",k="close-button-container",w="close-button",x="content",P="has-header",C="header",L="heading",H="aria-controls",D="aria-expanded";const R=new class{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.togglePopovers=e=>{const t=e.composedPath(),i=this.queryPopover(t);i&&!i.triggerDisabled&&(i.open=!i.open),Array.from(this.registeredElements.values()).filter((e=>e!==i&&e.autoClose&&e.open&&!t.includes(e))).forEach((e=>e.open=!1))},this.keyHandler=e=>{e.defaultPrevented||("Escape"===e.key?this.closeAllPopovers():(0,f.i)(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{(0,a.j)(e)&&this.togglePopovers(e)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach((e=>e.open=!1))}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("keydown",this.keyHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("keydown",this.keyHandler,{capture:!0})}},z=(0,s.GH)(class extends s.mv{constructor(){var e;super(),e=this,this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=(0,s.yM)(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=(0,s.yM)(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=(0,s.yM)(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=(0,s.yM)(this,"calcitePopoverOpen",6),this.mutationObserver=(0,m.c)("mutation",(()=>this.updateFocusTrapElements())),this.guid="calcite-popover-".concat((0,r.g)()),this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=e=>{this.transitionEl=e},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,n.f)(t,e):null},this.setUpReferenceElement=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.removeReferences(),e.effectiveReferenceElement=e.getReferenceElement(),(0,n.c)(e,e.effectiveReferenceElement,e.el);const{el:i,referenceElement:s,effectiveReferenceElement:o}=e;t&&s&&!o&&console.warn("".concat(i.tagName,': reference-element id "').concat(s,'" was not found.'),{el:i}),e.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:e,open:t}=this;e&&"setAttribute"in e&&e.setAttribute(D,(0,a.t)(t))},this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(H,t),R.registerElement(e,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&(e.removeAttribute(H),e.removeAttribute(D)),R.unregisterElement(e))},this.hide=()=>{this.open=!1},this.storeArrowEl=e=>{this.arrowEl=e,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=n.b,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(e){this.open&&(e?(0,o.d)(this):(0,o.a)(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(e){(0,l.o)(this),e&&this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){(0,h.u)(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements(),(0,d.c)(this),(0,h.c)(this),this.setUpReferenceElement(this.hasLoaded),(0,o.c)(this),this.open&&(0,l.o)(this)}async componentWillLoad(){await(0,h.s)(this),(0,p.a)(this)}componentDidLoad(){(0,p.s)(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),(0,d.d)(this),(0,h.d)(this),(0,n.a)(this,this.effectiveReferenceElement,this.el),(0,o.d)(this)}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{el:t,effectiveReferenceElement:i,placement:s,overlayPositioning:o,flipDisabled:a,filteredFlipPlacements:r,offsetDistance:l,offsetSkidding:c,arrowEl:d}=this;return(0,n.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:s,flipDisabled:a,flipPlacements:r,offsetDistance:l,offsetSkidding:c,arrowEl:d,type:"popover"},e)}async setFocus(){await(0,p.c)(this),(0,s.xE)(this.el),(0,a.f)(this.el)}async updateFocusTrapElements(){(0,o.u)(this)}getReferenceElement(){const{referenceElement:e,el:t}=this;return("string"===typeof e?(0,a.q)(t,{id:e}):e)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),(0,o.a)(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),(0,o.d)(this)}renderCloseButton(){const{messages:e,closable:t}=this;return t?(0,s.h)("div",{class:k,key:k},(0,s.h)("calcite-action",{appearance:"transparent",class:w,onClick:this.hide,scale:this.scale,text:e.close,ref:e=>this.closeButtonEl=e},(0,s.h)("calcite-icon",{icon:"x",scale:(0,g.g)(this.scale)}))):null}renderHeader(){const{heading:e,headingLevel:t}=this,i=e?(0,s.h)(c.H,{class:L,level:t},e):null;return i?(0,s.h)("div",{class:C,key:C},i,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:e,heading:t,label:i,open:o,pointerDisabled:r,floatingLayout:l}=this,c=e&&o,d=!c,h=r?null:(0,s.h)(u.F,{floatingLayout:l,key:"floating-arrow",ref:this.storeArrowEl});return(0,s.h)(s.AA,{"aria-hidden":(0,a.t)(d),"aria-label":i,"aria-live":"polite","calcite-hydrated-hidden":d,id:this.getId(),role:"dialog"},(0,s.h)("div",{class:{[n.F.animation]:!0,[n.F.animationActive]:c},ref:this.setTransitionEl},h,(0,s.h)("div",{class:{[P]:!!t,[y]:!0}},this.renderHeader(),(0,s.h)("div",{class:x},(0,s.h)("slot",null)),t?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]}]);function A(){if("undefined"===typeof customElements)return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,z);break;case"calcite-action":customElements.get(e)||(0,v.d)();break;case"calcite-icon":customElements.get(e)||(0,b.d)();break;case"calcite-loader":customElements.get(e)||(0,E.d)()}}))}A()}}]);
//# sourceMappingURL=98776.99ece454.chunk.js.map