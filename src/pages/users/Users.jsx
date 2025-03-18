import React, { useState } from "react";
import UsersTable from "../../components/users/UsersTable";
import { getStories } from "../../static/dummyData";
import { useUsers } from "../../hooks/api/Get";
import Pagination from "../../components/pagination/Pagination";

const Users = () => {
  const [stories, setStories] = useState(getStories);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  const { data, loading, pagination } = useUsers(
    `/user/all?page=${1}&limit=6`,
    1
  );
  console.log("🚀 ~ Users ~ pagination:", pagination);

  return (
    <div className="w-full min-h-screen p-8 overflow-auto">
      <div className="w-full min-h-screen pb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white ">Users</h3>
          {/* <button className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
      + Add New Story
    </button> */}
        </div>
        <UsersTable
          stories={data}
          handleToggleStatus={handleToggleStatus}
          loading={loading}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Users;
