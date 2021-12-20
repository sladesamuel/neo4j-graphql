import React from "react"
import { Link } from "react-router-dom"
import moviesImage from "../images/movies.png"

export default () => (
  <div className="w-64 rounded overflow-hidden shadow-xl px-6 py-4">
    <Link to="/movies">
      <img src={moviesImage} alt="Movies" />

      <div>
        <div className="font-bold text-xl mb-2">Movies</div>
        <p className="text-gray-700 text-base">View and manage the database of movies</p>
      </div>
    </Link>
  </div>
)
