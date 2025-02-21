import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { background, bin, right } from "../../assets/export"; // Assuming you are importing the image from assets

import { FaChevronRight } from "react-icons/fa";

const SubscriptionTable = ({ subscription, handleToggleStatus }) => {
  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] overflow-hidden p-2">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 px-4 text-center">#</div>
        <div className="col-span-2 py-4 px-4 text-left">Name</div>
        <div className="col-span-2 py-4 px-4 text-left">Description</div>
        <div className="col-span-2 py-4 px-4 text-left">Benefits</div>
        <div className="col-span-2 py-4 px-4 text-left">Subscription Type</div>
        <div className="col-span-1 py-4 px-4 text-left">Price</div>
        <div className="col-span-1 py-4 px-4 text-left">Status</div>
        <div className="col-span-1 py-4 px-4 text-left">Action</div>
      </div>

      {subscription.map((story, index) => (
        <div
          key={story.id}
          className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
                    hover:bg-opacity-60 transition duration-300"
        >
          <div className="col-span-1 py-4 px-4 text-center pt-7">
            {story.id}
          </div>
          <div className="col-span-2 py-4 px-4 flex gap-4 pt-7">
            {story.name}
          </div>
          <div className="col-span-2 py-4 px-4 truncate pt-7">
            {story.transcription}
          </div>
          <div className="col-span-2 py-4 px-4 truncate pt-7">
            {story.benefit}
          </div>
          <div className="col-span-2 py-4 px-4 pt-7">{story.type}</div>
          <div className="col-span-1 py-4 px-4 pt-7">{story.price}</div>
          <div className="col-span-1 py-4 px-4 pt-7 ">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={story.status}
                onChange={() => handleToggleStatus(index)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 rounded-full  peer peer-checked:bg-gradient-to-l from-[#CEA3D8] to-[#000086]"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
            </label>
          </div>
          <div className="col-span-1 py-4 px-1 flex items-center justify-start gap-2">
            <div>
              <img src={bin} alt="bin" />
            </div>
            <div>
              <img src={right} alt="right" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionTable;
