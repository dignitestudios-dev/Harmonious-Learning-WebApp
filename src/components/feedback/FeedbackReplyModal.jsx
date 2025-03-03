import React from "react";

import { IoMdClose } from "react-icons/io";
import SaveButton from "../global/SaveButton";

const FeedbackReplyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-20 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[349px] relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-[18px] font-semibold mb-4 text-left mt-6">
          Feedback Reply
        </h2>
        <div className="flex flex-col items-start text-center ">
          <label className=" text-[16px] font-light mb-2">Description</label>
          <textarea
            placeholder="Description"
            rows={4}
            className="w-full mt-1 p-3 rounded-2xl border border-gray-600 bg-black bg-opacity-30 text-white"
          ></textarea>

          <div className="w-full flex space-x-4 mt-6">
            <SaveButton title="Send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReplyModal;
