import Header from "./Header"
import Modal from "./Modal"
import FormControl from "./FormControl"
import ConfirmButton from "./ConfirmButton"

export default ({ show }) => (
  <Modal show={show}>
    <Header text="Add Movie" />

    <form className="pt-4">
      <FormControl inputName="title" label="Title">
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Movie title"
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
        />
      </FormControl>

      <div className="flex">
        <div className="flex-grow" />
        <ConfirmButton text="Save" />
      </div>
    </form>
  </Modal>
)
