import React from "react";

const UserDetailLoader = () => {
  return (
    <div className="bg-[#00000044] border-[#000] rounded-[26px] shadow-md p-6 animate-pulse">
      <div className="flex items-center space-x-4 mb-4 border-b pb-4 border-white/15">
        <div className="w-16 h-16 rounded-full bg-gray-300" />
        <div>
          <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>
          <div className="w-16 h-4 bg-gray-300 rounded"></div>
        </div>
      </div>

      <div className="w-32 h-6 bg-gray-300 rounded mb-2"></div>
      <div className="flex flex-wrap gap-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="px-6 py-2 w-24 h-6 bg-gray-300 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default UserDetailLoader;
