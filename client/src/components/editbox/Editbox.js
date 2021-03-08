import React from "react";
import PropTypes from "prop-types";
import "./Editbox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Editbox = ({ value, placeholder, Icon }) => {
  return (
    <div className="editbox">
      <i>
        <FontAwesomeIcon icon={Icon} className="editbox__icon" />
      </i>
      <input
        className="editbox__input"
        type="text"
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

Editbox.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Editbox;
