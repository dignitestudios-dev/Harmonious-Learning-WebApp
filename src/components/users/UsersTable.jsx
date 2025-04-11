import React, { useState } from "react";
import { right } from "../../assets/export";

import { useNavigate } from "react-router-dom";
import UsersLoader from "./UsersLoader";
import { getDateFormat } from "../../lib/helpers";

const UsersTable = ({ stories, loading, handleToggleStatus }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] overflow-hidden p-2 mb-6">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 pl-4 text-left">#</div>
        <div className="col-span-2 py-4  text-left">Name</div>
        <div className="col-span-5 py-4 px-6 text-left lg:ml-20">
          Email Address
        </div>{" "}
        {/* Adjusted padding to move it right */}
        {/* <div className="col-span-2"></div> */}
        <div className="col-span-2 py-4 px-4 text-left">Date</div>
        <div className="col-span-2 py-4 px-4 text-center">Action</div>
      </div>

      {loading ? (
        Array.from({ length: 5 }).map((_, index) => <UsersLoader key={index} />)
      ) : stories?.length === 0 ? (
        <div className="grid grid-cols-6 pt-2 pl-4 text-white text-[14px] font-light leading-[19px] bg-opacity-40">
          No Users Found
        </div>
      ) : (
        stories?.map((story, index) => (
          <div
            key={index}
            className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
              hover:bg-opacity-60 transition duration-300 "
          >
            <div className="col-span-1 pb-4 pt-7 pl-5 text-left">
              {index + 1}
            </div>
            <div className="col-span-2 flex items-center gap-4">
              <img
                src={story?.profilePicture}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-purple-600"
              />
              <span>{story?.name}</span>
            </div>
            <div className="col-span-5 pb-4 pt-7 px-6 lg:ml-20">
              {story?.email}
            </div>{" "}
            <div className="col-span-2 pb-4 pt-7 px-4">
              {getDateFormat(story?.createdAt)}
            </div>
            {/* Adjusted padding to move it right */}
            {/* Empty space for alignment */}
            {/* <div className="col-span-2 pb-4 pt-7 px-4"></div> */}
            {/* <div className="col-span-2 pb-4 pt-7 px-4 text-center">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={story?.isSubscribed}
                    onChange={() => handleToggleStatus(index)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/10 rounded-full  peer peer-checked:bg-gradient-to-l from-[#CEA3D8] to-[#000086]"></div>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
                </label>
              </div> */}
            <div
              onClick={() => navigate(`/users/user-detail/${story?.id}`)}
              className="col-span-2 py-4 px-4 flex items-center justify-center gap-4 "
            >
              <img src={right} alt="right" className="cursor-pointer" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default UsersTable;
