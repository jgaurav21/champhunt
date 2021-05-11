import React from "react";
import PropTypes from "prop-types";
import batsman from "../images/player.png";

import "./Background.css";

const Background = (props) => {
  return (
    <div className="page">
      {/* <div className="circle"></div> */}
      <img src={batsman} alt="" />
      <div className="glass"></div>
    </div>
  );
};

Background.propTypes = {};

export default Background;
