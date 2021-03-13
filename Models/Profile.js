const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  dob: {
    type: Date,
  },
  state: {
    type: String,
  },
  district: {
    type: String,
  },
  country: {
    type: String,
  },
  role: {
    type: String,
    enum: ["Player", "Coach", "Enthusiast"],
  },
  favIPLTeam: {
    type: String,
  },
  favBatsman: {
    type: String,
  },
  favBowler: {
    type: String,
  },
  favAllRounder: {
    type: String,
  },
  favWK: {
    type: String,
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
