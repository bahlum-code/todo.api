const express = require('express');
const router = express.Router();
const taskContoller = require('../controllers/taskController');
const validation = require('../middlewares/validationMiddleware');

router.post('/task/add', validation.task, taskContoller.addTask);
router.get('/task/getAll', taskContoller.getTasks);

module.exports = router;
