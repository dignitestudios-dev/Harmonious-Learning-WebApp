import React from "react";

import { useNavigate } from "react-router-dom";
import PromoCodeUsersTable from "../../components/promocodes/PromoCodeUsersTable";
import { CiSearch } from "react-icons/ci";

const PromoCodeDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-auto p-8 text-white relative overflow-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-white text-[14px] font-light mb-2"
      >
        &larr; Back
      </button>

      {/* Promo Details Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-6">Promo Detail</h1>
        <div className="bg-[#00000044] border-[#000] rounded-[25px] p-12 flex justify-between shadow-md">
          <div className="grid grid-cols-1 gap-4 text-sm">
            <div className="space-y-2">
              <p className="text-white font-thin">Promo Code</p>
              <p className="font-medium text-[32px]">AM1234456</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-2 border-r border-white/10">
              <p className="text-white font-thin">Discount</p>
              <p className="text-[#898989] font-thin">10%</p>
            </div>
            <div className="space-y-2 border-r border-white/10">
              <p className="text-white font-thin">Duration</p>
              <p className="text-[#898989] font-thin">
                15 May 2023 - 30 May 2023
              </p>
            </div>
            <div className="space-y-2 border-r border-white/10">
              <p className="text-white font-thin">Usage Type</p>
              <p className="text-[#898989] font-thin">Multi Time</p>
            </div>
            <div className="space-y-2 border-r border-white/10">
              <p className="text-white font-thin">Usage Time</p>
              <p className="text-[#898989] font-thin">10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Section */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <div>
            <h2 className="text-[32px] font-semibold">
              Used Users via Code (253)
            </h2>
          </div>
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

        {/* Users Table */}
        <PromoCodeUsersTable />
      </div>
    </div>
  );
};

export default PromoCodeDetails;
