import React from "react";
import PropTypes from "prop-types";
import "./SidebarRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarRow = ({ name, Icon, fontAwesomeIcon }) => {
  return (
    <div className="sidebarRow">
      {!fontAwesomeIcon ? (
        <Icon />
      ) : (
        <i>
          <FontAwesomeIcon icon={Icon} />
        </i>
      )}

      <h4>{name}</h4>
    </div>
  );
};

SidebarRow.propTypes = {
  name: PropTypes.string.isRequired,
  fontAwesomeIcon: PropTypes.bool,
};

export default SidebarRow;
