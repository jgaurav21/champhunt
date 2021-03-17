import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import "./ProfileCover.css";

const ProfileCover = ({
  coverPhoto,
  displayPic,
  profileName,
  profileDescription,
}) => {
  return (
    <div className="profileCover">
      <div className="profileCover__coverPhoto">
        <img src={coverPhoto} alt="" />
      </div>
      <div className="profilePicture">
        <Avatar src={displayPic} />
      </div>

      <div className="profileCover__editProfile">
        <h1>{profileName}</h1>
        <EditIcon />
      </div>
      <h5>{profileDescription}</h5>
    </div>
  );
};

ProfileCover.propTypes = {
  coverPhoto: PropTypes.string,
  displayPic: PropTypes.string,
  profileDescription: PropTypes.string,
  profileName: PropTypes.string,
};

export default ProfileCover;
