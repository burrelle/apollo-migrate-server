const config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 54321,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
};

module.exports = config;
