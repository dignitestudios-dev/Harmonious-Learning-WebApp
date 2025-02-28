import React, { useState } from "react";
import {
  background,
  bedtime,
  bin,
  musicSymbol,
  srtImage,
  uploadImg,
} from "../../assets/export";
import InputField from "../../components/global/InputField";
import SelectableField from "../../components/global/SelectableField";
import TracksInput from "./../../components/global/TracksInput";
import SaveButton from "../../components/global/SaveButton";

const options = ["Physics", "Maths", "Chemistry"];

const BedtimeStoriesEdit = () => {
  const dummyData = {
    name: "Relaxing Meditation",
    subject: "Mindfulness",
    description: "A relaxing meditation track for mindfulness practice.",
    imageFile: bedtime, // Assume you have an image file URL or path here
    trackFile: null, // Assume you have an audio file URL or path here
    srtFile: null, // Assume you have an SRT file URL or path here
    backgroundMusic: [], // Assume you have background music files here
  };

  const [imageFile, setImageFile] = useState(dummyData.imageFile);
  const [trackFile, setTrackFile] = useState(dummyData.trackFile);
  const [srtFile, setSrtFile] = useState(dummyData.srtFile);
  const [backgroundMusic, setBackgroundMusic] = useState(
    dummyData.backgroundMusic
  );
  const [name, setName] = useState(dummyData.name);
  const [subject, setSubject] = useState(dummyData.subject);
  const [description, setDescription] = useState(dummyData.description);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSelectChange = (value) => {
    setSubject(value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (e.target.id === "track") {
      setTrackFile(file);
      return;
    }
    if (e.target.id === "srt") {
      setSrtFile(file);
      return;
    }
    if (e.target.id === "music") {
      setBackgroundMusic((prev) => [...prev, { file }]);
      return;
    }
    if (e.target.id === "image-upload") {
      setImageFile(file);
      return;
    }
  };

  const removeBackgroundMusic = (indexToRemove) => {
    setBackgroundMusic((prev) =>
      prev.filter((_, idx) => idx !== indexToRemove)
    );
  };

  const handleSubmit = () => {
    console.log({
      name,
      subject,
      description,
      imageFile,
      trackFile,
      srtFile,
      backgroundMusic,
    });
  };

  return (
    <div className="w-full h-screen overflow-auto text-white p-10 relative">
      <button
        className="text-white text-[14px] font-light mb-2"
        onClick={() => window.history.back()}
      >
        &larr; Back
      </button>
      <h1 className="text-[36px] font-bold mb-6">Edit Story</h1>
      <div className="w-full flex gap-8 mb-10">
        {/* Left Image Upload Section */}
        <div
          className="flex flex-col items-center justify-center border-[1px]
         border-white/30 rounded-[16px] w-[500px] h-[728px] relative"
        >
          {imageFile ? (
            <>
              <img
                src={imageFile}
                alt="Uploaded"
                className="w-full h-full object-cover rounded-lg p-[3px]"
              />
              <button
                onClick={() => setImageFile(null)}
                type="button "
                className="cursor-pointer bg-white rounded-full top-2 right-2 absolute hover:bg-white/80"
              >
                <img src={bin} alt="Uploaded" className="w-8" />
              </button>
            </>
          ) : (
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center justify-center cursor-pointer text-center text-[#A6A6A6]"
            >
              <img src={uploadImg} alt="upload" className="w-14 mb-3" />
              <span className="text-[12px] text-white mt-3">
                Choose File to Upload Image
              </span>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e)}
              />
            </label>
          )}

          {/* Save Button */}
        </div>

        {/* Right Form Section */}
        <div className=" space-y-3 w-[413px]">
          <InputField
            label="Meditation Track"
            placeholder="Name"
            handleChange={(e) => handleChange(e)}
            value={name}
          />

          <SelectableField
            label="Subject"
            placeholder="Select"
            handleChange={handleSelectChange}
            value={subject}
            options={options}
          />

          {/* Meditation Tracks Upload Section with Icon */}
          <TracksInput
            id="track"
            label="Meditation Tracks"
            placeholder="Choose Mp3, Mp4 File to Upload"
            setFile={setTrackFile}
            icon={uploadImg}
            file={trackFile}
            handleFileUpload={handleFileUpload}
          />
          {trackFile && (
            <div className="flex justify-between items-center p-1 bg-transparent border border-white/30 rounded-full">
              <div className="flex items-center">
                <img src={srtImage} alt="srt" className="w-10 mr-2" />
                <div>
                  <p className="ml-2 text-[12px] font-extralight">
                    {trackFile?.name?.length > 38
                      ? trackFile?.name?.slice(0, 38) + "..."
                      : trackFile?.name}
                  </p>
                  <p className="ml-2 text-[12px] font-extralight">5:00</p>
                </div>
              </div>
              <div
                onClick={() => setTrackFile(null)}
                className="border-l-[1px] border-white/30"
              >
                <img src={bin} alt="srt" className="w-7 mr-2" />
              </div>
            </div>
          )}

          {/* Transcription SRT Upload Section with Icon */}
          <TracksInput
            id="srt"
            label="Transcription SRT"
            placeholder="Choose SRT File to Upload"
            setFile={setSrtFile}
            icon={uploadImg}
            file={srtFile}
            handleFileUpload={handleFileUpload}
          />

          {srtFile && (
            <div className="flex justify-between items-center p-1 bg-transparent border border-white/30 rounded-full">
              <div className="flex items-center">
                <img src={srtImage} alt="srt" className="w-10 mr-2" />
                <p className="ml-2 text-[14px] font-extralight">
                  {srtFile?.name?.length > 38
                    ? srtFile?.name?.slice(0, 38) + "..."
                    : srtFile?.name}
                </p>
              </div>

              <div
                onClick={() => setSrtFile(null)}
                className="border-l-[1px] border-white/30 "
              >
                <img src={bin} alt="srt" className="w-7 mr-2" />
              </div>
            </div>
          )}

          {/* Background Music Upload Section with Icon */}

          <TracksInput
            id="music"
            label="Background Music"
            placeholder="Choose Background Music File to Upload"
            setFile={setBackgroundMusic}
            icon={uploadImg}
            file={backgroundMusic}
            handleFileUpload={handleFileUpload}
          />
          <div className="flex">
            {backgroundMusic?.map((item, index) => {
              return (
                <div className="p-2 relative">
                  <div className=" w-[89px] h-[82px] border-[1px] border-purple-600 bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-lg">
                    <div>
                      <img
                        src={musicSymbol}
                        alt="music"
                        className="pt-2 pl-1"
                      />
                      <p className="text-white text-[12px] font-medium pl-2 pt-2 overflow-clip text-ellipsis">
                        {item?.file?.name}
                      </p>
                    </div>
                    <div
                      onClick={() => removeBackgroundMusic(index)}
                      className="absolute bg-white rounded-full top-0 left-20 shadow-sm cursor-pointer hover:bg-white/80"
                    >
                      <img src={bin} alt="bin" className="w-6" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 w-[18%]">
        <SaveButton title="Save Story" />
      </div>
    </div>
  );
};

export default BedtimeStoriesEdit;
