import React from "react";
import { RiLoader5Line } from "react-icons/ri";

const SaveButton = ({ title, loading }) => {
  return (
    <button
      disabled={loading}
      type="submit"
      className="w-full h-[49px] py-2 px-4 bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white font-semibold
      flex justify-center rounded-full shadow-md hover:opacity-90 transition"
    >
      <div className="flex items-center ">
        <span className="mr-1">{title}</span>
        {loading && <RiLoader5Line className="animate-spin text-lg mx-auto" />}
      </div>
    </button>
  );
};

export default SaveButton;
