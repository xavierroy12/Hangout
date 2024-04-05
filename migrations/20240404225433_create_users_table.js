// migrations/xxxxxx_create_users_table.js
exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id');
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };