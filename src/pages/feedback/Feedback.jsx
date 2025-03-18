import { useState, useEffect } from "react";
import FeedbackTable from "../../components/feedback/FeedbackTable";
import { useFeedBack } from "../../hooks/api/Get";

const Feedback = () => {
  const [update, setUpdate] = useState(false);

  const { data, loading } = useFeedBack("/admin/getFeedback", 1, update);

  const [feedback, setFeedback] = useState([]);
  const [isUserFeedback, setIsUserFeedback] = useState(true);

  useEffect(() => {
    if (data) {
      const filteredFeedback = isUserFeedback
        ? data.filter((item) => item)
        : data.filter((item) => item?.adminReply);
      setFeedback(filteredFeedback);
    }
  }, [data, isUserFeedback, update]);

  const handleToggleStatus = (index) => {
    const updatedFeedback = [...feedback];
    updatedFeedback[index].status = !updatedFeedback[index].status;
    setFeedback(updatedFeedback);
  };

  const handleToggleType = (isUserFeedbackSelected) => {
    setIsUserFeedback(isUserFeedbackSelected);
  };

  return (
    <div className="w-full min-h-screen p-8 relative overflow-auto">
      <div className="w-full min-h-screen relative pb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-4xl font-bold text-white">Feedback</h3>

          <div className="flex items-center gap-4">
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

        {/* Feedback Table */}
        <FeedbackTable
          feedback={feedback}
          isUserFeedback={isUserFeedback}
          loading={loading}
          handleToggleStatus={handleToggleStatus}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default Feedback;
