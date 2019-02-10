const { buildSchema, print } = require('graphql');
const { migrate } = require('graphql-migrate');
const typeDefs = require('./typeDefs');
const config = require('./config');

const schema = buildSchema(print(typeDefs));

migrate(config, schema).then(() => {
  console.log('Your database is up-to-date!');
  process.exit();
});
