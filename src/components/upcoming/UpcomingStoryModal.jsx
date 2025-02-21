import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { uploadimage } from "../../assets/export"; // Assuming the image is imported from assets

const UpcomingStoryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black text-white w-[455px] h-[673px] md:w-[500px] p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-left mt-6">
          Create New Upcoming Story
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Bed Time Story</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-1 p-3 rounded-full border border-gray-600 bg-black bg-opacity-30 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Release Date</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select"
                className="w-full mt-1 p-3 rounded-full border border-gray-600 bg-black bg-opacity-30 text-white pr-10" // Keep background and padding-right
              />
              {/* Container with gradient background behind the icon */}
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gradient-to-r from-[#000086] to-[#CEA3D8] p-2 rounded-full">
                <FaCalendarAlt className="text-gray-100" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            <div className="flex items-center justify-center w-full mt-1 h-[150px] border border-gray-600 rounded-2xl bg-black bg-opacity-30">
              <label className="cursor-pointer flex flex-col items-center">
                <img
                  src={uploadimage} // Show the imported image
                  alt="Upload"
                  className="w-18 h-10 text-gray-400" // Adjust size accordingly
                />
                <span className="text-gray-400 text-sm mt-2">
                  Choose File to upload Image
                </span>
                <input type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              placeholder="Description"
              rows={3}
              className="w-full mt-1 p-3 rounded-2xl border border-gray-600 bg-black bg-opacity-30 text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpcomingStoryModal;
