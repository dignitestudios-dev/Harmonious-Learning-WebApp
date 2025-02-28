import React, { useState } from "react";
import { background, deactivate, uploadImg } from "../../assets/export";
import TracksInput from "../global/TracksInput";
import { RxCross2 } from "react-icons/rx";
import SaveButton from "../global/SaveButton";

const BackgroundMusicModal = ({
  isOpen,
  onClose,
  onConfirm,
  handleAudioUpload,
}) => {
  const [backgroundMusic, setBackgroundMusic] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (e.target.id === "music") {
      setBackgroundMusic((prev) => [...prev, { file }]);
      return;
    }
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-xl w-full h-screen"
      // style={{
      //   backgroundImage: `url(${background})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="bg-black bg-opacity-30 rounded-[26px] shadow-md text-white p-6 w-[455px] h-[316px] relative">
        <div
          onClick={() => onClose()}
          className="cursor-pointer bg-gradient-to-r from-[#000086] to-[#CEA3D8] 
          rounded-full p-1 absolute top-3 right-3 hover:opacity-80"
        >
          <RxCross2 size={22} />
        </div>
        <div className="flex flex-col  ">
          <h2 className="text-[24px] font-semibold mb-2">
            Add New Background Music
          </h2>

          <TracksInput
            id="music"
            label="Background Music"
            placeholder="Choose Background Music File to Upload"
            setFile={setBackgroundMusic}
            icon={uploadImg}
            file={backgroundMusic}
            handleFileUpload={(e) => {
              handleAudioUpload(e);
              handleFileUpload(e);
            }}
          />
          <div className="w-full flex space-x-4 mt-6">
            <SaveButton title="Save" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundMusicModal;
