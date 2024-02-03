const GptSearchPage = () => {
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12 rounded-md">
            <input type="text" className="p-4 m-4 col-span-9" placeholder="What do you want to watch"/>
            <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">Search</button>
        </form>
    </div>
  )
}

export default GptSearchPage