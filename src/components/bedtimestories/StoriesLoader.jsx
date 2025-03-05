import React from "react";

const StoriesLoader = () => {
  return (
    <div className="grid grid-cols-12 animate-pulse text-white text-[14px] font-extralight leading-[19px] bg-opacity-40">
      <div className="col-span-1 pb-4 pt-7 pl-5">
        <div className="h-4 w-6 bg-gray-700 rounded"></div>
      </div>
      <div className="col-span-2 flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        <div className="h-4 w-24 bg-gray-700 rounded"></div>
      </div>
      <div className="col-span-5 pb-4 pt-7 px-6">
        <div className="h-4 w-full bg-gray-700 rounded"></div>
      </div>
      <div className="col-span-2 pb-4 pt-7 px-4">
        <div className="h-4 w-20 bg-gray-700 rounded"></div>
      </div>
      {/* <div className="col-span-1 pb-4 pt-7 px-4 text-center mr-6">
        <div className="h-6 w-11 bg-gray-700 rounded-full"></div>
      </div> */}
      <div className="col-span-2 py-4 px-2 flex items-center justify-center gap-2">
        <div className="h-6 w-6 bg-gray-700 rounded"></div>
        <div className="h-6 w-6 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
};

export default StoriesLoader;
