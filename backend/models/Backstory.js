import mongoose from "mongoose";

const backstorySchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Backstory", backstorySchema);
