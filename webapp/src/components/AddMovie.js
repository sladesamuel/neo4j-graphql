import { useState } from "react"

import Header from "./Header"
import Modal from "./Modal"
import FormControl from "./FormControl"
import ConfirmButton from "./ConfirmButton"

export default () => {
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")

  return (
    <Modal show={true}>
      <Header text="Add Movie" />

      <form className="pt-4">
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
            disabled={!title || !year || year < 1900 || year > 2100}
            onClick={() => console.log(`Title = ${title}, Year = ${year}`)}
          />
        </div>
      </form>
    </Modal>
  )
}
