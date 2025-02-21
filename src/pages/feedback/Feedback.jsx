import React, { useState } from "react";
import FeedbackTable from "../../components/feedback/FeedbackTable";

const Feedback = () => {
  const userFeedbackData = [
    {
      id: 1,
      name: "User Name",
      transcription: "Great story, I loved it!",
      date: "18/12/2024",
      time: "10:00pm",
      status: true,
    },
    {
      id: 2,
      name: "User Name",
      transcription: "The story was good, but could use more detail.",
      date: "19/12/2024",
      time: "11:00pm",
      status: false,
    },
    {
      id: 3,
      name: "User Name",
      transcription: "I did not enjoy the ending.",
      date: "20/12/2024",
      time: "09:00pm",
      status: true,
    },
  ];

  const adminFeedbackData = [
    {
      id: 1,
      name: "Admin Name",
      transcription: "The story is well structured, but needs better pacing.",
      date: "18/12/2024",
      time: "10:00pm",
      status: true,
    },
    {
      id: 2,
      name: "Admin Name",
      transcription: "There are some grammar mistakes that should be fixed.",
      date: "19/12/2024",
      time: "11:00pm",
      status: false,
    },
    {
      id: 3,
      name: "Admin Name",
      transcription: "Consider adding more character development.",
      date: "20/12/2024",
      time: "09:00pm",
      status: true,
    },
  ];

  // State for feedback data, and whether it's User or Admin Feedback
  const [feedback, setFeedback] = useState(userFeedbackData);
  const [isUserFeedback, setIsUserFeedback] = useState(true); // State for toggling between User and Admin Feedback

  // Handle toggling the status of a feedback item
  const handleToggleStatus = (index) => {
    const updatedFeedback = [...feedback];
    updatedFeedback[index].status = !updatedFeedback[index].status;
    setFeedback(updatedFeedback);
  };

  // Handle switching between User and Admin Feedback
  const handleToggleType = (isUserFeedbackSelected) => {
    setIsUserFeedback(isUserFeedbackSelected);
    setFeedback(isUserFeedbackSelected ? userFeedbackData : adminFeedbackData);
  };

  return (
    <div className="w-full min-h-screen p-8 relative">
      <div className="w-full min-h-screen relative">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-4xl font-bold text-white">Feedback</h3>

          {/* Container for the Switchable buttons */}
          <div className="flex items-center gap-4">
            {/* Switchable Button for User Feedback / Admin Feedback */}
            <div className="flex items-center bg-black rounded-full">
              <button
                onClick={() => handleToggleType(true)}
                className={`${
                  isUserFeedback
                    ? "bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white"
                    : "bg-black text-white"
                } py-3 px-8 rounded-full transition duration-300`}
              >
                User Feedback
              </button>
              <button
                onClick={() => handleToggleType(false)}
                className={`${
                  !isUserFeedback
                    ? "bg-gradient-to-r from-[#000086] to-[#CEA3D8] text-white"
                    : "bg-black text-white"
                } py-3 px-8 rounded-full transition duration-300`}
              >
                Admin Feedback
              </button>
            </div>
          </div>
        </div>

        <FeedbackTable
          feedback={feedback}
          handleToggleStatus={handleToggleStatus}
        />
      </div>
    </div>
  );
};

export default Feedback;
