import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { GlobalContext } from "../contexts/GlobalContext";
// import NotificationDropdown from "../components/Notifications/NotificationDropdown";

const Navbar = () => {
  const { navigate } = useContext(GlobalContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full h-[60px] bg-black flex justify-end items-center px-4 relative">
      <div className="flex items-center gap-6 py-4 font-normal text-gray-900">
        {/* Search Bar */}
        <div className="flex items-center gap-2 bg-[#252525] rounded-lg px-4 py-1">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="bg-transparent text-white placeholder-white focus:outline-none"
          />
        </div>

        {/* Profile Button */}
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 relative"
        >
          {/* Image for profile link */}
          <img
            src={`https://i.pravatar.cc/40?img=3`}
            alt="Profile"
            className="w-[28px] h-[28px] rounded-full cursor-pointer"
            onClick={() => navigate("/profile", "Profile")}
          />
          <div className="w-auto flex flex-col justify-start items-start">
            <p
              className="text-[11px] font-medium text-white"
              onClick={() => navigate("/profile", "Profile")}
            >
              Admin
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
