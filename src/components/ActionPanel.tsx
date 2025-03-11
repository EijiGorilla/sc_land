import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import {
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalcitePanel,
} from '@esri/calcite-components-react';
import { useEffect, useRef, useState } from 'react';
import { basemaps, layerList } from '../Scene';
import { DropdownDataProvider } from './DropdownContext';
import PierBatchChart from './PierBatchChart';
import loadable from '@loadable/component';

function ActionPanel() {
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);

  const LotProgressChart = loadable(() => import('./LotProgressChart'));
  const HandedOverAreaChart = loadable(() => import('./HandedOverAreaChart'));

  useEffect(() => {
    basemaps.container = calcitePanelBasemaps.current;
    layerList.container = layerListDiv.current;
  });

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  return (
    <>
      <CalciteShellPanel
        width-scale="1"
        slot="panel-start"
        position="start"
        id="left-shell-panel"
        displayMode="dock"
      >
        <CalciteActionBar slot="action-bar">
          <CalciteAction
            data-action-id="layers"
            icon="layers"
            text="layers"
            id="layers"
            //textEnabled={true}
            onClick={(event: any) => {
              setNextWidget(event.target.id);
              setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
            }}
          ></CalciteAction>

          <CalciteAction
            data-action-id="basemaps"
            icon="basemap"
            text="basemaps"
            id="basemaps"
            onClick={(event: any) => {
              setNextWidget(event.target.id);
              setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
            }}
          ></CalciteAction>

          <CalciteAction
            data-action-id="charts"
            icon="graph-time-series"
            text="Progress Chart"
            id="charts"
            onClick={(event: any) => {
              setNextWidget(event.target.id);
              setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
            }}
          ></CalciteAction>

          {/* <CalciteAction
      data-action-id="pierbatch-charts"
      icon="graph-bar-100-stacked"
      text="Accessible Pier Location"
      id="pierbatch-charts"
      onClick={(event: any) => {
        setNextWidget(event.target.id);
        setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
      }}
    ></CalciteAction> */}

          <CalciteAction
            data-action-id="handedover-charts"
            icon="graph-bar-side-by-side"
            text="Handed-Over Area"
            id="handedover-charts"
            onClick={(event: any) => {
              setNextWidget(event.target.id);
              setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
            }}
          ></CalciteAction>

          <CalciteAction
            data-action-id="information"
            icon="information"
            text="Information"
            id="information"
            onClick={(event: any) => {
              setNextWidget(event.target.id);
              setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
            }}
          ></CalciteAction>
        </CalciteActionBar>

        <CalcitePanel
          heading="Layers"
          height-scale="l"
          width-scale="l"
          data-panel-id="layers"
          style={{ width: '18vw' }}
          hidden
        >
          <div id="layers-container" ref={layerListDiv}></div>
        </CalcitePanel>

        <CalcitePanel
          heading="Basemaps"
          height-scale="l"
          data-panel-id="basemaps"
          style={{ width: '18vw' }}
          hidden
        >
          <div id="basemap-container" ref={calcitePanelBasemaps}></div>
        </CalcitePanel>

        <CalcitePanel
          class="timeSeries-panel"
          height-scale="l"
          data-panel-id="charts"
          hidden
        ></CalcitePanel>

        {/* <CalcitePanel
    class="pierbatchaccess-panel"
    height-scale="l"
    data-panel-id="pierbatch-charts"
    hidden
  ></CalcitePanel> */}

        <CalcitePanel
          class="handedOverArea-panel"
          height-scale="l"
          data-panel-id="handedover-charts"
          hidden
        ></CalcitePanel>

        <CalcitePanel heading="Description" data-panel-id="information" hidden>
          {nextWidget === 'information' ? (
            <div className="informationDiv">
              <ul>
                <div>
                  <b style={{ color: 'white', fontWeight: 'bold' }}>
                    --- How to Use Dropdown List ---
                  </b>
                </div>
                <li>
                  You can <b>filter the data</b> by City and Barangy using dropdown lists.
                </li>
                <li>
                  <b>Click a tab</b> below the dropdown lists to view progress on land, structure,
                  or NLO in charts.
                </li>

                <div>
                  <b style={{ color: 'white', fontWeight: 'bold' }}>--- How to Use Chart ---</b>
                </div>
                <li>
                  <b>Click series in pie charts</b> to view progress on the corresponding
                  lots/structures/NLO on the map.
                </li>
                <li>
                  <b>Lots under expropriation</b> are available in the 'Expro List' tab.
                </li>
                <li>
                  <b>Pie chart for lands</b> represent <b>private lands only</b>.
                </li>
                <li>
                  Values in the bracket of Land legend represent the total affected areas in square
                  meters corresponeding to milestone status.
                </li>
                <li>
                  <b>Permit-to-Enter</b> represents both public and private lands{' '}
                </li>
                <li>
                  <b>Progress Chart</b> indicates the number of handed-over lots for both public and
                  private lands{' '}
                </li>
                <li>
                  <b>Handed-Over</b> represents both public and privalte lands.
                </li>
              </ul>
            </div>
          ) : (
            <div className="informationDiv" hidden></div>
          )}
        </CalcitePanel>
      </CalciteShellPanel>

      {/* Lot progress chart is loaded ONLY when charts widget is clicked. */}
      <DropdownDataProvider>
        {nextWidget === 'charts' && nextWidget !== activeWidget && <LotProgressChart />}
      </DropdownDataProvider>

      {nextWidget === 'handedover-charts' && nextWidget !== activeWidget && <HandedOverAreaChart />}

      {/* Progress on Accessible Pier Locations */}
      <DropdownDataProvider>
        {nextWidget === 'pierbatch-charts' && nextWidget !== activeWidget && <PierBatchChart />}
      </DropdownDataProvider>
    </>
  );
}

export default ActionPanel;
