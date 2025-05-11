const express = require("express");
const router = express.Router();

// Route to render TTS page
router.get("/", (req, res) => {
    
    res.render("privacy-policy"); // Renders miniprojects.ejs
});

module.exports = router;
