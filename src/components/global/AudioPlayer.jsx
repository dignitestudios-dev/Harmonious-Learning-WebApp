import React, { useState, useRef, useEffect } from "react";
import { background } from "../../assets/export";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPlay, FaStop } from "react-icons/fa";

const AudioPlayer = ({ playlist }) => {
  const audioRef = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [lyrics, setLyrics] = useState([]);
  console.log("🚀 ~ AudioPlayer ~ lyrics:", lyrics);
  const [currentLyric, setCurrentLyric] = useState("");

  const [audioFile, setAudioFile] = useState(null);
  const [srtFile, setSrtFile] = useState(null);

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

  // Load lyrics for the current song
  // useEffect(() => {
  //   const loadLyrics = async () => {
  //     const response = await fetch(playlist[currentSongIndex].lyrics);
  //     const data = await response.json();
  //     setLyrics(data);
  //   };
  //   loadLyrics();
  // }, [currentSongIndex, playlist]);

  // Handle time update for lyrics synchronization and timeline
  const handleTimeUpdate = () => {
    const time = audioRef.current.currentTime;
    setCurrentTime(time);

    // Find the current lyric based on the timestamp
    const currentLine = lyrics.find(
      (line) => line.time <= time && line.time + 5 >= time
    );
    setCurrentLyric(currentLine ? currentLine.text : "");
  };

  // Handle metadata load to get the duration of the audio
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Play or pause the audio
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Play the next song in the playlist
  const playNextSong = () => {
    // const nextIndex = (currentSongIndex + 1) % playlist.length;
    // setCurrentSongIndex(nextIndex);
    setIsPlaying(true);
  };

  // Play the previous song in the playlist
  const playPreviousSong = () => {
    const prevIndex =
      //   (currentSongIndex - 1 + playlist.length) % playlist.length;
      // setCurrentSongIndex(prevIndex);
      setIsPlaying(true);
  };

  // Automatically play the next song when the current one ends
  // useEffect(() => {
  //   audioRef.current.addEventListener("ended", playNextSong);
  //   return () => {
  //     audioRef.current.removeEventListener("ended", playNextSong);
  //   };
  // }, [currentSongIndex]);

  // Format time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressBarWidth = (currentTime / duration) * 100;

  return (
    <div>
      <div className="relative flex flex-col items-center">
        <img
          src={background}
          alt="Anxiety Release"
          className="rounded-xl w-[695px] h-[350px] mb-4 object-cover  shadow-2xl"
        />
        <span className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full">
          Math
        </span>
        <button className="absolute top-4 right-4 bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white px-4 py-2 rounded-full">
          i
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-4">
        {/* {playlist[currentSongIndex].title} */}
      </h2>

      <div className="h-24 overflow-y-auto bg-gray-700 p-3 rounded-lg mb-4">
        {lyrics.map((lyric, index) => (
          <p
            key={index}
            className={`text-gray-300 text-center ${
              currentTime >= lyric.start && currentTime <= lyric.end
                ? "text-white font-bold"
                : ""
            }`}
          >
            {lyric.text}
          </p>
        ))}
      </div>

      <div className="flex justify-center gap-8 mt-6">
        <button onClick={playPreviousSong} className="p-4 rounded-full">
          <IoPlaySkipBack size={42} />
        </button>

        <button
          onClick={togglePlayPause}
          className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] px-6 rounded-full"
        >
          {isPlaying ? <FaStop size={28} /> : <FaPlay size={28} />}
        </button>

        <button onClick={playNextSong} className="p-4 rounded-full">
          <IoPlaySkipForward size={42} />
        </button>
      </div>

      {/* Timeline */}
      <div className="flex items-center gap-4">
        <span className="w-8">{formatTime(currentTime)}</span>
        <div className="flex-1 bg-gray-700 h-1 rounded-full relative">
          <div
            className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] h-1 rounded-full"
            style={{ width: `${progressBarWidth}%` }}
          ></div>
        </div>
        <span className="w-8">-{formatTime(duration - currentTime)}</span>
      </div>

      {/* Audio and File upload */}
      <div className="mb-4">
        <label className="block mb-2">
          Upload Audio File:
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600"
          />
        </label>
        <label className="block mb-2">
          Upload SRT File:
          <input
            type="file"
            accept=".srt"
            onChange={handleSrtUpload}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600"
          />
        </label>
      </div>

      {/* Audio Element */}
      {audioFile && (
        <audio
          ref={audioRef}
          src={audioFile}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          autoPlay={isPlaying}
        />
      )}
    </div>
  );
};

export default AudioPlayer;
