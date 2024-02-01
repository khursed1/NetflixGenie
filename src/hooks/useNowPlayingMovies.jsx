import { useEffect } from "react"
import { API_Options } from "../constant/Keys"
import { useDispatch } from "react-redux"
import {addNowPlayingMovies} from '../utils/movieSlice'
const usePlayingMovies=()=>{
    const dispatch=useDispatch();
    const getNowPlayingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_Options)
      const json=await data.json();
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
      getNowPlayingMovies();
    },[]); 
}
export default usePlayingMovies