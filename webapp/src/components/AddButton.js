import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export default ({ text, url }) => (
  <Link
    className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded my-auto"
    to={url}
  >
    <FontAwesomeIcon icon={faPlus} />
    <span className="ml-2">{text}</span>
  </Link>
)
