import { IMG_CDN_URL } from "../constant/constant"

const MovieCard = ({posterPath}) => {

  return (
    <div className="w-36 pr-4">
        <img alt="movie card" src={IMG_CDN_URL+posterPath} className="rounded-lg"/>
    </div>
  )
}

export default MovieCard