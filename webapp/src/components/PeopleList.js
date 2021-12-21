import Person from "./Person"

export default ({ people }) => (
  <>
    {people.map((person) => (
      <Person key={person.name} person={person} />
    ))}
  </>
)
