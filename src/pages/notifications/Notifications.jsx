import React, { useState } from "react";
import NotificationsTable from "../../components/notifications/NotificationsTable";
import NotificationsModal from "../../components/notifications/NotificationsModal";

const Notifications = () => {
  const initialData = [
    {
      id: 1,
      name: "Story Name",
      transcription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      date: "18/12/2024",
      time: "10:30am",
      status: "Delivered",
    },
    {
      id: 2,
      name: "Story Name",
      transcription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      date: "18/12/2024",
      time: "11:00pm",
      status: "Delivered",
    },
    {
      id: 3,
      name: "Story Name",
      transcription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      date: "18/12/2024",
      time: "01:15pm",
      status: "Scheduled",
    },
  ];

  const [stories, setStories] = useState(initialData);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal visibility

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
  return (
    <div className="w-full min-h-screen p-8 ">
      <div className="w-full min-h-screen relative">
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
          stories={stories}
          handleToggleStatus={handleToggleStatus}
        />
      </div>

      {/* Notifications Modal */}
      <NotificationsModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Notifications;
