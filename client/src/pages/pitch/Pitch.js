import React from "react";
import PropTypes from "prop-types";

import "./Pitch.css";
import Share from "../../components/share/Share";
import Post from "./Post";

const Pitch = (props) => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

Pitch.propTypes = {};

export default Pitch;
