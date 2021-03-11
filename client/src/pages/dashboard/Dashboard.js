import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__body">
        <Sidebar />
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
