import React from "react";
import { getStories } from "../../static/dummyData";

const PromoCodeUsersTable = () => {
  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] overflow-hidden p-2">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
               border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 pl-4 text-left">#</div>
        <div className="col-span-2 py-4 text-left">Name</div>
        <div className="col-span-4 py-4 px-6 text-left lg:ml-10">
          Email Address{" "}
        </div>
        <div className="col-span-2 py-4 px-4 text-left">Plan</div>
        <div className="col-span-2 py-4 px-4 text-left">Date</div>
        <div className="col-span-1 py-4 px-4 text-left">Price</div>
      </div>

      {getStories.map((story, index) => (
        <div
          key={story.id}
          className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
                  hover:bg-opacity-60 transition duration-300 "
        >
          <div className="col-span-1 pb-4 pt-7 pl-5 text-left">{story.id}</div>
          <div className="col-span-2 flex items-center gap-4">
            <img
              src={`https://i.pravatar.cc/40?img=${story.id}`}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-600"
            />
            <span>{story.name}</span>
          </div>
          <div className="col-span-4 pb-4 pt-7 px-6 lg:ml-10 text-left">
            {story.email}
          </div>{" "}
          <div className="col-span-2 pb-4 pt-7 px-4">Monthly</div>
          <div className="col-span-2 pb-4 pt-7 px-4">15 May 2023</div>
          <div className="col-span-1 pb-4 pt-7 px-4">$150</div>
        </div>
      ))}
    </div>
  );
};

export default PromoCodeUsersTable;
