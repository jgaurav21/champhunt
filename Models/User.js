const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["player", "coach", "enthusiast", "admin"],
  },
});

module.exports = mongoose.model("user", UserSchema);
