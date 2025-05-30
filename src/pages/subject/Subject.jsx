import React, { useState } from "react";
import SubjectsTable from "../../components/subject/SubjectsTable";
import CreateSubjectModal from "../../components/subject/CreateSubjectModal";
import { storyData } from "../../static/dummyData";
import { useAllSubject } from "../../hooks/api/Get";

const Subject = () => {
  const [update, setUpdate] = useState(false);
  const { loading, data, subjectId } = useAllSubject(
    `/user/getAllSubjects`,
    update
  );

  const [stories, setStories] = useState(storyData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  return (
    <div className="w-full min-h-screen p-8 overflow-auto">
      <div className="w-full min-h-screen pb-12">
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
          id={subjectId}
          stories={data}
          handleToggleStatus={handleToggleStatus}
          loading={loading}
          setUpdate={setUpdate}
        />
      </div>
      <CreateSubjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setUpdate={setUpdate}
        subject={data}
      />
    </div>
  );
};

export default Subject;
