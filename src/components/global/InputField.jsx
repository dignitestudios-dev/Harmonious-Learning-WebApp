import React from "react";

const InputField = ({
  label,
  placeholder,
  handleChange,
  value,
  error,
  name,
  id,
  handleBlur
}) => {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        onBlur={handleBlur}
        className={`w-full bg-transparent border focus:ring-0 focus:outline-none ${
          error
            ? "border-red-600 focus:border-red-600"
            : "border-white/30 focus:border-white/50 "
        } text-white px-5 py-3 rounded-full placeholder:text-white/70 placeholder:text-sm `}
      />

      {error ? (
        <p className="text-red-600 text-sm font-light">{error}</p>
      ) : null}
    </div>
  );
};

export default InputField;
