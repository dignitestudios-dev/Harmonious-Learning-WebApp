import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const CalendarField = ({
  toggleModal,
  selectedDate,
  isModalOpen,
  handleDateClick,
}) => {
  return (
    <>
      <div className="w-[154px] flex items-center gap-2 border border-white/40 pr-1 pl-2 py-0.5 rounded-full text-white">
        <span className="text-sm">{selectedDate}</span>
        <div className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full ml-7">
          <button className="text-white transition p-1" onClick={toggleModal}>
            <FaCalendarAlt size={14} />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute top-0 right-5 w-full h-full flex items-center justify-end bg-opacity-50 z-10">
          <div
            className="bg-white bg-opacity-20 p-4 blur-0 rounded-lg shadow-lg"
            style={{ width: "315px", height: "346px" }}
          >
            <div className="text-center text-white text-xl mb-4">
              January 2024
            </div>
            <div className="grid grid-cols-7 gap-2 text-white">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                <div key={day} className="text-center text-sm">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <button
                  key={i}
                  className="py-2 px-3 text-sm rounded-full hover:bg-[#8171F9] transition"
                  onClick={() => handleDateClick(`Jan, ${i + 1} 2024`)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CalendarField;
