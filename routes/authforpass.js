const express = require('express');
const router = express.Router();

router.get('/forgot-password', (req, res) => {
  res.render('forgot-password', { error: null, message: null });
});


router.post('/forgot-password', handleForgotPassword);
router.get('/reset-password/:token', (req, res) => res.render('reset-password', { token: req.params.token }));
router.post('/reset-password/:token', handleResetPassword);
module.exports = router;
