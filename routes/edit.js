const express = require('express');
const router = express.Router();
const editControllers = require('../controllers/edit');
router.get('/edit/', editControllers.getItems);

module.exports = router;
