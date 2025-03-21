import { useState } from "react";
import { bin, right } from "../../assets/export";
import FeedbackDetailModal from "./FeedbackDetailModal";
import FeedbackReplyModal from "./FeedbackReplyModal";
import UsersLoader from "../users/UsersLoader";
import { getDateFormat, getTimeFormat } from "../../lib/helpers";

import DeleteModal from "../bedtimestories/DeleteModal";

const FeedbackTable = ({ feedback, loading, isUserFeedback, setUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyModalOpen, setReplyModalOpen] = useState(false);
  const [selectedFeedbackId, setSelectedFeedbackId] = useState(null);
  const openDetailModal = (id) => {
    setSelectedFeedbackId(id);
    setIsModalOpen(true);
  };
  const [modal, setModalOpen] = useState(false);
  const [selectedFeedId, setSelectedFeedId] = useState(null);

  const openDeleteModal = (feedId) => {
    setSelectedFeedId(feedId);
    setModalOpen(true);
  };

  // const { loading: loader, deleteData } = useDelete(setUpdate);

  // const handleDelete = async (FeedId) => {
  //   deleteData("/admin/deleteStories", FeedId, processDelete);
  // };
  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] mb-6 p-2">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 px-4 text-center">#</div>
        <div className="col-span-2 py-4 px-4 text-left">Name</div>
        <div className="col-span-4 py-4 px-4 text-left">Description</div>
        <div className="col-span-2 py-4 px-4 text-left">Date</div>
        <div className="col-span-1 py-4 px-4 text-center">Time</div>
        <div className="col-span-2 py-4 px-4 text-center">Action</div>
      </div>

      {loading
        ? Array.from({ length: 5 })?.map((_, index) => (
            <UsersLoader key={index} />
          ))
        : feedback?.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
              hover:bg-opacity-60 transition duration-300"
            >
              <div className="col-span-1 py-4 px-4 text-center pt-7">
                {index + 1}
              </div>
              <div className="col-span-2 flex items-center gap-4">
                <img
                  src={`https://i.pravatar.cc/40?img=${item?.id}`}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-purple-600"
                />
                <span>{item.name}</span>
              </div>
              <div className="col-span-4 py-4 px-4 truncate pt-7">
                {isUserFeedback ? item?.message : item?.adminReply?.message}
              </div>
              <div className="col-span-2 py-4 px-4 pt-7">
                {getDateFormat(item?.createdAt)}
              </div>
              <div className="col-span-1 py-4 px-3 text-center pt-7">
                {getTimeFormat(item?.createdAt)}
              </div>
              <div className="col-span-2 py-4 px-4 flex items-center justify-center gap-4">
                <div
                  className="cursor-pointer"
                  onClick={() => openDeleteModal(item?._id)}
                >
                  <img src={bin} alt="Delete" />
                </div>

                {isUserFeedback && (
                  <div onClick={() => openDetailModal(item)}>
                    <img src={right} alt="right" className="cursor-pointer" />
                  </div>
                )}
              </div>
            </div>
          ))}
      <FeedbackDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setReplyModalOpen={setReplyModalOpen}
        feedbackdetail={selectedFeedbackId}
      />
      <FeedbackReplyModal
        feedback={feedback}
        isOpen={replyModalOpen}
        onClose={() => setReplyModalOpen(false)}
        feedbackId={selectedFeedbackId}
        setUpdate={setUpdate}
      />
      <DeleteModal
        isOpen={modal}
        onClose={() => setModalOpen(false)}
        storyId={{ feedbackId: selectedFeedId }}
        setUpdate={setUpdate}
        url="/admin/deleteFeedback"
        text="you want to delete this feedback?"
      />
    </div>
  );
};

export default FeedbackTable;
