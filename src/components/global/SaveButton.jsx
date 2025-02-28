import React from "react";

const SaveButton = ({ title }) => {
  return (
    <button
      type="submit"
      className="w-full h-[49px] py-2 px-4 bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
    >
      {title}
    </button>
  );
};

export default SaveButton;
