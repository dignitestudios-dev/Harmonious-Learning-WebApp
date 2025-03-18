import { useState } from "react";
import { bin } from "../../assets/export";
import DeleteModal from "../bedtimestories/DeleteModal";
import StoriesLoader from "../bedtimestories/StoriesLoader";
import { getDateFormat } from "../../lib/helpers";

const UpcomingTable = ({ loader, stories, setUpdate }) => {
  const [modal, setModalOpen] = useState(false);
  const [selectedStoryId, setSelectedStoryId] = useState(null);

  const openDeleteModal = (storyId) => {
    setSelectedStoryId(storyId);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] p-2 mb-6">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-1 py-4 pl-4 text-left">#</div>
        <div className="col-span-2 py-4 px-4 text-left">Track Name</div>
        <div className="col-span-6 py-4 px-4 text-left">Description</div>
        <div className="col-span-2 py-4 px-4 text-left">Release Date</div>
        {/* <div className="col-span-1 py-4 px-4 text-center">Status</div> */}
        <div className="col-span-1 py-4 px-4 text-center">Action</div>
      </div>

      {loader ? (
        Array.from({ length: 5 }).map((_, index) => (
          <StoriesLoader key={index} />
        ))
      ) : stories.length > 0 ? (
        stories.map((story, index) => (
          <div
            key={index}
            className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
                    hover:bg-opacity-60 transition duration-300"
          >
            <div className="col-span-1 pb-4 pt-7 pl-5 text-left">{index}</div>
            <div className="col-span-2 flex items-center gap-4">
              <img
                src={story?.image}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-purple-600"
              />
              <span>{story?.title}</span>
            </div>
            <div className="col-span-6 pb-4 pt-7 px-6 truncate">
              {story?.description?.length > 68
                ? story?.description?.slice(0, 68) + "..."
                : story?.description}
            </div>
            <div className="col-span-2 pb-4 pt-7 px-4">
              {getDateFormat(story?.createdAt)}
            </div>
            {/* <div className="col-span-1 pb-4 pt-7 px-4 text-center mr-6">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={story.status}
                    onChange={() => handleToggleStatus(index)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-white/10 rounded-full  peer peer-checked:bg-gradient-to-l from-[#CEA3D8] to-[#000086]"></div>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></span>
                </label>
              </div> */}
            <div
              className="col-span-1 cursor-pointer py-4 px-2 flex items-center justify-center gap-2"
              onClick={() => openDeleteModal(story?._id)}
            >
              <img src={bin} alt="Delete" />
            </div>
          </div>
        ))
      ) : (
        <div
          className="w-full text-center h-10 mt-10 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
        hover:bg-opacity-60 transition duration-300"
        >
          No record found
        </div>
      )}
      <DeleteModal
        isOpen={modal}
        onClose={() => setModalOpen(false)}
        storyId={selectedStoryId}
        setUpdate={setUpdate}
      />
    </div>
  );
};

export default UpcomingTable;
