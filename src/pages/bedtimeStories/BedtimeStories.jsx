import React, { useState } from "react";
import BedtimeStoriesTable from "../../components/bedtimestories/BedtimeStoriesTable";

import { useNavigate } from "react-router-dom";
import { bedtimeData } from "../../static/dummyData";
import { useUsers } from "../../hooks/api/Get";

const BedtimeStories = () => {
  const navigate = useNavigate();

  const [stories, setStories] = useState(bedtimeData);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  const { data, loading, pagination } = useUsers("/user/getBedTimeStories", 1);
  console.log("🚀 ~ BedtimeStories ~ loading:", loading);
  console.log("🚀 ~ BedtimeStories ~ data:", data);

  return (
    <div className="w-full min-h-screen p-8 ">
      <div className="w-full min-h-screen ">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white">Bed Time Stories</h3>
          <button
            onClick={() => navigate("/bedtime-stories/upload-bedtime-stories")}
            className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
          >
            Add New
          </button>
        </div>
        <BedtimeStoriesTable
          stories={data}
          loading={loading}
          handleToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
};

export default BedtimeStories;
