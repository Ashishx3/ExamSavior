const express = require("express");
const router = express.Router();

// Route to render TTS page
router.get("/", (req, res) => {
    
    res.render("miniprojects"); // Renders miniprojects.ejs
});

module.exports = router;
