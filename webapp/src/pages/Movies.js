import React from "react"
import { gql, useQuery } from "@apollo/client"
import ContainerLayout from "../components/ContainerLayout"
import Content from "../components/Content"
import Title from "../components/Title"
import Loading from "../components/Loading"
import MovieList from "../components/MovieList"

const movies = gql`
  query GetMovies {
    movies {
      title
      year
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(movies)

  return (
    <ContainerLayout>
      <Title text="Movies" />

      <Content>
        {error && <p>{error.message}</p>}

        <MovieList movies={(data && data.movies) || []} />
        <Loading loading={loading} />
      </Content>
    </ContainerLayout>
  )
}
