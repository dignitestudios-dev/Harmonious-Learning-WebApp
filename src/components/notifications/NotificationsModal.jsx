import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

import InputField from "../global/InputField";
import UploadDateField from "../calendar/UploadDateField";
import SaveButton from "../global/SaveButton";

const NotificationsModal = ({ isOpen, onClose }) => {
  // Manage state for the selected time and AM/PM
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("AM");
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);
  const [selectedEndDate, setSelectedEndDate] = useState("");

  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  const endDateModal = () => {
    console.log("click-->");

    setIsEndDateOpen((prev) => !prev);
  };

  const handleEndDateClick = (date) => {
    setSelectedEndDate(date);
    setIsEndDateOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-30 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[629px] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 
          text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-[18px] font-semibold mb-4 text-left mt-6">
          Create New Notification
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <InputField
            label="Subscription"
            placeholder="Name"
            handleChange={(e) => handleChange(e)}
            value={name}
          />

          <div>
            <label className=" text-sm mb-1">Date</label>

            <UploadDateField
              toggleModal={() => endDateModal()}
              selectedDate={selectedEndDate}
              isModalOpen={isEndDateOpen}
              handleDateClick={handleEndDateClick}
              top={true}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Time</label>
            <div className="relative flex items-center">
              {/* Parent div for time input and vertical line */}
              <div className="flex items-center border border-white/40 rounded-full w-full">
                {/* Time Input Field */}
                <input
                  type="text"
                  value={time}
                  onChange={handleTimeChange}
                  placeholder="HH:MM"
                  className="w-full p-3 pr-2 text-white bg-transparent border-none rounded-l-full"
                />
                {/* Vertical Line */}
                <div className="border-l border-gray-600 h-8 mx-2" />
                {/* AM/PM Dropdown */}
                <select
                  value={period}
                  onChange={handlePeriodChange}
                  className="bg-transparent text-white border-none rounded-r-full mr-2"
                >
                  <option className="bg-black" value="AM">
                    AM
                  </option>
                  <option className="bg-black" value="PM">
                    PM
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              placeholder="Description"
              rows={5}
              className="w-full mt-1 p-3 rounded-2xl border border-white/40 bg-transparent text-white"
            ></textarea>
          </div>

          <SaveButton title="Save" />
        </form>
      </div>
    </div>
  );
};

export default NotificationsModal;
