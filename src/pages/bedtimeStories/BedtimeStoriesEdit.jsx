import React, { useEffect, useState } from "react";
import { bin, musicSymbol, srtImage, uploadImg } from "../../assets/export";
import InputField from "../../components/global/InputField";
import SelectableField from "../../components/global/SelectableField";
import TracksInput from "./../../components/global/TracksInput";
import SaveButton from "../../components/global/SaveButton";
import { useLocation } from "react-router-dom";
import { useUpload } from "../../hooks/api/Post";
import { processUpload } from "../../lib/utils";
import { useAllSubject } from "../../hooks/api/Get";

const options = ["Physics", "Maths", "Chemistry"];

const BedtimeStoriesEdit = () => {
  const location = useLocation();
  const { story } = location.state || {};

  const { data, loading: loader } = useAllSubject("/user/getAllSubjects", 1);
  console.log("🚀 ~ BedtimeStoriesEdit ~ data:", data);

  const subjectOptions = data?.map((item) => item.subject);

  const { loading, postData } = useUpload();

  const [imageFile, setImageFile] = useState(null);
  const [trackFile, setTrackFile] = useState(null);
  const [srtFile, setSrtFile] = useState(null);
  const [backgroundMusic, setBackgroundMusic] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [inputError, setInputError] = useState({});

  useEffect(() => {
    if (story) {
      setImageFile(story.image || null);
      setTrackFile(story.mp3File || null);
      setSrtFile(story.mp3SrtFile || null);
      setBackgroundMusic(story.bgMusicFile.map((item) => item) || []);
      setName(story.title || "");
      setSubject(story.tags?.join(", ") || ""); // If multiple tags, join as a string
      setDescription(story.description || "");
    }
  }, [story]);

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

  const formValidation = ({
    name,
    subject,
    description,
    imageFile,
    trackFile,
    srtFile,
  }) => {
    let errors = {};

    if (!name) {
      errors.name = "Enter Name";
    }

    if (!subject) {
      errors.subject = "Enter Subject";
    }

    if (!description) {
      errors.description = "Enter Description";
    }

    if (!imageFile) {
      errors.imageFile = "Image file is required";
    }

    if (!trackFile) {
      errors.trackFile = "Upload Track File";
    }
    if (!srtFile) {
      errors.srtFile = "Upload SRT File";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validateData = {
      name,
      subject,
      // selectedDate,
      description,
      imageFile,
      trackFile,
      srtFile,
    };
    const errors = formValidation(validateData);

    if (Object.keys(errors).length > 0) {
      setInputError(errors);
      return;
    }

    const formData = new FormData();

    // Append text fields

    formData.append("storyId", story?._id);
    formData.append("artist", "Custom");
    formData.append("title", name);
    formData.append("tags[]", subject);
    formData.append("description", description);

    if (imageFile) formData.append("image", imageFile);
    if (trackFile) formData.append("mp3File", trackFile);
    if (srtFile) formData.append("mp3SrtFile", srtFile);

    // // Append backgroundMusic array files
    if (backgroundMusic && backgroundMusic.length > 0) {
      backgroundMusic.forEach((music, index) => {
        formData.append(`bgMusicFile`, music.file);
      });
    }
    postData("/admin/updateStories", true, formData, null, processUpload);
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
      <form onSubmit={handleSubmit}>
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
              options={subjectOptions}
              loader={loader}
              error={inputError?.subject}
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
                  <div key={index} className="p-2 relative">
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
          <SaveButton title="Save Story" loading={loading} />
        </div>
      </form>
    </div>
  );
};

export default BedtimeStoriesEdit;
