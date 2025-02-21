import React, { useState } from 'react';
import { background } from '../../assets/export';

const MeditationUpload = () => {
  const [imageFile, setImageFile] = useState(null);
  const [trackFile, setTrackFile] = useState(null);
  const [srtFile, setSrtFile] = useState(null);
  const [backgroundMusic, setBackgroundMusic] = useState(null);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleFileUpload = (e, setFile) => {
    const file = e.target.files[0];
    setFile(file);
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
    <div
      className="w-full h-screen relative overflow-auto"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background blur div */}
      <div className="absolute inset-0 bg-black bg-opacity-65 backdrop-blur-lg z-0"></div>

      <div className="w-full min-h-screen relative z-10">
        <div className="max-w-6xl mx-auto bg-opacity-50 p-8">
          <button className="text-[#A6A6A6] text-sm mb-4" onClick={() => window.history.back()}>
            &larr; Back
          </button>
          <h1 className="text-3xl font-bold mb-8">Add New Story</h1>
          <div className="flex gap-8">
            {/* Left Image Upload Section */}
            <div className="flex flex-col items-center justify-center border border-dashed border-[#A6A6A6] rounded-lg w-96 h-[728px]">
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
                  <span className="text-4xl mb-2">📷</span>
                  <span>Choose File to Upload Image</span>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileUpload(e, setImageFile)}
                  />
                </label>
              )}
            </div>

            {/* Right Form Section */}
            <div className="flex-1 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border text-white p-3 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-transparent border text-white p-3 rounded-lg"
                >
                  <option value="">Select</option>
                  <option value="Meditation">Meditation</option>
                  <option value="Relaxation">Relaxation</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-transparent border text-white p-3 rounded-lg"
                  rows="5"
                ></textarea>
              </div>

              {/* Meditation Tracks Upload Section with Icon */}
              <div>
                <label htmlFor="description" className="block text-sm mb-1">
                  Description
                </label>
                <div className="bg-transparent rounded-md border">
                  <label className="block text-sm mb-1 flex items-center justify-center">
                    <span className="text-2xl mr-2">🎵</span>
                  </label>
                  <label
                    htmlFor="track-upload"
                    className="block text-white p-3 rounded-lg cursor-pointer text-center"
                  >
                    {trackFile ? trackFile.name : 'Choose Mp3, Mp4 File to Upload'}
                    <input
                      id="track-upload"
                      type="file"
                      accept="audio/*,video/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, setTrackFile)}
                    />
                  </label>
                </div>
              </div>

              {/* Transcription SRT Upload Section with Icon */}
              <div>
                <label htmlFor="description" className="block text-sm mb-1">
                  Description
                </label>

                <div className="bg-transparent rounded-md border">
                  <label className="block text-sm mb-1 flex items-center justify-center">
                    <span className="text-2xl mr-2">📝</span>
                  </label>
                  <label
                    htmlFor="srt-upload"
                    className="block text-white p-3 rounded-lg cursor-pointer text-center"
                  >
                    {srtFile ? srtFile.name : 'Choose SRT File to Upload'}
                    <input
                      id="srt-upload"
                      type="file"
                      accept=".srt"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, setSrtFile)}
                    />
                  </label>
                </div>
              </div>

              {/* Background Music Upload Section with Icon */}
              <div>
                <label htmlFor="description" className="block text-sm mb-1">
                  Description
                </label>
                <div className="bg-transparent rounded-md border">
                  <label className="text-sm mb-1 p-6 flex items-center justify-center">
                    <span className="text-2xl mr-2">🎶</span>
                  </label>
                  <label
                    htmlFor="bg-music-upload"
                    className="block text-white p-3 rounded-lg cursor-pointer text-center"
                  >
                    {backgroundMusic
                      ? backgroundMusic.name
                      : 'Choose Background Music File to Upload'}
                    <input
                      id="bg-music-upload"
                      type="file"
                      accept="audio/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, setBackgroundMusic)}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSubmit}
            className="w-[201px] h-[49px] p-2 bg-gradient-to-r from-[#000086] to-[#CEA3D8] rounded-full text-white text-lg font-bold hover:opacity-90 mt-0"
          >
            Save Track
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeditationUpload;
