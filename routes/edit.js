const express = require('express');
const router = express.Router();
const editControllers = require('../controllers/edit');

router.get('/:id', editControllers.getItems);
router.put('/:id', editControllers.updateItem);

module.exports = router;
