const mongoose = require("mongoose");

const FollowersSchema = new mongoose.Schema({
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

module.exports = mongoose.model("followers", FollowersSchema);
