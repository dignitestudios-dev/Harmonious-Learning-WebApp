import React, { useState } from "react";
import { FaPen, FaPlay } from "react-icons/fa";
import AudioPlayer from "../../components/global/AudioPlayer";
import { musicSymbol } from "../../assets/export";
import BackgroundMusicModal from "../../components/meditation/BackgroundMusicModal";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);

  const [lyrics, setLyrics] = useState([]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentLyric, setCurrentLyric] = useState("");
  const [srtFile, setSrtFile] = useState(null);

  const [audioFile, setAudioFile] = useState(null);
  const handleDeactivate = () => {
    console.log("User deactivated");
    setModalOpen(false);
  };

  // Handle audio file upload
  const handleAudioUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(URL.createObjectURL(file));
    }
  };

  // Handle SRT file upload and parse it
  const handleSrtUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const srtContent = e.target.result;
        const parsedLyrics = parseSrt(srtContent);
        setLyrics(parsedLyrics);
      };
      reader.readAsText(file);
    }
  };

  // Parse SRT file content
  const parseSrt = (srtContent) => {
    const lines = srtContent.split("\n\n");
    return lines
      .map((line) => {
        const [index, time, ...text] = line.split("\n");
        if (!time) return null;
        const [start, end] = time.split(" --> ").map((t) => {
          const [h, m, s] = t.split(":");
          const [sec, ms] = s.split(",");
          return (
            parseFloat(h) * 3600 +
            parseFloat(m) * 60 +
            parseFloat(sec) +
            parseFloat(ms) / 1000
          );
        });
        return { start, end, text: text.join("\n") };
      })
      .filter((line) => line !== null);
  };

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
        {/* Audio and File upload */}
        {/* <div className="mb-4">
          <label className="block mb-2">
            Upload SRT File:
            <input
              type="file"
              accept=".srt"
              onChange={handleSrtUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600"
            />
          </label>
        </div> */}

        <button
          onClick={() => navigate("/meditation-edit/1")}
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
      <div className="flex gap-8 mb-12">
        {/* Left Section */}

        <div className="bg-gray-800 w-[686px] h-[668px] backdrop-blur-md rounded-xl p-6 flex-1">
          <AudioPlayer
            playlist={playlist}
            audioFile={audioFile}
            srtFile={srtFile}
            currentLyric={currentLyric}
            currentSongIndex={currentSongIndex}
            lyrics={lyrics}
            setLyrics={setLyrics}
          />
        </div>

        {/* Right Section */}
        <div className="bg-[#00000044] border-[#000] h-[668px] rounded-[26px] px-6 pt-2 w-[363px]">
          <div className="flex justify-between items-center pb-4">
            <h3 className="text-[20px] font-medium ">
              Background Music{" "}
              <span className="text-white text-[11px] font-extralight">
                (Optional)
              </span>
            </h3>

            <button
              onClick={() => setModalOpen(true)}
              className="text-[12px] text-[#8900FF] font-medium"
            >
              Add New
            </button>
          </div>
          <hr className="border-b-[0.5px] border-white/30" />
          <ul className="space-y-4">
            {[...Array(10)].map((_, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-black/15 transition border-b-[1px] border-b-white/30"
              >
                <div className="flex items-center my-1">
                  <img src={musicSymbol} alt="music" className="w-8 mt-2" />
                  <span className="text-[16px] font-extralight">
                    Background Music Title
                  </span>
                </div>
                <button className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] p-2 rounded-full">
                  <FaPlay size={10} />
                </button>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BackgroundMusicModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDeactivate}
        handleAudioUpload={handleAudioUpload}
      />
    </div>
  );
};

export default MeditationDetails;
