import React, { useState, useRef, useEffect } from "react";
import { bedtime } from "../../assets/export";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { FaPlay, FaStop } from "react-icons/fa";

const AudioPlayer = ({ audioFile, lyrics, story }) => {
  console.log("🚀 ~ AudioPlayer ~ lyrics:", lyrics);
  const audioRef = useRef(null);
  const currentLyricRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (currentLyricRef.current) {
      currentLyricRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentTime]);

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
    // setCurrentLyric(currentLine ? currentLine.text : "");
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
      <div className="relative">
        <img
          src={bedtime}
          alt="Anxiety Release"
          className="rounded-xl w-[695px] h-[350px] mb-4 object-cover shadow-2xl"
        />
        <div className="w-full flex justify-between items-center absolute top-0 pt-4 pr-8 pl-5">
          <span className=" bg-white/10 text-white w-[124px] h-[46px] text-center pt-[11px] rounded-full">
            {story?.tags}
          </span>
          {/* <div>
            <img src={instructionSymbol} alt="instruction" />
          </div> */}
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-4">
        {story?.title}
      </h2>

      <div className="h-24 overflow-y-auto bg-white/5 p-3 rounded-lg mb-4 relative">
        {lyrics?.map((lyric, index) => (
          <p
            key={index}
            ref={
              currentTime >= lyric.start && currentTime <= lyric.end
                ? currentLyricRef
                : null
            }
            className={`text-gray-300 text-center ${
              currentTime >= lyric.start && currentTime <= lyric.end
                ? "text-white font-bold"
                : ""
            }`}
          >
            {lyric.text}
          </p>
        ))}

        <div
          className="w-full h-[100%]"
          style={{
            content: '""',
            position: "absolute",
            right: 0,
            bottom: 0,
            background: "linear-gradient(to top, transparent, #001229)",
          }}
        />
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
