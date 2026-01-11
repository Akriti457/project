import mongoose from "mongoose";

const novelSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Novel", novelSchema);
