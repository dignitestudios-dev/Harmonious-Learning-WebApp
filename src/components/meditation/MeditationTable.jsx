import React, { useState } from "react";
import { background, bin, right } from "../../assets/export";
import { useNavigate } from "react-router-dom";
import StoriesLoader from "../bedtimestories/StoriesLoader";
import { useDelete } from "../../hooks/api/Delete";
import { processDelete } from "../../lib/utils";

const MeditationTable = ({ meditation, loader, setUpdate }) => {
  const navigate = useNavigate();
  const { loading, deleteData } = useDelete(setUpdate);

  const handleDelete = async (storyId) => {
    deleteData("/admin/deleteStories", storyId, processDelete);
  };

  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] mb-8">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 pl-4 text-left">#</div>
        <div className="col-span-2 py-4  text-left">Story Name</div>
        <div className="col-span-5 py-4 px-4 text-left">Transcription</div>
        <div className="col-span-2 py-4 px-4 text-left">Date</div>
        {/* <div className="col-span-1 py-4 px-4 text-center mr-6">Status</div> */}
        <div className="col-span-2 py-4 px-4 text-center">Action</div>
      </div>

      {loader ? (
        Array.from({ length: 5 }).map((_, index) => (
          <StoriesLoader key={index} />
        ))
      ) : meditation?.length > 0 ? (
        meditation?.map((meditation, index) => (
          <div
            key={index}
            className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
                          hover:bg-opacity-60 transition duration-300"
          >
            <div className="col-span-1 pb-4 pt-7 pl-5 text-left">{index}</div>
            <div className="col-span-2 flex items-center gap-4">
              <img
                src={meditation?.image}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-purple-600"
              />
              <span>{meditation?.title}</span>
            </div>
            <div className="col-span-5 pb-4 pt-7 px-6 ">
              {meditation?.description?.length > 70
                ? meditation?.description?.slice(0, 70) + "..."
                : meditation?.description}
            </div>{" "}
            {/* Adjusted padding to move it right */}
            {/* Empty space for alignment */}
            <div className="col-span-2 pb-4 pt-7 px-4">
              {meditation?.createdAt.slice(0, 10)}
            </div>
            {/* <div className="col-span-1 pb-4 pt-7 px-4 text-center mr-6">
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
              </div> */}
            <div className="col-span-2 py-4 px-2 flex items-center justify-center gap-2">
              <div
                className="cursor-pointer"
                onClick={() => handleDelete(meditation?._id)}
              >
                {loading ? (
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                ) : (
                  <img src={bin} alt="Delete" />
                )}
              </div>
              <div
                className="cursor-pointer"
                onClick={() =>
                  navigate(
                    `/meditation/meditation-details/${meditation?._id}`,
                    {
                      state: { meditation },
                    }
                  )
                }
              >
                <img src={right} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
          className="w-full text-center h-10 mt-10 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
        hover:bg-opacity-60 transition duration-300"
        >
          No record found
        </div>
      )}
    </div>
  );
};

export default MeditationTable;
