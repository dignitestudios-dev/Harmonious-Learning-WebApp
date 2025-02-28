import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import { background, bin, right } from "../../assets/export"; // Assuming you are importing the image from assets
import { useNavigate } from "react-router-dom";

const PromoCodesTable = () => {
  const initialData = [
    {
      id: 1,
      name: "AM12345432",
      transcription: "15 May 2023 - 30 May 2023",
      date: "18/12/2024",
      time: "10:30am",
      status: true,
      discount: "20%",
    },
    {
      id: 2,
      name: "AM12345432",
      transcription: "15 May 2023 - 30 May 2023",
      date: "18/12/2024",
      time: "11:00pm",
      status: false,
      discount: "15%",
    },
    {
      id: 3,
      name: "AM12345432",
      transcription: "15 May 2023 - 30 May 2023",
      date: "18/12/2024",
      time: "01:15pm",
      status: true,
      discount: "25%",
    },
  ];

  const navigate = useNavigate();

  const [stories, setStories] = useState(initialData);

  const handleToggleStatus = (index) => {
    const updatedStories = [...stories];
    updatedStories[index].status = !updatedStories[index].status;
    setStories(updatedStories);
  };

  return (
    <div className="bg-[#00000044] border-[#000] rounded-[25px] overflow-hidden p-2">
      <div
        className="grid grid-cols-12 text-[14px] leading-[19px] text-white rounded-[14px]
           border-[1.5px] border-white/30 font-light mb-2"
      >
        <div className="col-span-2 py-4 px-3 text-left flex space-x-6">
          <div className="">#</div>
          <div className="">Code</div>
        </div>
        <div className="col-span-1 py-4 text-left">Discount</div>{" "}
        {/* New Discount Column */}
        <div className="col-span-3 py-4 px-4 text-left">Duration</div>
        <div className="col-span-2 py-4 px-4 text-left">Usage Type</div>
        <div className="col-span-2 py-4 px-4 text-left">Usage Time</div>
        <div className="col-span-1 py-4 px-4 text-center">Status</div>
        <div className="col-span-1 py-4 px-4 text-center">Action</div>
      </div>

      {stories.map((story, index) => (
        <div
          key={story.id}
          className="grid grid-cols-12 text-white text-[14px] font-extralight leading-[19px] bg-opacity-40 
              hover:bg-opacity-60 transition duration-300"
        >
          <div className="col-span-2 px-4  text-left flex space-x-6 pt-7">
            <div className="">{story.id}</div>
            <div className=" ">{story.name}</div>
          </div>
          <div className="col-span-1 pt-7">{story.discount}</div>{" "}
          {/* Display Discount */}
          <div className="col-span-3 pt-7 px-4 truncate">
            {story.transcription}
          </div>
          <div className="col-span-2 pt-7 px-4">{story.date}</div>
          <div className="col-span-2 pt-7 px-4">{story.time}</div>
          <div className="col-span-1 pt-7 px-4 text-center">
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
          </div>
          <div className="col-span-1 px-4 py-4 flex items-center justify-center gap-4">
            <img src={bin} />
            <div
              className="cursor-pointer"
              onClick={() => navigate("/promo-code-details")}
            >
              <img src={right} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PromoCodesTable;
