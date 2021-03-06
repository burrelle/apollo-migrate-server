const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
require('dotenv').config();
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const resolvers = { Query, Mutation };
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
