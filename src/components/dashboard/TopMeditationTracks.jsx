import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { graph } from "../../assets/export";

const TopMeditationTracks = ({ title, tracks }) => {
  return (
    <div className="bg-[#00000082] border-[#000] shadow-lg rounded-[25px] p-5 w-full mx-auto">
      <div className="flex items-center justify-between  border-b border-[#ffffff30] pb-4 -mx-5 ">
        <h2 className="text-white text-lg font-bold px-5">{title}</h2>
        <div className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full mr-6 ">
          <button className="text-white transition p-2">
            <FaCalendarAlt size={16} />
          </button>
        </div>
      </div>
      <div>
        {tracks.map((track, index) => (
          <div
            key={index}
            className="flex items-center justify-between  last:mb-0 border-b border-[#ffffff30] pt-2 pb-4"
          >
            <div className="flex items-center">
              <img
                src={track.image}
                alt="Track"
                className="w-11 h-11 rounded-full mr-4 border-2 border-[#CEA3D8]"
              />
              <div>
                <p className="text-white text-[16px] leading-[28px]">
                  {track.title}
                </p>
                <p className="text-white/45 text-[12px] leading-[20px]">
                  {track.date}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <img src={graph} />
              <p className="text-[#f8e6ee] text-[16px] leading-[20px]">
                {track.views}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMeditationTracks;
