import React from "react"
import { Link } from "react-router-dom"

export default ({ url, name, description, image }) => (
  <div className="w-64 rounded overflow-hidden shadow-xl p-6 m-4">
    <Link className="flex flex-col" to={url}>
      <img className="flex-none" src={image} alt={name} />

      <div className="text-center">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </Link>
  </div>
)
