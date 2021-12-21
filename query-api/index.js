const { gql, ApolloServer } = require("apollo-server")
const { Neo4jGraphQL } = require("@neo4j/graphql")
const neo4j = require("neo4j-driver")

require("dotenv").config({
  path: "../.env",
})

const typeDefs = gql`
  type Movie {
    title: String!
    year: Int
    # actors: [Person] @relationship(type: "ACTED_IN", direction: IN)
  }

  type Person {
    name: String!
    born: Int
    # movies: [Movie] @relationship(type: "ACTED_IN", direction: OUT)
  }

  type Query {
    movies: [Movie!]!
    people: [Person!]!
  }
`

const { DB_URI: dbUri, DB_USERNAME: username, DB_PASSWORD: password } = process.env

const driver = neo4j.driver(dbUri, neo4j.auth.basic(username, password))

const { schema } = new Neo4jGraphQL({
  typeDefs,
  driver,
})

const server = new ApolloServer({
  schema,
})

server.listen().then(({ url }) => console.log(`GraphQL server ready on ${url}`))
