import { useEffect, useRef, useState } from 'react';
import { handedOverLotLayer, lotLayer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import {
  generateLotData,
  generateLotNumber,
  thousands_separators,
  generateHandedOver,
  zoomToLayer,
  generateHandedOverArea,
  dateUpdate,
} from '../Query';
import '../App.css';
import '@esri/calcite-components/dist/components/calcite-segmented-control';
import '@esri/calcite-components/dist/components/calcite-segmented-control-item';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-checkbox';
import { CalciteLabel, CalciteCheckbox } from '@esri/calcite-components-react';
import {
  barangayField,
  cutoff_days,
  lotPriorityField,
  lotStatusField,
  lotStatusQuery,
  municipalityField,
  primaryLabelColor,
  updatedDateCategoryNames,
  valueLabelColor,
} from '../StatusUniqueValues';
import { useDropdownContext } from './DropdownContext';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */
/// Draw chart
const LotChart = () => {
  const { municipality, barangays } = useDropdownContext();

  const municipal = municipality === null ? undefined : municipality.field1;
  const barangay = barangays === null ? undefined : barangays.name;

  // 0. Updated date
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);
  const [daysPass, setDaysPass] = useState<boolean>(false);
  useEffect(() => {
    dateUpdate(updatedDateCategoryNames[0]).then((response: any) => {
      setAsOfDate(response[0][0]);
      setDaysPass(response[0][1] >= cutoff_days ? true : false);
    });
  }, []);

  // Add zoomToLayer in App component, not LotChart component
  useEffect(() => {
    zoomToLayer(lotLayer);
  }, [municipal, barangay]);

  // 1. Land Acquisition
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [lotData, setLotData] = useState([
    {
      category: String,
      value: Number,
      sliceSettings: {
        fill: am5.color('#00c5ff'),
      },
    },
  ]);

  // Segmeneted control items for priority
  const priority_items = ['None', 'Top Priority', '2nd Priority', '3rd Priority'];
  const [prioritySelected, setPrioritySelected] = useState<any>(priority_items[0]);

  const chartID = 'pie-two';

  const [lotNumber, setLotNumber] = useState([]);
  const [handedOverNumber, setHandedOverNumber] = useState([]);
  const [handedOverArea, setHandedOverArea] = useState<any>();

  // Handed Over View checkbox
  const [handedOverCheckBox, setHandedOverCheckBox] = useState<boolean>(false);

  // 2.Mode of Acquisition
  const barSeriesRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef_moa = useRef<unknown | any | undefined>({});
  const [lotMoaData, setLotMoaData] = useState([]);
  const chartID_moa = 'land-moa';

  // Query
  const queryPriority = `${lotPriorityField} = '` + prioritySelected + "'";
  const queryMunicipality = `${municipalityField} = '` + municipal + "'";
  const queryPriorityMunicipality = queryPriority + ' AND ' + queryMunicipality;
  const queryBarangay = `${barangayField} = '` + barangay + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryPriorityMunicipalBarangay = queryPriorityMunicipality + ' AND ' + queryBarangay;
  // const queryField = lotStatusField + ' IS NOT NULL';

  if (prioritySelected === 'None') {
    if (!municipal) {
      lotLayer.definitionExpression = '1=1';
      handedOverLotLayer.definitionExpression = '1=1';
    } else if (municipal && !barangay) {
      lotLayer.definitionExpression = queryMunicipality;
      handedOverLotLayer.definitionExpression = queryMunicipality;
    } else if (municipal && barangay) {
      lotLayer.definitionExpression = queryMunicipalBarangay;
      handedOverLotLayer.definitionExpression = queryMunicipalBarangay;
    }
  } else if (prioritySelected !== 'None') {
    if (!municipal) {
      lotLayer.definitionExpression = queryPriority;
      handedOverLotLayer.definitionExpression = queryPriority;
    } else if (municipal && !barangay) {
      lotLayer.definitionExpression = queryPriorityMunicipality;
      handedOverLotLayer.definitionExpression = queryPriorityMunicipality;
    } else if (municipal && barangay) {
      lotLayer.definitionExpression = queryPriorityMunicipalBarangay;
      handedOverLotLayer.definitionExpression = queryPriorityMunicipalBarangay;
    }
  }

  useEffect(() => {
    zoomToLayer(lotLayer);
  }, [prioritySelected]);

  useEffect(() => {
    if (handedOverCheckBox === true) {
      handedOverLotLayer.visible = true;
    } else {
      handedOverLotLayer.visible = false;
    }
  }, [handedOverCheckBox]);

  useEffect(() => {
    generateLotData(prioritySelected, municipal, barangay).then((result: any) => {
      setLotData(result);
    });

    // Lot number
    generateLotNumber().then((response: any) => {
      setLotNumber(response);
    });

    generateHandedOver().then((response: any) => {
      setHandedOverNumber(response);
    });

    generateHandedOverArea(municipal, barangay).then((response: any) => {
      setHandedOverArea(response);
    });
  }, [prioritySelected, municipal, barangay]);

  // useLayoutEffect runs synchronously. If this is used with React.lazy,
  // Every time calcite action is fired, the chart is fired, too.
  // To avoid, use useEffect instead of useLayoutEffect

  // 1. Pie Chart for Land Acquisition
  useEffect(() => {
    // Dispose previously created root element

    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        //legendLabelText: "[{fill}]{category}[/]",
        legendValueText: "{valuePercentTotal.formatNumber('#.')}% ({value})",
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(28),
        scale: 1.8,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // values inside a donut
    let inner_label = pieSeries.children.push(
      am5.Label.new(root, {
        text: '[#ffffff]{valueSum}[/]\n[fontSize: 0.5em; #d3d3d3; verticalAlign: super]PRIVATE LOTS[/]',
        fontSize: '1.1em',
        centerX: am5.percent(50),
        centerY: am5.percent(40),
        populateText: true,
        oversizedBehavior: 'fit',
        textAlign: 'center',
      }),
    );

    pieSeries.onPrivate('width', (width: any) => {
      inner_label.set('maxWidth', width * 0.7);
    });

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      toggleKey: 'none',
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 0.5,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
    });

    // Disabling labels and ticksll
    pieSeries.labels.template.set('visible', false);
    pieSeries.ticks.template.set('visible', false);

    // EventDispatcher is disposed at SpriteEventDispatcher...
    // It looks like this error results from clicking events
    pieSeries.slices.template.events.on('click', (ev) => {
      const selected: any = ev.target.dataItem?.dataContext;
      const categorySelected: string = selected.category;
      const find = lotStatusQuery.find((emp: any) => emp.category === categorySelected);
      const statusSelect = find?.value;

      var highlightSelect: any;

      var query = lotLayer.createQuery();

      view.when(function () {
        view.whenLayerView(lotLayer).then((layerView): any => {
          //chartLayerView = layerView;

          lotLayer.queryFeatures(query).then(function (results) {
            const RESULT_LENGTH = results.features;
            const ROW_N = RESULT_LENGTH.length;

            let objID = [];
            for (var i = 0; i < ROW_N; i++) {
              var obj = results.features[i].attributes.OBJECTID;
              objID.push(obj);
            }

            var queryExt = new Query({
              objectIds: objID,
            });

            lotLayer.queryExtent(queryExt).then(function (result) {
              if (result.extent) {
                view.goTo(result.extent);
              }
            });

            if (highlightSelect) {
              highlightSelect.remove();
            }
            highlightSelect = layerView.highlight(objID);

            view.on('click', function () {
              layerView.filter = new FeatureFilter({
                where: undefined,
              });
              highlightSelect.remove();
            });
          }); // End of queryFeatures

          layerView.filter = new FeatureFilter({
            where: lotStatusField + ' = ' + statusSelect,
          });

          // For initial state, we need to add this
          view.on('click', () => {
            layerView.filter = new FeatureFilter({
              where: undefined,
            });
            highlightSelect !== undefined ? highlightSelect.remove() : console.log('');
          });
        }); // End of view.whenLayerView
      }); // End of view.whenv
    });

    pieSeries.data.setAll(lotData);

    // Legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        scale: 0.9,
      }),
    );
    legendRef.current = legend;
    legend.data.setAll(pieSeries.dataItems);

    // Change the size of legend markers
    legend.markers.template.setAll({
      width: 18,
      height: 18,
    });

    // Change the marker shape
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });

    // Responsive legend
    // https://www.amcharts.com/docs/v5/tutorials/pie-chart-with-a-legend-with-dynamically-sized-labels/
    // This aligns Legend to Left
    chart.onPrivate('width', function (width: any) {
      const boxWidth = 230; //props.style.width;
      var availableSpace = Math.max(width - chart.height() - boxWidth, boxWidth);
      //var availableSpace = (boxWidth - valueLabelsWidth) * 0.7
      legend.labels.template.setAll({
        width: availableSpace,
        maxWidth: availableSpace,
      });
    });

    // To align legend items: valueLabels right, labels to left
    // 1. fix width of valueLabels
    // 2. dynamically change width of labels by screen size

    // Change legend labelling properties
    // To have responsive font size, do not set font size
    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    legend.valueLabels.template.setAll({
      textAlign: 'right',
      //width: valueLabelsWidth,
      fill: am5.color('#ffffff'),
      //fontSize: LEGEND_FONT_SIZE,
    });

    legend.itemContainers.template.setAll({
      // set space between legend items
      paddingTop: 3,
      paddingBottom: 1,
    });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, lotData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(lotData);
    legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  return (
    <>
      <CalciteLabel>TOTAL LOTS</CalciteLabel>
      <CalciteLabel layout="inline">
        <b className="totalLotsNumber" style={{ color: valueLabelColor }}>
          {thousands_separators(lotNumber[0])}
          <img
            src="https://EijiGorilla.github.io/Symbols/Land_logo.png"
            alt="Land Logo"
            height={'20%'}
            width={'20%'}
            style={{ marginLeft: '90%', display: 'flex', marginTop: '-17%' }}
          />
        </b>
      </CalciteLabel>

      {/* Priority tabs */}
      {/* <CalciteSegmentedControl
        style={{
          marginTop: '15px',
          marginBottom: '10px',
          marginLeft: '5px',
          marginRight: 'auto',
        }}
        scale="s"
        onCalciteSegmentedControlChange={(event: any) =>
          setPrioritySelected(event.target.selectedItem.id)
        }
      >
        {prioritySelected &&
          priority_items.map((priority: any, index: any) => {
            return (
              <CalciteSegmentedControlItem
                {...(prioritySelected === priority ? { checked: true } : {})}
                key={index}
                value={priority}
                id={priority}
              >
                {priority}
              </CalciteSegmentedControlItem>
            );
          })}
      </CalciteSegmentedControl> */}

      <div
        style={{
          color: daysPass === true ? 'red' : 'gray',
          fontSize: '0.8rem',
          float: 'right',
          marginRight: '5px',
          marginTop: '5px',
        }}
      >
        {!asOfDate ? '' : 'As of ' + asOfDate}
      </div>

      {/* Lot Chart */}
      <div
        id={chartID}
        style={{
          height: '55vh',
          backgroundColor: 'rgb(0,0,0,0)',
          color: 'white',
          marginTop: '8%',
          marginBottom: '10%',
        }}
      ></div>

      {/* Handed Over */}
      <div
        style={{
          display: 'flex',
          marginLeft: '15px',
          marginRight: '15px',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <div
          style={{ backgroundColor: 'green', height: '0', marginTop: '17px', marginRight: '-10px' }}
        >
          <CalciteCheckbox
            name="handover-checkbox"
            label="VIEW"
            scale="l"
            onCalciteCheckboxChange={(event: any) =>
              setHandedOverCheckBox(handedOverCheckBox === false ? true : false)
            }
          ></CalciteCheckbox>
        </div>
        <dl style={{ alignItems: 'center' }}>
          <dt style={{ color: primaryLabelColor, fontSize: '1.0rem' }}>Total Handed-Over</dt>
          <dd
            style={{
              color: valueLabelColor,
              fontSize: '1.7rem',
              fontWeight: 'bold',
              fontFamily: 'calibri',
              lineHeight: '1.2',
              margin: 'auto',
            }}
          >
            {handedOverNumber[0]}% ({thousands_separators(handedOverNumber[1])})
          </dd>
        </dl>
        <dl style={{ alignItems: 'center' }}>
          <dt style={{ color: primaryLabelColor, fontSize: '1.0rem' }}>Handed-Over Area</dt>
          {/* #d3d3d3 */}
          <dd
            style={{
              color: valueLabelColor,
              fontSize: '1.7rem',
              fontFamily: 'calibri',
              lineHeight: '1.2',
              margin: 'auto',
              fontWeight: 'bold',
            }}
          >
            {handedOverArea && thousands_separators(handedOverArea.toFixed(0))}
            <label style={{ fontWeight: 'normal', fontSize: '1.3rem' }}> m</label>
            <label style={{ verticalAlign: 'super', fontSize: '0.6rem' }}>2</label>
          </dd>
        </dl>
      </div>
    </>
  );
}; // End of lotChartgs

export default LotChart;
