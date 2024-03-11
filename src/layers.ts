import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import {
  TextSymbol3DLayer,
  LabelSymbol3D,
  SimpleLineSymbol,
  PolygonSymbol3D,
  ExtrudeSymbol3DLayer,
  PointSymbol3D,
  IconSymbol3DLayer,
  SimpleMarkerSymbol,
} from '@arcgis/core/symbols';
import SolidEdges3D from '@arcgis/core/symbols/edges/SolidEdges3D';
import CustomContent from '@arcgis/core/popup/content/CustomContent';
import PopupTemplate from '@arcgis/core/PopupTemplate';

/* Standalone table for Dates */
export const dateTable = new FeatureLayer({
  portalItem: {
    id: 'b2a118b088a44fa0a7a84acbe0844cb2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
});

/* Chainage Layer  */
var labelChainage = new LabelClass({
  labelExpressionInfo: { expression: '$feature.KmSpot' },
  symbol: {
    type: 'text',
    color: [85, 255, 0],
    haloColor: 'black',
    haloSize: 0.5,
    font: {
      size: 15,
      weight: 'bold',
    },
  },
});

var chainageRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 5,
    color: [255, 255, 255, 0.9],
    outline: {
      width: 0.2,
      color: 'black',
    },
  }),
});

export const chainageLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Chainage',
  elevationInfo: {
    mode: 'relative-to-ground',
  },
  labelingInfo: [labelChainage],
  minScale: 150000,
  maxScale: 0,
  renderer: chainageRenderer,

  popupEnabled: false,
});

/* Station Box */
let stationBoxRenderer = new UniqueValueRenderer({
  field: 'Layer',
  uniqueValueInfos: [
    {
      value: '00_Platform',
      label: 'Platform',
      symbol: new SimpleFillSymbol({
        color: [160, 160, 160],
        style: 'backward-diagonal',
        outline: {
          width: 1,
          color: 'black',
        },
      }),
    },
    {
      value: '00_Platform 10car',
      label: 'Platform 10car',
      symbol: new SimpleFillSymbol({
        color: [104, 104, 104],
        style: 'cross',
        outline: {
          width: 1,
          color: 'black',
          style: 'short-dash',
        },
      }),
    },
    {
      value: '00_Station',
      label: 'Station Box',
      symbol: new SimpleFillSymbol({
        color: [0, 0, 0, 0],
        outline: {
          width: 2,
          color: [115, 0, 0],
        },
      }),
    },
  ],
});

export const stationBoxLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 7,
  renderer: stationBoxRenderer,
  minScale: 150000,
  maxScale: 0,
  title: 'Station Box',

  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* ROW Layer */
var prowRenderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#ff0000',
    width: '2px',
  }),
});

export const prowLayer = new FeatureLayer({
  url: 'https://gis.railway-sector.com/server/rest/services/SC_Alignment/FeatureServer/5',
  layerId: 5,
  title: 'PROW',
  popupEnabled: false,
  renderer: prowRenderer,
});
prowLayer.listMode = 'hide';

/* PNR */
let pnrRenderer = new UniqueValueRenderer({
  valueExpression:
    "When($feature.LandOwner == 'BASES CONVERSION DEVELOPMENT AUTHORITY', 'BCDA', $feature.LandOwner == 'MANILA RAILROAD COMPANY' || $feature.LandOwner == 'Manila Railroad Company','PNR',$feature.LandOwner)",
  uniqueValueInfos: [
    {
      value: 'BCDA',
      symbol: new SimpleFillSymbol({
        color: [137, 205, 102],
        style: 'diagonal-cross',
        outline: {
          width: 0.5,
          color: 'black',
        },
      }),
    },
    {
      value: 'PNR',
      symbol: new SimpleFillSymbol({
        color: [137, 205, 102],
        style: 'diagonal-cross',
        outline: {
          width: 0.5,
          color: 'black',
        },
      }),
    },
  ],
});

export const pnrLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'Land (PNR)',
  definitionExpression:
    "LandOwner IN ('BASES CONVERSION DEVELOPMENT AUTHORITY','MANILA RAILROAD COMPANY')",

  elevationInfo: {
    mode: 'on-the-ground',
  },
  labelsVisible: false,
  renderer: pnrRenderer,
  popupTemplate: {
    title: '<p>{LandOwner} ({LotID})</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'HandOverDate',
            label: 'Hand-Over Date',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'LandOwner',
            label: 'Land Owner',
          },
        ],
      },
    ],
  },
});

/* Station Layer */
var labelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#d4ff33',
        },
        size: 15,
        halo: {
          color: 'black',
          size: 0.5,
        },
        // font: {
        //   family: 'Ubuntu Mono',
        //   //weight: "bold"
        // },
      }),
    ],
    verticalOffset: {
      screenLength: 100,
      maxWorldLength: 700,
      minWorldLength: 80,
    },

    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: [128, 128, 128, 0.5],
      size: 0.2,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.Station',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 6,
  title: 'SC Stations',
  labelingInfo: [labelClass],
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

/* The colors used for the each transit line */
var lotIdLabel = new LabelClass({
  labelExpressionInfo: { expression: '$feature.LotID' },
  symbol: {
    type: 'text',
    color: 'black',
    haloColor: 'white',
    haloSize: 0.5,
    font: {
      size: 11,
      weight: 'bold',
    },
  },
});

/* uniqueRenderer */
const colorLotReqs = {
  0: [0, 115, 76],
  1: [0, 112, 255],
  2: [255, 255, 0],
  3: [255, 170, 0],
  4: [255, 0, 0],
  5: [112, 173, 71],
  6: [178, 178, 178],
  7: [0, 0, 0, 0],
};

let lotDefaultSymbol = new SimpleFillSymbol({
  color: [0, 0, 0, 0],
  style: 'solid',
  outline: {
    // autocasts as new SimpleLineSymbol()
    color: [110, 110, 110],
    width: 0.7,
  },
});

let lotLayerRenderer = new UniqueValueRenderer({
  field: 'StatusLA',
  defaultSymbol: lotDefaultSymbol, // autocasts as new SimpleFillSymbol()
  uniqueValueInfos: [
    {
      // All features with value of "North" will be blue
      value: 1,
      label: 'Paid',
      symbol: new SimpleFillSymbol({
        color: colorLotReqs[0],
      }),
    },
    {
      // All features with value of "North" will be blue
      value: 2,
      label: 'For Payment Processing',
      symbol: new SimpleFillSymbol({
        color: colorLotReqs[1],
      }),
    },
    {
      // All features with value of "North" will be blue
      value: 3,
      label: 'For Legal Pass',
      symbol: new SimpleFillSymbol({
        color: colorLotReqs[2],
      }),
    },
    {
      // All features with value of "North" will be blue
      value: 4,
      label: 'For Appraisal/Offer to Buy',
      symbol: new SimpleFillSymbol({
        color: colorLotReqs[3],
      }),
    },
    {
      // All features with value of "North" will be blue
      value: 5,
      label: 'For Expro',
      symbol: new SimpleFillSymbol({
        color: colorLotReqs[4],
      }),
    },
    {
      // All features with value of "North" will be blue
      value: 6,
      label: 'With PTE',
      symbol: new SimpleFillSymbol({
        color: colorLotReqs[5],
      }),
    },
    {
      // All features with value of "North" will be blue
      value: 7,
      label: 'For Harmonization',
      symbol: new SimpleFillSymbol({
        color: colorLotReqs[6],
      }),
    },
  ],
});

// Custom popup for lot layer
const lotStatusArray = [
  'Paid',
  'For Payment Processing',
  'For Legal Pass',
  'For Appraisal/Offer to Buy',
  'For Expro',
  'With PTE',
  'For Harmonization',
];

const landUseArray = [
  'Agricultural',
  'Agricultural & Commercial',
  'Agricultural / Residential',
  'Commercial',
  'Industrial',
  'Irrigation',
  'Residential',
  'Road',
  'Road Lot',
  'Special Exempt',
];

const endorsedStatus = ['Not Endorsed', 'Endorsed', 'NA'];

let customContentLot = new CustomContent({
  outFields: ['*'],
  creator: (event: any) => {
    // Extract AsscessDate of clicked pierAccessLayer
    const handedOverDate = event.graphic.attributes.HandedOverDate;
    const handOverArea = event.graphic.attributes.percentHandedOver;
    const statusLot = event.graphic.attributes.StatusLA;
    const landUse = event.graphic.attributes.LandUse;
    const municipal = event.graphic.attributes.Municipality;
    const barangay = event.graphic.attributes.Barangay;
    const landOwner = event.graphic.attributes.LandOwner;
    const cpNo = event.graphic.attributes.CP;
    const endorse = event.graphic.attributes.Endorsed;
    const endorsed = endorsedStatus[endorse];

    let daten: any;
    let date: any;
    if (handedOverDate) {
      daten = new Date(handedOverDate);
      const year = daten.getFullYear();
      const month = daten.getMonth() + 1;
      const day = daten.getDate();
      date = `${year}-${month}-${day}`;
    } else {
      date = 'Undefined';
    }
    // Convert numeric to date format 0
    //var daten = new Date(handedOverDate);
    //var date = dateFormat(daten, 'MM-dd-yyyy');
    //<li>Hand-Over Date: <b>${date}</b></li><br>

    return `<ul><li>Handed-Over Area: <b>${handOverArea} %</b></li><br>
    <li>Handed-Over Date: <b>${date}</b></li><br>
              <li>Status:           <b>${
                statusLot >= 0 ? lotStatusArray[statusLot - 1] : ''
              }</b></li><br>
              <li>Land Use:         <b>${landUse >= 1 ? landUseArray[landUse - 1] : ''}</b></li><br>
              <li>Municipality:     <b>${municipal}</b></li><br>
              <li>Barangay:         <b>${barangay}</b></li><br>
              <li>Land Owner:       <b>${landOwner}</b>
              <li>CP:               <b>${cpNo}</b><br>
              <li>Endorsed:         <b>${endorsed}</b></li></ul>`;
  },
});

const templateLot = new PopupTemplate({
  title: 'Lot No.: <b>{LotID}</b>',
  lastEditInfoEnabled: false,
  content: [customContentLot],
});

export const lotLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  labelingInfo: [lotIdLabel],
  renderer: lotLayerRenderer,
  popupTemplate: templateLot,
  title: 'Land Acquisition',
  minScale: 150000,
  maxScale: 0,
  //labelsVisible: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* Handed-Over Lot (public + private) */
const handedOverLotRenderer = new UniqueValueRenderer({
  field: 'HandedOver',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'Handed-Over',
      symbol: new SimpleFillSymbol({
        color: [255, 0, 0, 0],
        outline: {
          color: '#00c5ff',
          width: 0.3,
        },
      }),
    },
  ],
});

export const handedOverLotLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  definitionExpression: 'HandedOver = 1',
  renderer: handedOverLotRenderer,
  popupEnabled: false,
  labelsVisible: false,
  title: 'Handed-Over (public + private)',
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* Endorsed Lot Layer */
// Endorsed lot layer
// let endorsedLayerRenderer = new UniqueValueRenderer({
//   field: 'Endorsed',
//   defaultSymbol: lotDefaultSymbol,
//   uniqueValueInfos: [
//     {
//       value: 0,
//       label: 'Not Endorsed',
//       symbol: new SimpleFillSymbol({
//         color: colorLotReqs[5],
//       }),
//     },
//     {
//       value: 1,
//       label: 'Endorsed',
//       symbol: new SimpleFillSymbol({
//         color: colorLotReqs[2],
//       }),
//     },
//     {
//       value: 2,
//       label: 'NA',
//       symbol: new SimpleFillSymbol({
//         color: [211, 211, 211, 0.7],
//       }),
//     },
//   ],
// });

// export const endorsedLotLayer = new FeatureLayer({
//   portalItem: {
//     id: 'dca1d785da0f458b8f87638a76918496',
//     portal: {
//       url: 'https://gis.railway-sector.com/portal',
//     },
//   },
//   layerId: 7,
//   renderer: endorsedLayerRenderer,
//   labelingInfo: [lotIdLabel],
//
//   title: 'Land Acquisition (Endorsed Status)',
//   minScale: 150000,
//   maxScale: 0,
//   //labelsVisible: false,
//   elevationInfo: {
//     mode: 'on-the-ground',
//   },
// });
// endorsedLotLayer.popupTemplate = templateLot;

/* Supre Urgent Lots */
// const superUrgentLotRenderer = new UniqueValueRenderer({
//   field: 'Urgent',

//   uniqueValueInfos: [
//     {
//       value: 0,
//       label: 'Super Urgent',
//       symbol: new SimpleFillSymbol({
//         color: [255, 0, 0, 0],
//         outline: {
//           color: [255, 0, 0, 1],
//           width: 0.3,
//         },
//       }),
//     },
//   ],
// });

// export const superUrgentLotLayer = new FeatureLayer({
//   portalItem: {
//     id: 'dca1d785da0f458b8f87638a76918496',
//     portal: {
//       url: 'https://gis.railway-sector.com/portal',
//     },
//   },
//   layerId: 7,
//   definitionExpression: 'Urgent = 0',
//   renderer: superUrgentLotRenderer,
//   popupEnabled: false,
//   labelsVisible: false,
//   title: 'Super Urgent Lot',
//   elevationInfo: {
//     mode: 'on-the-ground',
//   },
// });

/* Structure Layer */
const height = 5;
const edgeSize = 0.3;

const dismantled = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [0, 197, 255, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const paid = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [112, 173, 71, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const payp = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [0, 112, 255, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const legalpass = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [255, 255, 0, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const otc = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [255, 170, 0, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const lbp = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: height,
      material: {
        color: [255, 0, 0, 0.6],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const defaultStructureRenderer = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: 5,
      material: {
        color: [0, 0, 0, 0.4],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: edgeSize,
      }),
    }),
  ],
});

const structureRenderer = new UniqueValueRenderer({
  defaultSymbol: defaultStructureRenderer,
  defaultLabel: 'Other',
  field: 'StatusStruc',
  uniqueValueInfos: [
    {
      value: 1,
      symbol: dismantled,
      label: 'Dismantling/Clearing',
    },
    {
      value: 2,
      symbol: paid,
      label: 'Paid',
    },
    {
      value: 3,
      symbol: payp,
      label: 'For Payment Processing',
    },
    {
      value: 4,
      symbol: legalpass,
      label: 'For Legal Pass',
    },
    {
      value: 5,
      symbol: otc,
      label: 'For Appraisal/Offer to Compensation',
    },
    {
      value: 6,
      symbol: lbp,
      label: 'LBP Account Opening',
    },
  ],
});

export const structureLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Structure',
  renderer: structureRenderer,

  elevationInfo: {
    mode: 'on-the-ground',
  },
  popupTemplate: {
    title: '<p>{StrucID}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'StrucOwner',
            label: 'Structure Owner',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'StatusStruc',
            label: '<p>Status for Structure</p>',
          },
          {
            fieldName: 'Name',
          },
          {
            fieldName: 'Status',
            label: 'NLO/LO Ownership (structure) ',
          },
        ],
      },
    ],
  },
});

// NLO Layer
const symbolSize = 30;
const nloSymbolRef = [
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_Relocated.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_Paid.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_PaymentProcess.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_LegalPass.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_OtC.svg',
  'https://EijiGorilla.github.io/Symbols/3D_Web_Style/ISF/ISF_LBP.svg',
];

const nloRenderer = new UniqueValueRenderer({
  field: 'StatusRC',
  valueExpression:
    "When($feature.StatusRC == 1, 'relocated', $feature.StatusRC == 2, 'paid', $feature.StatusRC == 3, 'payp', $feature.StatusRC == 4, 'legalpass', $feature.StatusRC == 5, 'otc', $feature.StatusRC == 6, 'lbp', $feature.StatusRC)",
  uniqueValueInfos: [
    {
      value: 'relocated',
      label: 'Relocated',
      symbol: new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: nloSymbolRef[0],
            },
            size: symbolSize,
            outline: {
              color: 'white',
              size: 2,
            },
          }),
        ],
      }),
    },
    {
      value: 'paid',
      label: 'Paid',
      symbol: new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: nloSymbolRef[1],
            },
            size: symbolSize,
            outline: {
              color: 'white',
              size: 2,
            },
          }),
        ],
      }),
    },
    {
      value: 'payp',
      label: 'For Payment Processing',
      symbol: new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: nloSymbolRef[2],
            },
            size: symbolSize,
            outline: {
              color: 'white',
              size: 2,
            },
          }),
        ],
      }),
    },
    {
      value: 'legalpass',
      label: 'For Legal Pass',
      symbol: new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: nloSymbolRef[3],
            },
            size: symbolSize,
            outline: {
              color: 'white',
              size: 2,
            },
          }),
        ],
      }),
    },
    {
      value: 'otc',
      label: 'For Appraisal/OtC/Reqs for Other Entitlements',
      symbol: new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: nloSymbolRef[4],
            },
            size: symbolSize,
            outline: {
              color: 'white',
              size: 2,
            },
          }),
        ],
      }),
    },
    {
      value: 'lbp',
      label: 'LBP Account Opening',
      symbol: new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: nloSymbolRef[5],
            },
            size: symbolSize,
            outline: {
              color: 'white',
              size: 2,
            },
          }),
        ],
      }),
    },
  ],
});

export const nloLayer = new FeatureLayer({
  portalItem: {
    id: '99500faf0251426ea1df934a739faa6f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 3,
  renderer: nloRenderer,

  title: 'NLO (Non-Land Owner)',
  elevationInfo: {
    mode: 'relative-to-scene',
  },
  minScale: 10000,
  maxScale: 0,
  popupTemplate: {
    title: '<p>{StrucID}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'StrucOwner',
            label: 'Structure Owner',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'StatusRC',
            label: '<p>Status for Relocation</p>',
          },
          {
            fieldName: 'Name',
          },
          {
            fieldName: 'Status',
            label: 'NLO/LO Ownership (structure) ',
          },
        ],
      },
    ],
  },
});

/* Structure Ownership Layer */
let NLOLORenderer = new UniqueValueRenderer({
  field: 'Status',
  uniqueValueInfos: [
    {
      value: 1,
      label: 'LO (Land Owner)',
      symbol: new SimpleFillSymbol({
        style: 'forward-diagonal',
        color: [128, 128, 128, 1],
        outline: {
          color: '#6E6E6E',
          width: 0.3,
        },
      }),
    },
    {
      value: 2,
      label: 'NLO (Non-Land Owner)',
      symbol: new SimpleFillSymbol({
        style: 'vertical',
        color: [128, 128, 128, 1],
        outline: {
          color: '#6E6E6E',
          width: 0.3,
        },
      }),
    },
  ],
});

export const strucOwnershipLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  renderer: NLOLORenderer,
  layerId: 2,
  title: 'NLO/LO Ownership (Structure)',

  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* Occupancy (Status of Relocation) */
var verticalOffsetExistingOccupancy = {
  screenLength: 10,
  maxWorldLength: 10,
  minWorldLength: 10,
};
const occupancyPointSize = 20;

let occupancyRenderer = new UniqueValueRenderer({
  field: 'Occupancy',
  uniqueValueInfos: [
    {
      value: 0,
      label: 'Occupied',
      symbol: new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: 'https://EijiGorilla.github.io/Symbols/Demolished.png',
            },
            size: occupancyPointSize,
            outline: {
              color: 'white',
              size: 2,
            },
          }),
        ],
        verticalOffset: verticalOffsetExistingOccupancy,

        callout: {
          type: 'line', // autocasts as new LineCallout3D()
          color: [128, 128, 128, 0.6],
          size: 0.4,
          border: {
            color: 'grey',
          },
        },
      }),
    },
    {
      value: 1,
      label: 'Relocated',
      symbol: new PointSymbol3D({
        symbolLayers: [
          new IconSymbol3DLayer({
            resource: {
              href: 'https://EijiGorilla.github.io/Symbols/DemolishComplete_v2.png',
            },
            size: occupancyPointSize,
            outline: {
              color: 'white',
              size: 2,
            },
          }),
        ],
        verticalOffset: verticalOffsetExistingOccupancy,

        callout: {
          type: 'line', // autocasts as new LineCallout3D()
          color: [128, 128, 128, 0.6],
          size: 0.4,
          border: {
            color: 'grey',
          },
        },
      }),
    },
  ],
});

export const occupancyLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 4,

  title: 'Occupancy (Structure)',
  renderer: occupancyRenderer,
  elevationInfo: {
    mode: 'relative-to-scene',
  },
  popupTemplate: {
    title: '<p>{StrucID}</p>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'StrucOwner',
            label: 'Structure Owner',
          },
          {
            fieldName: 'Municipality',
          },
          {
            fieldName: 'Barangay',
          },
          {
            fieldName: 'Occupancy',
            label: '<p>Status for Relocation(structure)</p>',
          },
          {
            fieldName: 'Name',
          },
          {
            fieldName: 'Status',
            label: 'NLO/LO Ownership',
          },
        ],
      },
    ],
  },
});

/* Pier Head and Column */
const pHeight = 0;

const pierColumn = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: pHeight + 10,
      material: {
        color: [78, 78, 78, 0.5],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: 0.3,
      }),
    }),
  ],
});

const pileCap = new PolygonSymbol3D({
  symbolLayers: [
    new ExtrudeSymbol3DLayer({
      size: pHeight + 3,
      material: {
        color: [200, 200, 200, 0.7],
      },
      edges: new SolidEdges3D({
        color: '#4E4E4E',
        size: 1.0,
      }),
    }),
  ],
});

const pierHeadRenderer = new UniqueValueRenderer({
  defaultSymbol: new PolygonSymbol3D({
    symbolLayers: [
      {
        type: 'extrude',
        size: 5, // in meters
        material: {
          color: '#E1E1E1',
        },
        edges: new SolidEdges3D({
          color: '#4E4E4E',
          size: 1.0,
        }),
      },
    ],
  }),
  defaultLabel: 'Other',
  field: 'Layer',
  legendOptions: {
    title: 'Pier Head/Pier Column/Pile Cap',
  },
  uniqueValueInfos: [
    {
      value: 'Pier_Column',
      symbol: pierColumn,
      label: 'Column',
    },
    /*
  {
    value: "Pier_Head",
    symbol: pierHead,
    label: "Pier Head"
  },
  */
    {
      value: 'Pile_Cap',
      symbol: pileCap,
      label: 'Pile Cap',
    },
  ],
});

export const pierHeadColumnLayer = new FeatureLayer({
  portalItem: {
    id: 'e09b9af286204939a32df019403ef438',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 4,
  title: 'Pier Head/Column',
  definitionExpression: "Layer <> 'Pier_Head'",

  minScale: 150000,
  maxScale: 0,
  renderer: pierHeadRenderer,
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});
pierHeadColumnLayer.listMode = 'hide';

/* Pier Point Layer with access dates */
const pierAccessDateColor = {
  0: [0, 255, 0, 0.9], // Accessible (green)
  1: [255, 127, 80], // Orange
  2: [255, 255, 0], // Yellow
  3: [0, 112, 255], // Blue
  4: [143, 0, 255], // violet
  5: [255, 255, 255, 0.9],
  6: [255, 0, 0, 0.9], // Dates are missing
};

//const cutOffDateAccess = '01/01/1970';
const today = new Date();
const todayn = today.getTime();
const cutOffDateAccess = todayn;
console.log(todayn);

const pierAccessReadyDateLabel = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: pierAccessDateColor[0],
        },
        size: 15,
        font: {
          family: 'Ubuntu Mono',
          weight: 'bold',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 80,
      maxWorldLength: 500,
      minWorldLength: 30,
    },
    callout: {
      type: 'line',
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7],
      },
    },
  }),
  labelExpressionInfo: {
    expression: `var accessdate = $feature.AccessDate;
                  var cutoffDate = 1700011031473;
                  var labelPier = when($feature.AccessDate <= cutoffDate, $feature.PIER, '');
                  return \`\${labelPier}\`
                  `,
  },
  labelPlacement: 'above-center',
});

const pierAccessNotYetLabel = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#cccccc',
        },
        size: 10,
        font: {
          family: 'Ubuntu Mono',
          weight: 'normal',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 80,
      maxWorldLength: 500,
      minWorldLength: 30,
    },
    callout: {
      type: 'line',
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7],
      },
    },
  }),
  labelExpressionInfo: {
    expression: `var accessdate = $feature.AccessDate;
                  var cutoffDate = 1700011031473;
                  var labelPier = when($feature.AccessDate > cutoffDate || isEmpty($feature.AccessDate), $feature.PIER, '');
                  return \`\${labelPier}\`
                  `,
  },
  labelPlacement: 'above-center',
});

const pierAccessDateMissingLabel = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: '#ff0000',
        },
        size: 10,
        font: {
          family: 'Ubuntu Mono',
          weight: 'normal',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 80,
      maxWorldLength: 500,
      minWorldLength: 30,
    },
    callout: {
      type: 'line',
      size: 0.5,
      color: [0, 0, 0],
      border: {
        color: [255, 255, 255, 0.7],
      },
    },
  }),
  labelExpressionInfo: {
    expression: '$feature.PIER',
    //'DefaultValue($feature.GeoTechName, "no data")'
    //"IIF($feature.Score >= 13, '', '')"
    //value: "{Type}"
  },
  labelPlacement: 'above-center',
  where: 'AccessDate IS NULL',
});

// 1. Get unique dates
export const pierAccessLayer = new FeatureLayer(
  {
    portalItem: {
      id: 'e09b9af286204939a32df019403ef438',
      portal: {
        url: 'https://gis.railway-sector.com/portal',
      },
    },
    layerId: 3,
    labelingInfo: [pierAccessReadyDateLabel, pierAccessNotYetLabel, pierAccessDateMissingLabel], //[pierAccessDateMissingLabel, pierAccessReadyDateLabel, pierAccessNotYetLabel],
    title: 'Pier with Access Date',
    minScale: 150000,
    maxScale: 0,

    elevationInfo: {
      mode: 'on-the-ground',
    },
  },
  //{ utcOffset: 300 },
);

const pierAccessRenderer = new UniqueValueRenderer({
  field: 'AccessDate',

  valueExpression:
    "When(IsEmpty($feature.AccessDate), 'empty', $feature.AccessDate <= 1636070400000, 'accessible', $feature.AccessDate > 1636070400000, 'others',$feature.AccessDate)",
  uniqueValueInfos: [
    {
      value: 'empty',
      label: 'Dates are missing',
      symbol: new SimpleMarkerSymbol({
        size: 5,
        color: pierAccessDateColor[6],
        outline: {
          width: 0.1,
          color: 'white',
        },
      }),
    },
    {
      value: 'accessible',
      label: 'Accessible',
      symbol: new SimpleMarkerSymbol({
        size: 5,
        color: pierAccessDateColor[0],
        outline: {
          width: 0.1,
          color: 'white',
        },
      }),
    },
    {
      value: 'others',
      label: 'Others',
      symbol: new SimpleMarkerSymbol({
        size: 5,
        color: pierAccessDateColor[5],
        outline: {
          width: 0.1,
          color: 'white',
        },
      }),
    },
  ],
});
pierAccessLayer.renderer = pierAccessRenderer;

// 3. Popup Template
function dateFormat(inputDate: any, format: any) {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //replace the month
  format = format.replace('MM', month.toString().padStart(2, '0'));

  //replace the year
  if (format.indexOf('yyyy') > -1) {
    format = format.replace('yyyy', year.toString());
  } else if (format.indexOf('yy') > -1) {
    format = format.replace('yy', year.toString().substr(2, 2));
  }

  //replace the day
  format = format.replace('dd', day.toString().padStart(2, '0'));

  return format;
}

// Custom Popup Content for pierAccessLayer
let customContent = new CustomContent({
  outFields: ['*'],
  creator: (event: any) => {
    // Extract AsscessDate of clicked pierAccessLayer
    const statsDate = event.graphic.attributes.AccessDate;

    // Convert numeric to date format
    const date = new Date(statsDate);
    let dateValue = dateFormat(date, 'MM-dd-yyyy');

    // If the date is before current date, popupContent should be "AVAILABLE"
    let DATES: any;
    if (dateValue === '01-01-1970') {
      // Empty date is entered as this
      DATES = 'NO DATES AVAILABLE';
    } else if (statsDate <= cutOffDateAccess) {
      DATES = 'ACCESSIBLE';
    } else if (statsDate > cutOffDateAccess) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      DATES = dateValue;
    }

    //return `Access Date: <b>${DATES}</b>`;
    return `Access Date: <b>${dateValue}</b><br>
            Status: <b>${DATES}</b> 
    `;
  },
});

const template = new PopupTemplate({
  title: 'Pier No: <b>{PIER}</b>',
  lastEditInfoEnabled: false,
  content: [customContent],
});
pierAccessLayer.popupTemplate = template;
