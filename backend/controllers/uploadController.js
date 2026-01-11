import Novel from "../models/Novel.js";

export const uploadNovel = async (req, res) => {
  try {
    const text = req.file.buffer.toString("utf-8");
    const novel = await Novel.create({ text });

    res.json({
      message: "Novel uploaded successfully",
      storyId: novel._id,
    });
  } catch (err) {
    res.status(500).json({ error: "Upload failed" });
  }
};
