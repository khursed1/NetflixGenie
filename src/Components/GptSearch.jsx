import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchPage from "./GptSearchPage"
import background from '../assets/background.jpg'

const GptSearch = () => {
  return (
    <>
    <div className="absolute -z-10">
      <img src={background} className="h-screen object-cover md:h-auto" />
    </div>
      <div className="">
        <GptSearchPage />
      </div></>
  )
}

export default GptSearch