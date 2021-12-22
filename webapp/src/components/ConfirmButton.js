import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from "@fortawesome/free-solid-svg-icons"

export default ({ text, onClick }) => (
  <button
    className="bg-transparent hover:bg-green-500 text-green-700 hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded my-auto"
    onClick={(e) => {
      e.preventDefault()
      onClick && onClick()
    }}
  >
    <FontAwesomeIcon icon={faSave} />
    <span className="ml-2">{text}</span>
  </button>
)
