import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { gql, useMutation } from "@apollo/client"

import Header from "./Header"
import Modal from "./Modal"
import FormControl from "./FormControl"
import ConfirmButton from "./ConfirmButton"
import Loading from "./Loading"

const createMovie = gql`
  mutation CreateMovie($movie: CreateMovieRequest!) {
    createMovie(movie: $movie) {
      title
    }
  }
`

export default () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  const [createMovieFunction, { loading, error }] = useMutation(createMovie, {
    onCompleted() {
      // TODO: Do we need to update the cache manually?
      navigate("/movies")
    },
  })

  const submit = () =>
    createMovieFunction({
      variables: {
        movie: {
          title,
          year,
        },
      },
    })

  return (
    <Modal show={true}>
      <Header text="Add Movie" />

      {error && <p className="text-red-500">{error.message}</p>}

      <form
        className="pt-4"
        onSubmit={(e) => {
          e.preventDefault()
          submit()
        }}
      >
        <FormControl inputName="title" label="Title">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Movie title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl inputName="year" label="Year of Release">
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="year"
            type="number"
            min={1900}
            max={2100}
            placeholder="Year of release"
            value={year}
            onChange={(e) => setYear(+e.target.value)}
          />
        </FormControl>

        <div className="flex">
          <div className="flex-grow" />
          <ConfirmButton
            text="Save"
            disabled={loading || !title || !year || year < 1900 || year > 2100}
            onClick={submit}
          />
        </div>
      </form>

      <Loading loading={loading} />
    </Modal>
  )
}
