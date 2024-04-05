// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost', // Laragon MySQL server is usually hosted locally
      database: 'hangout', // replace with your database name
      user: 'root', // by default, Laragon MySQL user is 'root'
      password: '' // by default, Laragon MySQL password is empty
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost', // Laragon MySQL server is usually hosted locally
      database: 'hangout', // replace with your database name
      user: 'root', // by default, Laragon MySQL user is 'root'
      password: '' // by default, Laragon MySQL password is empty
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost', // Laragon MySQL server is usually hosted locally
      database: 'hangout', // replace with your database name
      user: 'root', // by default, Laragon MySQL user is 'root'
      password: '' // by default, Laragon MySQL password is empty
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
