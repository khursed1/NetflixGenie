import playBtn from '../assets/play_button.png'
import info from '../assets/info.png'
const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-20 md:pt-36 px-4 md:px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-xl md:text-5xl font-bold w-1/2">{title}</h1>
      <p className=" hidden md:inline-block text-xl py-6 w-1/2">{overview}</p>
      <div className='flex'>
        <button className=" bg-white py-1 px-2 md:p-4 md:px-12 md:text-xl rounded-lg text-black font-medium flex hover:bg-opacity-70" ><img src={playBtn} className='w-3 md:w-4 my-auto'/>Play</button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 p-4 px-12 text-xl bg-opacity-50 rounded-lg text-white font-medium">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle