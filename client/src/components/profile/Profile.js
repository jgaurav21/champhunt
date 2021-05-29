import React from "react";
import PropTypes from "prop-types";

import "./Profile.css";
import EditIcon from "@material-ui/icons/Edit";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="face profileCard ">
        <div className="profileName">
          <input
            className="profile__editLabel profileTitle"
            type="text"
            value="ROHIT SHARMA"
          />
          <input
            disabled
            className="profile__editLabel profileSubTitle"
            type="text"
            value="Right Hand Batsman"
          />
          <input
            disabled
            className="profile__editLabel profileSubTitle"
            type="text"
            value="Right Arm Bowler"
          />
        </div>
      </div>
      <div className="face profileCard">
        <div className="profileCover">
          <img
            src={
              "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/11/11/936846-rohit-2.jpg"
            }
            alt="R"
          />
          <EditIcon />
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
