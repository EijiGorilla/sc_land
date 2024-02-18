/* eslint-disable array-callback-return */
import { useEffect, useState } from 'react';
import { lotLayer } from '../layers';
import Query from '@arcgis/core/rest/support/Query';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteList,
  CalciteListItem,
  CalciteChip,
  CalciteAvatar,
} from '@esri/calcite-components-react';
import { view } from '../Scene';

// Zoom in to selected lot from expropriation list
let highlightSelect: any;
function resultClickHandler(event: any) {
  var queryExtent = new Query({
    objectIds: [event.target.value],
  });
  lotLayer.queryExtent(queryExtent).then((result: any) => {
    result.extent &&
      view.goTo({
        target: result.extent,
        speedFactor: 2,
        zoom: 17,
      });
  });

  view.whenLayerView(lotLayer).then((layerView: any) => {
    highlightSelect && highlightSelect.remove();
    highlightSelect = layerView.highlight([event.target.value]);

    view.on('click', () => {
      layerView.filter = null;
      highlightSelect.remove();
    });
  });
}

const ExpropriationList = ({ municipal, barangay }: any) => {
  const [exproItem, setExproItem] = useState<undefined | any>([]);
  const queryMunicipality = "Municipality = '" + municipal + "'";
  const queryBarangay = "Barangay = '" + barangay + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryExpro = 'StatusLA = 5';

  useEffect(() => {
    setExproItem([]);
    var query = lotLayer.createQuery();
    query.outFields = ['*'];
    if (!municipal) {
      query.where = queryExpro;
    } else if (municipal && !barangay) {
      query.where = queryMunicipality + ' AND ' + queryExpro;
    } else if (barangay) {
      query.where = queryMunicipalBarangay + ' AND ' + queryExpro;
    }

    query.returnGeometry = true;
    lotLayer.queryFeatures(query).then((result: any) => {
      // eslint-disable-next-line array-callback-return
      result.features.map((feature: any, index: any) => {
        const attributes = feature.attributes;
        const lotid = attributes.LotID;
        const cp = attributes.CP;
        const municipal = attributes.Municipality;
        const landowner = attributes.LandOwner;
        const objectid = attributes.OBJECTID;
        const id = index;

        setExproItem((prev: any) => [
          ...prev,
          {
            id: id,
            lotid: lotid,
            landowner: landowner,
            municipality: municipal,
            cp: cp,
            objectid: objectid,
          },
        ]);
      });
    });
  }, [municipal, barangay]);

  return (
    <>
      <CalciteList id="result-list" label="exproListLabel">
        {exproItem && // Extract unique objects from the array
          exproItem
            .filter(
              (ele: any, ind: any) =>
                ind === exproItem.findIndex((elem: any) => elem.objectid === ele.objectid),
            )
            .map((result: any, index: any) => {
              return (
                // need 'key' to upper div and inside CalciteListItem
                <div key={index}>
                  <CalciteListItem
                    key={result.id}
                    label={result.lotid}
                    description={result.landowner}
                    value={result.objectid}
                    selected={undefined}
                    onCalciteListItemSelect={(event: any) => resultClickHandler(event)}
                  >
                    <CalciteChip value={result.cp} slot="content-end" scale="s" id="exproListChip">
                      <CalciteAvatar full-name={result.municipality} scale="s"></CalciteAvatar>
                      {result.cp}
                    </CalciteChip>
                  </CalciteListItem>
                </div>
              );
            })}
      </CalciteList>
    </>
  );
};

export default ExpropriationList;
