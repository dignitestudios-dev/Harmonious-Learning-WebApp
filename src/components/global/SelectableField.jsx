import React from "react";

const SelectableField = ({
  label,
  placeholder,
  handleChange,
  value,
  options,
  error,
}) => {
  return (
    <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
      <label htmlFor="subject" className="block text-sm mb-0">
        {label}
      </label>
      <div
        className={`w-full h-[49px] focus-within:border-[1px] border rounded-full bg-transparent shadow-sm 
          flex items-center justify-start ${
            error
              ? "focus-within:border-[#FF453A]"
              : "focus-within: border-white/30"
          }`}
      >
        <div className="w-full h-full flex items-center justify-center rounded-[12px] relative">
          <select
            value={value}
            onChange={handleChange}
            // {...register}
            className={`w-full text-sm ${
              value ? "text-white/90" : "text-white"
            }   placeholder:font-normal font-normal px-5 rounded-xl outline-none bg-transparent`}
          >
            <option value="" label={`${placeholder}`} />
            {options?.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>

    // <div>
    //   <label htmlFor="subject" className="block text-sm mb-1">
    //     Subject{label}
    //   </label>
    //   <select
    //     value={value}
    //     onChange={(e) => handleChange(e)}
    //     className="w-full bg-transparent border border-white/30 text-white p-3 rounded-full placeholder:text-sm"
    //   >
    //     <option value="">
    //       {" "}
    //       <span className="text-sm ">{placeholder}</span>
    //     </option>
    //     {options?.map((item) => (
    //       <option value="Meditation">{item}</option>
    //     ))}
    //   </select>
    // </div>
  );
};

export default SelectableField;
