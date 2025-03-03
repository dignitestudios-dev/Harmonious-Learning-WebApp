import React, { useState } from "react";

import { bin } from "../../assets/export";

const NotificationsTable = ({ stories }) => {
  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] overflow-hidden p-2">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 px-4 text-center">#</div>
        <div className="col-span-2 py-4 px-4 text-left">Name</div>
        <div className="col-span-4 py-4 px-4 text-left">Description</div>
        <div className="col-span-1 py-4 px-4 text-left">Date</div>
        <div className="col-span-1 py-4 px-4 text-left">Time</div>
        <div className="col-span-1 py-4 px-4 text-center">Status</div>
        <div className="col-span-2 py-4 px-4 text-center">Action</div>
      </div>

      {stories.map((story, index) => (
        <div
          key={story.id}
          className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
              hover:bg-opacity-60 transition duration-300"
        >
          <div className="col-span-1 py-4 px-4 text-center">{story.id}</div>
          <div className="col-span-2 py-4 px-4 flex items-center gap-4">
            <span>{story.name}</span>
          </div>
          <div className="col-span-4 py-4 px-4 truncate">
            {story.transcription}
          </div>
          <div className="col-span-1 py-4 px-4">{story.date}</div>
          <div className="col-span-1 py-4 px-4">{story.time}</div>
          <div className="col-span-1 py-4 px-4 text-center">
            <p
              className={`text-[14px] font-medium ${
                story.status === "Delivered"
                  ? "text-[#4EFF62]"
                  : "text-[#FF9500]"
              }`}
            >
              {story.status}
            </p>
          </div>
          <div className="col-span-2 py-2 px-4 flex items-center justify-center gap-2">
            <img src={bin} alt="bin" className="cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsTable;
