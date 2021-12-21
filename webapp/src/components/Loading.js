export default ({ loading }) => {
  if (!loading) {
    return null
  }

  return <p>Loading...</p>
}
