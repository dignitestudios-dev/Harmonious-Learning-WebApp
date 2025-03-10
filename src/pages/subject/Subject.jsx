import React, { useState } from "react";
import SubjectsTable from "../../components/subject/SubjectsTable";
import CreateSubjectModal from "../../components/subject/CreateSubjectModal";
import { storyData } from "../../static/dummyData";

const Subject = () => {
  const [stories, setStories] = useState(storyData);
  const [isMeditation, setIsMeditation] = useState(true); // State for toggling between Meditation and Bedtime Stories
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  return (
    <div className="w-full min-h-screen p-8">
      <div className="w-full min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white">Subjects</h3>

          {/* Container for the Add New and Switchable buttons */}
          <div className="flex items-center gap-4 ">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
            >
              Add New
            </button>
          </div>
        </div>
        <SubjectsTable
          stories={stories}
          handleToggleStatus={handleToggleStatus}
        />
      </div>
      <CreateSubjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Subject;
