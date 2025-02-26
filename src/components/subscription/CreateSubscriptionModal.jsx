import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { background, bin, uploadimage } from "../../assets/export";
import SaveButton from "../global/SaveButton";

const CreateSubscriptionModal = ({ isOpen, onClose }) => {
  const [isMonthly, setIsMonthly] = useState(true); // State for toggling between Monthly and Bedtime Stories
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [subscriptionType, setSubscriptionType] = useState(null);
  const [description, setDescription] = useState("");

  const handleToggleType = (isMonthlySelected) => {
    setIsMonthly(isMonthlySelected);
    setSubscriptionType(isMonthlySelected ? "Monthly" : "Yearly");
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-20 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[673px] relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-[18px] font-semibold mb-4 text-left mt-6">
          Create New Subscription Plans
        </h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className=" text-[16px] font-thin">Duration</label>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                onClick={() => handleToggleType(true)}
                className={`${
                  isMonthly
                    ? "bg-gradient-to-r from-[#001d86] to-[#CEA3D8] text-white"
                    : "text-white bg-transparent border border-white/30"
                } py-3 px-8 rounded-full transition duration-300 text-[14px]`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => handleToggleType(false)}
                className={`${
                  !isMonthly
                    ? "bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white"
                    : "bg-transparent border border-white/30 text-white"
                } py-3 px-8 rounded-full transition duration-300`}
              >
                Yearly
              </button>
            </div>
          </div>

          <div>
            <label className="text-[16px] font-thin ">Subscription</label>
            <input
              type="text"
              placeholder="Name"
              //   value={value}
              //   onChange={(e) => handleChange(e)}
              className="w-full bg-transparent border border-white/30 text-white px-5 py-3 
              rounded-full placeholder:text-white placeholder:text-sm mt-1 "
            />
          </div>

          <div>
            <label className="text-[16px] font-thin ">Benefits</label>
            <div className="flex justify-between items-center w-full mt-1">
              <div className="w-[80%]">
                <input
                  type="text"
                  placeholder="Type your Benefits"
                  //   value={value}
                  //   onChange={(e) => handleChange(e)}
                  className="w-full bg-transparent border border-white/30 text-white px-5 py-3 
              rounded-full placeholder:text-white placeholder:text-sm "
                />
              </div>
              <button
                type="button"
                className="h-[49px] w-[18%] py-2 px-4 bg-gradient-to-r from-[#000086] to-[#CEA3D8]
               text-white font-thin rounded-full shadow-md hover:opacity-90 transition"
              >
                Add
              </button>
            </div>
          </div>

          <div>
            <label className="text-[16px] font-thin ">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-[149px] bg-transparent border border-white/30 rounded-[16px] text-white p-3 mt-1 "
              rows="5"
            ></textarea>
          </div>
          <SaveButton />
        </form>
      </div>
    </div>
  );
};

export default CreateSubscriptionModal;
