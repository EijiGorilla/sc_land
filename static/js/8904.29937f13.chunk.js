"use strict";(self.webpackChunksc_land=self.webpackChunksc_land||[]).push([[8904],{58904:(e,t,i)=>{i.d(t,{default:()=>Y});var l=i(27366),o=i(80987),n=i(44927),s=i(79056),a=i(32718),r=i(49861),d=(i(93169),i(84936),i(69912)),c=i(91953),u=i(33565),h=i(9309),p=i(8905),m=i(7021),b=(i(80975),i(80532)),v=i(28907),_=i(67005);const g="esri-table-list",y="".concat(g,"__item"),I={base:g,actionMenu:"".concat(g,"__action-menu"),actionGroup:"".concat(g,"__action-group"),filterNoResults:"".concat(g,"__filter-no-results"),item:y,itemContent:"".concat(y,"-content"),itemContentBottom:"".concat(y,"-content-bottom"),itemMessage:"".concat(y,"-message"),itemActionIcon:"".concat(y,"-action-icon"),itemActionImage:"".concat(y,"-action-image"),itemTemporaryIcon:"".concat(y,"-temporary-icon"),publishing:"".concat(g,"__publishing"),statusIndicator:"".concat(g,"__status-indicator")};var C=i(7138),f=i(94172),w=i(89125),E=i(693),F=i(57976),M=i(6945),L=i(5027),P=i(9676),A=i(53963);let k=class extends((0,s.IG)(u.Z)){constructor(e,t){super(e,t),this.className=null,this.content=null,this.flowEnabled=!1,this.image=null,this.listItem=null,this.open=!1,this.visible=!0}get disabled(){return!(this.content&&this.listItem)}set disabled(e){this._overrideIfSome("disabled",e)}get icon(){var e;const{image:t}=this,i=this._getFirstWidget();return null!==(e=this._get("icon"))&&void 0!==e?e:!t&&i?i.icon:null}set icon(e){this._overrideIfSome("icon",e)}get title(){var e,t;return this._get("title")||(null!==(e=null===(t=this._getFirstWidget())||void 0===t?void 0:t.label)&&void 0!==e?e:"")}set title(e){this._override("title",e)}render(){return(0,_.u)("div",{class:"esri-list-item-panel"},this._renderContents())}_renderContent(e){const{disabled:t,open:i}=this;return e&&!t&&i?"string"==typeof e?(0,_.u)("div",{innerHTML:e,key:e}):(0,A.Qd)(e)?(0,_.u)("div",{key:"content-widget"},e.render()):e instanceof HTMLElement?(0,_.u)("div",{afterCreate:this._attachToNode,bind:e,key:"content-element"}):null:null}_renderContents(){const{content:e,open:t}=this;return t?Array.isArray(e)?e.map((e=>this._renderContent(e))):this._renderContent(e):null}_attachToNode(e){e.appendChild(this)}_getWidget(e){return(0,A.Qd)(e)?e:null}_getFirstWidget(){const{content:e}=this;return Array.isArray(e)?e.map((e=>this._getWidget(e))).find((e=>e)):this._getWidget(e)}};(0,l._)([(0,r.Cb)()],k.prototype,"className",void 0),(0,l._)([(0,r.Cb)()],k.prototype,"content",void 0),(0,l._)([(0,r.Cb)()],k.prototype,"disabled",null),(0,l._)([(0,r.Cb)()],k.prototype,"flowEnabled",void 0),(0,l._)([(0,r.Cb)()],k.prototype,"icon",null),(0,l._)([(0,r.Cb)()],k.prototype,"image",void 0),(0,l._)([(0,r.Cb)()],k.prototype,"listItem",void 0),(0,l._)([(0,r.Cb)()],k.prototype,"open",void 0),(0,l._)([(0,r.Cb)()],k.prototype,"title",null),(0,l._)([(0,r.Cb)()],k.prototype,"visible",void 0),k=(0,l._)([(0,d.j)("esri.widgets.TableList.ListItemPanel")],k);const S=k;var T;const D=o.Z.ofType({key:"type",defaultKeyValue:"button",base:F.Z,typeMap:{button:M.Z,toggle:P.Z,slider:L.Z}}),N=o.Z.ofType(D);let x=T=class extends((0,s.IG)(C.Z)){constructor(e){super(e),this.actionsSections=new N,this.actionsOpen=!1,this.checkPublishStatusEnabled=!1,this.hidden=!1,this.layer=null,this.listItemCreatedFunction=null,this.panel=null,this.sortable=!0}initialize(){if(this.addHandles([(0,f.YP)((()=>this.panel),(e=>this._setListItemOnPanel(e)),f.nn)]),"function"==typeof this.listItemCreatedFunction){const e={item:this};this.listItemCreatedFunction.call(null,e)}}destroy(){var e;null===(e=this.panel)||void 0===e||e.destroy()}get error(){var e;return null===(e=this.layer)||void 0===e?void 0:e.loadError}castPanel(e){var t;return null!==(t=this.panel)&&void 0!==t&&t.open&&!e.hasOwnProperty("open")&&(e.open=!0),e?new S(e):null}get publishing(){var e,t;const{layer:i,checkPublishStatusEnabled:l}=this;return null!==(e=l&&i&&"publishingInfo"in i&&"publishing"===(null===(t=i.publishingInfo)||void 0===t?void 0:t.status))&&void 0!==e&&e}get title(){var e,t;const i=(0,E.U2)(this,"layer.layer");return null!==(e=!i||i&&(0,E.U2)(this,"layer.layer.loaded")?null===(t=this.layer)||void 0===t?void 0:t.title:null)&&void 0!==e?e:""}set title(e){this._overrideIfSome("title",e)}clone(){return new T({actionsSections:this.actionsSections.clone(),actionsOpen:this.actionsOpen,checkPublishStatusEnabled:this.checkPublishStatusEnabled,hidden:this.hidden,layer:this.layer,listItemCreatedFunction:this.listItemCreatedFunction,panel:this.panel,sortable:this.sortable,title:this.title})}_setListItemOnPanel(e){e&&(e.listItem=this)}};(0,l._)([(0,r.Cb)({type:N})],x.prototype,"actionsSections",void 0),(0,l._)([(0,r.Cb)()],x.prototype,"actionsOpen",void 0),(0,l._)([(0,r.Cb)()],x.prototype,"checkPublishStatusEnabled",void 0),(0,l._)([(0,r.Cb)({readOnly:!0})],x.prototype,"error",null),(0,l._)([(0,r.Cb)()],x.prototype,"hidden",void 0),(0,l._)([(0,r.Cb)()],x.prototype,"layer",void 0),(0,l._)([(0,r.Cb)()],x.prototype,"listItemCreatedFunction",void 0),(0,l._)([(0,r.Cb)({type:S})],x.prototype,"panel",void 0),(0,l._)([(0,w.p)("panel")],x.prototype,"castPanel",null),(0,l._)([(0,r.Cb)({readOnly:!0})],x.prototype,"publishing",null),(0,l._)([(0,r.Cb)()],x.prototype,"sortable",void 0),(0,l._)([(0,r.Cb)()],x.prototype,"title",null),x=T=(0,l._)([(0,d.j)("esri.widgets.TableList.ListItem")],x);const O=x;var B=i(91505);const Z="map",R="layer-list-mode",G=o.Z.ofType(O);let H=class extends B.Z.EventedAccessor{constructor(e){super(e),this.checkPublishStatusEnabled=!1,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.tableItems=new G,this.map=null}initialize(){this.addHandles([(0,f.YP)((()=>{var e;return[this.tables,null===(e=this.map)||void 0===e?void 0:e.allTables.toArray()]}),(()=>this._compileList()),f.nn),(0,f.YP)((()=>{var e;return[null===(e=this.map)||void 0===e?void 0:e.loaded,this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled]}),(()=>this._recompileList()))],Z)}destroy(){this._removeAllItems(),this.map=null,this.tables=null}get tables(){var e;return null===(e=this.map)||void 0===e?void 0:e.allTables}set tables(e){this._overrideIfSome("tables",e)}get state(){const{map:e,tables:t}=this;if(!e)return t?"ready":"disabled";const i=null===e||void 0===e?void 0:e.loadStatus;return"string"==typeof i?"loaded"===i?"ready":"loading"===i?"loading":"disabled":"ready"}get totalItems(){return this.tableItems.length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}_removeAllItems(){this.tableItems.destroyAll()}_getViewableTables(e){return e?this.listModeDisabled?e:e.filter((e=>"hide"!==(0,h.aV)(e))):void 0}_watchTablesListMode(e){this.removeHandles(R),e&&!this.listModeDisabled&&this.addHandles((0,f.YP)((()=>e.filter((e=>"listMode"in e)).map((e=>e.listMode)).toArray()),(()=>this._compileList())),R)}_compileList(){const{tables:e}=this;this._watchTablesListMode(e);const t=this._getViewableTables(e);null!==t&&void 0!==t&&t.length?(this._createNewItems(t),this._removeItems(t),this._sortItems(t)):this._removeAllItems()}_createNewItems(e){const{tableItems:t,listItemCreatedFunction:i,checkPublishStatusEnabled:l}=this;e.forEach((e=>{t.some((t=>t.layer===e))||t.add(new O({checkPublishStatusEnabled:l,layer:e,listItemCreatedFunction:i}))}))}_removeItems(e){const{tableItems:t}=this;t.forEach((i=>{if(!i)return;(null===e||void 0===e?void 0:e.find((e=>i.layer===e)))||(t.remove(i),i.destroy())}))}_sortItems(e){const{tableItems:t}=this;t.sort(((t,i)=>{const l=e.indexOf(t.layer),o=e.indexOf(i.layer);return l>o?-1:l<o?1:0}))}_recompileList(){this._removeAllItems(),this._compileList()}};(0,l._)([(0,r.Cb)()],H.prototype,"checkPublishStatusEnabled",void 0),(0,l._)([(0,r.Cb)()],H.prototype,"listItemCreatedFunction",void 0),(0,l._)([(0,r.Cb)({nonNullable:!0})],H.prototype,"listModeDisabled",void 0),(0,l._)([(0,r.Cb)({type:G,readOnly:!0})],H.prototype,"tableItems",void 0),(0,l._)([(0,r.Cb)()],H.prototype,"tables",null),(0,l._)([(0,r.Cb)()],H.prototype,"map",void 0),(0,l._)([(0,r.Cb)({readOnly:!0})],H.prototype,"state",null),(0,l._)([(0,r.Cb)()],H.prototype,"totalItems",null),H=(0,l._)([(0,d.j)("esri.widgets.TableList.TableListViewModel")],H);const U=H;let z=class extends C.Z{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryTableIndicators=!1}};(0,l._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],z.prototype,"closeButton",void 0),(0,l._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],z.prototype,"collapseButton",void 0),(0,l._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],z.prototype,"errors",void 0),(0,l._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],z.prototype,"filter",void 0),(0,l._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],z.prototype,"flow",void 0),(0,l._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],z.prototype,"heading",void 0),(0,l._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],z.prototype,"statusIndicators",void 0),(0,l._)([(0,r.Cb)({type:Boolean,nonNullable:!0})],z.prototype,"temporaryTableIndicators",void 0),z=(0,l._)([(0,d.j)("esri.widgets.TableList.TableListVisibleElements")],z);const V=z;function W(e){return e["data-item"]}const j=o.Z.ofType(O);let q=class extends((0,s.IG)(u.Z)){constructor(e,t){super(e,t),this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._lastDragDetail=null,this._selectedDragItemLayerUid=null,this._rootGroupUid="table-".concat(this.uid),this.collapsed=!1,this.dragEnabled=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.listItemCanGiveFunction=null,this.listItemCanReceiveFunction=null,this.messages=null,this.messagesCommon=null,this.minDragEnabledItems=h.MZ,this.minFilterItems=h.Kp,this.selectedItems=new j,this.selectionMode="none",this.viewModel=new U,this.visibleElements=new V,this._canMove=(e,t)=>{let{dragEl:i,fromEl:l,toEl:o}=e;const n="pull"===t?this.listItemCanGiveFunction:this.listItemCanReceiveFunction,s=W(i);if(null===s||void 0===s||!s.sortable)return!1;const a=W(l),r=(0,h.Gr)(l),d=W(o),c=(0,h.Gr)(o),u=!!r&&!!c&&r===c,p={selected:s,from:a,to:d},m=l.group,b=o.group;return m&&b&&"function"==typeof n?n.call(null,p):u},this._onCalciteListOrderChange=e=>{var t;const{_lastDragDetail:i}=this,{toEl:l,fromEl:o,dragEl:n,newIndex:s}=e;if(!o||!l||(null===i||void 0===i?void 0:i.newIndex)===s&&(null===i||void 0===i?void 0:i.dragEl)===n&&(null===i||void 0===i?void 0:i.toEl)===l&&(null===i||void 0===i?void 0:i.fromEl)===o)return;this._lastDragDetail=e;const a=Array.from(o.children).filter((e=>null===e||void 0===e?void 0:e.matches("calcite-list-item"))).map((e=>e.value));!function(e,t){null===e||void 0===e||e.sort(((e,i)=>{const l=t.indexOf(e.uid),o=t.indexOf(i.uid);return l>o?-1:l<o?1:0}))}(null===(t=this.map)||void 0===t?void 0:t.tables,a)}}loadDependencies(){return(0,p.h)({action:()=>Promise.resolve().then(i.bind(i,6814)),"action-group":()=>i.e(405).then(i.bind(i,70405)),"action-menu":()=>i.e(4745).then(i.bind(i,24745)),button:()=>Promise.resolve().then(i.bind(i,32275)),flow:()=>i.e(3049).then(i.bind(i,53049)),"flow-item":()=>i.e(8926).then(i.bind(i,48926)),icon:()=>i.e(7474).then(i.bind(i,87474)),list:()=>Promise.resolve().then(i.bind(i,27505)),"list-item":()=>Promise.resolve().then(i.bind(i,7205)),notice:()=>i.e(5669).then(i.bind(i,15669))})}get _dragEnabled(){return this.viewModel.totalItems>=this.minDragEnabledItems&&this.dragEnabled}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get icon(){return"table"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e,t;return null!==(e=null===(t=this.messages)||void 0===t?void 0:t.widgetLabel)&&void 0!==e?e:""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get map(){return this.viewModel.map}set map(e){this.viewModel.map=e}get multipleSelectionEnabled(){return(0,n.Mr)(a.Z.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),"multiple"===this.selectionMode}set multipleSelectionEnabled(e){(0,n.Mr)(a.Z.getLogger(this),"multipleSelectionEnabled",{replacement:"selectionMode",version:"4.29",warnOnce:!0}),this.selectionMode=e?"multiple":this.selectionEnabled?"single":"none"}get selectionEnabled(){return(0,n.Mr)(a.Z.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),"none"!==this.selectionMode&&this.dragEnabled}set selectionEnabled(e){(0,n.Mr)(a.Z.getLogger(this),"selectionEnabled",{replacement:"selectionMode, dragEnabled",version:"4.29",warnOnce:!0}),this.dragEnabled=e,this.selectionMode=e?this.multipleSelectionEnabled?"multiple":"single":"none"}get tableItems(){return this.viewModel.tableItems}get tables(){return this.viewModel.tables}set tables(e){this.viewModel.tables=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){var e,t;const i=null===(e=this.viewModel)||void 0===e?void 0:e.state,l={[m.z.hidden]:"loading"===i,[m.z.disabled]:"disabled"===i},o=null===(t=this.tableItems)||void 0===t?void 0:t.filter((e=>!e.hidden&&(this.visibleElements.errors||!e.error)));return(0,_.u)("div",{class:this.classes(I.base,m.z.widget,m.z.panel,l)},null!==o&&void 0!==o&&o.length?this._renderItems(o):this._renderNoItems())}_renderNoItemsMessage(){return(0,_.u)("div",{slot:"message"},this.messages.noItemsToDisplay)}_renderNoItems(){return(0,_.u)("div",{class:I.itemMessage,key:"esri-layer-list__no-items"},(0,_.u)("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return null===e||void 0===e?void 0:e.toArray().filter((e=>{let{panel:t}=e;return(null===t||void 0===t?void 0:t.open)&&!t.disabled&&t.flowEnabled})).map((e=>{let{title:t,panel:i}=e;const l=()=>this._handlePanelFlowItemBack(i);return(0,_.u)("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:i.title,headingLevel:this.headingLevel,key:"flow-panel-".concat(i.uid),onCalciteFlowItemBack:e=>{e.preventDefault(),l()}},i.render(),(0,_.u)("calcite-button",{appearance:"transparent",onclick:l,slot:"footer-actions",width:"full"},this.messagesCommon.back))}))}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame((()=>null===e||void 0===e?void 0:e.setFocus())))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame((()=>null===e||void 0===e?void 0:e.setFocus())))}_renderItems(e){const{visible:t,collapsed:i,visibleElements:{closeButton:l,collapseButton:o,heading:n,flow:s},_dragEnabled:a,_filterEnabled:r,_rootGroupUid:d,selectionMode:c,messages:u,filterPlaceholder:h,filterText:p}=this,m=[(0,_.u)("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:l,closed:!t,collapsed:i,collapsible:o,heading:n?u.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},(0,_.u)("calcite-list",{canPull:e=>this._canMove(e,"pull"),canPut:e=>this._canMove(e,"put"),"data-layer-type":d,dragEnabled:a,filterEnabled:r,filterPlaceholder:h,filterText:r?p:"",group:d,key:"root-list",label:u.widgetLabel,selectionAppearance:"border",selectionMode:c,onCalciteListChange:e=>this._handleCalciteListChange(e),onCalciteListDragEnd:e=>this._handleCalciteListDragEnd(e.detail),onCalciteListFilter:e=>{var t,i;return this.filterText=null!==(t=null===(i=e.target)||void 0===i?void 0:i.filterText)&&void 0!==t?t:""},onCalciteListOrderChange:e=>this._onCalciteListOrderChange(e.detail)},null===e||void 0===e?void 0:e.toArray().map((e=>this._renderItem(e))),null!==e&&void 0!==e&&e.length&&r?(0,_.u)("div",{class:I.filterNoResults,slot:"filter-no-results"},(0,_.u)("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e)];return t?s?(0,_.u)("calcite-flow",{key:"root-flow"},m):m:null}_handleCalciteListDragEnd(e){const{fromEl:t,dragEl:i,oldIndex:l}=e;t.insertBefore(i,t.children[l])}_renderItemMessage(e){return e.error?(0,_.u)("div",{class:I.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},(0,_.u)("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},(0,_.u)("div",{slot:"message"},this.messages.tableError))):null}_renderItem(e){var t,i;const{_selectedDragItemLayerUid:l,selectionMode:o,selectedItems:n,messages:s}=this,a=e.title||s.untitledTable,r=this._filterActions(e.actionsSections),d=this._countActions(r);return(0,_.u)("calcite-list-item",{afterCreate:t=>this._focusSelectedDragEl(t,e),afterUpdate:t=>this._focusSelectedDragEl(t,e),class:I.item,"data-item":e,"data-layer-id":e.layer.id,dragDisabled:!e.sortable,dragSelected:e.layer.uid===l,id:null===(t=e.layer)||void 0===t?void 0:t.uid,key:"list-item-".concat(e.layer.uid),label:a,metadata:{title:a},selected:"none"!==o&&n.includes(e),title:a,value:null===(i=e.layer)||void 0===i?void 0:i.uid,onCalciteListItemDragHandleChange:t=>this._handleCalciteListItemDragHandleChange(t,e)},(0,_.u)("div",{class:I.itemContent,slot:"content"},a),this._renderItemStatus(e),this._renderItemTemporaryIcon(e),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),d>1?this._renderActionsSections(e,r):1===d?this._renderAction({item:e,action:this._getSingleAction(r),textEnabled:!1}):null)}_renderItemTemporaryIcon(e){return this.visibleElements.temporaryTableIndicators&&!e.layer.persistenceEnabled?(0,_.u)("calcite-icon",{class:I.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messages.temporary}):null}_renderItemStatus(e){const{visibleElements:t}=this;if(!t.statusIndicators)return null;const{publishing:i}=e;return(0,_.u)("calcite-icon",{class:this.classes({[I.statusIndicator]:!0,[I.publishing]:i}),icon:"stop-square",key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderPanel(e){return null===e||void 0===e||!e.open||e.disabled||e.flowEnabled?null:(0,_.u)("div",{class:I.itemContentBottom,key:"content-panel-".concat(e.uid),slot:"content-bottom"},e.render())}_renderPanelAction(e){if(null===e||void 0===e||!e.visible)return null;const{open:t,title:i,disabled:l}=e;return(0,_.u)("calcite-action",{active:t,appearance:"transparent",disabled:l,icon:(0,c.mR)(e),key:"action-".concat(e.uid),onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:null!==i&&void 0!==i?i:"",title:null!==i&&void 0!==i?i:void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){const i=this.messagesCommon.options;return(0,_.u)("calcite-action-menu",{appearance:"transparent",class:I.actionMenu,key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:t=>e.actionsOpen=t.target.open},(0,_.u)("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:i,title:i}),t.toArray().map(((t,i)=>this._renderActionSection(e,t,i))))}_renderActionSection(e,t,i){return(0,_.u)("calcite-action-group",{class:I.actionGroup,key:"action-section-".concat(i)},t.toArray().map((t=>this._renderAction({item:e,action:t,textEnabled:!0}))))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const l="image"in e?e.image:void 0,o={[I.itemActionIcon]:!!t,[I.itemActionImage]:!!l};return t&&(o[t]=!0),l||t?(0,_.u)("span",{"aria-hidden":"true",class:this.classes(I.itemActionIcon,o),key:"icon",styles:(0,c.uS)(l)}):null}_renderAction(e){const{item:t,action:i,textEnabled:l}=e;if(!i)return null;const{active:o,disabled:n,title:s,type:a,indicator:r}=i;return(0,_.u)("calcite-action",{active:"toggle"===a&&i.value,appearance:"transparent",disabled:n,icon:(0,c.mR)(i),indicator:r,key:"action-".concat(i.uid),loading:o,onclick:()=>this._triggerAction(t,i),scale:"s",slot:l?void 0:"actions-end",text:null!==s&&void 0!==s?s:"",textEnabled:l,title:null!==s&&void 0!==s?s:void 0},this._renderFallbackIcon(i))}_filterActions(e){return e.map((e=>e.filter((e=>e.visible))))}_getSingleAction(e){return e.reduce((e=>e)).find((e=>e&&("button"===e.type||"toggle"===e.type)))}_countActions(e){return e.reduce(((e,t)=>e+t.length),0)}_focusSelectedDragEl(e,t){this._selectedDragItemLayerUid===t.layer.uid&&requestAnimationFrame((()=>null===e||void 0===e?void 0:e.setFocus()))}_handleCalciteListItemDragHandleChange(e,t){e.stopPropagation();const i=e.target.dragSelected;this._selectedDragItemLayerUid=i?t.layer.uid:null}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if("none"===t)return;const l=e.target.selectedItems.map((e=>W(e))).filter(Boolean);i.removeAll(),i.addMany(l)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_triggerAction(e,t){t&&e&&("toggle"===t.type&&(t.value=!t.value),this.triggerAction(t,e))}};(0,l._)([(0,r.Cb)()],q.prototype,"_focusRootFlowItem",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"_focusPanelFlowItem",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"_dragEnabled",null),(0,l._)([(0,r.Cb)()],q.prototype,"_filterEnabled",null),(0,l._)([(0,r.Cb)()],q.prototype,"collapsed",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"dragEnabled",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"filterPlaceholder",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"filterText",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"headingLevel",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"icon",null),(0,l._)([(0,r.Cb)()],q.prototype,"label",null),(0,l._)([(0,r.Cb)()],q.prototype,"listItemCanGiveFunction",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"listItemCanReceiveFunction",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"listItemCreatedFunction",null),(0,l._)([(0,r.Cb)()],q.prototype,"map",null),(0,l._)([(0,r.Cb)(),(0,b.H)("esri/widgets/TableList/t9n/TableList")],q.prototype,"messages",void 0),(0,l._)([(0,r.Cb)(),(0,b.H)("esri/t9n/common")],q.prototype,"messagesCommon",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"minDragEnabledItems",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"minFilterItems",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"multipleSelectionEnabled",null),(0,l._)([(0,r.Cb)()],q.prototype,"selectionEnabled",null),(0,l._)([(0,r.Cb)()],q.prototype,"selectedItems",void 0),(0,l._)([(0,r.Cb)()],q.prototype,"selectionMode",void 0),(0,l._)([(0,r.Cb)({readOnly:!0})],q.prototype,"tableItems",null),(0,l._)([(0,r.Cb)()],q.prototype,"tables",null),(0,l._)([(0,v.s)("trigger-action"),(0,r.Cb)({type:U})],q.prototype,"viewModel",void 0),(0,l._)([(0,r.Cb)({type:V,nonNullable:!0})],q.prototype,"visibleElements",void 0),q=(0,l._)([(0,d.j)("esri.widgets.TableList")],q);const Y=q}}]);
//# sourceMappingURL=8904.29937f13.chunk.js.map