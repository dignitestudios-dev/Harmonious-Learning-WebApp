import React, { useState } from "react";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const UploadDateField = ({
  toggleModal,
  selectedDate,
  isModalOpen,
  handleDateClick,
  label,
  top = false,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const years = [selectedYear, selectedYear + 1]; // Allow selecting 2 future years

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const prevMonth = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return prevMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const nextMonth = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return nextMonth;
    });
  };

  const handleYearChange = (event) => {
    const newYear = parseInt(event.target.value);
    setSelectedYear(newYear);
    setCurrentDate(new Date(newYear, currentDate.getMonth(), 1));
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  return (
    <div className="relative">
      <label className="block text-sm mb-1">{label ? label : null}</label>
      <div className=" w-full h-[50px] flex justify-between items-center border pl-5 pr-2 border-white/40 rounded-full text-white">
        <span className="text-sm">{selectedDate}</span>
        <div className=" bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full px-2 py-1">
          <button
            type="button"
            className="text-white transition mt-[2px]"
            onClick={toggleModal}
          >
            <FaCalendarAlt size={22} />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <div
          className={`absolute ${
            top ? "top-14 right-2" : "bottom-14 right-0"
          }   flex items-center justify-end z-10 `}
        >
          <div className="bg-white/30 backdrop-blur-[5px] shadow-[0px_9px_34.4px_0px_#00000040] rounded-[18px] p-4 w-[315px]">
            {/* Header with month & year selection */}
            <div className="flex justify-between items-center text-white text-xl mb-4">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-2 hover:text-gray-300"
              >
                <FaChevronLeft />
              </button>
              <div className="flex items-center gap-2">
                <span>{monthNames[currentDate.getMonth()]}</span>
                <select
                  className="bg-transparent outline-none"
                  value={selectedYear}
                  onChange={handleYearChange}
                >
                  {years.map((year) => (
                    <option key={year} value={year} className="text-black">
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-2 hover:text-gray-300"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 text-white">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                <div key={day} className="text-center text-sm">
                  {day}
                </div>
              ))}

              {/* Calendar Days */}
              {Array.from({ length: daysInMonth }, (_, i) => (
                <button
                  type="button"
                  key={i}
                  className="py-2 px-3 text-sm rounded-full hover:bg-[#8171F9] transition"
                  onClick={() =>
                    handleDateClick(
                      `${monthNames[currentDate.getMonth()]}, ${
                        i + 1
                      } ${selectedYear}`
                    )
                  }
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadDateField;
