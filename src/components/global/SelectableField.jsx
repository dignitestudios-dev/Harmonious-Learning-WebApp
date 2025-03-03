import React, { useRef, useState } from "react";

import { GoChevronDown } from "react-icons/go";

const SelectableField = ({
  label,
  placeholder,
  handleChange,
  value,
  options,
  error,
}) => {
  const dropdownRef = useRef(null);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="w-full h-auto flex flex-col gap-1 justify-start items-start ">
      <label htmlFor="subject" className="block text-sm mb-0">
        {label}
      </label>

      <div
        className={`w-full h-[49px] focus-within:border-[1px] border rounded-full bg-transparent shadow-sm
          flex items-center justify-start relative ${
            error
              ? "focus-within:border-[#FF453A]"
              : "focus-within: border-white/30"
          }`}
      >
        <button
          className="px-5 text-sm w-full flex justify-between items-center"
          onClick={() => setDropdownVisible((prev) => !prev)}
        >
          {value ? value : placeholder}
          <GoChevronDown className="text-[17px]" />
        </button>
        {dropdownVisible && (
          <div
            ref={dropdownRef}
            className="absolute top-12 mt-2 p-4 w-full bg-gradient-to-b from-[#16162a] to-[#530845]
            border-[0.5px] rounded-[16px] shadow text-[#fff]/[0.5] z-10"
          >
            {/* <div className="w-full text-center">
              <p className="text-xl text-white">{placeholder}</p>
            </div> */}

            <span>
              {options.map((option, index) => (
                <div
                  key={index}
                  className=" p-2 cursor-pointer border-b-[1px] border-white/30 hover:bg-gradient-to-l from-[#1d1d36] to-[#580c4a] "
                >
                  <button
                    type="button"
                    value={value}
                    onClick={() => {
                      handleChange(option);
                      setDropdownVisible(false);
                    }}
                    className={` text-sm w-full flex flex-1 ${
                      value ? "text-white/90" : "text-white"
                    }   placeholder:font-normal font-normal rounded-xl outline-none bg-transparent cursor-pointer `}
                  >
                    {option}
                  </button>
                </div>
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectableField;
