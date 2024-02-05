import { useRef } from "react"
import { useState } from "react";
const GptSearchPage = () => {
  const [tag, setTag]=useState(false);
  const searchText = useRef(null);
  const handleGptSearch =() => {
  setTag(true)
  }
  return (
    <div className="flex justify-center"> 
      
      <div className="pt-[40%] md:pt-[10%] flex-column justify-center">
        <form className=" bg-black md:bg-black  grid grid-cols-12 rounded-md" onSubmit={(e) => e.preventDefault()}>
          <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder="What do you want to watch" />
          <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearch}>Search</button>
        </form>
        {tag?<div className="bg-white p-4 my-6 text-gray-500 rounded-lg text-center border-2 border-gray-800">
          Keep calm! 😊
          <br/>Rolling out this feature soon✨
          </div>:null}
      </div>
      
    </div>
  )
}

export default GptSearchPage