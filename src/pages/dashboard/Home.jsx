import React, { useState } from "react";
import DashboardStats from "../../components/dashboard/DashboardStats";
import SubscriptionStats from "../../components/dashboard/SubscriptionStats";
import TopMeditationTracks from "../../components/dashboard/TopMeditationTracks";
import { useStories } from "../../hooks/api/Get";

const Home = () => {
  const [update, setUpdate] = useState(false);

  const { data, loading, pagination } = useStories(
    "/admin/getBedTimeStories",
    1,
    update
  );
  console.log("🚀 ~ Home ~ data:", data);
  return (
    <>
      <div className="w-full h-full p-10 overflow-auto">
        {/* Blur overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-0 w-full h-auto"></div> */}

        <div className="  z-10 h-auto w-full p-2 lg:p-1 flex flex-col gap-6 justify-start items-start bg-transparent">
          <h1 className="text-white text-3xl font-bold">Dashboard</h1>

          {/* Stats Section */}
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <div className="w-full">
              <DashboardStats />
            </div>
          </div>

          <div className="w-full">
            <SubscriptionStats />
          </div>

          {/* Top Meditation Tracks Section */}
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <div className="w-full ">
              <TopMeditationTracks
                loading={loading}
                tracks={data}
                title="Top Meditation Tracks"
              />
            </div>
            <div className="w-full ">
              <TopMeditationTracks
                tracks={data}
                loading={loading}
                title="Top Bed Time Stories"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
