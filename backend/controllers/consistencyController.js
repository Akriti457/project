import { getGroqClient } from "../config/groq.js";

export const checkConsistency = async (req, res) => {
  try {
    const groq = getGroqClient();

    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: "You are a story consistency checker." },
        { role: "user", content: "Check consistency of the story." }
      ],
    });

    res.json({
      consistent: true,
      rationale: completion.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
