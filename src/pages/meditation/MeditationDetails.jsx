import React from "react";
import { FaPen, FaPlay } from "react-icons/fa";
import AudioPlayer from "../../components/global/AudioPlayer";

const playlist = [
  {
    title: "Song 1",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    lyrics: "https://example.com/lyrics1.json",
  },
  {
    title: "Song 2",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    lyrics: "https://example.com/lyrics2.json",
  },
  {
    title: "Song 3",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    lyrics: "https://example.com/lyrics3.json",
  },
];

const MeditationDetails = () => {
  return (
    <div className="w-full min-h-screen overflow-auto text-white p-10 ">
      <button
        onClick={() => navigate(-1)}
        className="text-white text-[14px] font-light mb-2"
      >
        &larr; Back
      </button>

      <div className="flex justify-between items-center ">
        <h1 className="text-[36px] font-bold mb-6">Track Name</h1>
        <button
          className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] flex justify-center items-center
          lg:w-[121px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
        >
          <FaPen
            className="text-white/90 cursor-pointer hover:text-white mr-2"
            size={14}
          />
          Edit
        </button>
      </div>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Left Section */}

        <div className="bg-gray-800 w-[686px] h-[668px] backdrop-blur-md rounded-xl p-6 flex-1">
          <AudioPlayer playlist={playlist} />
        </div>

        {/* 
          <div className="flex items-center gap-4">
            <span>00:48</span>
            <div className="flex-1 bg-gray-700 h-1 rounded-full relative">
              <div className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] h-1 rounded-full w-1/3"></div>
            </div>
            <span>02:50</span>
          </div>
           */}

        {/* Right Section */}
        <div className="bg-black backdrop-blur-md rounded-xl p-6 w-1/3">
          <div className="flex justify-between items-center mb-6 border-b">
            <h3 className="text-xl font-bold">
              Background Music <span className="text-gray-400">(Optional)</span>
            </h3>
            <button className="text-purple-400">Add New</button>
          </div>
          <ul className="space-y-4">
            {[...Array(10)].map((_, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-black/15 transition border-b"
              >
                <div className="flex items-center gap-4">
                  <span className="bg-purple-600 p-3 rounded-full">🎵</span>
                  <span>Background Music Title</span>
                </div>
                <button className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] p-2 rounded-full">
                  <FaPlay size={10} />
                </button>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MeditationDetails;
