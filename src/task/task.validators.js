const joi = require('joi');
const moment = require('moment');


exports.post = joi.object().keys({
    name: joi.string().required(),
    priority: joi.number().integer().min(1).max(5).required(),
    dueDate: joi.date().min(moment().format()).required()
});

exports.update = joi.object().keys({
    name: joi.string(),
    priority: joi.number().integer().min(1).max(5),
    dueDate: joi.date().min(moment().format())
    
});