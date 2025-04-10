const express = require('express')
const router = express.Router();
const { handleUserSignup, handleUserLogin } = require('../controllers/user')

// ✅ Logout Route
router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Logout error:", err);
            return res.status(500).send("Logout failed");
        }

        res.clearCookie("connect.sid", {
            path: "/",
        });

        return res.redirect("/login");
    });
});


router.post("/", handleUserSignup);
router.post("/login", handleUserLogin);
 // Add this line


module.exports = router;