import React, { useState } from "react";
import SubscriptionTable from "../../components/subscription/SubscriptionTable";
import CreateSubscriptionModal from "../../components/subscription/CreateSubscriptionModal";
import { subData } from "../../static/dummyData";
import { useSubscription } from "../../hooks/api/Get";
import Pagination from "../../components/pagination/Pagination";

const Subscription = () => {
  const [subscription, setSubscription] = useState(subData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [update, setUpdate] = useState(false);

  const handleToggleStatus = (index) => {
    const updatedStories = [...subscription];
    updatedStories[index].status = !updatedStories[index].status;
    setSubscription(updatedStories);
  };

  const { data, loading, pagination } = useSubscription(
    `/admin/getSubUsers`,
    currentPage,
    update
  );
  console.log("🚀 ~ Subscription ~ data:", data);

  return (
    <div className="w-full min-h-screen p-8 overflow-auto">
      <div className="w-full min-h-screen pb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white">Subscription</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300"
          >
            Add New
          </button>
        </div>

        <SubscriptionTable
          loading={loading}
          subscription={data}
          handleToggleStatus={handleToggleStatus}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={pagination || ""}
        />
      </div>
      <CreateSubscriptionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Subscription;
