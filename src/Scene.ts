import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Locate from '@arcgis/core/widgets/Locate.js';
import Compass from '@arcgis/core/widgets/Compass';
import {
  lotLayer,
  nloLayer,
  structureLayer,
  //endorsedLotLayer,
  occupancyLayer,
  pnrLayer,
  chainageLayer,
  pierAccessLayer,
  stationBoxLayer,
  stationLayer,
  pierHeadColumnLayer,
  prowLayer,
  strucOwnershipLayer,
  handedOverLotLayer,
  //superUrgentLotLayer,
  ngcp_line7,
  ngcp_pole7,
  ngcp_working_area7,
  prow_tunnelLayer,
  ngcp_line6,
  ngcp_pole6,
  ngcp_working_area6,
  tunnelAffectedLotLayer,
  somco_fense_layer,
  cp_break_lines,
  accessibleLotAreaLayer,
} from './layers';
import { highlightLot } from './Query';
import Zoom from '@arcgis/core/widgets/Zoom';
import Measurement from '@arcgis/core/widgets/Measurement';
import { lotIdField, structureIdField } from './StatusUniqueValues';

export const map = new Map({
  basemap: 'dark-gray-vector', // 'arcgis/dark-gray'
  ground: 'world-elevation',
});

// Group layers //
const alignmentGroupLayer = new GroupLayer({
  title: 'Alignment',
  visible: true,
  visibilityMode: 'independent',
  layers: [stationBoxLayer, chainageLayer, prow_tunnelLayer, cp_break_lines],
}); //map.add(alignmentGroupLayer, 0);

const nloLoOccupancyGroupLayer = new GroupLayer({
  title: 'NLO/LO Occupancy',
  visible: true,
  visibilityMode: 'independent',
  layers: [occupancyLayer, strucOwnershipLayer, nloLayer],
});

const lotGroupLayer = new GroupLayer({
  title: 'Land',
  visible: true,
  visibilityMode: 'independent',
  layers: [lotLayer, tunnelAffectedLotLayer, pnrLayer, accessibleLotAreaLayer],
});

const ngcp6_groupLayer = new GroupLayer({
  title: 'NGCP Site 6',
  visible: false,
  visibilityMode: 'independent',
  layers: [ngcp_line6, ngcp_pole6, ngcp_working_area6],
});

const ngcp7_groupLayer = new GroupLayer({
  title: 'NGCP Site 7',
  visible: false,
  // listMode: 'hide-children',
  visibilityMode: 'independent',
  layers: [ngcp_line7, ngcp_pole7, ngcp_working_area7],
});

// Change the layer order by using index numbers in map.add
map.add(pierAccessLayer);
map.add(lotGroupLayer);
map.add(ngcp7_groupLayer);
map.add(ngcp6_groupLayer);
map.add(structureLayer);
map.add(nloLoOccupancyGroupLayer);
map.add(alignmentGroupLayer);
map.add(prowLayer);
map.add(stationLayer);
map.add(pierHeadColumnLayer);
map.add(somco_fense_layer);
map.add(handedOverLotLayer);

export const view = new SceneView({
  container: undefined,
  map,
  center: [121.05, 14.4],
  zoom: 12,
  viewingMode: 'local',
  environment: {
    background: {
      type: 'color', // autocasts as new ColorBackground()
      color: [0, 0, 0, 1],
    },
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

// highlight super urgent
export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    if (item.title === 'Super Urgent Lot') {
      // highlightLot(superUrgentLotLayer);
    } else if (item.title === 'Handed-Over (public + private)') {
      // highlightLot(handedOverLotLayer);
    } else if (item.title === 'Tunnel Affected') {
      highlightLot(tunnelAffectedLotLayer);
    }

    item.title === 'Chainage' ||
    item.title === 'NLO/LO Ownership (Structure)' ||
    item.title === 'Super Urgent Lot' ||
    item.title === 'Handed-Over (public + private)' ||
    item.title === 'Tunnel Affected' ||
    item.title === 'Structure' ||
    item.title === 'NLO (Non-Land Owner)' ||
    item.title === 'Occupancy (Structure)' ||
    item.title === 'Proposed Pole Working Areas' ||
    item.title === 'Proposed/Recorded NGCP Lines' ||
    item.title === 'Proposed Pole Relocation' ||
    item.title === 'Handed-Over Area'
      ? (item.visible = false)
      : (item.visible = true);
  },
});

const sources = [
  {
    layer: lotLayer,
    searchFields: [lotIdField],
    displayField: lotIdField,
    exactMatch: false,
    outFields: [lotIdField],
    name: 'Lot ID',
    placeholder: 'example: 10083',
  },
  {
    layer: structureLayer,
    searchFields: [structureIdField],
    displayField: structureIdField,
    exactMatch: false,
    outFields: [structureIdField],
    name: 'Structure ID',
    placeholder: 'example: MCRP-01-02-ML022',
  },
  {
    layer: chainageLayer,
    searchFields: ['KmSpot'],
    displayField: 'KmSpot',
    exactMatch: false,
    outFields: ['*'],
    name: 'Main KM',
    placeholder: 'example: 80+400',
  },
  {
    layer: pierAccessLayer,
    searchFields: ['PIER'],
    displayField: 'PIER',
    exactMatch: false,
    outFields: ['PIER'],
    name: 'Pier No',
    zoomScale: 1000,
    placeholder: 'example: P-288',
  },
];

const searchWidget = new Search({
  view: view,
  locationEnabled: false,
  allPlaceholder: 'LotID, StructureID, Chainage',
  includeDefaultSources: false,
  container: undefined,
  sources: sources,
});

export const searchExpand = new Expand({
  view: view,
  content: searchWidget,
  expandIcon: 'chevrons-right',
  group: 'top-right',
});

export const locateBtn = new Locate({
  view,
  // container: undefined,
});

export const zoom = new Zoom({
  view,
});

// Measurement Tool
export const measurement = new Measurement({
  view: view,
  activeTool: undefined,
  container: undefined,
});

// Compass
export const compass = new Compass({
  view: view,
});
