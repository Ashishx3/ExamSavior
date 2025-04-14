
require("dotenv").config();
const express = require("express");
const { ElevenLabsClient, stream } = require("elevenlabs");
const { Readable } = require("stream");

const router = express.Router();
const ELEVEN_LABS_API_KEY = process.env.ELEVEN_LABS_API_KEY;
const client = new ElevenLabsClient({ apiKey: ELEVEN_LABS_API_KEY });

// Route to render TTS page
router.get("/", (req, res) => {
    res.render("tts");
});

// TTS API Route with Streaming
router.post("/generate", async (req, res) => {
    try {
        const { text, gender, language, voiceId } = req.body;

        if (!text || text.trim().length === 0) {
            return res.status(400).json({ error: "Text is required." });
        }

        const DEFAULT_VOICES = {
            male: "X0Kc6dUd5Kws5uwEyOnL", // Example Male Voice ID
            female: "Sm1seazb4gs7RSlUVw7c", // Replace with actual Female Voice ID
        };

        // Choose voice based on gender & language
        const selectedVoice = voiceId || (gender && DEFAULT_VOICES[gender.toLowerCase()]) || "";
        if (!selectedVoice) {
            return res.status(400).json({ error: "Voice ID is required." });
        }

        console.log(`Generating speech for: ${text.substring(0, 50)}...`);

        // Stream audio response
        const audioStream = await client.textToSpeech.convertAsStream(selectedVoice, {
            text: text,
            model_id: "eleven_multilingual_v2",
        });

        res.setHeader("Content-Type", "audio/mpeg");
        Readable.from(audioStream).pipe(res);

    } catch (error) {
        console.error("Error generating speech:", error);
        res.status(500).json({ error: "Failed to generate speech. Please try again." });
    }
});

module.exports = router;
