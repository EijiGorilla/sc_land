/*! For license information please see 6641.5e9a814d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[6641],{61108:(e,t,i)=>{i.d(t,{C:()=>s,a:()=>a,b:()=>o,c:()=>n,d:()=>l,e:()=>c});const s="48px",l="320px",n="476px",o="768px",a="1152px",c="1440px"},6641:(e,t,i)=>{i.d(t,{C:()=>H,d:()=>F});var s=i(33850),l=i(83640),n=i(66151),o=i(10438),a=i(81054),c=i(54964),r=i(94002),h=i(4593),d=i(33150),p=i(1314),u=i(46609),m=i(78995),b=i(30769),g=i(43632),v=i(9339),f=i(61108),x=i(22232),C=i(36177),I=i(42041);const y="x-button";function E(e){let{disabled:t,key:i,label:l,onClick:n,ref:o,scale:a}=e;return(0,s.h)("button",{"aria-label":l,class:y,disabled:t,key:i,onClick:n,tabIndex:-1,type:"button",ref:o},(0,s.h)("calcite-icon",{icon:"x",scale:(0,v.g)(a)}))}const w="combobox-item-",S="combobox-chip-",k="combobox-label-",A="combobox-listbox-",D="combobox-input-",H=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteComboboxChange=(0,s.yM)(this,"calciteComboboxChange",6),this.calciteComboboxFilterChange=(0,s.yM)(this,"calciteComboboxFilterChange",6),this.calciteComboboxChipClose=(0,s.yM)(this,"calciteComboboxChipClose",6),this.calciteComboboxBeforeClose=(0,s.yM)(this,"calciteComboboxBeforeClose",6),this.calciteComboboxClose=(0,s.yM)(this,"calciteComboboxClose",6),this.calciteComboboxBeforeOpen=(0,s.yM)(this,"calciteComboboxBeforeOpen",6),this.calciteComboboxOpen=(0,s.yM)(this,"calciteComboboxOpen",6),this.placement=o.d,this.internalValueChangeFlag=!1,this.textInput=null,this.mutationObserver=(0,u.c)("mutation",(()=>this.updateItems())),this.resizeObserver=(0,u.c)("resize",(()=>{this.setMaxScrollerHeight(),this.refreshSelectionDisplay()})),this.guid=(0,c.g)(),this.inputHeight=0,this.ignoreSelectedEventsFlag=!1,this.openTransitionProp="opacity",this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,o.f)(t,e):null},this.getValue=()=>{const e=this.selectedItems.map((e=>{var t;return null===e||void 0===e||null===(t=e.value)||void 0===t?void 0:t.toString()}));return null!==e&&void 0!==e&&e.length?e.length>1?e:e[0]:""},this.onLabelClick=()=>{this.setFocus()},this.keyDownHandler=e=>{const{key:t}=e;switch(t){case"Tab":this.activeChipIndex=-1,this.activeItemIndex=-1,this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),e.preventDefault()):this.open?(this.open=!1,e.preventDefault()):!this.allowCustomValues&&this.text&&(this.clearInputValue(),this.filterItems(""),this.updateActiveItemIndex(-1));break;case"ArrowLeft":this.previousChip(),e.preventDefault();break;case"ArrowRight":this.nextChip(),e.preventDefault();break;case"ArrowUp":e.preventDefault(),this.open&&this.shiftActiveItemIndex(-1),this.comboboxInViewport()||this.el.scrollIntoView();break;case"ArrowDown":e.preventDefault(),this.open?this.shiftActiveItemIndex(1):(this.open=!0,this.ensureRecentSelectedItemIsActive()),this.comboboxInViewport()||this.el.scrollIntoView();break;case" ":this.textInput.value||(this.open||(this.open=!0,this.shiftActiveItemIndex(1)),e.preventDefault());break;case"Home":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(0),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"End":if(!this.open)return;e.preventDefault(),this.updateActiveItemIndex(this.filteredItems.length-1),this.scrollToActiveItem(),this.comboboxInViewport()||this.el.scrollIntoView();break;case"Escape":this.clearDisabled||this.open||this.clearValue(),this.open=!1,e.preventDefault();break;case"Enter":this.activeItemIndex>-1?(this.toggleSelection(this.filteredItems[this.activeItemIndex]),e.preventDefault()):this.activeChipIndex>-1?(this.removeActiveChip(),e.preventDefault()):this.allowCustomValues&&this.text?(this.addCustomChip(this.text,!0),e.preventDefault()):e.defaultPrevented||(0,a.s)(this)&&e.preventDefault();break;case"Delete":case"Backspace":this.activeChipIndex>-1?(e.preventDefault(),this.removeActiveChip()):!this.text&&this.isMulti()&&(e.preventDefault(),this.removeLastChip())}},this.toggleCloseEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxClose",this.toggleCloseEnd)},this.toggleOpenEnd=()=>{this.open=!1,this.el.removeEventListener("calciteComboboxOpen",this.toggleOpenEnd)},this.setMaxScrollerHeight=async()=>{const{listContainerEl:e,open:t,referenceEl:i}=this;if(!e||!t)return;await this.reposition(!0);const s=this.getMaxScrollerHeight();e.style.maxHeight=s>0?"".concat(s,"px"):"",e.style.minWidth="".concat(i.clientWidth,"px"),await this.reposition(!0)},this.calciteChipCloseHandler=e=>{this.open=!1;const t=this.items.find((t=>t===e));t&&this.toggleSelection(t,!1),this.calciteComboboxChipClose.emit()},this.clickHandler=e=>{const t=e.composedPath();return t.some((e=>"CALCITE-CHIP"===e.tagName))?(this.open=!1,void e.preventDefault()):t.some((e=>{var t;return null===(t=e.classList)||void 0===t?void 0:t.contains(y)}))?(this.clearValue(),void e.preventDefault()):(this.open=!this.open,void this.ensureRecentSelectedItemIsActive())},this.refreshSelectionDisplay=async()=>{if(await(0,d.b)(this),(0,g.i)(this.selectionMode))return;if(!this.textInput)return;const{allSelectedIndicatorChipEl:e,chipContainerEl:t,selectionDisplay:i,placeholder:s,selectedIndicatorChipEl:l,textInput:o}=this,a=parseInt(getComputedStyle(t).gap.replace("px","")),c=(0,n.u)(t),{fontSize:r,fontFamily:h}=getComputedStyle(o),p=((0,n.v)(s,"".concat(r," ").concat(h))||parseInt(f.C))+a,u=(0,n.u)(e),m=(0,n.u)(l),b=Math.max(u,m);if(this.setCompactSelectionDisplay({chipContainerElGap:a,chipContainerElWidth:c,inputWidth:p,largestSelectedIndicatorChipWidth:b}),"fit"===i){const e=Array.from(this.el.shadowRoot.querySelectorAll("calcite-chip")).filter((e=>e.closable)),t=Math.round(c-((this.selectedHiddenChipsCount>0?m:0)+a+p+a));this.refreshChipDisplay({availableHorizontalChipElSpace:t,chipContainerElGap:a,chipEls:e}),this.setVisibleAndHiddenChips(e)}},this.setFloatingEl=e=>{this.floatingEl=e,(0,o.c)(this,this.referenceEl,this.floatingEl)},this.setContainerEl=e=>{this.resizeObserver.observe(e),this.listContainerEl=e,this.transitionEl=e},this.setChipContainerEl=e=>{this.resizeObserver.observe(e),this.chipContainerEl=e},this.setReferenceEl=e=>{this.referenceEl=e,(0,o.c)(this,this.referenceEl,this.floatingEl)},this.setAllSelectedIndicatorChipEl=e=>{this.allSelectedIndicatorChipEl=e},this.setSelectedIndicatorChipEl=e=>{this.selectedIndicatorChipEl=e},this.inputHandler=e=>{const t=e.target.value;this.text=t,this.filterItems(t),t&&(this.activeChipIndex=-1)},this.filterItems=(()=>{const e=(e,t)=>e&&t.some((t=>{let{label:i,value:s}=t;return e.tagName===g.f?i===e.label:s===e.value&&i===e.textLabel}));return(0,I.d)((t=>{const i=(0,l.f)(this.data,t);this.getItemsAndGroups().forEach((t=>{const s=!e(t,i);t.hidden=s;const[l,n]=t.ancestors;(e(l,i)||e(n,i))&&(t.hidden=!1),s||t.ancestors.forEach((e=>e.hidden=!1))})),this.filteredItems=this.getFilteredItems(),this.calciteComboboxFilterChange.emit()}),100)})(),this.internalComboboxChangeEvent=()=>{this.calciteComboboxChange.emit()},this.emitComboboxChange=(0,I.d)(this.internalComboboxChangeEvent,0),this.getSelectedItems=()=>{if(!this.isMulti()){const e=this.items.find((e=>{let{selected:t}=e;return t}));return e?[e]:[]}return this.items.filter((e=>e.selected&&("ancestors"!==this.selectionMode||!(0,g.h)(e)))).sort(((e,t)=>{const i=this.selectedItems.indexOf(e),s=this.selectedItems.indexOf(t);return i>-1&&s>-1?i-s:s-i}))},this.updateItems=()=>{this.items=this.getItems(),this.groupItems=this.getGroupItems(),this.data=this.getData(),this.selectedItems=this.getSelectedItems(),this.filteredItems=this.getFilteredItems(),this.needsIcon=this.getNeedsIcon(),this.items.forEach((e=>{e.selectionMode=this.selectionMode,e.scale=this.scale})),this.allowCustomValues||this.setMaxScrollerHeight(),this.groupItems.forEach(((e,t,i)=>{0===t&&(e.afterEmptyGroup=!1);const s=i[t+1];s&&(s.afterEmptyGroup=0===e.children.length)}))},this.scrollToActiveItem=()=>{const e=this.filteredItems[this.activeItemIndex];if(!e)return;const t=this.calculateSingleItemHeight(e),{offsetHeight:i,scrollTop:s}=this.listContainerEl;i+s<e.offsetTop+t?this.listContainerEl.scrollTop=e.offsetTop-i+t:e.offsetTop<s&&(this.listContainerEl.scrollTop=e.offsetTop)},this.comboboxFocusHandler=()=>{var e;this.disabled||null===(e=this.textInput)||void 0===e||e.focus()},this.clearDisabled=!1,this.selectionDisplay="all",this.open=!1,this.disabled=!1,this.form=void 0,this.label=void 0,this.placeholder=void 0,this.placeholderIcon=void 0,this.placeholderIconFlipRtl=!1,this.maxItems=0,this.name=void 0,this.allowCustomValues=void 0,this.overlayPositioning="absolute",this.required=!1,this.selectionMode="multiple",this.scale="m",this.value=null,this.flipPlacements=void 0,this.messages=void 0,this.messageOverrides=void 0,this.selectedItems=[],this.filteredItems=[],this.items=[],this.groupItems=[],this.needsIcon=void 0,this.activeItemIndex=-1,this.activeChipIndex=-1,this.activeDescendant="",this.compactSelectionDisplay=!1,this.selectedHiddenChipsCount=0,this.selectedVisibleChipsCount=0,this.text="",this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){(0,m.o)(this),this.disabled?this.open=!1:this.setMaxScrollerHeight()}handleDisabledChange(e){e||(this.open=!1)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems()}valueHandler(e){if(!this.internalValueChangeFlag){const t=this.getItems();Array.isArray(e)?t.forEach((t=>t.selected=e.includes(t.value))):e?t.forEach((t=>t.selected=e===t.value)):t.forEach((e=>e.selected=!1)),this.updateItems()}}onMessagesChange(){}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}selectedItemsHandler(){this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1}documentClickHandler(e){if(this.disabled||!(0,n.j)(e))return;const t=e.composedPath();t.includes(this.el)||t.includes(this.referenceEl)||(!this.allowCustomValues&&this.textInput.value&&(this.clearInputValue(),this.filterItems(""),this.updateActiveItemIndex(-1)),this.allowCustomValues&&this.text.trim().length&&this.addCustomChip(this.text),this.open=!1)}calciteComboboxItemChangeHandler(e){if(this.ignoreSelectedEventsFlag)return;const t=e.target,i=this.filteredItems.indexOf(t);this.updateActiveItemIndex(i),this.toggleSelection(t,t.selected)}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{floatingEl:t,referenceEl:i,placement:s,overlayPositioning:l,filteredFlipPlacements:n}=this;return(0,o.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:l,placement:s,flipPlacements:n,type:"menu"},e)}async setFocus(){var e;await(0,d.c)(this),null===(e=this.textInput)||void 0===e||e.focus(),this.activeChipIndex=-1,this.activeItemIndex=-1}connectedCallback(){var e;(0,r.c)(this),(0,p.c)(this),(0,b.c)(this),(0,h.c)(this),(0,a.c)(this),this.internalValueChangeFlag=!0,this.value=this.getValue(),this.internalValueChangeFlag=!1,null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0}),this.updateItems(),this.setFilteredPlacements(),this.reposition(!0),this.open&&(this.openHandler(),(0,m.o)(this))}async componentWillLoad(){(0,d.a)(this),this.updateItems(),await(0,b.s)(this)}componentDidLoad(){(0,a.a)(this,this.getValue()),this.reposition(!0),(0,d.s)(this)}componentDidRender(){this.el.offsetHeight!==this.inputHeight&&(this.reposition(!0),this.inputHeight=this.el.offsetHeight),(0,r.u)(this)}componentDidUpdate(){this.refreshSelectionDisplay()}disconnectedCallback(){var e,t;null===(e=this.mutationObserver)||void 0===e||e.disconnect(),null===(t=this.resizeObserver)||void 0===t||t.disconnect(),(0,r.d)(this),(0,h.d)(this),(0,a.d)(this),(0,o.a)(this,this.referenceEl,this.floatingEl),(0,p.d)(this),(0,b.d)(this)}textHandler(){this.updateActiveItemIndex(-1)}effectiveLocaleChange(){(0,b.u)(this,this.effectiveLocale)}clearValue(){this.ignoreSelectedEventsFlag=!0,this.items.forEach((e=>e.selected=!1)),this.ignoreSelectedEventsFlag=!1,this.selectedItems=[],this.emitComboboxChange(),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems(""),this.setFocus()}clearInputValue(){this.textInput.value="",this.text=""}comboboxInViewport(){const e=this.el.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.right<=(window.innerWidth||document.documentElement.clientWidth)&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)}onBeforeOpen(){this.scrollToActiveItem(),this.calciteComboboxBeforeOpen.emit()}onOpen(){this.calciteComboboxOpen.emit()}onBeforeClose(){this.calciteComboboxBeforeClose.emit()}onClose(){this.calciteComboboxClose.emit()}ensureRecentSelectedItemIsActive(){const{selectedItems:e}=this,t=0===e.length?0:this.items.indexOf(e[e.length-1]);this.updateActiveItemIndex(t)}hideChip(e){e.classList.add(g.C.chipInvisible)}showChip(e){e.classList.remove(g.C.chipInvisible)}refreshChipDisplay(e){let{chipEls:t,availableHorizontalChipElSpace:i,chipContainerElGap:s}=e;t.forEach((e=>{if(e.selected){const t=(0,n.u)(e);if(t&&t<i)return i-=t+s,void this.showChip(e)}else this.hideChip(e);this.hideChip(e)}))}setCompactSelectionDisplay(e){let{chipContainerElGap:t,chipContainerElWidth:i,inputWidth:s,largestSelectedIndicatorChipWidth:l}=e;const n=Math.round(l+t+s);(!this.maxCompactBreakpoint||this.maxCompactBreakpoint<n)&&(this.maxCompactBreakpoint=n),this.compactSelectionDisplay=i<this.maxCompactBreakpoint}setVisibleAndHiddenChips(e){let t=0;e.forEach((e=>{e.selected&&!e.classList.contains(g.C.chipInvisible)&&t++})),t!==this.selectedVisibleChipsCount&&(this.selectedVisibleChipsCount=t);const i=this.getSelectedItems().length-t;i!==this.selectedHiddenChipsCount&&(this.selectedHiddenChipsCount=i)}getMaxScrollerHeight(){const e=this.getItemsAndGroups().filter((e=>!e.hidden)),{maxItems:t}=this;let i=0,s=0;return e.length>t&&e.forEach((e=>{if(i<t&&t>0){const t=this.calculateSingleItemHeight(e);t>0&&(s+=t,i++)}})),s}calculateSingleItemHeight(e){if(!e)return;let t=e.offsetHeight;return Array.from(e.querySelectorAll(g.b)).map((e=>null===e||void 0===e?void 0:e.offsetHeight)).forEach((e=>{t-=e})),t}getItemsAndGroups(){return[...this.groupItems,...this.items]}toggleSelection(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!e.selected;!e||"single-persist"===this.selectionMode&&e.selected&&e.value===this.value||(this.isMulti()?(e.selected=t,this.updateAncestors(e),this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.resetText(),this.filterItems("")):(this.ignoreSelectedEventsFlag=!0,this.items.forEach((i=>i.selected=i===e&&t)),this.ignoreSelectedEventsFlag=!1,this.selectedItems=this.getSelectedItems(),this.emitComboboxChange(),this.textInput&&(this.textInput.value=e.textLabel),this.open=!1,this.updateActiveItemIndex(-1),this.resetText(),this.filterItems("")))}updateAncestors(e){if("ancestors"!==this.selectionMode)return;const t=(0,g.c)(e),i=(0,g.d)(e);e.selected?t.forEach((e=>{e.selected=!0})):(i.forEach((e=>e.selected=!1)),[...t].forEach((e=>{(0,g.h)(e)||(e.selected=!1)})))}getFilteredItems(){return this.items.filter((e=>!e.hidden))}getData(){return this.items.map((e=>({filterDisabled:e.filterDisabled,value:e.value,label:e.textLabel})))}getNeedsIcon(){return(0,g.i)(this.selectionMode)&&this.items.some((e=>e.icon))}resetText(){this.textInput&&(this.textInput.value=""),this.text=""}getItems(){return Array.from(this.el.querySelectorAll(g.e)).filter((e=>!e.disabled))}getGroupItems(){return Array.from(this.el.querySelectorAll(g.f))}addCustomChip(e,t){const i=this.items.find((t=>t.textLabel===e));if(i)this.toggleSelection(i,!0);else{this.isMulti()||this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1);const i=document.createElement(g.e);i.value=e,i.textLabel=e,i.selected=!0,this.el.appendChild(i),this.resetText(),t&&this.setFocus(),this.updateItems(),this.filterItems(""),this.emitComboboxChange()}}removeActiveChip(){this.toggleSelection(this.selectedItems[this.activeChipIndex],!1),this.setFocus()}removeLastChip(){this.toggleSelection(this.selectedItems[this.selectedItems.length-1],!1),this.setFocus()}previousChip(){if(this.text)return;const e=this.selectedItems.length-1,t=this.activeChipIndex;this.activeChipIndex=-1===t?e:Math.max(t-1,0),this.updateActiveItemIndex(-1),this.focusChip()}nextChip(){if(this.text||-1===this.activeChipIndex)return;const e=this.selectedItems.length-1,t=this.activeChipIndex+1;t>e?(this.activeChipIndex=-1,this.setFocus()):(this.activeChipIndex=t,this.focusChip()),this.updateActiveItemIndex(-1)}focusChip(){var e;const t=null===(e=this.selectedItems[this.activeChipIndex])||void 0===e?void 0:e.guid,i=t?this.referenceEl.querySelector("#".concat(S).concat(t)):null;null===i||void 0===i||i.setFocus()}shiftActiveItemIndex(e){const{length:t}=this.filteredItems,i=(this.activeItemIndex+t+e)%t;this.updateActiveItemIndex(i),this.scrollToActiveItem()}updateActiveItemIndex(e){this.activeItemIndex=e;let t=null;this.filteredItems.forEach(((i,s)=>{s===e?(i.active=!0,t="".concat(w).concat(i.guid)):i.active=!1})),this.activeDescendant=t,this.activeItemIndex>-1&&(this.activeChipIndex=-1)}isAllSelected(){return this.getItems().length===this.getSelectedItems().length}isMulti(){return!(0,g.i)(this.selectionMode)}renderChips(){const{activeChipIndex:e,scale:t,selectionMode:i,messages:l}=this;return this.selectedItems.map(((n,o)=>{const a={chip:!0,"chip--active":e===o},c=[...[...(0,g.c)(n)].reverse(),n].map((e=>e.textLabel)),r="ancestors"!==i?n.textLabel:c.join(" / ");return(0,s.h)("calcite-chip",{class:a,closable:!0,icon:n.icon,iconFlipRtl:n.iconFlipRtl,id:n.guid?"".concat(S).concat(n.guid):null,key:n.textLabel,messageOverrides:{dismissLabel:l.removeTag},onCalciteChipClose:()=>this.calciteChipCloseHandler(n),scale:t,selected:n.selected,title:r,value:n.value},r)}))}renderAllSelectedIndicatorChip(){const{compactSelectionDisplay:e,scale:t,selectedVisibleChipsCount:i,setAllSelectedIndicatorChipEl:l}=this,n=this.messages.allSelected;return(0,s.h)("calcite-chip",{class:{chip:!0,[g.C.chipInvisible]:!(this.isAllSelected()&&!i&&!e)},scale:t,title:n,value:"",ref:l},n)}renderAllSelectedIndicatorChipCompact(){const{compactSelectionDisplay:e,scale:t,selectedVisibleChipsCount:i}=this,l=this.messages.all||"All";return(0,s.h)("calcite-chip",{class:{chip:!0,[g.C.chipInvisible]:!(this.isAllSelected()&&!i&&e)},scale:t,title:l,value:""},l)}renderSelectedIndicatorChip(){const{compactSelectionDisplay:e,selectionDisplay:t,getSelectedItems:i,scale:l,selectedHiddenChipsCount:n,selectedVisibleChipsCount:o,setSelectedIndicatorChipEl:a}=this;let c,r;if(e)c=!0;else if("single"===t){const e=i().length;c=!!this.isAllSelected()||!(e>0),r="".concat(e," ").concat(this.messages.selected)}else"fit"===t&&(c=!!(this.isAllSelected()&&0===o||0===n),r=o>0?"+".concat(n):"".concat(n," ").concat(this.messages.selected));return(0,s.h)("calcite-chip",{class:{chip:!0,[g.C.chipInvisible]:c},scale:l,title:r,value:"",ref:a},r)}renderSelectedIndicatorChipCompact(){const{compactSelectionDisplay:e,selectionDisplay:t,getSelectedItems:i,scale:l,selectedHiddenChipsCount:n}=this;let o,a;if(e){const e=i().length;this.isAllSelected()?o=!0:"fit"===t?(o=!(n>0),a="".concat(n||0)):"single"===t&&(o=!(e>0),a="".concat(e))}else o=!0;return(0,s.h)("calcite-chip",{class:{chip:!0,[g.C.chipInvisible]:o},scale:l,title:a,value:""},a)}renderInput(){const{guid:e,disabled:t,placeholder:i,selectionMode:l,selectedItems:n,open:o}=this,a=(0,g.i)(l),c=n[0],r=!o&&a&&!!c;return(0,s.h)("span",{class:{"input-wrap":!0,"input-wrap--single":a}},r&&(0,s.h)("span",{class:{label:!0,"label--icon":!(null===c||void 0===c||!c.icon)},key:"label"},c.textLabel),(0,s.h)("input",{"aria-activedescendant":this.activeDescendant,"aria-autocomplete":"list","aria-controls":"".concat(A).concat(e),"aria-label":(0,h.g)(this),class:{input:!0,"input--single":!0,"input--transparent":this.activeChipIndex>-1,"input--hidden":r,"input--icon":!!this.placeholderIcon},disabled:t,id:"".concat(D).concat(e),key:"input",onFocus:this.comboboxFocusHandler,onInput:this.inputHandler,placeholder:i,type:"text",ref:e=>this.textInput=e}))}renderListBoxOptions(){return this.filteredItems.map((e=>(0,s.h)("li",{"aria-selected":(0,n.t)(e.selected),id:e.guid?"".concat(w).concat(e.guid):null,role:"option",tabindex:"-1"},e.textLabel)))}renderFloatingUIContainer(){const{setFloatingEl:e,setContainerEl:t,open:i}=this,l={[g.C.listContainer]:!0,[o.F.animation]:!0,[o.F.animationActive]:i};return(0,s.h)("div",{"aria-hidden":"true",class:{"floating-ui-container":!0,"floating-ui-container--active":i},ref:e},(0,s.h)("div",{class:l,ref:t},(0,s.h)("ul",{class:{list:!0,"list--hide":!i}},(0,s.h)("slot",null))))}renderIconStart(){const{selectedItems:e,placeholderIcon:t,selectionMode:i,placeholderIconFlipRtl:l}=this,n=e[0],o=null===n||void 0===n?void 0:n.icon,a=(0,g.i)(i);return(!this.open&&n?!!o&&a:!!this.placeholderIcon&&(!n||a))&&(0,s.h)("span",{class:"icon-start"},(0,s.h)("calcite-icon",{class:"selected-icon",flipRtl:this.open&&n?n.iconFlipRtl:l,icon:!this.open&&n?o:t,scale:(0,v.g)(this.scale)}))}renderIconEnd(){const{open:e}=this;return(0,s.h)("span",{class:"icon-end"},(0,s.h)("calcite-icon",{icon:e?"chevron-up":"chevron-down",scale:(0,v.g)(this.scale)}))}render(){var e;const{selectionDisplay:t,guid:i,label:l,open:o}=this,c=(0,g.i)(this.selectionMode),r="all"===t,d="single"===t,p=!c&&"fit"===t,u=!this.clearDisabled&&(null===(e=this.value)||void 0===e?void 0:e.length)>0;return(0,s.h)(s.AA,{onClick:this.comboboxFocusHandler},(0,s.h)("div",{"aria-autocomplete":"list","aria-controls":"".concat(A).concat(i),"aria-expanded":(0,n.t)(o),"aria-haspopup":"listbox","aria-label":(0,h.g)(this),"aria-live":"polite","aria-owns":"".concat(A).concat(i),class:{wrapper:!0,"wrapper--single":c||!this.selectedItems.length,"wrapper--active":o},onClick:this.clickHandler,onKeyDown:this.keyDownHandler,role:"combobox",ref:this.setReferenceEl},(0,s.h)("div",{class:{"grid-input":!0,[g.C.selectionDisplayFit]:p,[g.C.selectionDisplaySingle]:d},ref:this.setChipContainerEl},this.renderIconStart(),!c&&!d&&this.renderChips(),!c&&!r&&[this.renderSelectedIndicatorChip(),this.renderSelectedIndicatorChipCompact(),this.renderAllSelectedIndicatorChip(),this.renderAllSelectedIndicatorChipCompact()],(0,s.h)("label",{class:"screen-readers-only",htmlFor:"".concat(D).concat(i),id:"".concat(k).concat(i)},l),this.renderInput()),u?(0,s.h)(E,{disabled:this.disabled,key:"close-button",label:this.messages.clear,scale:this.scale}):null,this.renderIconEnd()),(0,s.h)("ul",{"aria-labelledby":"".concat(k).concat(i),"aria-multiselectable":"true",class:"screen-readers-only",id:"".concat(A).concat(i),role:"listbox",tabIndex:-1},this.renderListBoxOptions()),this.renderFloatingUIContainer(),(0,s.h)(a.H,{component:this}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],selectionMode:["handlePropsChange"],scale:["handlePropsChange"],value:["valueHandler"],messageOverrides:["onMessagesChange"],flipPlacements:["flipPlacementsHandler"],selectedItems:["selectedItemsHandler"],text:["textHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]) .x-button{inline-size:1rem;block-size:1rem}:host([scale=m]) .x-button{inline-size:1.5rem;block-size:1.5rem}:host([scale=l]) .x-button{inline-size:2rem;block-size:2rem}.x-button{margin:0px;display:flex;cursor:pointer;appearance:none;align-content:center;align-items:center;justify-content:center;align-self:center;border-width:2px;background-color:transparent;color:var(--calcite-ui-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-radius:50%;border-color:transparent;background-color:var(--calcite-ui-foreground-2)}.x-button:active,.x-button:hover{color:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}.x-button:active{border-style:solid;border-color:var(--calcite-ui-brand)}.x-button calcite-icon{color:inherit}:host([scale=s]){font-size:var(--calcite-font-size--2);--calcite-combobox-item-spacing-unit-l:0.5rem;--calcite-combobox-item-spacing-unit-s:0.25rem;--calcite-combobox-input-height:1rem;--calcite-internal-combobox-input-margin-block:calc(0.25rem - 1px)}:host([scale=s]) .x-button{margin-inline:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);--calcite-combobox-item-spacing-unit-l:0.75rem;--calcite-combobox-item-spacing-unit-s:0.5rem;--calcite-combobox-input-height:1rem;--calcite-internal-combobox-input-margin-block:calc(0.5rem - 1px)}:host([scale=m]) .x-button{margin-inline-end:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);--calcite-combobox-item-spacing-unit-l:1rem;--calcite-combobox-item-spacing-unit-s:0.75rem;--calcite-combobox-input-height:1.5rem;--calcite-internal-combobox-input-margin-block:calc(0.625rem - 1px)}:host([scale=l]) .x-button{margin-inline-end:1rem}.wrapper{display:flex;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);outline-color:transparent;padding-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);padding-inline:var(--calcite-combobox-item-spacing-unit-l)}:host(:focus-within) .wrapper,.wrapper--active{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.wrapper--single{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-l);cursor:pointer;flex-wrap:nowrap}.grid-input{position:relative;display:flex;flex-grow:1;flex-wrap:wrap;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;gap:var(--calcite-combobox-item-spacing-unit-s)}.grid-input.selection-display-fit,.grid-input.selection-display-single{flex-wrap:nowrap;overflow:hidden}.input{flex-grow:1;appearance:none;text-overflow:ellipsis;border-style:none;background-color:transparent;padding:0px;font-family:inherit;color:var(--calcite-ui-text-1);font-size:inherit;block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height);inline-size:100%;margin-block-end:var(--calcite-combobox-item-spacing-unit-s);min-inline-size:4.8125rem}.input:focus{outline:2px solid transparent;outline-offset:2px}.input:placeholder-shown{text-overflow:ellipsis}.input--transparent{opacity:0}.input--single{padding:0px;margin-block:var(--calcite-internal-combobox-input-margin-block)}.wrapper--active .input-single{cursor:text}.input--hidden{pointer-events:none;inline-size:0px;min-inline-size:0px;opacity:0}.input--icon{padding-block:0;padding-inline:var(--calcite-combobox-item-spacing-unit-s)}:host([scale=m]) .input--icon,:host([scale=l]) .input--icon{padding-inline:0.25rem}.input-wrap{display:flex;flex-grow:1;align-items:center}.input-wrap--single{flex:1 1 0%;overflow:hidden}.label{pointer-events:none;display:flex;max-inline-size:100%;flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0px;font-weight:var(--calcite-font-weight-normal);block-size:var(--calcite-combobox-input-height);line-height:var(--calcite-combobox-input-height)}.label--icon{padding-inline:var(--calcite-combobox-item-spacing-unit-l)}.icon-end,.icon-start{display:flex;cursor:pointer;align-items:center}.icon-end{flex:none}.floating-ui-container{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.floating-ui-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.floating-ui-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.floating-ui-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.floating-ui-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.floating-ui-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.floating-ui-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}.floating-ui-container--active{visibility:visible}@media (forced-colors: active){.wrapper,.floating-ui-container--active{border:1px solid canvasText}}.screen-readers-only{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.list-container{max-block-size:45vh;overflow-y:auto;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.list{margin:0px;display:block;padding:0px}.list--hide{block-size:0px;overflow:hidden}calcite-chip{--calcite-animation-timing:0}.chip{margin-block:calc(var(--calcite-combobox-item-spacing-unit-s) / 4);max-inline-size:100%}.chip--active{background-color:var(--calcite-ui-foreground-3)}.chip--invisible{visibility:hidden;position:absolute}.item{display:block}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}::slotted(calcite-combobox-item-group:not(:first-child)){padding-block-start:var(--calcite-combobox-item-spacing-unit-l)}"}},[1,"calcite-combobox",{clearDisabled:[516,"clear-disabled"],selectionDisplay:[513,"selection-display"],open:[1540],disabled:[516],form:[513],label:[1],placeholder:[1],placeholderIcon:[513,"placeholder-icon"],placeholderIconFlipRtl:[516,"placeholder-icon-flip-rtl"],maxItems:[514,"max-items"],name:[513],allowCustomValues:[516,"allow-custom-values"],overlayPositioning:[513,"overlay-positioning"],required:[516],selectionMode:[513,"selection-mode"],scale:[513],value:[1025],flipPlacements:[16],messages:[1040],messageOverrides:[1040],selectedItems:[1040],filteredItems:[1040],items:[32],groupItems:[32],needsIcon:[32],activeItemIndex:[32],activeChipIndex:[32],activeDescendant:[32],compactSelectionDisplay:[32],selectedHiddenChipsCount:[32],selectedVisibleChipsCount:[32],text:[32],effectiveLocale:[32],defaultMessages:[32],reposition:[64],setFocus:[64]},[[5,"pointerdown","documentClickHandler"],[0,"calciteComboboxItemChange","calciteComboboxItemChangeHandler"]]]);function F(){if("undefined"===typeof customElements)return;["calcite-combobox","calcite-chip","calcite-icon"].forEach((e=>{switch(e){case"calcite-combobox":customElements.get(e)||customElements.define(e,H);break;case"calcite-chip":customElements.get(e)||(0,x.d)();break;case"calcite-icon":customElements.get(e)||(0,C.d)()}}))}F()},43632:(e,t,i)=>{i.d(t,{C:()=>c,a:()=>u,b:()=>a,c:()=>h,d:()=>d,e:()=>n,f:()=>o,g:()=>r,h:()=>p,i:()=>m});var s=i(66151),l=i(33850);const n="CALCITE-COMBOBOX-ITEM",o="CALCITE-COMBOBOX-ITEM-GROUP",a="".concat(n,", ").concat(o),c={chipInvisible:"chip--invisible",selectionDisplayFit:"selection-display-fit",selectionDisplaySingle:"selection-display-single",listContainer:"list-container"};function r(e){var t,i;const s=null===(t=e.parentElement)||void 0===t?void 0:t.closest(a);return[s,null===s||void 0===s||null===(i=s.parentElement)||void 0===i?void 0:i.closest(a)].filter((e=>e))}function h(e){var t;return(null===(t=e.ancestors)||void 0===t?void 0:t.filter((e=>"CALCITE-COMBOBOX-ITEM"===e.nodeName)))||[]}function d(e){return(0,s.o)(e.querySelectorAll("calcite-combobox-item"))}function p(e){return(0,s.o)(e.querySelectorAll("calcite-combobox-item")).filter((e=>e.selected)).length>0}function u(e){if(!l.Z5.isBrowser)return 0;return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}function m(e){return e.includes("single")}}}]);
//# sourceMappingURL=6641.5e9a814d.chunk.js.map