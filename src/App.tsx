import { useRef, useEffect, useState } from 'react';
import Select from 'react-select';
import { map, view, basemaps, layerList } from './Scene';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
  CalciteLabel,
} from '@esri/calcite-components-react';
import { dateUpdate, zoomToLayer } from './Query';
import LotProgressChart from './components/LotProgressChart';
import ExpropriationList from './components/ExpropriationList';
import loadable from '@loadable/component';
import { lotLayer } from './layers';
import LotChart from './components/LotChart';
import { DropDownData } from './customClass';
import HandedOverAreaChart from './components/HandedOverAreaChart';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  //**** Set states */
  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // For dropdown filter
  const [initMunicipalBarangay, setInitMunicipalBarangay] = useState([]);

  const [municipality, setMunicipality] = useState<null | any>(null);
  const [barangay, setBarangay] = useState<null | any>(null);
  const [barangayList, setBarangayList] = useState([]);

  // loadable for code splitting
  const NloChart = loadable(() => import('./components/NloChart'));
  const StructureChart = loadable(() => import('./components/StructureChart'));

  //**** Create dropdonw list */
  useEffect(() => {
    const dropdownData = new DropDownData({
      featureLayers: [lotLayer],
      fieldNames: ['Municipality', 'Barangay'],
    });

    dropdownData.dropDownQuery().then((response: any) => {
      setInitMunicipalBarangay(response);
    });

    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });
  }, []);

  // Add zoomToLayer in App component, not LotChart component
  useEffect(() => {
    zoomToLayer(lotLayer);
  }, [municipality, barangay]);

  // handle change event of the Municipality dropdown
  const handleMunicipalityChange = (obj: any) => {
    setMunicipality(obj);
    setBarangayList(obj.field2);
    setBarangay(null);
  };

  // handle change event of the barangay dropdownff
  const handleBarangayChange = (obj: any) => {
    setBarangay(obj);
  };

  // End of dropdown list
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

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize
       */

      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
        // fontSize: '0.75rem',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      color: '#ffffff',
      touchUi: false,
      // fontSize: '0.75rem',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <div>
      <CalciteShell>
        <CalciteTabs slot="panel-end" layout="center" scale="m">
          <CalciteTabNav slot="title-group" id="thetabs">
            <CalciteTabTitle class="Land">Land</CalciteTabTitle>
            <CalciteTabTitle class="Structure">Structure</CalciteTabTitle>
            <CalciteTabTitle class="NLO">NLO</CalciteTabTitle>
            <CalciteTabTitle class="ExproList">ExproList</CalciteTabTitle>
          </CalciteTabNav>
          {/* CalciteTab: Lot */}
          <CalciteTab>
            <LotChart
              municipal={municipality === null ? '' : municipality.field1}
              barangay={barangay === null ? '' : barangay.name}
            />
          </CalciteTab>
          {/* CalciteTab: Structure */}
          <CalciteTab>
            <StructureChart
              municipal={municipality === null ? '' : municipality.field1}
              barangay={barangay === null ? '' : barangay.name}
            />
          </CalciteTab>

          {/* CalciteTab: Non-Land Owner */}
          <CalciteTab>
            <NloChart
              municipal={municipality === null ? '' : municipality.field1}
              barangay={barangay === null ? '' : barangay.name}
            />
          </CalciteTab>

          {/* CalciteTab: List of Lots under Expropriation */}
          <CalciteTab>
            <ExpropriationList
              municipal={municipality === null ? '' : municipality.field1}
              barangay={barangay === null ? '' : barangay.name}
            />
          </CalciteTab>
        </CalciteTabs>

        {/* Header */}
        <header
          slot="header"
          id="header-title"
          style={{
            display: 'flex',
            width: '100%',
            height: '70px',
            padding: '0 1rem',
            borderStyle: 'solid',
            borderWidth: 1,
          }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'55px'}
            width={'55px'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">SC LAND ACQUISITION</b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

          {/* Dropdown List */}
          <div className="dropdownFilterLayout">
            <div
              style={{
                color: 'white',
                fontSize: '0.85rem',
                margin: 'auto',
                paddingRight: '0.5rem',
              }}
            >
              Municipality
            </div>
            <Select
              placeholder="Select Municipality"
              value={municipality}
              options={initMunicipalBarangay}
              onChange={handleMunicipalityChange}
              getOptionLabel={(x: any) => x.field1}
              styles={customstyles}
            />
            <br />
            <div
              style={{
                color: 'white',
                fontSize: '0.85rem',
                margin: 'auto',
                paddingRight: '0.5rem',
              }}
            >
              Barangay
            </div>
            <Select
              placeholder="Select Barangay"
              value={barangay}
              options={barangayList}
              onChange={handleBarangayChange}
              getOptionLabel={(x: any) => x.name}
              styles={customstyles}
            />
          </div>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'50px'}
            width={'60px'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '2rem',
            }}
          />
        </header>

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
            <CalciteList>
              <CalciteListItem
                label=""
                description=""
                value="land-acquisition"
                ref={layerListDiv}
              ></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <CalciteList>
              <CalciteListItem value="basemaps" ref={calcitePanelBasemaps}></CalciteListItem>
            </CalciteList>
          </CalcitePanel>

          <CalcitePanel
            class="timeSeries-panel"
            height-scale="l"
            data-panel-id="charts"
            hidden
          ></CalcitePanel>

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
                  <li>
                    You can <b>filter the data</b> by City and Barangy using dropdown lists.
                  </li>
                  <li>
                    <b>Click a tab</b> below the dropdown lists to view progress on land, structure,
                    or NLO in charts.
                  </li>
                  <li>
                    <b>Click series in pie charts</b> to view progress on the corresponding
                    lots/structures/NLO on the map.
                  </li>
                  <li>
                    <b>Lots under expropriation</b> are available in the 'Expro List' tab.
                  </li>
                  <li>
                    Click/unclick widgets icon for viewing Layer list, legend, basemaps, and locate
                    widgets under the main title.
                  </li>
                  <li>
                    <b>Toggle a checkbox</b> above the Land pie chart to view{' '}
                    <b>handed-over areas</b> (m2) of Contract Packages.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div className="mapDiv" ref={mapDiv}></div>

        {/* Lot progress chart is loaded ONLY when charts widget is clicked. */}
        {nextWidget === 'charts' && nextWidget !== activeWidget ? (
          <LotProgressChart
            municipal={municipality === null ? '' : municipality.field1}
            barangay={barangay === null ? '' : barangay.name}
            nextwidget={nextWidget === activeWidget ? null : nextWidget}
          />
        ) : (
          ''
        )}

        {/* Handed-Over Area Graph */}
        {nextWidget === 'handedover-charts' && nextWidget !== activeWidget ? (
          <HandedOverAreaChart />
        ) : (
          ''
        )}
      </CalciteShell>
    </div>
  );
}

export default App;
