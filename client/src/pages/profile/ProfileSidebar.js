import React from "react";
import PropTypes from "prop-types";
import SidebarRow from "../../components/sidebar/SidebarRow";
import { faUser, faUserEdit } from "@fortawesome/free-solid-svg-icons";

const ProfileSidebar = (props) => {
  return (
    <div className="sidebar">
      <SidebarRow name="Edit" Icon={faUserEdit} fontAwesomeIcon />
      <SidebarRow name="Followers" Icon={faUser} fontAwesomeIcon />
      <SidebarRow name="Following" Icon={faUser} fontAwesomeIcon />
    </div>
  );
};

ProfileSidebar.propTypes = {};

export default ProfileSidebar;
