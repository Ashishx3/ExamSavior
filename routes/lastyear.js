const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    
    res.render("lastyear"); // Renders lastyear.ejs
});

module.exports = router;
