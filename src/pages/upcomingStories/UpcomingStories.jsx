import React, { useEffect, useState } from "react";
import UpcomingStoryModal from "../../components/upcoming/UpcomingStoryModal";
import UpcomingTable from "../../components/upcoming/UpcomingTable";
import { bedtimeData, meditationData } from "../../static/dummyData";
import { useUsers } from "../../hooks/api/Get";

const UpcomingStories = () => {
  // State for stories, and whether it's Meditation or Bedtime Stories
  const [stories, setStories] = useState([]);

  const [isMeditation, setIsMeditation] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle toggling the status of a story
  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  // Handle switching between Meditation and Bedtime Stories
  const handleToggleType = (isMeditationSelected) => {
    setIsMeditation(isMeditationSelected);
  };

  const { data, loading, pagination } = useUsers("/user/getUpcomingStories", 1);

  useEffect(() => {
    if (data?.length > 0) {
      if (isMeditation) {
        setStories(
          data?.filter((item) => item.upcomingStoryType === "Meditation")
        );
      } else {
        setStories(
          data?.filter((item) => item.upcomingStoryType === "Bedtime")
        );
      }
    }
  }, [isMeditation, data]);

  return (
    <div className="w-full min-h-screen p-8">
      <div className="w-full min-h-screen ">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white">Upcoming</h3>

          {/* Container for the Add New and Switchable buttons */}
          <div className="flex items-center gap-4 ">
            {/* Switchable Button for Meditation / Bedtime Stories */}
            <div className="flex items-center bg-black rounded-full">
              <button
                onClick={() => handleToggleType(true)}
                className={`${
                  isMeditation
                    ? "bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white"
                    : "bg-black text-white"
                } py-3 px-8 rounded-full transition duration-300 text-[14px]`}
              >
                Meditation
              </button>
              <button
                onClick={() => handleToggleType(false)}
                className={`${
                  !isMeditation
                    ? "bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white"
                    : "bg-black text-white"
                } py-3 px-8 rounded-full transition duration-300`}
              >
                Bed Time Stories
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
            >
              Add New
            </button>
          </div>
        </div>
        <UpcomingTable
          loading={loading}
          stories={stories}
          handleToggleStatus={handleToggleStatus}
        />
      </div>
      <UpcomingStoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default UpcomingStories;
