const express = require('express');
const storeConroller = require('../controllers/storeController');

const router = express.Router();

// Do work here
router.get('/', storeConroller.homePage);

module.exports = router;
