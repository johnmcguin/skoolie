let express = require('express');
let router = express.Router();

const { getSkoolies } = require('../controllers/index');

router.get('/', async function(req, res, next) {
  try {
    const skoolies = await getSkoolies();
    res.render('index', { title: 'Skoolie Web Scraper', skoolies });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
