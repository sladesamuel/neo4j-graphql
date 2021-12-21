import Header from "./Header"
import LabeledIcon from "../components/LabeledIcon"
import Calendar from "../icons/Calendar"

export default ({ movie }) => (
  <div className="flex flex-row flex-nowrap py-2 shadow-sm">
    <Header text={movie.title} />
    <LabeledIcon icon={<Calendar />} label={movie.year} />
  </div>
)
