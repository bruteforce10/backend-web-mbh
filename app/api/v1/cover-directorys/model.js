const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let coverDirectorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  images: {
    type: [mongoose.Types.ObjectId],
    ref: "Image",
    required: true,
    default: [],
  },
});

module.exports = model("CoverDirectory", coverDirectorySchema);
