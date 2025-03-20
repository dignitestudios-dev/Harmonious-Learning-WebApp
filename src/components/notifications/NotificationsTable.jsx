import React, { useState } from "react";

import { bin } from "../../assets/export";
import { getDateFormat, getTimeFormat } from "../../lib/helpers";

const NotificationsTable = ({ notification, loading }) => {
  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] mb-6 p-2">
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

      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-12 animate-pulse text-white text-[14px] font-extralight leading-[19px] bg-opacity-40"
            >
              <div className="col-span-1 py-4 px-4 text-center">
                <div className="h-4 w-6 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-2 py-4 px-4">
                <div className="h-4 w-24 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-4 py-4 px-4">
                <div className="h-4 w-48 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-1 py-4 px-4">
                <div className="h-4 w-12 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-1 py-4 px-4">
                <div className="h-4 w-10 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-1 py-4 px-4 text-center">
                <div className="h-4 w-16 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-2 py-2 px-4 flex items-center justify-center">
                <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          ))
        : notification?.map((notify, index) => (
            <div
              key={index}
              className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
                    hover:bg-opacity-60 transition duration-300"
            >
              <div className="col-span-1 py-4 px-4 text-center">
                {index + 1}
              </div>
              <div className="col-span-2 py-4 px-4 flex items-center gap-4">
                <span>{notify?.title}</span>
              </div>
              <div className="col-span-4 py-4 px-4 truncate">
                {notify?.message}
              </div>
              <div className="col-span-1 w-40 py-4 px-4">
                {getDateFormat(notify?.createdAt)}
              </div>
              <div className="col-span-1 py-4 px-4">
                {getTimeFormat(notify?.createdAt)}
              </div>
              <div className="col-span-1 py-4 px-4 text-center">
                <p
                  className={`text-[14px] font-medium ${
                    notify?.sentByAdmin ? "text-[#4EFF62]" : "text-[#FF9500]"
                  }`}
                >
                  {notify?.sentByAdmin ? "Scheduled" : "Delivered"}
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
