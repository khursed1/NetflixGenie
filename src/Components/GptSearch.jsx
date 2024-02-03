import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchPage from "./GptSearchPage"
import background from '../assets/background.jpg'

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={background}  className=""/>
      </div>
      <GptSearchPage />
      <GptMovieSuggestion />

    </div>
  )
}

export default GptSearch