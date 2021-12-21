import Movie from "./Movie"

export default ({ movies }) => (
  <>
    {movies.map((movie, index) => (
      <Movie key={`${movie.title}-${index}`} movie={movie} />
    ))}
  </>
)
