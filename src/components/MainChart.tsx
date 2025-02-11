import '@esri/calcite-components/dist/components/calcite-tabs';
import '@esri/calcite-components/dist/components/calcite-tab';
import '@esri/calcite-components/dist/components/calcite-tab-nav';
import '@esri/calcite-components/dist/components/calcite-tab-title';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteTab,
  CalciteTabs,
  CalciteTabNav,
  CalciteTabTitle,
} from '@esri/calcite-components-react';
import { useEffect, useState } from 'react';
import { lotLayer } from '../layers';
import { DropdownDataProvider } from './DropdownContext';
import LotChart from './LotChart';
import loadable from '@loadable/component';
import ExpropriationList from './ExpropriationList';
import '../index.css';
import '../App.css';

function MainChart() {
  const [lotLayerLoaded, setLotLayerLoaded] = useState<any>();
  useEffect(() => {
    lotLayer.load().then(() => {
      setLotLayerLoaded(lotLayer.loadStatus);
    });
  });

  // loadable for code splitting
  const NloChart = loadable(() => import('./NloChart'));
  const StructureChart = loadable(() => import('./StructureChart'));

  return (
    <>
      <CalciteTabs slot="panel-end" layout="center" scale="m">
        <CalciteTabNav slot="title-group" id="thetabs">
          <CalciteTabTitle class="Land">Land</CalciteTabTitle>
          <CalciteTabTitle class="Structure">Structure</CalciteTabTitle>
          <CalciteTabTitle class="NLO">NLO</CalciteTabTitle>
          <CalciteTabTitle class="ExproList">ExproList</CalciteTabTitle>
        </CalciteTabNav>

        {/* CalciteTab: Lot */}
        <CalciteTab>
          <DropdownDataProvider>{lotLayerLoaded === 'loaded' && <LotChart />}</DropdownDataProvider>
        </CalciteTab>

        {/* CalciteTab: Structure */}
        <CalciteTab>
          <DropdownDataProvider>
            <StructureChart />
          </DropdownDataProvider>
        </CalciteTab>

        {/* CalciteTab: Non-Land Owner */}
        <CalciteTab>
          <DropdownDataProvider>
            <NloChart />
          </DropdownDataProvider>
        </CalciteTab>

        {/* CalciteTab: List of Lots under Expropriation */}
        <CalciteTab>
          <DropdownDataProvider>
            <ExpropriationList />
          </DropdownDataProvider>
        </CalciteTab>
      </CalciteTabs>
    </>
  );
}

export default MainChart;
