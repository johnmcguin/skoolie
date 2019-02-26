let express = require('express');
let router = express.Router();

const { getSkoolies } = require('../controllers/index');

router.get('/', getSkoolies);

module.exports = router;
