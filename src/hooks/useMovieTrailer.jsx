import { useEffect } from "react";
import { API_Options } from "../constant/Keys"
import { useDispatch, useSelector } from "react-redux";
import {addTrailerVideo} from "../utils/movieSlice"
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const url = "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US"

    const getMovies = async () => {
        const data = await fetch(url, API_Options)
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type == "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }


    useEffect(() => {
        getMovies()
    }, [])
}

export default useMovieTrailer