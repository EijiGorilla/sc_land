import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { CalciteShell } from '@esri/calcite-components-react';
import ActionPanel from './components/ActionPanel';
import MapDisplay from './components/MapDisplay';
import MainChart from './components/MainChart';
import Header from './components/Header';
import MeasurementTool from './components/MeasurementTool';

function App() {
  return (
    <div>
      <CalciteShell>
        {/* Note that the order of components matter! */}
        {/* Action Panel */}
        <ActionPanel />

        {/* Map */}
        <MapDisplay />
        {/* <div className="mapDiv" ref={mapDiv}></div> */}

        {/* Main Chart */}
        <MainChart />

        {/* Header */}
        <Header />

        {/* Measurement Tools */}
        <MeasurementTool />
      </CalciteShell>
    </div>
  );
}

export default App;
