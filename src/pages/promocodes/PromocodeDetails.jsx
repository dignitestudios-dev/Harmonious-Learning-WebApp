import React from "react";
import { IoMdSearch } from "react-icons/io";
import PromoCodesTable from "../../components/promocodes/PromoCodesTable";
import { useNavigate } from "react-router-dom";

const PromoCodeDetails = () => {
  const users = [
    {
      id: 1,
      name: "Olivia James",
      email: "olivia.james@gmail.com",
      plan: "Monthly",
      date: "15 May 2023",
      price: "$150",
    },
    {
      id: 2,
      name: "Christine Brooks",
      email: "christinebrooks@mail.com",
      plan: "Monthly",
      date: "15 May 2023",
      price: "$150",
    },
    {
      id: 3,
      name: "Christine Brooks",
      email: "christinebrooks@mail.com",
      plan: "Monthly",
      date: "15 May 2023",
      price: "$150",
    },
    {
      id: 4,
      name: "Olivia James",
      email: "olivia.james@gmail.com",
      plan: "Monthly",
      date: "15 May 2023",
      price: "$150",
    },
    {
      id: 5,
      name: "Christine Brooks",
      email: "christinebrooks@mail.com",
      plan: "Monthly",
      date: "15 May 2023",
      price: "$150",
    },
  ];

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
        <h1 className="text-4xl font-semibold mb-4">Promo Detail</h1>
        <div className="bg-[#00000044] border-[#000] rounded-[25px] p-10 flex justify-between shadow-md">
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[32px] font-semibold">
            Used Users via Code (253)
          </h2>
          <div className="relative">
            <IoMdSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-[#0f0f1f] bg-opacity-60 text-sm text-gray-400 py-2 pl-10 pr-4 rounded-lg focus:outline-none"
            />
          </div>
        </div>

        {/* Users Table */}
        <PromoCodesTable />
      </div>
    </div>
  );
};

export default PromoCodeDetails;
