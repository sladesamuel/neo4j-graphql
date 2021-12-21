const db = require("./db")

const runAsync = (session, query, parameters) =>
  new Promise((resolve, reject) => {
    session.run(query, parameters).then(resolve).catch(reject)
  })

module.exports = {
  async createMovie(movie) {
    const session = db.session()

    try {
      await runAsync(session, "CREATE (m:Movie { title: $title, year: $year })", movie)
    } finally {
      await session.close()
    }

    return movie
  },
}
