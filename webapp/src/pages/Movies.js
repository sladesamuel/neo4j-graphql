import React from "react"
import { gql, useQuery } from "@apollo/client"
import ContainerLayout from "../components/ContainerLayout"
import Content from "../components/Content"
import Title from "../components/Title"
import Loading from "../components/Loading"
import MovieList from "../components/MovieList"
import AddButton from "../components/AddButton"
import AddMovie from "../components/AddMovie"
import { Outlet } from "react-router-dom"

const movies = gql`
  query GetMovies {
    movies(options: { sort: [{ title: ASC }] }) {
      title
      year
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(movies, {
    pollInterval: 500,
  })

  return (
    <>
      <ContainerLayout>
        <header className="bg-white flex flex-row justify-start align-middle">
          <Title text="Movies" />
          <div className="flex-grow" />
          <AddButton text="Add Movie" url="/movies/new" />
        </header>

        <Content>
          {error && <p>{error.message}</p>}

          <MovieList movies={(data && data.movies) || []} />
          <Loading loading={loading} />
        </Content>
      </ContainerLayout>

      <Outlet />
    </>
  )
}
