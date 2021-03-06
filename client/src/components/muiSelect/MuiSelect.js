import React from "react";
import PropTypes from "prop-types";
import { Select, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import { useState } from "react";

const MuiSelect = ({ name, options, defaultValue, onChange, value }) => {
  const [data, setData] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" fullWidth>
        <InputLabel>{name}</InputLabel>
        <Select
          label={name}
          defaultValue={defaultValue}
          value={value}
          // onChange={(e) => handleChange(e)}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

MuiSelect.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
};

export default MuiSelect;
