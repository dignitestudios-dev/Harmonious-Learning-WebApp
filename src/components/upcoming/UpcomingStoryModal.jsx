import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

import { bin, uploadimage } from "../../assets/export";
import InputField from "../global/InputField";
import UploadDateField from "../calendar/UploadDateField";
import SaveButton from "../global/SaveButton";

const UpcomingStoryModal = ({ isOpen, onClose }) => {
  const [imageFile, setImageFile] = useState(null);

  const [name, setName] = useState("");
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [description, setDescription] = useState("");

  // Function to toggle first modal
  const toggleModal = () => {
    setIsDateModalOpen((prev) => !prev);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsDateModalOpen(false); // Close the first modal when a date is selected
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    setImageFile(file);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-30 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[700px] relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-[18px] font-semibold mb-4 text-left mt-6">
          Create New Upcoming Story
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <InputField
              label="Bed Time Story"
              placeholder="Name"
              handleChange={(e) => handleChange(e)}
              value={name}
            />
          </div>

          <div>
            <UploadDateField
              label="Release Date"
              toggleModal={toggleModal}
              selectedDate={selectedDate}
              isModalOpen={isDateModalOpen}
              handleDateClick={handleDateClick}
              top={true}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Image</label>
            {imageFile ? (
              <div className="w-full mt-1 h-[150px] border border-white/30 rounded-[18px] relative">
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  onClick={() => setImageFile(null)}
                  type="button "
                  className="cursor-pointer bg-white rounded-full top-2 right-2 absolute hover:bg-white/80"
                >
                  <img src={bin} alt="Uploaded" className="w-8" />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full mt-1 h-[130px] border border-white/30 rounded-[18px] bg-black/15 bg-opacity-30">
                <label className="cursor-pointer flex flex-col items-center">
                  <img
                    src={uploadimage} // Show the imported image
                    alt="Upload"
                    className="w-18 h-10 text-gray-400" // Adjust size accordingly
                  />
                  <span className="text-gray-400 text-sm mt-2">
                    Choose File to upload Imageszx
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e)}
                  />
                </label>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-[139px] bg-transparent border border-white/30 rounded-[16px] text-white p-3 "
              rows="5"
            ></textarea>
          </div>

          <SaveButton title="Save" />
        </form>
      </div>
    </div>
  );
};

export default UpcomingStoryModal;
