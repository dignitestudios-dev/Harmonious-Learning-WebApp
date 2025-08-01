import { useState } from "react";
import { FaPen } from "react-icons/fa";
import CreateSubjectModal from "./CreateSubjectModal";

import EditSubjectModal from "./EditSubjectModal";

const SubjectsTable = ({ id, stories, loading, setUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  const openEditModal = (id, subject) => {
    setSelectedSubject({ id, subject });
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] overflow-hidden p-2 mb-6">
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
      {loading
        ? Array.from({ length: 5 })?.map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-12 animate-pulse text-white text-[14px] font-extralight leading-[19px]
         bg-opacity-40 hover:bg-opacity-60 transition duration-300"
            >
              <div className="col-span-1 pb-4 pt-7 pl-5">
                <div className="h-4 w-6 bg-gray-600 rounded"></div>
              </div>
              <div className="col-span-10 pb-4 pt-7 pl-5">
                <div className="h-4 w-14 bg-gray-600 rounded"></div>
              </div>
              <div className="col-span-1 pb-4 pt-7 pl-5">
                <div className="h-4 w-6 bg-gray-600 rounded"></div>
              </div>
            </div>
          ))
        : stories?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
              hover:bg-opacity-60 transition duration-300"
            >
              <div className="col-span-1 py-4 px-4 text-center pt-7">
                {index + 1}
              </div>
              <div className="col-span-2 py-4 px-4 flex items-center gap-4 pt-7">
                <span>{item}</span>
              </div>
              <div className="col-span-8 py-4 px-4 pt-7"></div>
              <div
                onClick={() => openEditModal(index, item)}
                className="col-span-1 py-4 px-4 flex items-center justify-center gap-4 pt-7 cursor-pointer"
              >
                <FaPen className="text-white/90 hover:text-white" size={20} />
              </div>
            </div>
          ))}

      <CreateSubjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <EditSubjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        stories={stories}
        subject={selectedSubject.subject}
        subjectId={selectedSubject.id}
        setUpdate={setUpdate}
        id={id}
      />
    </div>
  );
};

export default SubjectsTable;
