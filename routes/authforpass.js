const express = require('express');
const router = express.Router();

router.get('/forgot-password', (req, res) => {
  res.render('forgot-password', { error: null, message: null });
});

module.exports = router;
