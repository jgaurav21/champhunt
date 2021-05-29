import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/sidebar/Sidebar";
import Profile from "../../components/profile/Profile";

import "./ProfilePage.css";

const ProfilePage = (props) => {
  return (
    <div className="profilePage">
      <Sidebar />
      <Profile />
    </div>
  );
};

ProfilePage.propTypes = {};

export default ProfilePage;
