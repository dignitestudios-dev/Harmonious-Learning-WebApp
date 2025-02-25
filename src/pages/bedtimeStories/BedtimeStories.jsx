import React, { useState } from "react";
import BedtimeStoriesTable from "../../components/bedtimestories/BedtimeStoriesTable";
import { background } from "../../assets/export";
import { useNavigate } from "react-router-dom";

const BedtimeStories = () => {
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

  const [stories, setStories] = useState(initialData);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };
  return (
    <div className="w-full min-h-screen p-8 ">
      <div className="w-full min-h-screen ">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white">Bed Time Stories</h3>
          <button
            onClick={() => navigate("/upload-bedtime-stories")}
            className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
          >
            Add New
          </button>
        </div>
        <BedtimeStoriesTable
          stories={stories}
          handleToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
};

export default BedtimeStories;
