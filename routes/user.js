const express = require('express')
const router = express.Router();
const { handleUserSignup, handleUserLogin } = require('../controllers/user')

// ✅ Logout Route
router.get("/logout", (req, res) => {
    res.clearCookie("uid"); // Remove the session cookie
    return res.redirect("/"); // Redirect to login page after logout
});

router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);
 // Add this line


module.exports = router;