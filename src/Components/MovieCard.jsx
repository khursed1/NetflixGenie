import { IMG_CDN_URL } from "../constant/constant"

const MovieCard = ({posterPath}) => {

  return (
    <div className="w-36 md:w-56 pr-4 h-auto cursor-pointer">
        <img alt="movie card" src={IMG_CDN_URL+posterPath} className="rounded-lg hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-1"/>
    </div>
  )
}

export default MovieCard