import React, { useState } from "react";
import NotificationsTable from "../../components/notifications/NotificationsTable";
import NotificationsModal from "../../components/notifications/NotificationsModal";
import { useUsers } from "../../hooks/api/Get";
import Pagination from "../../components/pagination/Pagination";

const Notifications = () => {
  const [update, setUpdate] = useState(false);
  const [stories, setStories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility
  const [currentPage, setCurrentPage] = useState(1);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  const handleAddNewClick = () => {
    setIsModalOpen(true); // Show modal when "Add New" is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const { data, loading, pagination } = useUsers(
    `/admin/notifications`,
    currentPage,
    update
  );

  return (
    <div className="w-full min-h-screen p-8 overflow-auto ">
      <div className="w-full min-h-screen relative mb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-4xl font-bold text-white">Push Notifications</h3>
          <button
            className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
            onClick={handleAddNewClick} // Trigger the modal to open
          >
            Add New
          </button>
        </div>

        <NotificationsTable
          notification={data}
          handleToggleStatus={handleToggleStatus}
          loading={loading}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={pagination || ""}
        />
      </div>

      {/* Notifications Modal */}
      <NotificationsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default Notifications;
