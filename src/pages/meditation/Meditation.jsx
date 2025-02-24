import React, { useState } from "react";
import MeditationTable from "../../components/meditation/MeditationTable";
import { background } from "../../assets/export";
import { useNavigate } from "react-router-dom";

const Meditation = () => {
  const initialData = [
    {
      id: 1,
      name: "Story Name",
      transcription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      date: "18/12/2024",
      status: true,
    },
    {
      id: 2,
      name: "Story Name",
      transcription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      date: "18/12/2024",
      status: false,
    },
    {
      id: 3,
      name: "Story Name",
      transcription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      date: "18/12/2024",
      status: true,
    },
  ];

  const navigate = useNavigate();

  const [meditation, setMeditation] = useState(initialData);

  const handleToggleStatus = (index) => {
    const updatedStories = [...meditation];
    updatedStories[index].status = !updatedStories[index].status;
    setMeditation(updatedStories);
  };
  return (
    <div className="w-full min-h-screen p-8 relative">
      <div className="w-full min-h-screen relative">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white">Meditation</h3>
          <button
            onClick={() => navigate("/meditation-upload")}
            className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] 
          lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
          >
            Add New
          </button>
        </div>
        <MeditationTable
          meditation={meditation}
          handleToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
};

export default Meditation;
