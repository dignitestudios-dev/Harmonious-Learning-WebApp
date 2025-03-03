import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import SaveButton from "../global/SaveButton";
import UploadDateField from "../calendar/UploadDateField";

const CreatePromoCodeModal = ({ isOpen, onClose }) => {
  const [isPercentage, setIsPercentage] = useState(true);
  const [isSingleTime, setIsSingleTime] = useState(true);

  const [isStartDateOpen, setIsStartDateOpen] = useState(false);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);

  const [subscriptionType, setSubscriptionType] = useState(null);

  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const [usageType, setUsageType] = useState(null);

  const handleToggleType = (percentageSelected) => {
    setIsPercentage(percentageSelected);
    setSubscriptionType(percentageSelected ? "Percentage" : "Fixed Amount");
  };

  const handleToggleUsage = (singleTime) => {
    setIsSingleTime(singleTime);
    setUsageType(singleTime ? "Percentage" : "Fixed Amount");
  };

  const startDateModal = () => {
    setIsStartDateOpen((prev) => !prev);
  };

  const endDateModal = () => {
    console.log("click-->");

    setIsEndDateOpen((prev) => !prev);
  };

  const handleStartDateClick = (date) => {
    setSelectedStartDate(date);
    setIsStartDateOpen(false);
  };

  const handleEndDateClick = (date) => {
    setSelectedEndDate(date);
    setIsEndDateOpen(false);
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-30 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[703px] relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-[18px] font-semibold mb-4 text-left mt-3">
          Create New Promo Code
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="text-[16px] font-thin ">Promo Code</label>
            <input
              type="text"
              placeholder="Code"
              //   value={value}
              //   onChange={(e) => handleChange(e)}
              className="w-full bg-transparent border border-white/30 text-white px-5 py-3 
              rounded-full placeholder:text-white placeholder:text-sm mt-1 "
            />
          </div>

          <div>
            <label className=" text-[16px] font-thin">Discount Type</label>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => handleToggleType(true)}
                className={`${
                  isPercentage
                    ? "bg-gradient-to-r from-[#001d86] to-[#CEA3D8] text-white"
                    : "text-white bg-transparent border border-white/30"
                } py-3 px-8 rounded-full transition duration-300 text-[14px]`}
              >
                Percentage
              </button>
              <button
                type="button"
                onClick={() => handleToggleType(false)}
                className={`${
                  !isPercentage
                    ? "bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white"
                    : "bg-transparent border border-white/30 text-white"
                } py-3 px-8 rounded-full transition duration-300`}
              >
                Fixed Amount
              </button>
            </div>
          </div>

          <div>
            <label className="text-[16px] font-thin ">Time</label>
            <input
              type="text"
              placeholder="%  0-100"
              //   value={value}
              //   onChange={(e) => handleChange(e)}
              className="w-full bg-transparent border border-white/30 text-white px-5 py-3 
              rounded-full placeholder:text-white placeholder:text-sm mt-1 "
            />
          </div>

          <div>
            <label className=" text-[16px] font-thin">Usage Type</label>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => handleToggleUsage(true)}
                className={`${
                  isSingleTime
                    ? "bg-gradient-to-r from-[#001d86] to-[#CEA3D8] text-white"
                    : "text-white bg-transparent border border-white/30"
                } py-3 px-8 rounded-full transition duration-300 text-[14px]`}
              >
                Single Time
              </button>
              <button
                type="button"
                onClick={() => handleToggleUsage(false)}
                className={`${
                  !isSingleTime
                    ? "bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white"
                    : "bg-transparent border border-white/30 text-white"
                } py-3 px-8 rounded-full transition duration-300`}
              >
                Multi Time
              </button>
            </div>
          </div>

          <div>
            <label className="text-[16px] font-thin ">Multi Time</label>
            <input
              type="text"
              placeholder="%  0-100"
              //   value={value}
              //   onChange={(e) => handleChange(e)}
              className="w-full bg-transparent border border-white/30 text-white px-5 py-3 
              rounded-full placeholder:text-white placeholder:text-sm mt-1 "
            />
          </div>
          <div className="w-full">
            <label className=" text-sm ">Duration</label>
            <div className="w-full flex justify-between">
              <div className="w-[48%]">
                <UploadDateField
                  toggleModal={startDateModal}
                  selectedDate={selectedStartDate}
                  isModalOpen={isStartDateOpen}
                  handleDateClick={handleStartDateClick}
                />
              </div>
              <div className="w-[48%]">
                <UploadDateField
                  toggleModal={() => endDateModal()}
                  selectedDate={selectedEndDate}
                  isModalOpen={isEndDateOpen}
                  handleDateClick={handleEndDateClick}
                />
              </div>
            </div>
          </div>

          <SaveButton title="Save" />
        </form>
      </div>
    </div>
  );
};

export default CreatePromoCodeModal;
