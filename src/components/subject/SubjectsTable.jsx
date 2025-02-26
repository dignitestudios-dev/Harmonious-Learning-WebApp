import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { background } from "../../assets/export"; // Assuming you are importing the image from assets
import { FaChevronRight } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import CreateSubjectModal from "./CreateSubjectModal";

const SubjectsTable = ({ stories, handleToggleStatus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] overflow-hidden p-2">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 px-4 text-center">#</div>
        <div className="col-span-2 py-4 px-4 text-left">Name</div>
        {/* You can add more columns here like Description, Date, etc. */}
        <div className="col-span-8 py-4 px-4 text-center">
          {" "}
          {/* Adjusted the column span for remaining content */}{" "}
        </div>
        <div className="col-span-1 py-4 px-4 text-center">Action</div>{" "}
        {/* Action column on the far right */}
      </div>

      {stories.map((story, index) => (
        <div
          key={story.id}
          className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
              hover:bg-opacity-60 transition duration-300 "
        >
          <div className="col-span-1 py-4 px-4 text-center pt-7">
            {story.id}
          </div>
          <div className="col-span-2 py-4 px-4 flex items-center gap-4 pt-7">
            <span>{story.name}</span>
          </div>
          <div className="col-span-8 py-4 px-4 pt-7">
            {" "}
            {/* Remaining content area */}
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
            className="col-span-1 py-4 px-4 flex items-center justify-center gap-4 pt-7"
          >
            {/* <IoMdTrash className="text-red-500 cursor-pointer hover:text-red-700" size={24} /> */}
            <FaPen
              className="text-white/90 cursor-pointer hover:text-white"
              size={20}
            />
          </div>
        </div>
      ))}

      <CreateSubjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SubjectsTable;
