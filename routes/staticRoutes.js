const express = require('express');
const path = require('path');
const router = express.Router();

// Serve static files from 'public'
// router.use(express.static(path.join(__dirname, '../public')));

// // Home Route
// router.get('/', (req, res) => {
//     res.render('index'); // Renders 'views/index.ejs'
// });

// Signup Route
router.get('/signup', (req, res) => {
   return res.render("signup"); // Renders 'views/signup.ejs'
});
router.get('/login', (req, res) => {
   return res.render("login"); // Renders 'views/login.ejs'
});

// Login Route
// router.get('/login', (req, res) => {
//     res.render('login'); // Renders 'views/login.ejs'
// });

// Dashboard Route (Protected Page)
// router.get('/dashboard', (req, res) => {
//     res.render('dashboard'); // Renders 'views/dashboard.ejs'
// });

module.exports = router;
