import React, { useState } from "react";
import MeditationTable from "../../components/meditation/MeditationTable";
import { useNavigate } from "react-router-dom";
import { meditationData } from "../../static/dummyData";
import { useStories } from "../../hooks/api/Get";

const Meditation = () => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);

  const [meditation, setMeditation] = useState(meditationData);

  const handleToggleStatus = (index) => {
    const updatedStories = [...meditation];
    updatedStories[index].status = !updatedStories[index].status;
    setMeditation(updatedStories);
  };

  const { data, loading, pagination } = useStories(
    "/admin/getMeditationStories",
    1,
    update
  );

  return (
    <div className="w-full h-full min-h-screen p-8 relative overflow-auto">
      <div className="w-full min-h-screen relative pb-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white">Meditation</h3>
          <button
            onClick={() => navigate("/meditation/meditation-upload")}
            className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] 
          lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
          >
            Add New
          </button>
        </div>
        <MeditationTable
          loader={loading}
          meditation={data}
          handleToggleStatus={handleToggleStatus}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default Meditation;
