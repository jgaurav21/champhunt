import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const MuiTextBox = ({
  type,
  label,
  defaultValue,
  width = "200px",
  color = "primary",
}) => {
  return (
    <div className="datePicker">
      <TextField
        id="date"
        label={label}
        type={type}
        variant="outlined"
        style={{ width: `${width}` }}
        defaultValue={defaultValue}
        color={color}
      />
    </div>
  );
};

MuiTextBox.propTypes = {
  label: PropTypes.string,
};

export default MuiTextBox;
