import React from "react";
import PropTypes from "prop-types";
import { Person, Search } from "@material-ui/icons";
import { Chat } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";

import "./Topbar.css";

const Topbar = (props) => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <div className="logo">CHAMPHUNT</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchbarIcon" />
          <input
            type="text"
            placeholder="Search People or Posts"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <div className="topbarLink">Homepage</div>
          <div className="topbarLink">Timeline</div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img
          src={
            "https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg"
          }
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
};

Topbar.propTypes = {};

export default Topbar;
