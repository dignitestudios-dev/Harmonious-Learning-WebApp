import React from "react";
import { IoMdClose } from "react-icons/io";
import SaveButton from "../global/SaveButton";

const CreateSubjectModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-30 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[249px] relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl
           text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-[18px] font-semibold mb-4 text-left mt-2">
          Add New Subject
        </h2>
        <div className="flex flex-col items-start text-center ">
          <label className="block text-[16px] mb-2">Subject</label>
          <input
            type="text"
            placeholder="Name"
            //   value={value}
            //   onChange={(e) => handleChange(e)}
            className="w-full bg-transparent border border-white/30 text-white px-5 py-3 
              rounded-full placeholder:text-white placeholder:text-sm "
          />

          <div className="w-full flex space-x-4 mt-6">
            <SaveButton title="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSubjectModal;
