import React from "react";

import { book, plant, user } from "../../assets/export";

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Users",
      value: "3,000",
      // icon: <FiUsers className="text-purple-500 text-3xl" />,
      icon: <img src={user} />,
    },
    {
      title: "Total Meditation Tracks",
      value: "3,000",
      // icon: <IoDocumentOutline className="text-purple-500 text-3xl" />,
      icon: <img src={plant} />,
    },
    {
      title: "Total Bed Time Stories",
      value: "3,000",
      // icon: <CgFileDocument className="text-purple-500 text-3xl" />,
      icon: <img src={book} />,
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-black/55 border-black rounded-[25px] p-6 flex flex-col items-left"
        >
          <div className="w-[60px] h-[60px] p-3 bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-2xl flex items-center justify-center mb-4">
            {stat.icon}
          </div>
          <div className="w-full flex items-center justify-between">
            <h3 className="text-white/80 text-[16px]  mt-2">{stat.title}</h3>
            <p className="text-white/90 text-[28px] font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
