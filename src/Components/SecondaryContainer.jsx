import MovieList from "./MovieList"
import { useSelector } from "react-redux"
const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies)
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-44 relative z-10">
        <MovieList title={"Now playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>

    </div>
  )
}

export default SecondaryContainer