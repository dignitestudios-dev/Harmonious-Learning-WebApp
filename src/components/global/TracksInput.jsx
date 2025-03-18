import React from "react";

const TracksInput = ({
  id,
  label,
  placeholder,
  icon,
  file,
  handleFileUpload,
  error,
}) => {
  return (
    <div className="w-full">
      <label htmlFor="description" className="block text-[16px] mb-1">
        {label}{" "}
        {id === "music" && (
          <span className="text-xs font-extralight text-white">
            (Optionall)
          </span>
        )}
      </label>
      <div
        className={`flex flex-col justify-center items-center bg-transparent h-[128px] border focus:ring-0 focus:outline-none
        ${
          error
            ? "border-red-600 focus-within:border-[#FF453A]"
            : "border-white/30 focus-within:border-white/50"
        }  rounded-[16px]`}
      >
        <label className=" text-sm mb-1 flex items-center justify-center">
          <img className="w-10" src={icon} alt="upload" />
        </label>
        <label className="block text-white p-3 rounded-lg cursor-pointer text-[12px]">
          {file
            ? Array.isArray(file)
              ? file.length > 0
                ? `${file.length} file uploaded`
                : placeholder
              : file.name
              ? file.name?.length > 38
                ? file.name?.slice(0, 38) + "..."
                : file.name
              : placeholder
            : placeholder}
          <input
            id={id}
            type="file"
            accept="audio/*,video/*,.srt"
            className="hidden"
            onChange={(e) => handleFileUpload(e)}
          />
        </label>
      </div>
      {error ? (
        <p className="text-red-600 text-sm font-light">{error}</p>
      ) : null}
    </div>
  );
};

export default TracksInput;
