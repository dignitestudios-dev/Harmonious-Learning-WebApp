import React, { useState } from "react";
import UsersTable from "../../components/users/UsersTable";

const Users = () => {
  const initialData = [
    {
      id: 1,
      name: "Story Name",
      email: "email@example.com",
      date: "18/12/2024",
      status: true,
    },
    {
      id: 2,
      name: "Story Name",
      email: "email@example.com",
      date: "18/12/2024",
      status: false,
    },
    {
      id: 3,
      name: "Story Name",
      email: "email@example.com",
      date: "18/12/2024",
      status: true,
    },
    {
      id: 4,
      name: "Story Name",
      email: "email@example.com",
      date: "18/12/2024",
      status: true,
    },
    {
      id: 5,
      name: "Story Name",
      email: "email@example.com",
      date: "18/12/2024",
      status: false,
    },
    {
      id: 6,
      name: "Story Name",
      email: "email@example.com",
      date: "18/12/2024",
      status: true,
    },
  ];

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
          <h3 className="text-[36px] font-bold text-white ">Users</h3>
          {/* <button className="bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
      + Add New Story
    </button> */}
        </div>
        <UsersTable stories={stories} handleToggleStatus={handleToggleStatus} />
      </div>
    </div>
  );
};

export default Users;
