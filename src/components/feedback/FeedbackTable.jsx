import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { background, bin, right } from "../../assets/export"; // Assuming you are importing the image from assets
import { FaChevronRight } from "react-icons/fa";
import FeedbackDetailModal from "./FeedbackDetailModal";
import FeedbackReplyModal from "./FeedbackReplyModal";

const FeedbackTable = ({ feedback, handleToggleStatus }) => {
  // Separate data for User and Admin Feedback

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyModalOpen, setReplyModalOpen] = useState(false);

  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] overflow-hidden p-2">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 px-4 text-center">#</div>
        <div className="col-span-2 py-4 px-4 text-left">Name</div>
        <div className="col-span-4 py-4 px-4 text-left">Description</div>
        <div className="col-span-2 py-4 px-4 text-left">Date</div>
        <div className="col-span-1 py-4 px-4 text-center">Time</div>
        <div className="col-span-2 py-4 px-4 text-center">Action</div>
      </div>

      {feedback.map((item, index) => (
        <div
          key={item.id}
          className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
              hover:bg-opacity-60 transition duration-300"
        >
          <div className="col-span-1 py-4 px-4 text-center pt-7">{item.id}</div>
          <div className="col-span-2 flex items-center gap-4">
            <img
              src={`https://i.pravatar.cc/40?img=${item.id}`}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-purple-600"
            />
            <span>{item.name}</span>
          </div>
          <div className="col-span-4 py-4 px-4 truncate pt-7">
            {item.transcription}
          </div>
          <div className="col-span-2 py-4 px-4 pt-7">{item.date}</div>
          <div className="col-span-1 py-4 px-4 text-center pt-7">
            {item.time}
          </div>
          <div className="col-span-2 py-4 px-4 flex items-center justify-center gap-4">
            <img src={bin} alt="bin" className="cursor-pointer" />
            <div onClick={() => setIsModalOpen(true)}>
              <img src={right} alt="right" className="cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
      <FeedbackDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setReplyModalOpen={setReplyModalOpen}
      />
      <FeedbackReplyModal
        isOpen={replyModalOpen}
        onClose={() => setReplyModalOpen(false)}
      />
    </div>
  );
};

export default FeedbackTable;
