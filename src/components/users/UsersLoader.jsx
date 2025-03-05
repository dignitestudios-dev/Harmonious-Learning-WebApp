import React from "react";

const UsersLoader = () => {
  return (
    <div className="grid grid-cols-12 animate-pulse text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 hover:bg-opacity-60 transition duration-300">
      <div className="col-span-1 pb-4 pt-7 pl-5">
        <div className="h-4 w-6 bg-gray-600 rounded"></div>
      </div>
      <div className="col-span-2 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-600"></div>
        <div className="h-4 w-20 bg-gray-600 rounded"></div>
      </div>
      <div className="col-span-4 pb-4 pt-7 px-6 lg:ml-20">
        <div className="h-4 w-32 bg-gray-600 rounded"></div>
      </div>
      <div className="col-span-2 pb-4 pt-7 px-4"></div>
      <div className="col-span-2 pb-4 pt-7 px-4 flex justify-center">
        <div className="w-11 h-6 bg-gray-600 rounded-full"></div>
      </div>
      <div className="col-span-1 py-4 px-4 flex items-center justify-center">
        <div className="w-6 h-6 bg-gray-600 rounded"></div>
      </div>
    </div>
  );
};

export default UsersLoader;
