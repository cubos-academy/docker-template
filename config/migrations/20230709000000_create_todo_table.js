exports.up = function(knex) {
    return knex.schema.createTable('todo', function(table) {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('description').notNullable().defaultTo('');
      table.boolean('completed').notNullable().defaultTo(false);
      table.timestamps(true, true);
    });
  };
  
exports.down = function(knex) {
  return knex.schema.dropTable('todo');
};
  