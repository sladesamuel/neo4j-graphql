const { gql } = require("apollo-server")

module.exports = gql`
  input CreateMovieRequest {
    title: String!
    year: Int!
  }

  type CreateMovieResponse {
    title: String!
    year: Int
  }

  type Query {
    hello: String!
  }

  type Mutation {
    createMovie(movie: CreateMovieRequest!): CreateMovieResponse!
  }
`
