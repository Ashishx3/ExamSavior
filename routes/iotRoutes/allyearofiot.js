
const express = require('express');
const router = express.Router();

const sectionMap = {
  'first-year': 'test',
  'second-year': 'secondyr',
  'third-year': 'thirdyr',
  'fourth-year': 'fourthyr'
};


// Route for first year
router.get("/first-year", (req, res) => {
    res.render("iot/firstyr/index");
});

// Route for second year
router.get("/second-year", (req, res) => {
    res.render("iot/secondyr/index");
});

// Route for third year
router.get("/third-year", (req, res) => {
    res.render("iot/thirdyr/index");
});

// Route for fourth year
router.get("/fourth-year", (req, res) => {
    res.render("iot/fourthyr/index");
});
// Render AIDS base layout
router.get('/', (req, res) => {
  res.render('iot', { section: null });
});

// Render specific year section inside AIDS layout
router.get('/:year', (req, res) => {
  const { year } = req.params;
  const folder = sectionMap[year];

  if (!folder) return res.status(404).send('Not Found');

  res.render('iot', { section: folder });
});

module.exports = router;

