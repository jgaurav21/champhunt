import React from "react";
import PropTypes from "prop-types";

import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Pitch from "../pitch/Pitch";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = (props) => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Pitch />
        <Rightbar />
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
