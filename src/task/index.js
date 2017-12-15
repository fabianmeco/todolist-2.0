const express = require('express');
const router = express.Router();
const instanceRouter = express.Router();
const taskValidators = require("./task.validators")
const middlewares = require('../middlewares')

const taskController = require('./task.controller');

router.post('/', middlewares.validateBody(taskValidators.post), taskController.post);

router.get('/', taskController.get);

router.use('/:id', taskController.getOneMiddleware, instanceRouter);

instanceRouter.get('/', taskController.getOne);

instanceRouter.put('/', middlewares.validateBody(taskValidators.update), taskController.put);

instanceRouter.delete('/', taskController.delete);

module.exports = router;

