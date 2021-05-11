import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";
import "../../components/canvas/Canvas.css";
import cover from "../../images/cover.jpg";
import ProfileSidebar from "../profile/ProfileSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@material-ui/core";

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile__home">
        <div
          className="profile__cover"
          style={{
            background: `url(${cover}),linear-gradient(145deg, #25252554, rgb(77, 77, 77))`,
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="profile__title">
            <TextField disabled value="GAURAV JOSHI" />
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
