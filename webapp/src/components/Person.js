import Header from "./Header"
import LabeledIcon from "../components/LabeledIcon"
import Calendar from "../icons/Calendar"

export default ({ person }) => (
  <div className="flex flex-row flex-nowrap py-2 shadow-sm">
    <Header text={person.name} />
    <LabeledIcon icon={<Calendar />} label={person.born} />
  </div>
)
