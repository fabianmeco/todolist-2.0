
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function(task){
      task.increments('id').primary();
      task.string('name').notNull();
      task.dateTime('dueDate').notNull();
      task.integer('priority').notNull();
      task.dateTime('createdAt').notNull();
      task.dateTime('updatedAt').notNull();      
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};
