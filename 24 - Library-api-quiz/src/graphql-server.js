const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { defs } = require('./graphql/schema.js');
const { resolvers } = require('./graphql/resolvers.js');

const server = new ApolloServer({
  typeDefs: defs,
  resolvers: resolvers,
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀 GraphQL server ready at: ${url}`);
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});