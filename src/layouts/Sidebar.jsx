import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../src/assets/export"; // Assuming Logo is an image component
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { sidebarArr } from "../static/sidebarArr";
import { FaSignOutAlt } from "react-icons/fa";
import LogoutModal from "../components/dashboard/LogoutModal";

const Sidebar = () => {
  const navigate = useNavigate();
  // State for controlling the drawer visibility
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // State for tracking the active link
  const [activeLink, setActiveLink] = useState(null);

  const [isModalOpen, setModalOpen] = useState(false);

  // Toggle Drawer (Mobile)
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Close Drawer when clicking on overlay
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Handle active link change
  const handleLinkClick = (url) => {
    setActiveLink(url);
  };

  const handleDeactivate = () => {
    console.log("User deactivated");
    setModalOpen(false);
    navigate("auth/login");
  };

  return (
    <div>
      {/* Drawer Toggle Button (Hamburger -> X) */}
      <button
        onClick={toggleDrawer}
        className="lg:hidden fixed top-4 left-4 z-50 text-[#074F57]"
      >
        {isDrawerOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
      </button>

      {/* Sidebar (Drawer) */}
      <div
        className={`fixed lg:static top-0 left-0 w-[280px] bg-black py-4 flex flex-col justify-start items-start transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 z-40 h-screen`}
      >
        {/* Logo */}
        <div className="flex justify-left items-left w-full">
          <Link to="/">
            <img src={Logo} alt="the_logo" className="h-[100px] ml-8" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="w-full flex-grow mt-4 overflow-auto hide-scrollbar">
          <ul className="w-full space-y-4">
            {sidebarArr.map((link, index) => {
              return (
                <li
                  key={index}
                  className="w-full flex justify-start items-center gap-3"
                >
                  <NavLink
                    to={link.url}
                    onClick={() => handleLinkClick(link.url)} // Set active on click
                    className={({ isActive }) =>
                      `flex ml-4 items-end w-[calc(100%-1.9rem)] gap-2 px-8 py-4 rounded-full transition-all relative ${
                        isActive
                          ? "bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white" // Active background color
                          : " hover:bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white hover:text-white" // Hover background color
                      }`
                    }
                  >
                    <img src={link.icon} alt="abc" className="mb-0.5" />
                    <span className="text-sm font-medium">{link.title}</span>

                    {/* Modern hover effect: underline */}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
                  </NavLink>
                </li>
              );
            })}
            <li className="w-full flex justify-start items-center gap-3">
              <div
                onClick={() => setModalOpen(true)}
                className={`flex ml-4 items-end w-[calc(100%-1.9rem)] gap-2 px-8 py-4 rounded-full transition-all relative 
                text-white cursor-pointer  hover:bg-gradient-to-r from-[#CEA3D8] to-[#000086] hover:text-white`}
              >
                <FaSignOutAlt className="mr-2" />
                <span className="text-sm font-medium">Logout</span>

                {/* Modern hover effect: underline */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
              </div>
            </li>
          </ul>
        </div>

        {/* Footer */}
        {/* <div className="pt-2 w-full group flex justify-start items-center gap-3">
          <span className={`w-2 h-3 rounded-r-full group-hover:bg-[#074F57] hover:text-white bg-[#074F5730] border border-[#074F57]`}></span>
        </div> */}
      </div>

      {/* Overlay when drawer is open (Mobile only) */}
      {isDrawerOpen && (
        <div
          onClick={handleCloseDrawer}
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
        ></div>
      )}

      {/* Inline CSS to hide the scrollbar but still keep scrolling */}
      <style>
        {`
          /* Hide scrollbar in WebKit browsers (Chrome, Safari) */
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          
          /* Hide scrollbar in Firefox */
          .hide-scrollbar {
            scrollbar-width: none;
          }
          
          /* Hide scrollbar in IE and Edge */
          .hide-scrollbar {
            -ms-overflow-style: none;
          }

          /* Allow the content to scroll */
          .hide-scrollbar {
            overflow-y: scroll;
          }
        `}
      </style>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleDeactivate}
      />
    </div>
  );
};

export default Sidebar;
