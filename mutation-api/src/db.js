const neo4j = require("neo4j-driver")

const { DB_URI: dbUri, DB_USERNAME: username, DB_PASSWORD: password } = process.env
const driver = neo4j.driver(dbUri, neo4j.auth.basic(username, password))

module.exports = driver
