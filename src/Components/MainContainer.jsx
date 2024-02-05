import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux';
const MainContainer = () => {
  var index = Math.floor(Math.random() * 5) + 1;
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies) return;//Early return
  const mainMovie=movies[index];
  const {original_title,overview,id}=mainMovie
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
      <VideoTitle title={original_title} overview={overview}/>
      
      <VideoBackground movieId={id}/>
    </div>
    
  )
}

export default MainContainer