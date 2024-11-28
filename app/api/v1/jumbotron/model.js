const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let jumbotronSchema = Schema(
  {
    images: {
      type: [mongoose.Types.ObjectId],
      ref: "Image",
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = model("Jumbotron", jumbotronSchema);
