import React from "react";
import PropTypes from "prop-types";
import "./Editbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Editbox = ({
  value,
  placeholder,
  Icon,
  type = "text",
  display,
  name,
  color,
  onChange,
}) => {
  return (
    <div
      className="editbox"
      style={{ display: `${display}`, backgroundColor: `${color}` }}
    >
      {Icon ? (
        <i>
          <FontAwesomeIcon icon={Icon} className="editbox__icon" />
        </i>
      ) : (
        <i className="editbox__icon"></i>
      )}
      <input
        className="editbox__input"
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

Editbox.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Editbox;
