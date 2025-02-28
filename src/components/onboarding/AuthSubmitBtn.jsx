import React from "react";

const AuthSubmitBtn = ({ text }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-4 justify-start items-start mt-3">
      <button
        type="submit"
        className="w-full h-[49px] py-2 px-4 bg-gradient-to-r from-[#000086] to-[#CEA3D8]
         text-white text-[14px] font-semibold rounded-full shadow-md hover:opacity-90 transition"
      >
        {text}
      </button>
    </div>
  );
};

export default AuthSubmitBtn;
