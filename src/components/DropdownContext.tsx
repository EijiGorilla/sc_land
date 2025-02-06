import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Select from 'react-select';
import { useBetween } from 'use-between';
import '../index.css';
import '../App.css';
import { DropDownData } from '../customClass';
import { lotLayer } from '../layers';
import { barangayField, municipalityField } from '../StatusUniqueValues';

function DropdownData() {
  const [initMunicipalBarangay, setInitMunicipalBarangay] = useState([]);

  const [municipality, setMunicipality] = useState<null | any>(null);
  const [barangays, setBarangay] = useState<null | any>(null);
  const [barangayList, setBarangayList] = useState([]);

  useEffect(() => {
    const dropdownData = new DropDownData({
      featureLayers: [lotLayer],
      fieldNames: [municipalityField, barangayField],
    });

    dropdownData.dropDownQuery().then((response: any) => {
      setInitMunicipalBarangay(response);
    });
  }, []);

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

  return {
    handleMunicipalityChange,
    handleBarangayChange,
    municipality,
    initMunicipalBarangay,
    barangays,
    barangayList,
  };
}

function DropdownListDisplay() {
  const {
    handleMunicipalityChange,
    handleBarangayChange,
    municipality,
    initMunicipalBarangay,
    barangays,
    barangayList,
  } = useBetween(DropdownData);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      color: '#ffffff',
      touchUi: false,
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
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
        value={barangays}
        options={barangayList}
        onChange={handleBarangayChange}
        getOptionLabel={(x: any) => x.name}
        styles={customstyles}
      />
    </div>
  );
}

type DrodownContextType = {
  municipality: any;
  barangays: any;
};

type Props = {
  children: ReactNode;
};

const initialState = {
  municipality: undefined,
  barangays: undefined,
};

const DropdownContext = createContext<DrodownContextType>({
  ...initialState,
});

export function DropdownDataProvider({ children }: Props) {
  const { municipality, barangays } = useBetween(DropdownData);

  return (
    <DropdownContext.Provider
      value={{
        municipality,
        barangays,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}

export const useDropdownContext = () => useContext(DropdownContext);
export default DropdownListDisplay;
