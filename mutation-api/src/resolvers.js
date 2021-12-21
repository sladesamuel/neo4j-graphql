const { createMovie } = require("./movies")

module.exports = {
  Query: {
    hello: () => "Hello, World!",
  },
  Mutation: {
    createMovie: async (_, { movie }) => await createMovie(movie),
  },
}
