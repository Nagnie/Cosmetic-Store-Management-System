require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.SQLSERVER_HOST,
      user: process.env.SQLSERVER_USERNAME,
      password: process.env.SQLSERVER_PASSWORD,
      database: process.env.SQLSERVER_DATABASE,
      port: process.env.SQLSERVER_PORT || 5432,
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },
  // other environments (e.g., production)...
};
