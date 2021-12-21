const { ApolloServer } = require("apollo-server")

require("dotenv").config({
  path: "../.env",
})

const typeDefs = require("./typeDefs")
const resolvers = require("./resolvers")

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen({
    port: 4001,
  })
  .then(({ url }) => console.log(`GraphQL server ready on ${url}`))
