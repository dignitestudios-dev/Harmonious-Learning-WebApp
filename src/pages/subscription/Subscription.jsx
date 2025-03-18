import React, { useState } from "react";
import SubscriptionTable from "../../components/subscription/SubscriptionTable";
import CreateSubscriptionModal from "../../components/subscription/CreateSubscriptionModal";
import { subData } from "../../static/dummyData";

const Subscription = () => {
  const [subscription, setSubscription] = useState(subData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleStatus = (index) => {
    const updatedStories = [...subscription];
    updatedStories[index].status = !updatedStories[index].status;
    setSubscription(updatedStories);
  };
  return (
    <div className="w-full min-h-screen p-8 overflow-auto">
      <div className="w-full min-h-screen pb-6">
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
          subscription={subscription}
          handleToggleStatus={handleToggleStatus}
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
