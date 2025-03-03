import React, { useState } from "react";
import { playSymbol } from "../../assets/export";
import { IoMdClose } from "react-icons/io";
import { subscriptionData } from "../../static/dummyData";

const SubscriptionDetailModal = ({ isOpen, onClose }) => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [subscriptionType, setSubscriptionType] = useState(null);

  const handleToggleType = (isMonthlySelected) => {
    setIsMonthly(isMonthlySelected);
    setSubscriptionType(isMonthlySelected ? "Monthly" : "Yearly");
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen">
      <div className="bg-black bg-opacity-30 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[580px] relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full p-1 top-4 right-4 text-xl text-white hover:text-gray-300"
        >
          <IoMdClose />
        </button>

        <h2 className="text-[18px] font-semibold mb-4 text-left mt-6">
          Subscription Plan Details
        </h2>
        <div className="flex justify-between items-center text-left w-full border-b border-white/40">
          <div className="w-[32%] mb-2">
            <p className="text-[14px] text-white/60">Duration</p>
            <p className="text-[18px] text-white">Monthly</p>
          </div>
          <div className="w-[32%] border-l border-white/40 pl-4 mb-2">
            <p className="text-[14px] text-white/60">Subscription</p>
            <p className="text-[18px] text-white">Monthly</p>
          </div>
          <div className="w-[32%] border-l border-white/40 pl-4 mb-2">
            <p className="text-[14px] text-white/60">price</p>
            <p className="text-[18px] text-white">$150</p>
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-[14px] text-white/60 mt-2">Benefits</p>
          {subscriptionData.map((_, index) => (
            <div key={index} className="flex items-center ">
              <div>
                <img className="w-7" src={playSymbol} />
              </div>
              <div className="ml-4">
                <p>{_}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => onClose()}
          className="w-full h-[49px] py-2 px-4 mt-6 bg-[#EE3131] text-white font-semibold rounded-full shadow-md hover:opacity-90 transition"
        >
          Delete Subscription
        </button>
      </div>
    </div>
  );
};

export default SubscriptionDetailModal;
