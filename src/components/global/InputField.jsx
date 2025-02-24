import React from "react";

const InputField = ({ label, placeholder, handleChange, value }) => {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        className="w-full bg-transparent border border-white/30 text-white px-5 py-3 
              rounded-full placeholder:text-white placeholder:text-sm "
      />
    </div>
  );
};

export default InputField;
