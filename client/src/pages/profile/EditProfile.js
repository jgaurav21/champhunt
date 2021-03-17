import React from "react";
import PropTypes from "prop-types";
import Editbox from "../../components/editbox/Editbox";
import { Select } from "@material-ui/core";
import { useState } from "react";
import "./EditProfile.css";
import { connect } from "react-redux";
import { updateProfile } from "../../actions/profile";

const EditProfile = ({ isAuthenticated, updateProfile }) => {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
    state: "",
    district: "",
    country: "",
    role: "",
    favIPLTeam: "",
    favBatsman: "",
    favBowler: "",
    favAllRounder: "",
    favWK: "",
  });

  const {
    firstName,
    lastName,
    email,
    gender,
    dob,
    state,
    district,
    country,
    role,
    favIPLTeam,
    favBatsman,
    favBowler,
    favAllRounder,
    favWK,
  } = profileData;

  const handleChange = (e) => {
    e.preventDefault();
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ profileData });
  };
  return (
    <div>
      <form className="editProfile">
        <div className="registerRow">
          <Editbox
            onChange={(e) => handleChange(e)}
            name="firstName"
            value={firstName}
            placeholder="First Name"
          />
          <Editbox
            onChange={(e) => handleChange(e)}
            name="lastName"
            value={lastName}
            placeholder="LastName"
          />
          <Editbox
            onChange={(e) => handleChange(e)}
            name="email"
            value={email}
            placeholder="Email"
          />
        </div>
        <Editbox
          onChange={(e) => handleChange(e)}
          name="gender"
          value={gender}
          placeholder="Gender"
        />
        <Editbox
          onChange={(e) => handleChange(e)}
          name="dob"
          value={dob}
          placeholder="Date of Birth"
        />
        <Editbox
          onChange={(e) => handleChange(e)}
          name="state"
          value={state}
          placeholder="State"
        />
        <Editbox
          onChange={(e) => handleChange(e)}
          name="district"
          value={district}
          placeholder="District"
        />
        <Editbox
          onChange={(e) => handleChange(e)}
          name="Country"
          value={country}
          placeholder="Country"
        />

        <Editbox
          onChange={(e) => handleChange(e)}
          placeholder="Role"
          name="role"
          value={role}
        />
        <Editbox
          onChange={(e) => handleChange(e)}
          placeholder="favIPLTeam"
          name="favIPLTeam"
          value={favIPLTeam}
        />

        <Editbox
          onChange={(e) => handleChange(e)}
          placeholder="Batsman"
          name="batsman"
          value={favBatsman}
        />
        <Editbox
          onChange={(e) => handleChange(e)}
          placeholder="Bowler"
          name="bowler"
          value={favBowler}
        />
        <Editbox
          onChange={(e) => handleChange(e)}
          placeholder="wk"
          name="wk"
          value={favWK}
        />
        <Editbox
          onChange={(e) => handleChange(e)}
          placeholder="allRounder"
          name="allRounder"
          value={favAllRounder}
        />

        <input
          type="submit"
          value="Update Profile"
          className="inputSubmit"
          onClick={(e) => handleSubmit(e)}
        />
      </form>
    </div>
  );
};

EditProfile.propTypes = {
  isAuthenticated: PropTypes.bool,
  updateProfile: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { updateProfile })(EditProfile);
