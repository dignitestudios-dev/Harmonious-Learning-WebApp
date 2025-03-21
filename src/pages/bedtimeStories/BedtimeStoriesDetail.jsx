import React, { useEffect, useState } from "react";
import { FaPen, FaPlay } from "react-icons/fa";
import AudioPlayer from "../../components/global/AudioPlayer";
import { musicSymbol } from "../../assets/export";
import BackgroundMusicModal from "../../components/meditation/BackgroundMusicModal";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStoriesDetail } from "../../hooks/api/Get";

const BedtimeStoriesDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { story } = location.state || {};

  const [isModalOpen, setModalOpen] = useState(false);
  const [update, setUpdate] = useState(false);

  const [lyrics, setLyrics] = useState([]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentLyric, setCurrentLyric] = useState("");
  const [srtFile, setSrtFile] = useState(null);

  const [audioFile, setAudioFile] = useState(null);

  // Handle SRT file upload and parse it
  // const handleSrtUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       const srtContent = e.target.result;
  //       const parsedLyrics = parseSrt(srtContent);
  //       setLyrics(parsedLyrics);
  //     };
  //     reader.readAsText(file);
  //   }
  // };

  const fetchAndParseSrt = async (srtUrl) => {
    try {
      const response = await axios.get(srtUrl, { responseType: "text" });
      if (response.status !== 200) throw new Error("Failed to fetch SRT file");

      const srtContent = response.data?.toString();

      const cleanedContent = cleanSrtContent(srtContent);
      const parsedLyrics = parseSrt(cleanedContent);

      setLyrics(parsedLyrics);
    } catch (error) {
      console.error("Error fetching SRT:", error);
    }
  };

  const cleanSrtContent = (srtContent) => {
    const subtitleBlocks = srtContent.trim().split(/\r?\n\r?\n/);

    return subtitleBlocks
      .map((block) => {
        const lines = block.split(/\r?\n/); // Split into individual lines
        if (lines.length < 3) return null; // Skip invalid entries

        return {
          index: lines[0].trim(), // Subtitle index
          time: lines[1].trim(), // Time range
          text: lines.slice(2).join(" "), // Subtitle text
        };
      })
      .filter(Boolean); // Remove any null values
  };

  const parseSrt = (srtArray) => {
    return srtArray
      .map(({ index, time, text }) => {
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

        return { index, start, end, text };
      })
      .filter(Boolean);
  };

  useEffect(() => {
    fetchAndParseSrt(story?.mp3SrtFile);
    setAudioFile(story?.mp3File);
  }, []);

  const { data, loading } = useStoriesDetail(
    `/admin/getStoryById?storyId=${story?._id}`,
    update
  );

  return (
    <div className="w-full min-h-screen overflow-auto text-white p-10 ">
      <button
        onClick={() => navigate(-1)}
        className="text-white text-[14px] font-light mb-2"
      >
        &larr; Back
      </button>

      {loading ? (
        <div className="flex items-center justify-center w-full h-[100px] pt-10">
          <div className="flex justify-center items-center space-x-1 text-sm text-[#b564a8]">
            <svg
              fill="none"
              className="w-12 h-12 animate-spin"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <div>Loading ...</div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center ">
            <h1 className="text-[36px] font-bold mb-6">{data?.title}</h1>
            <button
              onClick={() =>
                navigate(`/bedtime-stories/bedtime-stories-edit/${data?._id}`, {
                  state: { data },
                })
              }
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

            <div className="bg-white/5 w-[686px] h-[668px] backdrop-blur-md rounded-xl p-6 flex-1">
              <AudioPlayer
                story={data}
                audioFile={audioFile}
                currentLyric={currentLyric}
                currentSongIndex={currentSongIndex}
                lyrics={lyrics}
              />
            </div>

            {/* Right Section */}
            <div className="bg-[#00000044] border-[#000] h-[668px] rounded-[26px] px-6 pt-2 w-[363px]">
              <div className="flex justify-between items-center  pb-4">
                <div>
                  <h3 className="text-[20px] font-medium ">
                    Background Music{" "}
                    <span className="text-white text-[11px] font-extralight">
                      (Optional)
                    </span>
                  </h3>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-[12px] text-[#8900FF] font-medium"
                >
                  Add New
                </button>
              </div>
              <hr className="border-b-[0.5px] border-white/30" />
              {data?.bgMusicFile?.length > 0 ? (
                <ul className="space-y-4">
                  {data?.bgMusicFile?.map((_, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between bg-black/15 transition border-b-[1px] border-b-white/30"
                    >
                      <div className="flex items-center my-1">
                        <img
                          src={musicSymbol}
                          alt="music"
                          className="w-8 mt-2"
                        />
                        <span className="text-[16px] font-extralight">
                          {_?.split("/")?.pop()}
                        </span>
                      </div>
                      <button className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] p-2 rounded-full">
                        <FaPlay size={10} />
                      </button>{" "}
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="space-y-4">No Record Found</ul>
              )}
            </div>
          </div>
        </>
      )}

      <BackgroundMusicModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        setUpdate={setUpdate}
        id={data?._id}
      />
    </div>
  );
};

export default BedtimeStoriesDetail;
