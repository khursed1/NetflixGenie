import Header from "./Header"
import usePlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
  usePlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
    
  )
}

export default Browse