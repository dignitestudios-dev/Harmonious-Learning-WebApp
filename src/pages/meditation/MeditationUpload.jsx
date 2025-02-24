import React, { useState } from "react";
import {
  background,
  bin,
  musicSymbol,
  srtImage,
  uploadImg,
} from "../../assets/export";
import InputField from "../../components/global/InputField";
import SelectableField from "../../components/global/SelectableField";
import TracksInput from "./../../components/global/TracksInput";

const options = ["Physics", "Maths", "Chemistry"];

const MeditationUpload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [trackFile, setTrackFile] = useState(null);
  console.log("🚀 ~ MeditationUpload ~ trackFile:", trackFile);
  const [srtFile, setSrtFile] = useState(null);
  console.log("🚀 ~ MeditationUpload ~ srtFile:", srtFile);
  const [backgroundMusic, setBackgroundMusic] = useState([]);
  console.log("🚀 ~ MeditationUpload ~ backgroundMusic:", backgroundMusic);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    console.log("🚀 ~ e.target ~ file:", e.target.id);
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
      <h1 className="text-[36px] font-bold mb-6">Add New Story</h1>
      <div className="w-full flex gap-8">
        {/* Left Image Upload Section */}
        <div
          className="flex flex-col items-center justify-center border-[1px]
         border-white/30 rounded-[16px] w-[500px] h-[728px]"
        >
          {imageFile ? (
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Uploaded"
              className="w-full h-full object-cover rounded-lg"
            />
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
            handleChange={(e) => handleSelectChange(e)}
            value={subject}
            options={options}
          />

          <div>
            <label htmlFor="description" className="block text-sm mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-[149px] bg-transparent border border-white/30 rounded-[16px] text-white p-3 "
              rows="5"
            ></textarea>
          </div>

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
          <div className="flex justify-between items-center p-1 bg-transparent border border-white/30 rounded-full">
            <div className="flex items-center">
              <img src={srtImage} alt="srt" className="w-10 mr-2" />
              <div>
                <p className="ml-2 text-[12px] font-extralight">
                  Lorem ipsum dolor sit amed tempor...
                </p>
                <p className="ml-2 text-[12px] font-extralight">5:00</p>
              </div>
            </div>
            <div className="border-l-[1px] border-white/30">
              <img src={bin} alt="srt" className="w-7 mr-2" />
            </div>
          </div>

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

          <div className="flex justify-between items-center p-1 bg-transparent border border-white/30 rounded-full">
            <div className="flex items-center">
              <img src={srtImage} alt="srt" className="w-10 mr-2" />
              <p className="ml-2 text-[14px] font-extralight">
                Lorem ipsum dolor sit amed tempor...
              </p>
            </div>
            <div className="border-l-[1px] border-white/30">
              <img src={bin} alt="srt" className="w-7 mr-2" />
            </div>
          </div>

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
          <div className="p-2 flex space-x-4">
            <div className="relative w-[89px] h-[82px] border-[1px] border-purple-600 bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-lg">
              <div>
                <img src={musicSymbol} alt="music" className="pt-2 pl-1" />
                <p className="text-white">Music Title</p>
              </div>
              <div className="absolute bg-white rounded-full top-0 left-16">
                <img src={bin} alt="bin" className="w-8 " />
              </div>
            </div>
            <div className="relative w-[89px] h-[82px] border-[1px] border-purple-600 bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-lg">
              <div>
                <img src={musicSymbol} alt="music" />
                <p className="text-white">Music Title</p>
              </div>
              <div className="absolute bg-white rounded-full top-0 left-16">
                <img src={bin} alt="bin" className="w-8 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-[201px] h-[49px] p-2 bg-gradient-to-r from-[#000086] to-[#CEA3D8]
         rounded-full text-white text-[16px] absolute -bottom-64 hover:opacity-90"
      >
        Save Track
      </button>
    </div>
  );
};

export default MeditationUpload;
