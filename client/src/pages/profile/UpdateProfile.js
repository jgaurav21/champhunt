import React, { useState } from "react";
import PropTypes from "prop-types";

import MuiTextBox from "../../components/muiTextBox/MuiTextBox";
import "./UpdateProfile.css";
import { Paper, Grid, Select } from "@material-ui/core";

import RadioButton from "../../components/radio/Radio";
import MuiSelect from "../../components/muiSelect/MuiSelect";
import CountrySelect from "../../components/countrySelect/CountrySelect";
import csc from "country-state-city";

const UpdateProfile = (props) => {
  const [country, setCountry] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setCountry(...country, setCountry(e.target.value));
  };
  return (
    <div className="updateProfile">
      <div className="updateProfile__container">
        <Paper>
          <div className="updateProfile__container__row">
            <Grid container spacing={2}>
              <Grid item xs>
                <MuiTextBox label="First Name" width="100%" />
              </Grid>
              <Grid item xs>
                <MuiTextBox label="Last Name" width="100%" />
              </Grid>
            </Grid>
          </div>
          <div className="updateProfile__container__row">
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <MuiTextBox label="Email" width="100%" />
              </Grid>
              <Grid item xs={4}>
                <MuiSelect
                  name="Role"
                  options={["Player", "Coach", "Enthusiast"]}
                />
              </Grid>
            </Grid>

            <div className="updateProfile__container__row">
              <Grid container spacing={2}>
                <Grid item xs>
                  <MuiSelect
                    name="Gender"
                    options={["Male", "Female", "Other"]}
                  />
                </Grid>
                <Grid item xs>
                  <MuiTextBox
                    type="date"
                    label="Birth Date"
                    width="100%"
                    defaultValue="2000-01-01"
                  />
                </Grid>
              </Grid>
            </div>

            <div className="updateProfile__container__row">
              <Grid container spacing={3}>
                <Grid item xs>
                  <MuiSelect
                    name="Country"
                    options={csc.getAllCountries().map((a) => a.name)}
                    value={country}
                    onChange={(e) => handleChange(e)}
                  />
                </Grid>
                <Grid item xs>
                  <MuiSelect
                    name="City"
                    options={csc.getStatesOfCountry("IN").map((a) => a.name)}
                    value={country}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
};

UpdateProfile.propTypes = {};

export default UpdateProfile;
