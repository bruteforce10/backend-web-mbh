const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: "Image",
      required: true,
    },
    newsOpening: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Article", articleSchema);
