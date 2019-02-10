const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
require('dotenv').config();
const Query = require('./resolvers/Query');

const resolvers = { Query };
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
