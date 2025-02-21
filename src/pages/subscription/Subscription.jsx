import React, { useState } from "react";
import SubscriptionTable from "../../components/subscription/SubscriptionTable";

const Subscription = () => {
  const initialData = [
    {
      id: 1,
      name: "Story Name",
      transcription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      benefit: "Lorem ipsum dolor sit amet...",
      type: "Monthly",
      price: "123",
      status: true,
    },
    {
      id: 2,
      name: "Story Name",
      transcription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      benefit: "Lorem ipsum dolor sit amet...",
      type: "Monthly",
      price: "$123",
      status: false,
    },
    {
      id: 3,
      name: "Story Name",
      transcription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
      benefit: "Lorem ipsum dolor sit amet...",
      type: "Monthly",
      price: "123",
      status: true,
    },
  ];

  const [subscription, setSubscription] = useState(initialData);

  const handleToggleStatus = (index) => {
    const updatedStories = [...subscription];
    updatedStories[index].status = !updatedStories[index].status;
    setSubscription(updatedStories);
  };
  return (
    <div className="w-full min-h-screen p-8">
      <div className="w-full min-h-screen ">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[36px] font-bold text-white">Subscription</h3>
          <button className="bg-gradient-to-r from-[#000086] to-[#CEA3D8] lg:w-[151px] lg:h-[49px] text-white py-2 px-6 rounded-full shadow-md hover:bg-purple-700 transition duration-300">
            Add New
          </button>
        </div>

        <SubscriptionTable
          subscription={subscription}
          handleToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
};

export default Subscription;
