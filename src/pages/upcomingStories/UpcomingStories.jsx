import { useEffect, useState } from "react";
import UpcomingTable from "../../components/upcoming/UpcomingTable";
import { useStories } from "../../hooks/api/Get";

const UpcomingStories = () => {
  const [stories, setStories] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isMeditation, setIsMeditation] = useState(true);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  const handleToggleType = (isMeditationSelected) => {
    setIsMeditation(isMeditationSelected);
  };

  const { data, loading, pagination } = useStories(
    "/admin/getUpcomingStories",
    1,
    update
  );
  console.log("🚀 ~ UpcomingStories ~ data:", data);

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
  }, [isMeditation, data, update]);

  return (
    <div className="w-full min-h-screen overflow-auto p-8">
      <div className="w-full min-h-screen pb-6">
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

            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
            >
              Add New
            </button> */}
          </div>
        </div>
        <UpcomingTable
          loader={loading}
          stories={stories}
          handleToggleStatus={handleToggleStatus}
          setUpdate={setUpdate}
        />
      </div>
      {/* <UpcomingStoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </div>
  );
};

export default UpcomingStories;
