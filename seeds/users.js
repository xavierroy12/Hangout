/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// seeds/users.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Xavier', password: 'penis', email: 'john@example.com'},
        {username: 'Louis', password: 'penis', email: 'jane@example.com'},
        {username: 'Penis', password: 'penis', email: 'doe@example.com'}
      ]);
    });
};
