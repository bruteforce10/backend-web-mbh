const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let promoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    directory: {
      type: mongoose.Types.ObjectId,
      ref: "Directory",
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["dinning", "shopping"],
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: "Image",
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    startPromo: {
      type: Date,
      required: true,
    },
    endPromo: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Promo", promoSchema);
