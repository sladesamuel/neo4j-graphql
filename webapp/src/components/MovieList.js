import Movie from "./Movie"

export default ({ movies }) => (
  <>
    {movies.map((movie) => (
      <Movie key={movie.title} movie={movie} />
    ))}
  </>
)
