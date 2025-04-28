import React from "react";
import { TbBrandSpotify } from "react-icons/tb";
import axios from "axios";
import { useState } from "react";

function App() {
  const [URL, setURL] = useState("");

  const handleURL = (e) => {
    e.preventDefault();
    setURL(e.target.value);
  };

  const downloadSong = async () => {
    setURL("");

    const options = {
      method: 'GET',
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
      params: {
        songId: `${URL}`
      },
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_API_KEY,
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      window.location.href = response.data.data.downloadLink;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-emerald-300 to-cyan-400 flex items-center justify-center flex-col gap-y-5 p-4">
      <div className="flex items-center justify-center gap-x-2 text-xl font-bold text-center flex-wrap">
        <TbBrandSpotify size={64} />
        <p className="text-2xl sm:text-3xl md:text-4xl">Song Downloader</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
        <input
          type="url"
          className="h-12 w-full border-none outline-none bg-white px-4 rounded-lg text-base shadow-md"
          onChange={handleURL}
          value={URL}
          placeholder="Paste Spotify track URL here"
        />

        <button
          className="bg-white h-12 px-4 rounded-lg font-bold hover:bg-black hover:text-white transition-colors shadow-md"
          onClick={downloadSong}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default App;

// "h-screen w-screen" this line will auto takes the entire height and width of the browser screen.
// we can use tocinocode website or creative-tim.com website for generator gradient background.
// Note: Don't push my apikey directly into the github.

