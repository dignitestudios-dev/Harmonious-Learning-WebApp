import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { CiSearch, CiUser } from "react-icons/ci";
// import NotificationDropdown from "../components/Notifications/NotificationDropdown";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="w-full h-[60px]  flex justify-end items-center px-10">
      <div className="flex items-center  py-4 font-normal text-gray-900 mt-2">
        {/* Search Bar */}
        <div className="w-full h-auto flex flex-col gap-1 justify-start items-start ">
          <div
            className="w-[275px] h-[42px] flex items-center justify-start border-[1px] border-white/30 rounded-full 
              focus-within:border-white/30 focus-within:border-[1px]"
          >
            <div className="w-full h-full flex items-center justify-start rounded-[12px] relative">
              <input
                type="text"
                placeholder="Search anything..."
                className="w-full text-sm font-normal text-white/50 absolute left-12
                placeholder:text-white/50 placeholder:font-normal outline-none bg-transparent"
                onChange={(e) => console.log(e.target.value)}
              />
              <CiSearch size={24} className=" text-white/50 absolute mx-4 " />
            </div>
          </div>
        </div>

        {/* Profile Button */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing immediately
            setIsDropdownOpen((prev) => !prev);
          }}
          className="flex items-center gap-2 w-24 "
        >
          {/* Image for profile link */}
          <img
            src={`https://i.pravatar.cc/40?img=3`}
            alt="Profile"
            className="w-[32px] h-[32px] rounded-full cursor-pointer"
          />
          <div className=" flex flex-col justify-start items-start">
            <p className="text-[13px] font-medium text-white">Admin</p>
          </div>
        </button>

        <div
          className={`w-[120px] h-[60px] rounded-[12px] absolute top-12 right-4 shadow-md p-3 transition-all duration-300
             flex flex-col justify-start items-start   bg-white/40 z-[1000] ${
               isDropdownOpen ? "scale-100" : "scale-0"
             }`}
        >
          <button
            onClick={() => navigate("auth/login")}
            className="w-full py-2 px-2 rounded text-left text-white text-[14px] font-medium leading-[14.85px] hover:bg-white/30"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
