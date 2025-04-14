const express = require('express');
const path = require('path');
const router = express.Router();

// Signup Route
router.get('/signup', (req, res) => {
   return res.render("signup"); // Renders 'views/signup.ejs'
});
router.get('/login', (req, res) => {
   return res.render("login"); // Renders 'views/login.ejs'
});
 

module.exports = router;
