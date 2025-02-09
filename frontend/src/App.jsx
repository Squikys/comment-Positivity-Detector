import { useState } from "react"
import axios from "axios";



function App() {

  const [url, setUrl] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [id , setId] = useState("");

  const handleChange = (event) => {
    setUrl(event.target.value);
    console.log(url);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/url/", {
        url: url,
      });

      setResponseMessage(response.data.polarity);
      console.log(response.data.polarity);
      setId(response.data.id);
      console.log(id);


    } catch (error) {
      setResponseMessage("Error: Unable to send data");
      console.error("POST request error:", error);
    }
  };


  return (
    <>
      <header className="px-6 py-6 text-white font-bold">
        <nav>Scraper+</nav>
      </header>

      <div className="flex  items-center flex-col py-20">
        <label htmlFor="inputname" className=" text-white font-semibold text-sm"
        >Youtube URL</label>
        <form onSubmit={handleSubmit}>
        <div className="mt-2 w-[100%] flex justify-center">
          <input
            value={url}
            onChange={handleChange}
            type="text"
            name="inputname"
            className="block w-130  rounded-md text-white py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-white"
          />
        </div>
        <button
        type="submit"
          className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-black rounded-md group my-5"
        >
          <span
            className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-mr-4 group-hover:-mt-4"
          >
            <span
              className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-black"
            ></span>
          </span>
          <span
            className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-black rounded group-hover:-ml-4 group-hover:-mb-4"
          >
            <span
              className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-black"
            ></span>
          </span>
          <span
            className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
          ></span>
          <span
            className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
          >Get Started</span>
        </button>
        </form>
        <label className="pt-1 w-130 block text-white font-thin text-sm">Give your youtube URL to know how much positive the youtube video is by comments</label>
        {responseMessage &&
         <div className="flex justify-center items-center p-4 flex-col">
         <iframe
           width="560"
           height="315"
           src={`https://www.youtube.com/embed/${id}`} // Replace with your video ID
           title="YouTube video player"
           frameBorder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
         ></iframe>
        <p className="mt-4 text-white font-bold">{responseMessage}</p>
        </div>}
      </div>
      
      
    </>
  )
}

export default App
