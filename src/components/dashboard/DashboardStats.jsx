import React from "react";

import { book, plant, user } from "../../assets/export";

const DashboardStats = ({ loading, values }) => {
  const stats = [
    {
      title: "Total Users",
      value: values?.userRecord,
      // icon: <FiUsers className="text-purple-500 text-3xl" />,
      icon: <img src={user} />,
    },
    {
      title: "Total Meditation Tracks",
      value: values?.meditationTracksCount,
      // icon: <IoDocumentOutline className="text-purple-500 text-3xl" />,
      icon: <img src={plant} />,
    },
    {
      title: "Total Bed Time Stories",
      value: values?.bedTimeTracksCount,
      // icon: <CgFileDocument className="text-purple-500 text-3xl" />,
      icon: <img src={book} />,
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="bg-black/55 border-black rounded-[25px] p-6 flex flex-col items-left animate-pulse"
            >
              {/* Icon Placeholder */}
              <div className="w-[60px] h-[60px] bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl mb-4"></div>

              {/* Title Placeholder */}
              <div className="h-4 w-1/2 bg-gray-600 rounded-md mb-3"></div>

              {/* Value Placeholder */}
              <div className="h-6 w-1/4 bg-gray-700 rounded-md"></div>
            </div>
          ))
        : stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/55 border-black rounded-[25px] p-6 flex flex-col items-left"
            >
              <div className="w-[60px] h-[60px] p-3 bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-2xl flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <div className="w-full flex items-center justify-between">
                <h3 className="text-white/80 text-[16px]  mt-2">
                  {stat.title}
                </h3>
                <p className="text-white/90 text-[28px] font-bold">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
    </div>
  );
};

export default DashboardStats;
