import { useEffect } from "react"
import { API_Options } from "../constant/Keys"
import { useDispatch } from "react-redux"
import {addUpcomingMovies} from '../utils/movieSlice'
const useUpcomingMovies=()=>{
    const dispatch=useDispatch();
    const getUpcomingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options)
      const json=await data.json();
      dispatch(addUpcomingMovies(json.results))
      console.log(json.results)
    }
    useEffect(()=>{
      getUpcomingMovies();
    },[]); 
}
export default useUpcomingMovies