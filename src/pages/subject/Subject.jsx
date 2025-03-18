import React, { useState } from "react";
import SubjectsTable from "../../components/subject/SubjectsTable";
import CreateSubjectModal from "../../components/subject/CreateSubjectModal";
import { storyData } from "../../static/dummyData";
import { useAllSubject } from "../../hooks/api/Get";
import Pagination from "../../components/pagination/Pagination";

const Subject = () => {
  const [update, setUpdate] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading } = useAllSubject(
    `/user/getAllSubjects?page=${currentPage}&limit=5`,
    1,
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
      <div className="w-full min-h-screen pb-6">
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
          stories={data}
          handleToggleStatus={handleToggleStatus}
          loading={loading}
          setUpdate={setUpdate}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
      <CreateSubjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default Subject;
