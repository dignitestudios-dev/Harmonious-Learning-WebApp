import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { getDateFormat } from "../../lib/helpers";

const FeedbackDetailModal = ({
  isOpen,
  onClose,
  setReplyModalOpen,
  feedbackdetail,
}) => {
  const [isMonthly, setIsMonthly] = useState(true);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-20 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[580px] relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-[18px] font-semibold  text-left mt-6">Feedback</h2>
        <div className="flex justify-between items-center text-left w-full mt-4">
          <div className=" w-[48%]">
            <p className="text-[16px] ">Posted By</p>
          </div>
          <div className="w-[48%]">
            <p className="text-[16px] ">Posted Date</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-left w-full mt-4">
          <div className="flex items-center space-x-2 w-[48%] ">
            <img
              src={`${feedbackdetail?.userId?.profilePicture}`}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-600"
            />
            <span className="text-[14px] font-light">
              {feedbackdetail?.userId?.name}
            </span>
          </div>
          <div className="w-[48%]">
            <p className="text-[14px] font-light">
              {getDateFormat(feedbackdetail?.createdAt)}
            </p>
          </div>
        </div>

        <hr className="border-b border-white/10 my-6" />

        <div className="space-y-4 h-[250px] overflow-y-auto ">
          <p className="text-[16px]  mt-4">Description</p>
          <p className="text-[14px] font-light mt-4">
            {feedbackdetail?.message}
          </p>
        </div>
        <button
          onClick={() => {
            setReplyModalOpen(true);
            onClose();
          }}
          className="w-full h-[49px] py-2 px-4 mt-6 bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white
            rounded-full shadow-md hover:opacity-90 transition text-[16px]"
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default FeedbackDetailModal;
