import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";

import "./ProfilePage.css";
import Pitch from "../pitch/Pitch";

const ProfilePage = (props) => {
  return (
    <div className="profile">
      <Topbar />
      <div className="profileContainer">
        <Sidebar />

        <div className="profileRight">
          <div className="profileTop">
            <div className="profileCover">
              <img
                src={
                  "https://m.economictimes.com/thumb/msid-70119616,width-1200,height-900,resizemode-4,imgsize-160034/rohit-sharma-the-odi-cricket-phenomenon.jpg"
                }
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  "https://www.mykhel.com/img/2018/11/rohitsharma-cropped_fg3ec7qrkgv1b6j0scq9o1gr.jpg"
                }
                alt=""
                className="profileDisplayPic"
              />
            </div>
            <div className="profileInfo">
              <h1 className="profileInfoName">ROHIT SHARMA</h1>
              <span className="profileInfo_desc">Right Hand Batsman</span>
            </div>
          </div>
          <div className="profileBottom">
            <Pitch />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
};

ProfilePage.propTypes = {};

export default ProfilePage;
