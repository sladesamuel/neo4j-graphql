import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from "@fortawesome/free-solid-svg-icons"

export default ({ text, onClick, disabled = false }) => (
  <button
    className="bg-transparent hover:bg-green-500 text-green-700 hover:text-white py-1 px-2 border border-green-500 hover:border-transparent rounded my-auto disabled:text-gray-300 disabled:border-gray-300 disabled:hover:bg-transparent"
    onClick={(e) => {
      e.preventDefault()
      onClick && onClick()
    }}
    disabled={disabled}
    type="submit"
  >
    <FontAwesomeIcon icon={faSave} />
    <span className="ml-2">{text}</span>
  </button>
)
