import React from "react"
import CentralLayout from "../components/CentralLayout"
import NavTile from "../components/NavTile"
import movieImage from "../images/movies.png"
import peopleImage from "../images/people.png"

export default () => (
  <CentralLayout>
    <div className="flex flex-wrap">
      <NavTile
        url="/movies"
        name="Movies"
        description="View and manage the database of movies"
        image={movieImage}
      />

      <NavTile
        url="/people"
        name="People"
        description="View and manage the database of people"
        image={peopleImage}
      />
    </div>
  </CentralLayout>
)
