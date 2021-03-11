import React from "react";
import PropTypes from "prop-types";
import Editbox from "../../components/editbox/Editbox";
import { Select } from "@material-ui/core";

const EditProfile = (props) => {
  return (
    <div>
      <form>
        <Editbox name="userName" value={userName} placeholder="Name" />
        <Editbox name="email" value={email} placeholder="Email" />
        <Editbox name="gender" value={gender} placeholder="Gender" />
        <Editbox name="dob" value={dob} placeholder="Date of Birth" />
        <Editbox name="state" value={state} placeholder="State" />
        <Editbox name="district" value={district} placeholder="District" />
        <Editbox name="Country" value={userName} placeholder="Country" />
        <Editbox name="userName" value={userName} placeholder="Name" />
        <Select name={Role} />
        <Select name={favIPLTeam} />
        cd ~/.ssh
        <Select name={favPlayer} />
        <Select name={Batsman} />
        <Select name={Bowler} />
        <Select name={wk} />
        <Select name={allRounder} />
      </form>
    </div>
  );
};

EditProfile.propTypes = {};

export default EditProfile;
