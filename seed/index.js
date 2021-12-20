const path = require("path")
const neo4j = require("neo4j-driver")
const seed = require("neo4j-seed")

require("dotenv").config({
  path: "../.env",
})

const { DB_USERNAME: username, DB_PASSWORD: password, DB_URI: uri } = process.env

const driver = neo4j.driver(uri, neo4j.auth.basic(username, password))

console.log("Seeding data...")
seed(path.join(__dirname, "data"), driver)
