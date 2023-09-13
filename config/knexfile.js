require('dotenv').config();

module.exports = {
    development: {
      client: process.env.DB_CLIENT,
      connection: {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
      },
      migrations: {
        directory: './config/migrations'
      },
      seeds: {
        directory: './config/seeds'
      }
    },
    test: {
      client: 'sqlite3',
      connection: './config/database.sqlite',
      migrations: {
        directory: './config/migrations'
      },
      seeds: {
        directory: './config/seeds'
      },
      useNullAsDefault: true
    }
  };
  