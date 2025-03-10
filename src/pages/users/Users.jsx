import React, { useState } from "react";
import UsersTable from "../../components/users/UsersTable";
import { getStories } from "../../static/dummyData";
import { useUsers } from "../../hooks/api/Get";

const Users = () => {
  const [stories, setStories] = useState(getStories);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  const { data, loading, pagination } = useUsers("/user/all", 1);

  return (
    <div className="w-full min-h-screen p-8 ">
      <div className="w-full min-h-screen ">
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
      </div>
    </div>
  );
};

export default Users;
