const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RunsSchema = new Schema({
  runs: {
    type: BigInt,
  },
  user: {
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("runs", RunsSchema);
