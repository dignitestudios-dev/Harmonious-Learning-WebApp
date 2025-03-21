import React, { useState } from "react";

import { bin, right } from "../../assets/export";

import SubscriptionDetailModal from "./SubscriptionDetailModal";
import { getDateFormat } from "../../lib/helpers";

const SubscriptionTable = ({ loading, subscription, handleToggleStatus }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] mb-6 p-2">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-2 py-4 px-8 text-start">#</div>
        {/* <div className="col-span-2 py-4 px-4 text-left">Name</div>
        <div className="col-span-2 py-4 px-4 text-left">Description</div>
        <div className="col-span-2 py-4 px-4 text-left">Benefits</div> */}
        <div className="col-span-3 py-4 px-4 text-left">Date</div>
        <div className="col-span-2 py-4 px-4 text-left">Price</div>
        <div className="col-span-3 py-4 px-4 text-left">Status</div>
        <div className="col-span-2 py-4 px-4 text-left">Action</div>
      </div>

      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-12 animate-pulse text-white text-[14px] font-extralight leading-[19px] bg-opacity-40"
            >
              <div className="col-span-1 py-4 px-4 text-center">
                <div className="h-4 w-6 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-2 py-4 px-4">
                <div className="h-4 w-24 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-4 py-4 px-4">
                <div className="h-4 w-48 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-1 py-4 px-4">
                <div className="h-4 w-12 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-1 py-4 px-4">
                <div className="h-4 w-10 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-1 py-4 px-4 text-center">
                <div className="h-4 w-16 bg-gray-700 rounded"></div>
              </div>
              <div className="col-span-2 py-2 px-4 flex items-center justify-center">
                <div className="h-8 w-8 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          ))
        : subscription.map((subscription, index) => (
            <div
              key={subscription.id}
              className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
                    hover:bg-opacity-60 transition duration-300"
            >
              <div className="col-span-2 py-4 px-8 text-start pt-7">
                {index + 1}
              </div>
              {/* <div className="col-span-2 py-4 px-4 flex gap-4 pt-7">
            {subscription?.name}
          </div>
          <div className="col-span-2 py-4 px-4 truncate pt-7">
            {subscription?.transcription}
          </div>
          <div className="col-span-2 py-4 px-4 truncate pt-7">
            {subscription?.benefit}
          </div> */}
              <div className="col-span-3 py-4 px-4 pt-7">
                {getDateFormat(subscription?.createdAt)}
              </div>
              <div className="col-span-2 py-4 px-4 pt-7">
                {subscription?.amount}
              </div>
              <div
                className={`col-span-3 py-4 px-4 pt-7 capitalize font-medium ${
                  subscription?.status === "pending"
                    ? " text-[#FF9500]"
                    : "text-[#b24040]"
                } `}
              >
                {subscription?.status}
                {/* <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={story.status}
                onChange={() => handleToggleStatus(index)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 rounded-full  peer peer-checked:bg-gradient-to-l from-[#CEA3D8] to-[#000086]"></div>
              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
            </label> */}
              </div>
              <div className="col-span-2 py-4 px-1 flex items-center justify-start gap-2">
                <div className="w-5">{/* <img src={bin} alt="bin" /> */}</div>
                <div
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalData(subscription);
                  }}
                  className="cursor-pointer"
                >
                  <img src={right} alt="right" />
                </div>
              </div>
            </div>
          ))}
      <SubscriptionDetailModal
        modalData={modalData?.amount}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SubscriptionTable;
