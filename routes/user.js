const express = require('express')
const router = express.Router();
const { handleUserSignup, handleUserLogin, handleForgotPassword,
  handleResetPassword} = require('../controllers/user')

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
router.get('/forgot-password', (req, res) => res.render('forgot-password', { error: null, message: null }));
router.post('/forgot-password', handleForgotPassword);
router.get('/reset-password/:token', (req, res) => res.render('reset-password', { token: req.params.token }));
router.post('/reset-password/:token', handleResetPassword);

module.exports = router;