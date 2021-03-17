import React, { useState } from "react";
import PropTypes from "prop-types";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import moduleName from "../muiSelect/MuiSelect";
import MuiSelect from "../muiSelect/MuiSelect";
import "../editbox/Editbox.css";

const CountrySelect = (props) => {
  const [regionData, setRegionData] = useState({
    country: "",
    region: "",
  });

  const { country, region } = regionData;

  const selectCountry = (val) => {
    setRegionData({ ...regionData, country: val });
  };

  const selectRegion = (val) => {
    setRegionData({ ...regionData, region: val });
  };

  return (
    <div>
      <CountryDropdown
        className="editBox"
        name="country"
        value={country}
        onChange={(val) => selectCountry(val)}
      />
      <RegionDropdown
        name={region}
        country={country}
        value={region}
        onChange={(val) => selectRegion(val)}
      />
    </div>
  );
};

CountrySelect.propTypes = {};

export default CountrySelect;
