import React, { useState } from "react";
import BedtimeStoriesTable from "../../components/bedtimestories/BedtimeStoriesTable";

import { useNavigate } from "react-router-dom";
import { bedtimeData } from "../../static/dummyData";
import { useStories } from "../../hooks/api/Get";
import Pagination from "../../components/pagination/Pagination";

const BedtimeStories = () => {
  const navigate = useNavigate();
  const [update, setUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [stories, setStories] = useState(bedtimeData);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  const { data, loading, pagination } = useStories(
    "/admin/getBedTimeStories",
    currentPage,
    update
  );

  return (
    <div className="w-full min-h-screen overflow-auto p-8 ">
      <div className="w-full min-h-screen pb-12">
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
          loader={loading}
          handleToggleStatus={handleToggleStatus}
          setUpdate={setUpdate}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={pagination}
        />
      </div>
    </div>
  );
};

export default BedtimeStories;
