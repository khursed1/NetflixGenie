import { IMG_CDN_URL } from "../constant/constant"

const MovieCard = ({posterPath}) => {

  return (
    <div className="w-36 pr-4 h-auto">
        <img alt="movie card" src={IMG_CDN_URL+posterPath} className="rounded-lg hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1"/>
    </div>
  )
}

export default MovieCard