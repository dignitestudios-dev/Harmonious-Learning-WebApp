import React from "react";
import { IoMdSearch } from "react-icons/io";

const PromocodeDetails = () => {
  const users = [
    { id: 1, name: "Olivia James", email: "olivia.james@gmail.com", plan: "Monthly", date: "15 May 2023", price: "$150" },
    { id: 2, name: "Christine Brooks", email: "christinebrooks@mail.com", plan: "Monthly", date: "15 May 2023", price: "$150" },
    { id: 3, name: "Christine Brooks", email: "christinebrooks@mail.com", plan: "Monthly", date: "15 May 2023", price: "$150" },
    { id: 4, name: "Olivia James", email: "olivia.james@gmail.com", plan: "Monthly", date: "15 May 2023", price: "$150" },
    { id: 5, name: "Christine Brooks", email: "christinebrooks@mail.com", plan: "Monthly", date: "15 May 2023", price: "$150" },
  ];

  return (
    <div className="w-full h-auto p-8 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] text-white relative overflow-auto">
      {/* Back Button */}
      <button className="text-sm text-gray-400 mb-6">&lt; Back</button>

      {/* Promo Details Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold mb-4">Promo Detail</h1>
        <div className="bg-[#0f0f1f] bg-opacity-80 rounded-xl p-6 shadow-md">
          <div className="grid grid-cols-5 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Promo Code</p>
              <p className="font-semibold text-lg">AM1234456</p>
            </div>
            <div>
              <p className="text-gray-400">Discount</p>
              <p className="font-semibold text-lg">10%</p>
            </div>
            <div>
              <p className="text-gray-400">Duration</p>
              <p className="font-semibold text-lg">15 May 2023 - 30 May 2023</p>
            </div>
            <div>
              <p className="text-gray-400">Usage Type</p>
              <p className="font-semibold text-lg">Multi Time</p>
            </div>
            <div>
              <p className="text-gray-400">Usage Time</p>
              <p className="font-semibold text-lg">10</p>
            </div>
          </div>
        </div>
      </div>

      {/* Users Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Used Users via Code (253)</h2>
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
        <div className="bg-opacity-80 p-4">
          <div className="grid grid-cols-12 text-sm text-gray-400  rounded-xl border-2 border-gray-700">
            <div className="col-span-1 py-4 px-4 text-center">#</div>
            <div className="col-span-3 py-4 px-4 text-left">Name</div>
            <div className="col-span-3 py-4 px-4 text-left">Email Address</div>
            <div className="col-span-2 py-4 px-4 text-left">Plan</div>
            <div className="col-span-2 py-4 px-4 text-left">Date</div>
            <div className="col-span-1 py-4 px-4 text-left">Price</div>
          </div>

          {users.map((user, index) => (
            <div
              key={user.id}
              className={`grid grid-cols-12 text-white bg-opacity-40 hover:bg-opacity-60 transition duration-300 ${index % 2 === 0 ? "bg-[#1f1f2f]" : "bg-[#1a1a2e]"}`}
            >
              <div className="col-span-1 py-4 px-4 text-center">{user.id}</div>
              <div className="col-span-3 py-4 px-4 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                {user.name}
              </div>
              <div className="col-span-3 py-4 px-4">{user.email}</div>
              <div className="col-span-2 py-4 px-4">{user.plan}</div>
              <div className="col-span-2 py-4 px-4">{user.date}</div>
              <div className="col-span-1 py-4 px-4">{user.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromocodeDetails;
