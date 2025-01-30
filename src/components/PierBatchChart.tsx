import { useRef, useState, useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';

import { pierAccessLayer } from '../layers';
import { view } from '../Scene';
import Query from '@arcgis/core/rest/support/Query';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import { pierAccessBatchField, pierAccessStatusField } from '../StatusUniqueValues';
import { pierBatchProgressChartData } from '../Query';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}
const PierBatchChart = ({ municipal, barangay }: any) => {
  const legendRef = useRef<unknown | any | undefined>({});
  const xAxisRef = useRef<unknown | any | undefined>({});
  const yAxisRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [pierBatchProgressData, setPierBatchProgressData] = useState([]);

  const chartID = 'pier-batch-progress';
  useEffect(() => {
    // generateLotProgress(municipal, barangay).then((result: any) => {
    //   setLotProgressData(result);
    // });
    pierBatchProgressChartData(municipal, barangay).then((result: any) => {
      setPierBatchProgressData(result);
    });
  }, [municipal, barangay]);

  useEffect(() => {
    maybeDisposeRoot(chartID);
    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: 'panX',
        wheelY: 'zoomX',
        paddingBottom: 35,
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;

    // Chart title
    chart.children.unshift(
      am5.Label.new(root, {
        text: 'Progress on Accessible Pier Locations',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        fill: am5.color('#ffffff'),
        x: am5.percent(50),
        centerX: am5.percent(50),
        paddingTop: 0,
        paddingBottom: 10,
      }),
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/

    var cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'zoomX',
      }),
    );
    cursor.lineX.set('visible', false);

    // Create axes
    var xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 0,
        maxPrecision: 0,
        renderer: am5xy.AxisRendererX.new(root, {
          strokeOpacity: 1,
          strokeWidth: 1,
          stroke: am5.color('#ffffff'),
        }),
      }),
    );

    var yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'batch',
        tooltip: am5.Tooltip.new(root, {}),
        renderer: am5xy.AxisRendererY.new(root, {
          minGridDistance: 60,
          strokeOpacity: 1,
          strokeWidth: 1.5,
          stroke: am5.color('#ffffff'),
        }),
      }),
    );
    yAxis.data.setAll(pierBatchProgressData);
    xAxis.get('renderer').labels.template.setAll({
      //oversizedBehavior: "wrap",
      textAlign: 'center',
      fill: am5.color('#ffffff'),
      //maxWidth: 150,
      fontSize: 12,
    });

    yAxis.get('renderer').labels.template.setAll({
      //oversizedBehavior: "wrap",//
      textAlign: 'center',
      fill: am5.color('#ffffff'),
      //maxWidth: 150,
      fontSize: 12,
    });
    xAxisRef.current = xAxis;
    yAxisRef.current = yAxis;

    // Add yaxix title
    // yAxis.children.unshift(
    //   am5.Label.new(root, {
    //     rotation: -90,
    //     // text: 'No. of casted components',
    //     y: am5.p50,
    //     centerX: am5.p50,
    //     fill: am5.color('#ffffff'),
    //     fontSize: 11,
    //   }),
    // );

    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        centerY: am5.percent(50),
        x: am5.p50,
        y: am5.percent(108),
        marginTop: -20,
      }),
    );
    legendRef.current = legend;

    legend.labels.template.setAll({
      oversizedBehavior: 'truncate',
      fill: am5.color('#ffffff'),
      fontSize: 17,
      scale: 0.7,
      //textDecoration: "underline"
      //width: am5.percent(200)
      //fontWeight: "300"
    });

    // check this;
    // newDataItem = new DataItem(series, dataContext, series._makeDataItem(dataContext));
    // dataItem is of dataItems
    // dataContext: dataItem.dataContext

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name: any, fieldName: any, color: any) {
      var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          stacked: true,
          xAxis: xAxis,
          yAxis: yAxis,
          baseAxis: yAxis,
          valueXField: fieldName,
          categoryYField: 'batch',
          fill: color,
          stroke: color,
          // valueYGrouped: 'sum',
        }),
      );

      // select chart series and filter
      var highlightSelect: any;
      series.columns.template.events.on('click', (ev) => {
        const selected: any = ev.target.dataItem?.dataContext;
        const selectedBatchName = selected.batch;
        const selectedBatch =
          selectedBatchName === 'Batch 1'
            ? 1
            : selectedBatchName === 'Batch 2'
              ? 2
              : selectedBatchName === 'Batch 3'
                ? 3
                : 4;

        // const qExpression =
        const qMunicipality = "Municipality = '" + municipal + "'";
        const qBarangay = "Barangay = '" + barangay + "'";
        const qMunicipalBarangay = qMunicipality + ' AND ' + qBarangay;
        const status = fieldName === 'accessible' ? 1 : 0;
        const qSelectedStatus = `${pierAccessStatusField} = ` + status;
        const qSelectedBatch = `${pierAccessBatchField} = ` + selectedBatch;

        var query = pierAccessLayer.createQuery();
        if (municipal && barangay) {
          query.where = qSelectedStatus + ' AND ' + qMunicipalBarangay + ' AND ' + qSelectedBatch;
        } else if (municipal && !barangay) {
          query.where = qSelectedStatus + ' AND ' + qMunicipality + ' AND ' + qSelectedBatch;
        } else {
          query.where = qSelectedStatus;
        }

        view.whenLayerView(pierAccessLayer).then((layerView: any) => {
          pierAccessLayer.queryFeatures(query).then((results: any) => {
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

            pierAccessLayer.queryExtent(queryExt).then(function (result) {
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
          });
        }); // End of whenLayerView
      });

      series.columns.template.setAll({
        tooltipText: '{name}: {valueX}',
        tooltipY: am5.percent(10),
      });
      series.data.setAll(pierBatchProgressData);

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: '{valueX}',
            fill: root.interfaceColors.get('alternativeText'),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true,
          }),
        });
      });

      legend.data.push(series);
    }

    makeSeries('Accessible', 'accessible', am5.color('#0096FF'));
    makeSeries('Not Accessible', 'inaccessible', am5.color('#FF5733'));

    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, pierBatchProgressData]);

  return (
    <>
      <div
        id={chartID}
        style={{
          height: '44vh',
          width: '70%',
          backgroundColor: '#2b2b2b',
          color: 'white',
          position: 'fixed',
          zIndex: 10,
          bottom: 0,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      ></div>
    </>
  );
};

export default PierBatchChart;
