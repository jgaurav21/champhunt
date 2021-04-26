import React from "react";
import PropTypes from "prop-types";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
} from "@material-ui/core";

const RadioButton = ({ label, options, onClick }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl fullWidth variant="outlined">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label={label}
        name={label}
        row
        // value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <FormControlLabel value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioButton.propTypes = {
  label: PropTypes.func,
  values: PropTypes.array,
  onClick: PropTypes.func,
};

export default RadioButton;
