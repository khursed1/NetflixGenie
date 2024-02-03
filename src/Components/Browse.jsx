import Header from "./Header"
import usePlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  usePlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  const gptSearch=useSelector((store)=>store.gpt.showGptSearch)
  return (
    <div>
      <Header/>
      {gptSearch?<GptSearch/>:<><MainContainer/>
      <SecondaryContainer/>
      </>
      } 
    </div>
    
  )
}

export default Browse