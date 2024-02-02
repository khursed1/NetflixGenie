import playBtn from '../assets/play_button.png'
import info from '../assets/info.png'
const VideoTitle = ({title,overview}) => {
  return (
    <div className=" pt-36 px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-5xl font-bold w-1/2">{title}</h1>
      <p className="text-xl py-6 w-1/2">{overview}</p>
      <div className='flex'>
        <button className=" bg-white p-4 px-12 text-xl rounded-lg text-black font-medium flex hover:bg-opacity-70" ><img src={playBtn} className='w-4 my-auto'/>Play</button>
        <button className="mx-2 bg-gray-500 p-4 px-12 text-xl bg-opacity-50 rounded-lg text-white font-medium">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle