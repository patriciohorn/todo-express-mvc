// Bring express to our file 
const express = require('express');
// creating the mini app 
const router = express.Router();
const homeController = require('../controllers/home');

router.get('/', homeController.getIndex);

module.exports = router;
