import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

const NotificationsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Manage state for the selected time and AM/PM
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("AM");

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black text-white w-[455px] h-auto md:w-[500px] p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-left mt-6">
          Create New Notification
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full mt-1 p-3 rounded-full border border-gray-600 bg-black bg-opacity-30 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Select"
                className="w-full mt-1 p-3 rounded-full border border-gray-600 bg-black bg-opacity-30 text-white pr-10"
              />
              {/* Calendar Icon */}
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-gradient-to-r from-[#000086] to-[#CEA3D8] p-2 rounded-full">
                <FaCalendarAlt className="text-gray-100" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Time</label>
            <div className="relative flex items-center">
              {/* Parent div for time input and vertical line */}
              <div className="flex items-center border border-gray-600 bg-black bg-opacity-30 rounded-full w-full">
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
                  className="bg-black text-white border-none rounded-r-full mr-2"
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
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

export default NotificationsModal;
