const knex = require('../helper/knex');
const moment = require('moment');
const Task = {};

Task.create = function(bodyTask){
    return knex('tasks').insert(bodyTask);
}

Task.findAll = function(overdue){
    const basicQuery = knex.select('*').from('tasks')    
    //receive array formated to execute the query  [fieldName, operator, comparator] to filter overdue, this come from the front
    return basicQuery.where.apply(basicQuery, overdue)
}

Task.find = function(id){
    Task.findAll({id:id}).first();
}

Task.delete = function(id){
    return knex('tasks').del().where({id:id});
}

Task.update = function(id, bodyTask){
    return knex('tasks').update('bodyTask').where({id:id})
}

module.exports = Task;