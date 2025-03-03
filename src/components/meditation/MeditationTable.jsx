import React, { useState } from "react";
import { background, bin, right } from "../../assets/export";
import { useNavigate } from "react-router-dom";

const MeditationTable = ({ meditation, handleToggleStatus }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] overflow-hidden p-2">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 pl-4 text-left">#</div>
        <div className="col-span-2 py-4  text-left">Story Name</div>
        <div className="col-span-5 py-4 px-4 text-left">Transcription</div>
        <div className="col-span-2 py-4 px-4 text-left">Date</div>
        <div className="col-span-1 py-4 px-4 text-center mr-6">Status</div>
        <div className="col-span-1 py-4 px-4 text-center">Action</div>
      </div>

      {meditation?.map((meditation, index) => (
        <div
          key={meditation.id}
          className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
                    hover:bg-opacity-60 transition duration-300 "
        >
          <div className="col-span-1 pb-4 pt-7 pl-5 text-left">
            {meditation.id}
          </div>
          <div className="col-span-2 flex items-center gap-4">
            <img
              src={`https://i.pravatar.cc/40?img=${meditation.id}`}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-600"
            />
            <span>{meditation.name}</span>
          </div>
          <div className="col-span-5 pb-4 pt-7 px-6 ">
            {meditation.transcription}
          </div>{" "}
          {/* Adjusted padding to move it right */}
          {/* Empty space for alignment */}
          <div className="col-span-2 pb-4 pt-7 px-4">{meditation.date}</div>
          <div className="col-span-1 pb-4 pt-7 px-4 text-center mr-6">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={meditation.status}
                onChange={() => handleToggleStatus(index)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 rounded-full  peer peer-checked:bg-gradient-to-l from-[#CEA3D8] to-[#000086]"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
            </label>
          </div>
          <div className="col-span-1 py-4 px-2 flex items-center justify-center gap-2">
            <div>
              <img src={bin} />
            </div>
            <div
              className="cursor-pointer"
              onClick={() =>
                navigate(`/meditation/meditation-details/${meditation.id}`)
              }
            >
              <img src={right} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeditationTable;
