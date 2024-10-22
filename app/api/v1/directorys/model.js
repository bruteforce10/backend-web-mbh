const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let directorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    instagram: {
      type: String,
    },
    location: {
      type: String,
    },
    categories: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    //  voucers: {
    //   type: [mongoose.Types.ObjectId],
    //   ref: "Voucher",
    // },
    images: {
      type: [mongoose.Types.ObjectId],
      ref: "Image",
      required: true,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Directory", directorySchema);
