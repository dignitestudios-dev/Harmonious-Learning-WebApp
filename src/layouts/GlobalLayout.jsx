import React, { useEffect, useState } from "react";
// import { Logo } from "../assets/export";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { background } from "../assets/export";
import NoInternetModal from "../components/global/NoInternetModal";

const GlobalLayout = () => {
  const [openNoInternet, setOpenNoInternet] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) {
      // Handle no internet connection
      setOpenNoInternet(true);
    }
  }, []);
  return (
    <div
      className="w-full h-screen font-m"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-screen overflow-y-hidden flex justify-start items-start bg-transparent">
        <Sidebar />
        <div className="w-full lg:w-[calc(100%-280px)]  h-full relative flex flex-col justify-start items-start">
          <Navbar />
          <div className="w-full h-[calc(100%-60px)]  white text-white flex flex-col justify-start items-start">
            <NoInternetModal isOpen={openNoInternet} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalLayout;
