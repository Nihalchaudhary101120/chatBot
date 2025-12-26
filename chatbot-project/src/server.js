import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const API_KEY = "YOUR_REAL_API_KEY_HERE"; // <-- paste your Google AI key

app.post("/api/gemini", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + API_KEY, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      }),
    });

    const data = await response.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "⚠️ Sorry, I couldn’t generate a reply.";
    res.json({ text });
  } catch (error) {
    console.error("Error from Gemini API:", error);
    res.status(500).json({ text: "⚠️ Sorry, there was a problem connecting to Gemini." });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Gemini proxy running on http://localhost:${PORT}`));
