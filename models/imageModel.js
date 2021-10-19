import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Img = mongoose.model("img", imageSchema);

export default Img;
