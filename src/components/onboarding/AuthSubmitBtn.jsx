import React from "react";
import { RiLoader5Line } from "react-icons/ri";

const AuthSubmitBtn = ({ text, loading }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-4 justify-start items-start mt-3">
      <button
        type="submit"
        className="w-full h-[49px] py-2 px-4 bg-gradient-to-r from-[#000086] to-[#CEA3D8] flex items-center justify-center
         text-white text-[14px] font-semibold rounded-full shadow-md hover:opacity-90 transition"
      >
        <div className="flex items-center">
          <span className="mr-1">{text}</span>
          {loading && (
            <RiLoader5Line className="animate-spin text-lg mx-auto" />
          )}
        </div>
      </button>
    </div>
  );
};

export default AuthSubmitBtn;
