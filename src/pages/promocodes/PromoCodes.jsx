import React from "react";
import PromoCodesTable from "../../components/promocodes/PromoCodesTable";

const PromoCodes = () => {
  return (
    <div className="w-full min-h-screen p-8 ">
      <div className="w-full min-h-screen ">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white ">Promo Codes</h3>
          <button className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300">
            Add New
          </button>
        </div>

        <PromoCodesTable />
      </div>
    </div>
  );
};

export default PromoCodes;
