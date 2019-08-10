var express = require('express');
var router = express.Router();
var HousesController = require('../controller/HousesController')

/* GET home page. */
router.get('/', HousesController.index)

module.exports = router;