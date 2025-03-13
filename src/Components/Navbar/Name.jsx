import React, { useRef, useState } from "react";
import holi_music from "../../assets/holi-music.mp3";

const Name = () => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (name.trim() !== "") {
      setDisplayName(name);
      setShowModal(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
    } else {
      alert("Please Enter Your Name");
    }
  };

  return (
    <>
      <div className="h-[80vh] flex flex-col justify-center items-center pt-24 text-center ">
        {/* Happy Holi Text */}
        <h1 className="mb-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text uppercase text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          {displayName ? (
            <>
              <span className="text-white">🎉</span>
              Happy Holi <span className="text-white">{displayName}</span> by
              Kaushal <span className="text-white">🎉</span>
            </>
          ) : (
            <>
            <span className="text-white">🎉</span> Happy Holi By Kaushal <span className="text-white">🎉</span></>
            
          )}
        </h1>

        {/* Input Field */}
        <input
          className="border-2 border-white text-center text-white mx-auto px-2 py-2 text-xl rounded-lg focus:outline-none placeholder:text-white w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
        />

        {/* Button */}
        <button
          onClick={handleClick}
          className="border-2 rounded-2xl px-4 py-2 my-6 text-white bg-gradient-to-l from-yellow-300 via-red-600 cursor-pointer hover:bg-gradient-to-r hover:from-yellow-300 hover:via-red-600 hover:text-xl text-lg sm:text-xl"
        >
          Let's Go
        </button>

        <audio ref={audioRef} src={holi_music}></audio>
      </div>

      {/* ✅ Modal: Holi Greeting with Name */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50 z-40">
          {/* Glass Morphism Modal */}
          <div className="bg-gradient-to-tl from-purple-600/40 via-cyan-600/40 to-red-500/40 backdrop-blur-md p-5 rounded-xl shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 border border-red-600/80">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white flex-grow text-center mt-1">
                🎨 Holi Celebration 🎨
              </h2>
            </div>

            <div className="mt-4 font-bold text-xl sm:text-2xl border-none p-3 bg-transparent rounded text-gray-100 text-center">
              🎉 Happy Holi,{" "}
              <span className="text-yellow-300 uppercase">{displayName}</span>! 🎉{" "}
              <br />
              <span className="text-lg sm:text-xl">
                May your life be filled with colors of happiness and love!
              </span>
              <br/>
              <span className="text-lg sm:text-xl text-amber-400">
                Happy Holi By Kaushal
              </span>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-full cursor-pointer hover:bg-red-600 transition-colors block m-auto text-lg sm:text-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Name;