const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google Auth Start
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    req.session.user = req.user; // mimic your current session logic
    res.redirect('/');
  });

module.exports = router;
