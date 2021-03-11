import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import Crop75Icon from "@material-ui/icons/Crop75";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EventIcon from "@material-ui/icons/Event";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow name="Profile" Icon={AccountCircleIcon} />
      <SidebarRow name="Pitch" Icon={Crop75Icon} />
      <SidebarRow name="Events" Icon={EventIcon} />
    </div>
  );
};

export default Sidebar;
