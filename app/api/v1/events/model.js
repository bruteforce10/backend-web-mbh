const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
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
    linkInstagram: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    startEvent: {
      type: Date,
      required: true,
    },
    endEvent: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Event", eventSchema);
