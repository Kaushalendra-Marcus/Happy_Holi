import React, { useState, useRef } from "react";
import footer_holi from "../../assets/footer_holi.png";
import song1 from "../../assets/Balam Pichkari Yeh Jawaani Hai Deewani 128 Kbps.mp3";
import song2 from "../../assets/holi-music.mp3";
import song3 from "../../assets/Holiya Mein Ude Re Gulal Roots Lijo George 128 Kbps.mp3";
import { Play, Pause } from "lucide-react"; // Importing icons

const Music = () => {
  const shayariList = [
    "Rango ki barsaat ho, pyar ki saugat ho, \nKhushiyon ki phuhar ho, Holi ka tyohar ho! 🎨💖",
    "Gulaal ki dhar, pichkari ki maar, \nHoli ka hai yaaron, alag hi pyaar! 🌈🎶",
    "Rango se bhari ho jindagi ki raah, \nHoli laye khushiyan har baah! 🎭✨"
  ];

  // Song List
  const songs = [
    { src: song1, name: "Balam Pichkari" },
    { src: song2, name: "Holi Beats" },
    { src: song3, name: "Holiya Mein Ude Re Gulal" }
  ];

  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio());

  const togglePlayPause = (song) => {
    if (currentSong === song) {
      audioRef.current.pause();
      setCurrentSong(null);
    } else {
      audioRef.current.src = song.src; // Change the song source
      audioRef.current.play();
      setCurrentSong(song);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-6 py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 -z-10"
        style={{
          backgroundImage:
            "url(https://gacny.org/wp-content/uploads/2020/06/treble-clef-musical-notes-multicolored-rainbow-wallpaper-preview.jpg)"
        }}
      ></div>

      {/* Shayari Cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 mt-10">
        {shayariList.map((shayari, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-lg shadow-lg p-6 rounded-2xl text-center border border-white/30 text-white font-semibold text-lg hover:scale-105 transition-all duration-300"
          >
            {shayari.split("\n").map((line, i) => (
              <p
                key={i}
                className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-red-400 to-blue-500"
              >
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Music Section */}
      <div className="mt-10 w-full max-w-md">
        <h2 className="text-white text-3xl font-bold mb-4 text-center">🎵 Play Holi Music 🎶</h2>
        <div className="flex flex-col gap-4">
          {songs.map((song, index) => (
            <button
              key={index}
              className={`flex items-center justify-between bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg transition-all duration-300 cursor-pointer ${
                currentSong === song ? "bg-green-400 text-black" : "text-white"
              }`}
              onClick={() => togglePlayPause(song)}
            >
              <span className="text-lg font-semibold">{song.name}</span>
              {currentSong === song ? <Pause size={24} /> : <Play size={24} />}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Image with Holi Greeting */}
      <div
        className="relative h-[50vh] w-full md:w-[50vw] bg-contain bg-no-repeat mx-auto flex items-end justify-center filter contrast-120 saturate-100 mt-10"
        style={{
          backgroundImage: `url(${footer_holi})`,
          backgroundPosition: "bottom center"
        }}
      >
        <h1 className="text-white font-bold text-4xl md:text-6xl text-center py-10">
          Wishing you a joyful and colorful Holi! 🌈🎨💖
        </h1>
      </div>
    </div>
  );
};

export default Music;
