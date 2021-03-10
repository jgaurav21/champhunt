import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import "./ChampButton.css";

const ChampButton = ({ value, color = "primary", variant = "", onClick }) => {
  return (
    <div className="button">
      <Button variant={variant} color={color} onClick={onClick}>
        {value}
      </Button>
    </div>
  );
};

ChampButton.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  variant: PropTypes.oneOf(["", "outlined", "contained"]),
  onClick: PropTypes.func,
};

export default ChampButton;
