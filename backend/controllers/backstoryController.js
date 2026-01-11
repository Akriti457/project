import Backstory from "../models/Backstory.js";

export const saveBackstory = async (req, res) => {
  try {
    await Backstory.create({ text: req.body.text });
    res.json({ message: "Backstory saved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save backstory" });
  }
};
