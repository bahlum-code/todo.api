const express = require('express');
const router = express.Router();
const taskContoller = require('../controllers/taskController');

router.post('/task/add', taskContoller.addTask);

module.exports = router;
