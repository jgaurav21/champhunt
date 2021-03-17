import React from "react";
import PropTypes from "prop-types";
import ProfileSidebar from "./ProfileSidebar";
import ProfileCover from "./ProfileCover";
import "./Profile.css";
import { Grid } from "@material-ui/core";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileSidebar />
      <div className="profile__body">
        <ProfileCover
          coverPhoto="https://c.ndtvimg.com/2020-04/u3a8nia8_ipl-trophy-twitter_625x300_13_April_20.jpg"
          displayPic="https://images.news18.com/ibnlive/uploads/2020/08/1598011792_rohit-sharma.jpg"
          profileName="Rohit Sharma"
          profileDescription="Right Hand Batsman"
        />
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
