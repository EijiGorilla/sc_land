import { dateTable, lotLayer, nloLayer, structureLayer } from './layers';
import StatisticDefinition from '@arcgis/core/rest/support/StatisticDefinition';
import * as am5 from '@amcharts/amcharts5';
import { view } from './Scene';
import {
  nloStatusLabel,
  nloStatusQuery,
  lotMoaField,
  lotMoaStatus,
  lotStatusField,
  lotStatusLabel,
  lotStatusQuery,
  nloStatusField,
  structureMoaField,
  structureMoaStatus,
  structurePteField,
  structureStatusField,
  structureStatusLabel,
  structureStatusQuery,
  lotHandedOverDateField,
  lotHandedOverAreaField,
  handedOverLotField,
  lotPriorityField,
  municipalityField,
  barangayField,
  lotIdField,
  lotHandedOverField,
  affectedAreaField,
  cpField,
} from './StatusUniqueValues';

// Updat date
export async function dateUpdate() {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  query.where = "project = 'SC'" + ' AND ' + "category = 'Land Acquisition'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      const date = new Date(result.attributes.date);
      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return final;
    });
    return dates;
  });
}

export async function generateLotData(priority: any, municipal: any, barangay: any) {
  // Query
  const queryPriority = `${lotPriorityField} = '` + priority + "'";
  const queryMunicipality = `${municipalityField} = '` + municipal + "'";
  const queryPriorityMunicipality = queryPriority + ' AND ' + queryMunicipality;
  const queryBarangay = `${barangayField} = '` + barangay + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryPriorityMunicipalBarangay = queryPriorityMunicipality + ' AND ' + queryBarangay;
  const queryField = lotStatusField + ' IS NOT NULL';

  var total_count = new StatisticDefinition({
    onStatisticField: lotStatusField,
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  query.outFields = [lotStatusField];
  query.outStatistics = [total_count];
  query.orderByFields = [lotStatusField];
  query.groupByFieldsForStatistics = [lotStatusField];

  if (priority === 'None') {
    if (!municipal) {
      query.where = '1=1';
    } else if (municipal && !barangay) {
      query.where = queryField + ' AND ' + queryMunicipality;
    } else if (municipal && barangay) {
      query.where = queryField + ' AND ' + queryMunicipalBarangay;
    }
  } else if (priority !== 'None') {
    if (!municipal) {
      query.where = queryField + ' AND ' + queryPriority;
    } else if (municipal && !barangay) {
      query.where = queryField + ' AND ' + queryPriorityMunicipality;
    } else if (municipal && barangay) {
      query.where = queryField + ' AND ' + queryPriorityMunicipalBarangay;
    }
  }

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const status_id = attributes.StatusLA;
      const count = attributes.total_count;
      return Object.assign({
        category: lotStatusLabel[status_id - 1],
        value: count,
      });
    });

    const data1: any = [];
    lotStatusLabel.map((status: any, index: any) => {
      const find = data.find((emp: any) => emp.category === status);
      const value = find === undefined ? 0 : find?.value;
      const object = {
        category: status,
        value: value,
        sliceSettings: {
          fill: am5.color(lotStatusQuery[index].color),
        },
      };
      data1.push(object);
    });
    return data1;
  });
}

export async function generateLotNumber() {
  var total_lot_number = new StatisticDefinition({
    onStatisticField: `CASE WHEN ${lotIdField} IS NOT NULL THEN 1 ELSE 0 END`, // 'CASE WHEN LotID IS NOT NULL THEN 1 ELSE 0 END',
    outStatisticFieldName: 'total_lot_number',
    statisticType: 'sum',
  });

  const onStatisticFieldValue = 'CASE WHEN ' + lotStatusField + ' >= 0 THEN 1 ELSE 0 END';
  var total_lot_pie = new StatisticDefinition({
    onStatisticField: onStatisticFieldValue,
    outStatisticFieldName: 'total_lot_pie',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_lot_number, total_lot_pie];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totalLotNumber = stats.total_lot_number;
    const totalLotPie = stats.total_lot_pie;
    return [totalLotNumber, totalLotPie];
  });
}

// For Permit-to-Enter
export async function generateHandedOver() {
  var total_handedover_lot = new StatisticDefinition({
    onStatisticField: `CASE WHEN ${lotHandedOverField} = 1 THEN 1 ELSE 0 END`,
    outStatisticFieldName: 'total_handedover_lot',
    statisticType: 'sum',
  });

  var total_lot_N = new StatisticDefinition({
    onStatisticField: lotIdField,
    outStatisticFieldName: 'total_lot_N',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  //query.where = 'LotID IS NOT NULL';
  query.outStatistics = [total_handedover_lot, total_lot_N];
  query.returnGeometry = true;

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const handedover = stats.total_handedover_lot;
    const totaln = stats.total_lot_N;
    const percent = ((handedover / totaln) * 100).toFixed(0);
    return [percent, handedover];
  });
}

export async function generateLotMoaData(priority: any, municipal: any, barangay: any) {
  // Query
  const queryPriority = `${lotPriorityField} = '` + priority + "'";
  const queryMunicipality = `${municipalityField} = '` + municipal + "'";
  const queryPriorityMunicipality = queryPriority + ' AND ' + queryMunicipality;
  const queryBarangay = `${barangayField} = '` + barangay + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryPriorityMunicipalBarangay = queryPriorityMunicipality + ' AND ' + queryBarangay;
  const queryField = lotStatusField + ' IS NOT NULL';

  var total_count = new StatisticDefinition({
    onStatisticField: lotMoaField,
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  query.outFields = [lotMoaField];
  query.outStatistics = [total_count];
  query.orderByFields = [lotMoaField];
  query.groupByFieldsForStatistics = [lotMoaField];

  if (priority === 'None') {
    if (!municipal) {
      query.where = '1=1';
    } else if (municipal && !barangay) {
      query.where = queryField + ' AND ' + queryMunicipality;
    } else if (municipal && barangay) {
      query.where = queryField + ' AND ' + queryMunicipalBarangay;
    }
  } else if (priority !== 'None') {
    if (!municipal) {
      query.where = queryField + ' AND ' + queryPriority;
    } else if (municipal && !barangay) {
      query.where = queryField + ' AND ' + queryPriorityMunicipality;
    } else if (municipal && barangay) {
      query.where = queryField + ' AND ' + queryPriorityMunicipalBarangay;
    }
  }
  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const status_id = attributes.MoA;
      const count = attributes.total_count;
      return Object.assign({
        category: lotMoaStatus[status_id - 1],
        value: count,
      });
    });

    const data1: any = [];
    lotMoaStatus.map((status: any, index: any) => {
      const find = data.find((emp: any) => emp.category === status);
      const value = find === undefined ? 0 : find?.value;
      data1.push({ category: status, value: value });
    });
    return data1;
  });
}

// For monthly progress chart of lot
export async function generateLotProgress(municipality: any, barangay: any) {
  var total_count_lot = new StatisticDefinition({
    onStatisticField: lotHandedOverDateField,
    outStatisticFieldName: 'total_count_lot',
    statisticType: 'count',
  });

  var query = lotLayer.createQuery();
  query.outStatistics = [total_count_lot];
  // eslint-disable-next-line no-useless-concat
  const municipal = municipality;
  const barang = barangay;
  const queryMunicipality = `${municipalityField} = '` + municipal + "'";
  const queryBarangay = `${barangayField} = '` + barang + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryHandedOverDate = lotHandedOverDateField + ' IS NOT NULL';

  if (municipal && barang) {
    query.where = queryHandedOverDate + ' AND ' + queryMunicipalBarangay;
  } else if (municipal && !barang) {
    query.where = queryHandedOverDate + ' AND ' + queryMunicipality;
  } else {
    query.where = queryHandedOverDate;
  }

  query.outFields = [lotHandedOverDateField];
  query.orderByFields = [lotHandedOverDateField];
  query.groupByFieldsForStatistics = [lotHandedOverDateField];

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const date = attributes.HandedOverDate;
      const total_handedover = attributes.total_count_lot;

      // compile in object array
      return Object.assign({
        date: date,
        value: total_handedover,
      });
    });

    return data;
  });
}

export async function generateHandedOverAreaData() {
  var total_affected_area = new StatisticDefinition({
    onStatisticField: affectedAreaField,
    outStatisticFieldName: 'total_affected_area',
    statisticType: 'sum',
  });

  var total_handedover_area = new StatisticDefinition({
    onStatisticField: lotHandedOverAreaField,
    outStatisticFieldName: 'total_handedover_area',
    statisticType: 'sum',
  });

  var query = lotLayer.createQuery();
  query.where = `${cpField} IS NOT NULL`;
  query.outStatistics = [total_affected_area, total_handedover_area];
  query.orderByFields = [cpField];
  query.returnGeometry = true;
  query.groupByFieldsForStatistics = [cpField];

  return lotLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const affected = attributes.total_affected_area;
      const handedOver = attributes.total_handedover_area;
      const cp = attributes.CP;

      const percent = ((handedOver / affected) * 100).toFixed(0);

      return Object.assign(
        {},
        {
          category: cp,
          value: percent,
        },
      );
    });

    return data;
  });
}

export async function generateStructureData(municipal: any, barangay: any) {
  // Query
  const queryMunicipality = `${municipalityField} = '` + municipal + "'";
  const queryBarangay = `${barangayField} = '` + barangay + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryField = structureStatusField + ' IS NOT NULL';

  var total_count = new StatisticDefinition({
    onStatisticField: structureStatusField,
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = structureLayer.createQuery();
  query.outFields = [structureStatusField];
  query.outStatistics = [total_count];
  query.orderByFields = [structureStatusField];
  query.groupByFieldsForStatistics = [structureStatusField];
  if (municipal && !barangay) {
    query.where = queryField + ' AND ' + queryMunicipality;
  } else if (barangay) {
    query.where = queryField + ' AND ' + queryMunicipalBarangay;
  }

  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const status_id = attributes.StatusStruc;
      const count = attributes.total_count;
      return Object.assign({
        category: structureStatusLabel[status_id - 1],
        value: count,
      });
    });

    const data1: any = [];
    structureStatusLabel.map((status: any, index: any) => {
      const find = data.find((emp: any) => emp.category === status);
      const value = find === undefined ? 0 : find?.value;
      const object = {
        category: status,
        value: value,
        sliceSettings: {
          fill: am5.color(structureStatusQuery[index].color),
        },
      };
      data1.push(object);
    });
    return data1;
  });
}

// For Permit-to-Enter
export async function generateStrucNumber() {
  const onStatisticFieldPte = 'CASE WHEN ' + structurePteField + ' = 1 THEN 1 ELSE 0 END';
  var total_pte_structure = new StatisticDefinition({
    onStatisticField: onStatisticFieldPte,
    outStatisticFieldName: 'total_pte_structure',
    statisticType: 'sum',
  });

  const onStatisticFieldStruc = 'CASE WHEN ' + structureStatusField + ' >= 1 THEN 1 ELSE 0 END';
  var total_struc_N = new StatisticDefinition({
    onStatisticField: onStatisticFieldStruc,
    outStatisticFieldName: 'total_struc_N',
    statisticType: 'sum',
  });

  var query = structureLayer.createQuery();

  query.outStatistics = [total_pte_structure, total_struc_N];
  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const pte = stats.total_pte_structure;
    const totaln = stats.total_struc_N;
    const percPTE = Number(((pte / totaln) * 100).toFixed(0));
    return [percPTE, pte, totaln];
  });
}

export async function generateStrucMoaData(municipal: any, barangay: any) {
  // Query
  const queryMunicipality = `${municipalityField} = '` + municipal + "'";
  const queryBarangay = `${barangayField} = '` + barangay + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryField = structureMoaField + ' IS NOT NULL';

  var total_count = new StatisticDefinition({
    onStatisticField: structureMoaField,
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = structureLayer.createQuery();
  query.outFields = [structureMoaField];
  query.outStatistics = [total_count];
  query.orderByFields = [structureMoaField];
  query.groupByFieldsForStatistics = [structureMoaField];

  if (municipal && !barangay) {
    query.where = queryField + ' AND ' + queryMunicipality;
  } else if (barangay) {
    query.where = queryField + ' AND ' + queryMunicipalBarangay;
  }

  return structureLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const status_id = attributes.MoA;
      const count = attributes.total_count;
      return Object.assign({
        category: structureMoaStatus[status_id - 1],
        value: count,
      });
    });

    const data1: any = [];
    structureMoaStatus.map((status: any, index: any) => {
      const find = data.find((emp: any) => emp.category === status);
      const value = find === undefined ? 0 : find?.value;
      data1.push({ category: status, value: value });
    });
    return data1;
  });
}

export async function generateNloData(municipal: any, barangay: any) {
  // Query
  const queryMunicipality = `${municipalityField} = '` + municipal + "'";
  const queryBarangay = `${barangayField} = '` + barangay + "'";
  const queryMunicipalBarangay = queryMunicipality + ' AND ' + queryBarangay;
  const queryField = nloStatusField + ' IS NOT NULL';

  var total_count = new StatisticDefinition({
    onStatisticField: nloStatusField,
    outStatisticFieldName: 'total_count',
    statisticType: 'count',
  });

  var query = nloLayer.createQuery();
  query.outFields = [nloStatusField];
  query.outStatistics = [total_count];
  query.orderByFields = [nloStatusField];
  query.groupByFieldsForStatistics = [nloStatusField];
  if (municipal && !barangay) {
    query.where = queryField + ' AND ' + queryMunicipality;
  } else if (barangay) {
    query.where = queryField + ' AND ' + queryMunicipalBarangay;
  }

  return nloLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features;
    const data = stats.map((result: any, index: any) => {
      const attributes = result.attributes;
      const status_id = attributes.StatusRC;
      const count = attributes.total_count;
      return Object.assign({
        category: nloStatusLabel[status_id - 1],
        value: count,
      });
    });

    const data1: any = [];
    nloStatusLabel.map((status: any, index: any) => {
      const find = data.find((emp: any) => emp.category === status);
      const value = find === undefined ? 0 : find?.value;
      const object = {
        category: status,
        value: value,
        sliceSettings: {
          fill: am5.color(nloStatusQuery[index].color),
        },
      };
      data1.push(object);
    });
    return data1;
  });
}

export async function generateNloNumber() {
  const onStatisticFieldNlo = 'CASE WHEN ' + nloStatusField + ' >= 1 THEN 1 ELSE 0 END';
  var total_lbp = new StatisticDefinition({
    onStatisticField: onStatisticFieldNlo,
    outStatisticFieldName: 'total_lbp',
    statisticType: 'sum',
  });

  var query = nloLayer.createQuery();
  query.outStatistics = [total_lbp];
  return nloLayer.queryFeatures(query).then((response: any) => {
    var stats = response.features[0].attributes;
    const totalnlo = stats.total_lbp;

    return totalnlo;
  });
}

export const dateFormat = (inputDate: any, format: any) => {
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
};

// Thousand separators function
export function thousands_separators(num: any) {
  if (num) {
    var num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return num_parts.join('.');
  }
}

export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}

export function highlightUrgent(layer: any) {
  let highlight: any;
  view.whenLayerView(layer).then((urgentLayerView) => {
    var query = layer.createQuery();
    layer.queryFeatures(query).then((results: any) => {
      const length = results.features.length;
      let objID = [];
      for (var i = 0; i < length; i++) {
        var obj = results.features[i].attributes.OBJECTID;
        objID.push(obj);
      }

      if (highlight) {
        highlight.remove();
      }
      highlight = urgentLayerView.highlight(objID);
    });
  });
}

let highlight: any;
export function highlightLot(layer: any) {
  view.whenLayerView(layer).then((urgentLayerView) => {
    var query = layer.createQuery();
    layer.queryFeatures(query).then((results: any) => {
      const length = results.features.length;
      let objID = [];
      for (var i = 0; i < length; i++) {
        var obj = results.features[i].attributes.OBJECTID;
        objID.push(obj);
      }

      if (highlight) {
        highlight.remove();
      }
      highlight = urgentLayerView.highlight(objID);
    });
  });
}

export function highlightHandedOverLot(layer: any) {
  view.whenLayerView(layer).then((urgentLayerView) => {
    var query = layer.createQuery();
    query.where = `${handedOverLotField} = 1`;
    layer.queryFeatures(query).then((results: any) => {
      const length = results.features.length;
      let objID = [];
      for (var i = 0; i < length; i++) {
        var obj = results.features[i].attributes.OBJECTID;
        objID.push(obj);
      }

      if (highlight) {
        highlight.remove();
      }
      highlight = urgentLayerView.highlight(objID);
    });
  });
}

export function highlightRemove(layer: any) {
  if (highlight) {
    highlight.remove();
  }
}
