const mongoose = require("mongoose");

const FollowingSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
  },
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      date: {
        type: Date,
      },
    },
  ],
});

module.exports = mongoose.model("following", FollowingSchema);
