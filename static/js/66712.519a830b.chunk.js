/*! For license information please see 66712.519a830b.chunk.js.LICENSE.txt */
(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[66712,25572,45286,57148,66324,25708,45966],{25572:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=25572,e.exports=t},61108:(e,t,i)=>{"use strict";i.d(t,{C:()=>s,a:()=>n,b:()=>o,c:()=>l,d:()=>a,e:()=>c});const s="48px",a="320px",l="476px",o="768px",n="1152px",c="1440px"},93874:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalciteTable:()=>R,defineCustomElement:()=>E});var s=i(33850),a=i(33150),l=i(30769),o=i(1314),n=i(94002),c=i(80275),r=i(22232),h=i(36177),d=i(66530),u=i(89751);const m="bordered",g="zebra",p="selection-area",v="pagination-area",b="container",f="table-container",S="table--fixed",w="assistive-text",C="selection-actions",x="selection-actions",y="table-header",z="table-footer",I=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTableSelect=(0,s.yM)(this,"calciteTableSelect",6),this.calciteTablePageChange=(0,s.yM)(this,"calciteTablePageChange",6),this.calciteInternalTableRowFocusChange=(0,s.yM)(this,"calciteInternalTableRowFocusChange",6),this.getSlottedRows=e=>{var t;return null===e||void 0===e||null===(t=e.assignedElements({flatten:!0}))||void 0===t?void 0:t.filter((e=>null===e||void 0===e?void 0:e.matches("calcite-table-row")))},this.updateRows=()=>{var e,t;const i=this.getSlottedRows(this.tableHeadSlotEl)||[],s=this.getSlottedRows(this.tableBodySlotEl)||[],a=this.getSlottedRows(this.tableFootSlotEl)||[],l=[...i,...s,...a];null===i||void 0===i||i.forEach((e=>{const t=null===i||void 0===i?void 0:i.indexOf(e);e.rowType="head",e.positionSection=t,e.positionSectionLocalized=this.localizeNumber((t+1).toString())})),null===s||void 0===s||s.forEach((e=>{const t=null===s||void 0===s?void 0:s.indexOf(e);e.rowType="body",e.positionSection=t,e.positionSectionLocalized=this.localizeNumber((t+1).toString())})),null===a||void 0===a||a.forEach((e=>{const t=null===a||void 0===a?void 0:a.indexOf(e);e.rowType="foot",e.positionSection=t,e.positionSectionLocalized=this.localizeNumber((t+1).toString())})),null===l||void 0===l||l.forEach((e=>{e.selectionMode=this.selectionMode,e.bodyRowCount=null===s||void 0===s?void 0:s.length,e.positionAll=null===l||void 0===l?void 0:l.indexOf(e),e.numbered=this.numbered,e.scale=this.scale,e.readCellContentsToAT=this.readCellContentsToAT}));const o=(null===(e=i[0])||void 0===e?void 0:e.cellCount)||(null===(t=i[0])||void 0===t||null===(t=t.querySelectorAll("calcite-table-header"))||void 0===t?void 0:t.length);this.colCount=o,this.headRows=i,this.bodyRows=s,this.footRows=a,this.allRows=l,this.updateSelectedItems(),this.paginateRows()},this.handlePaginationChange=()=>{var e;const t=null===(e=this.paginationEl)||void 0===e?void 0:e.startItem;this.pageStartRow=t||1,this.calciteTablePageChange.emit(),this.updateRows()},this.paginateRows=()=>{var e;null===(e=this.bodyRows)||void 0===e||e.forEach((e=>{const t=e.positionSection+1,i=t>=this.pageStartRow&&t<this.pageStartRow+this.pageSize;e.hidden=this.pageSize>0&&!i&&!this.footRows.includes(e)}))},this.updateSelectedItems=e=>{var t,i;const s=null===(t=this.bodyRows)||void 0===t?void 0:t.filter((e=>e.selected));this.selectedItems=s,this.selectedCount=null===s||void 0===s?void 0:s.length,null===(i=this.allRows)||void 0===i||i.forEach((e=>{e.selectedRowCount=this.selectedCount,e.selectedRowCountLocalized=this.localizeNumber(this.selectedCount)})),e&&this.calciteTableSelect.emit()},this.handleDeselectAllRows=()=>{var e;null===(e=this.bodyRows)||void 0===e||e.forEach((e=>{e.selected=!1})),this.updateSelectedItems(!0)},this.setSelectedItems=e=>{var t;null===(t=this.bodyRows)||void 0===t||t.forEach((t=>{var i;"head"===(null===e||void 0===e?void 0:e.rowType)?t.selected=this.selectedCount!==(null===(i=this.bodyRows)||void 0===i?void 0:i.length):t.selected=e===t?!t.selected:"multiple"===this.selectionMode&&t.selected})),this.updateSelectedItems(!0)},this.localizeNumber=e=>(o.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator},o.n.localize(e.toString())),this.bordered=!1,this.caption=void 0,this.groupSeparator=!1,this.layout="auto",this.numbered=!1,this.numberingSystem=void 0,this.pageSize=0,this.scale="m",this.selectionMode="none",this.zebra=!1,this.selectedItems=[],this.messages=void 0,this.messageOverrides=void 0,this.colCount=0,this.pageStartRow=1,this.selectedCount=0,this.readCellContentsToAT=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}handleNumberedChange(){this.updateRows()}onMessagesChange(){}effectiveLocaleChange(){(0,l.u)(this,this.effectiveLocale)}async componentWillLoad(){(0,a.a)(this),await(0,l.s)(this),this.readCellContentsToAT=/safari/i.test((0,n.g)()),this.updateRows()}componentDidLoad(){(0,a.s)(this)}connectedCallback(){(0,o.c)(this),(0,l.c)(this)}disconnectedCallback(){(0,o.d)(this),(0,l.d)(this)}calciteChipSelectListener(e){e.composedPath().includes(this.el)&&this.setSelectedItems(e.target)}calciteInternalTableRowFocusEvent(e){var t,i,s,a,l,o,n,c;const r=e.detail.cellPosition,h=e.detail.rowPosition,d=e.detail.destination,u=e.detail.lastCell,m=null===(t=this.bodyRows)||void 0===t?void 0:t.filter((e=>!e.hidden)),g=null===(i=this.allRows)||void 0===i?void 0:i.filter((e=>!e.hidden)),p=null===(s=this.headRows[this.headRows.length-1])||void 0===s?void 0:s.positionAll,v=null===(a=m[0])||void 0===a?void 0:a.positionAll,b=null===(l=m[m.length-1])||void 0===l?void 0:l.positionAll,f=null===(o=this.footRows[0])||void 0===o?void 0:o.positionAll,S=null===(n=g[g.length-1])||void 0===n?void 0:n.positionAll,w="next"===d&&h===p,C="previous"===d&&h===f,x="previous"===d&&h===v,y="next"===d&&h===b;let z;switch(d){case"first":z=0;break;case"last":z=S;break;case"next":z=w?v:y?f:h+1;break;case"previous":z=C?b:x?p:h-1}const I=null===(c=this.allRows)||void 0===c||null===(c=c.find((e=>e.positionAll===z)))||void 0===c?void 0:c.cellCount,k=r>I?I:r;void 0!==z&&this.calciteInternalTableRowFocusChange.emit({cellPosition:k,rowPosition:z,destination:d,lastCell:u})}renderSelectionArea(){var e,t;const i=null===(e=this.selectedItems)||void 0===e||null===(e=e.filter((e=>e.hidden)))||void 0===e?void 0:e.length,a=this.localizeNumber(null===i||void 0===i?void 0:i.toString()),l=this.localizeNumber(null===(t=this.selectedCount)||void 0===t?void 0:t.toString()),o="".concat(l," ").concat(this.messages.selected),n="".concat(a," ").concat(this.messages.hiddenSelected);return(0,s.h)("div",{class:p},(0,s.h)("calcite-chip",{kind:this.selectedCount>0?"brand":"neutral",scale:this.scale,value:o},o),i>0&&(0,s.h)("calcite-chip",{icon:"hide-empty",scale:this.scale,title:n,value:n},a),this.selectedCount>0&&(0,s.h)("calcite-button",{"icon-start":"x",kind:"neutral",onClick:this.handleDeselectAllRows,round:!0,scale:this.scale,title:"".concat(this.messages.clear," ").concat(o," ").concat(this.messages.row)},this.messages.clear),(0,s.h)("div",{class:C},(0,s.h)("slot",{name:x})))}renderPaginationArea(){var e;return(0,s.h)("div",{class:v},(0,s.h)("calcite-pagination",{groupSeparator:this.groupSeparator,numberingSystem:this.numberingSystem,onCalcitePaginationChange:this.handlePaginationChange,pageSize:this.pageSize,scale:this.scale,startItem:1,totalItems:null===(e=this.bodyRows)||void 0===e?void 0:e.length,ref:e=>this.paginationEl=e}))}renderTHead(){return(0,s.h)("thead",null,(0,s.h)("slot",{name:y,onSlotchange:this.updateRows,ref:e=>this.tableHeadSlotEl=e}))}renderTBody(){return(0,s.h)("tbody",null,(0,s.h)("slot",{onSlotchange:this.updateRows,ref:e=>this.tableBodySlotEl=e}))}renderTFoot(){return(0,s.h)("tfoot",null,(0,s.h)("slot",{name:z,onSlotchange:this.updateRows,ref:e=>this.tableFootSlotEl=e}))}render(){var e;return(0,s.h)(s.AA,null,(0,s.h)("div",{class:b},"none"!==this.selectionMode&&this.renderSelectionArea(),(0,s.h)("div",{class:{[m]:this.bordered,[g]:this.zebra,[f]:!0}},(0,s.h)("table",{"aria-colcount":this.colCount,"aria-multiselectable":"multiple"===this.selectionMode,"aria-readonly":!0,"aria-rowcount":null===(e=this.allRows)||void 0===e?void 0:e.length,class:{[S]:"fixed"===this.layout},role:"grid"},(0,s.h)("caption",{class:w},this.caption),this.renderTHead(),this.renderTBody(),this.renderTFoot())),this.pageSize>0&&this.renderPaginationArea()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{groupSeparator:["handleNumberedChange"],numbered:["handleNumberedChange"],numberingSystem:["handleNumberedChange"],pageSize:["handleNumberedChange"],scale:["handleNumberedChange"],selectionMode:["handleNumberedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([scale=s]){--calcite-internal-table-cell-padding:0.25rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding:0.5rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding:1rem;--calcite-internal-table-cell-font-size:var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary:var(--calcite-font-size--1)}:host{display:table}.container{max-inline-size:100vw;inline-size:100%}.table-container{overflow-x:auto;white-space:nowrap}.table-container:not(.bordered){border-block-end:1px solid var(--calcite-ui-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll;border-block-start:1px solid var(--calcite-ui-border-3);border-inline-start:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3)}tbody{border-block-end:1px solid var(--calcite-ui-border-3)}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color:var(--calcite-ui-border-3)}.zebra ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background:var(--calcite-ui-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:0.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:0.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}calcite-pagination{flex:1;justify-content:center}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-table",{bordered:[516],caption:[1],groupSeparator:[516,"group-separator"],layout:[513],numbered:[516],numberingSystem:[513,"numbering-system"],pageSize:[514,"page-size"],scale:[513],selectionMode:[513,"selection-mode"],zebra:[516],selectedItems:[1040],messages:[1040],messageOverrides:[1040],colCount:[32],pageStartRow:[32],selectedCount:[32],readCellContentsToAT:[32],defaultMessages:[32],effectiveLocale:[32]},[[0,"calciteTableRowSelect","calciteChipSelectListener"],[0,"calciteInternalTableRowFocusRequest","calciteInternalTableRowFocusEvent"]]]);function k(){if("undefined"===typeof customElements)return;["calcite-table","calcite-button","calcite-chip","calcite-icon","calcite-loader","calcite-pagination"].forEach((e=>{switch(e){case"calcite-table":customElements.get(e)||customElements.define(e,I);break;case"calcite-button":customElements.get(e)||(0,c.d)();break;case"calcite-chip":customElements.get(e)||(0,r.d)();break;case"calcite-icon":customElements.get(e)||(0,h.d)();break;case"calcite-loader":customElements.get(e)||(0,d.d)();break;case"calcite-pagination":customElements.get(e)||(0,u.d)()}}))}k();const R=I,E=k},89751:(e,t,i)=>{"use strict";i.d(t,{P:()=>R,d:()=>E});var s=i(33850),a=i(33150),l=i(1314),o=i(30769),n=i(46609),c=i(61108),r=i(9339),h=i(36177);const d="page",u="selected",m="chevron",g="disabled",p="ellipsis",v="chevron-right",b="chevron-left",f="chevron-start",S="chevron-end",w={width:{large:C(c.e),medium:C(c.a),small:C(c.b),xsmall:C(c.c),xxsmall:C(c.d)}};function C(e){return parseInt(e)}const x=11,y=9,z=7,I=5,k=1,R=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePaginationChange=(0,s.yM)(this,"calcitePaginationChange",6),this.resizeObserver=(0,n.c)("resize",(e=>e.forEach(this.resizeHandler))),this.resizeHandler=e=>{let{contentRect:{width:t}}=e;return this.setMaxItemsToBreakpoint(t)},this.firstClicked=()=>{this.startItem=1,this.emitUpdate()},this.lastClicked=()=>{this.startItem=this.lastStartItem,this.emitUpdate()},this.previousClicked=async()=>{await this.previousPage(),this.emitUpdate()},this.nextClicked=async()=>{await this.nextPage(),this.emitUpdate()},this.handlePageClick=e=>{const t=e.target;this.startItem=parseInt(t.value,10),this.emitUpdate()},this.groupSeparator=!1,this.messages=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.pageSize=20,this.scale="m",this.startItem=1,this.totalItems=0,this.defaultMessages=void 0,this.effectiveLocale="",this.maxItems=k,this.totalPages=void 0,this.lastStartItem=void 0,this.isXXSmall=void 0}onMessagesChange(){}handleTotalPages(){this.pageSize<1&&(this.pageSize=1),this.totalPages=this.totalItems/this.pageSize}effectiveLocaleChange(){(0,o.u)(this,this.effectiveLocale)}effectiveLocaleWatcher(){l.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator}}handleLastStartItemChange(){const{totalItems:e,pageSize:t,totalPages:i}=this;this.lastStartItem=1+(e%t===0?e-t:Math.floor(i)*t)}handleIsXXSmall(){this.isXXSmall=this.maxItems===k}connectedCallback(){var e;(0,l.c)(this),(0,o.c)(this),null===(e=this.resizeObserver)||void 0===e||e.observe(this.el)}async componentWillLoad(){await(0,o.s)(this),(0,a.a)(this),this.handleTotalPages(),this.handleLastStartItemChange(),this.handleIsXXSmall()}componentDidLoad(){(0,a.s)(this),this.setMaxItemsToBreakpoint(this.el.clientWidth)}disconnectedCallback(){var e;(0,l.d)(this),(0,o.d)(this),null===(e=this.resizeObserver)||void 0===e||e.disconnect()}async setFocus(){await(0,a.c)(this),this.el.focus()}async nextPage(){this.startItem=Math.min(this.lastStartItem,this.startItem+this.pageSize)}async previousPage(){this.startItem=Math.max(1,this.startItem-this.pageSize)}setMaxItemsToBreakpoint(e){w&&e&&(e>=w.width.medium?this.maxItems=x:e>=w.width.small?this.maxItems=y:e>=w.width.xsmall?this.maxItems=z:e>=w.width.xxsmall?this.maxItems=I:this.maxItems=k)}showStartEllipsis(){return this.totalPages>this.maxItems&&Math.floor(this.startItem/this.pageSize)>this.maxItems-2-2}showEndEllipsis(){return this.totalPages>this.maxItems&&(this.totalItems-this.startItem)/this.pageSize>this.maxItems-2-1}emitUpdate(){this.calcitePaginationChange.emit()}renderEllipsis(e){return(0,s.h)("span",{class:p,"data-test-ellipsis":e,key:e},"\u2026")}renderItems(){const{totalItems:e,pageSize:t,startItem:i,maxItems:s,totalPages:a,lastStartItem:l,isXXSmall:o}=this,n=[];if(o)return n.push(this.renderPage(i)),n;const c=e>t,r=this.showStartEllipsis(),h=this.showEndEllipsis();c&&n.push(this.renderPage(1)),r&&n.push(this.renderEllipsis("start"));const d=s-2-(h?1:0)-(r?1:0);let u,m;a-1<=d?(m=1+t,u=l-t):i/t<d?(m=1+t,u=1+d*t):i+d*t>=e?(m=l-d*t,u=l-t):(m=i-t*((d-1)/2),u=i+t*((d-1)/2));for(let g=0;g<d&&m<=u;g++)n.push(this.renderPage(m)),m+=t;return h&&n.push(this.renderEllipsis("end")),n.push(this.renderPage(l)),n}renderPage(e){const{pageSize:t}=this,i=Math.floor(e/t)+(1===t?0:1);l.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const a=l.n.localize(i.toString()),o=e===this.startItem;return(0,s.h)("button",{"aria-current":o?"page":"false",class:{[d]:!0,[u]:o},onClick:this.handlePageClick,value:e},a)}renderPreviousChevron(){const{pageSize:e,startItem:t,messages:i}=this,a=1===e?t<=e:t<e;return(0,s.h)("button",{"aria-label":i.previous,class:{[m]:!0,[g]:a},"data-test-chevron":"previous",disabled:a,key:"previous",onClick:this.previousClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:b,scale:(0,r.g)(this.scale)}))}renderNextChevron(){const{totalItems:e,pageSize:t,startItem:i,messages:a}=this,l=i+t>e;return(0,s.h)("button",{"aria-label":a.next,class:{[m]:!0,[g]:l},"data-test-chevron":"next",disabled:l,key:"next-button",onClick:this.nextClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:v,scale:(0,r.g)(this.scale)}))}renderFirstChevron(){const{messages:e,startItem:t,isXXSmall:i}=this,a=1===t;return i?(0,s.h)("button",{"aria-label":e.first,class:{[m]:!0,[g]:a},disabled:a,key:"first-button",onClick:this.firstClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:f,scale:(0,r.g)(this.scale)})):null}renderLastChevron(){const{messages:e,startItem:t,isXXSmall:i,lastStartItem:a}=this,l=t===a;return i?(0,s.h)("button",{"aria-label":e.last,class:{[m]:!0,[g]:l},disabled:l,key:"last-button",onClick:this.lastClicked},(0,s.h)("calcite-icon",{flipRtl:!0,icon:S,scale:(0,r.g)(this.scale)})):null}render(){return(0,s.h)(s.HY,null,this.renderFirstChevron(),this.renderPreviousChevron(),this.renderItems(),this.renderNextChevron(),this.renderLastChevron())}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],totalItems:["handleTotalPages","handleLastStartItemChange"],pageSize:["handleTotalPages","handleLastStartItemChange"],effectiveLocale:["effectiveLocaleChange","effectiveLocaleWatcher"],totalPages:["handleLastStartItemChange"],maxItems:["handleIsXXSmall"]}}static get style(){return":host{display:flex;writing-mode:horizontal-tb}:host([scale=s]) .chevron,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .chevron,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .chevron,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .chevron{padding-inline:0.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:0.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.chevron,.page,.ellipsis{margin:0px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity:0;background-color:transparent;padding:0px;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3)}.chevron,.page{cursor:pointer;border-block:2px solid transparent}.chevron:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.page:hover{border-block-end-color:var(--calcite-ui-border-2)}.page.selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-block-end-color:var(--calcite-ui-brand)}.chevron:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-brand)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron.disabled{pointer-events:none;background-color:transparent}.chevron.disabled>calcite-icon{opacity:var(--calcite-ui-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-pagination",{groupSeparator:[516,"group-separator"],messages:[1040],messageOverrides:[1040],numberingSystem:[1,"numbering-system"],pageSize:[1538,"page-size"],scale:[513],startItem:[1538,"start-item"],totalItems:[514,"total-items"],defaultMessages:[32],effectiveLocale:[32],maxItems:[32],totalPages:[32],lastStartItem:[32],isXXSmall:[32],setFocus:[64],nextPage:[64],previousPage:[64]}]);function E(){if("undefined"===typeof customElements)return;["calcite-pagination","calcite-icon"].forEach((e=>{switch(e){case"calcite-pagination":customElements.get(e)||customElements.define(e,R);break;case"calcite-icon":customElements.get(e)||(0,h.d)()}}))}E()}}]);
//# sourceMappingURL=66712.519a830b.chunk.js.map