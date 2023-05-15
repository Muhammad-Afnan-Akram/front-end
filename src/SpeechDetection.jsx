import React, { useState } from "react";
import { FaFileUpload, FaGoogleDrive } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import Results from "./Results";
import "./SpeechDetection.css";

function SpeechDetection() {
  const [files, setFiles] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [resultFiles, setResultFiles] = useState(null);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    const validAudioFormats = ["mp3", "wav", "aiff", "flac", "aac"];

    // Check each selected file against the accepted audio formats
    for (let i = 0; i < selectedFiles.length; i++) {
      const fileExtension = selectedFiles[i].name
        .split(".")
        .pop()
        .toLowerCase();
      if (!validAudioFormats.includes(fileExtension)) {
        // Show a notification if a file with an invalid format was selected
        alert("Only MP3, WAV, AIFF, FLAC, and AAC audio formats are supported");
        // Clear the selected files array
        event.target.value = null;
        setFiles([]);
        return;
      }
    }

    // If all selected files have a valid audio format, update the state with the new files
    setFiles([...files, ...selectedFiles]);
  };

  const handleGoogleDriveClick = () => {
    // handle Google Drive button click here
    alert("Google Drive integration is not implemented yet.");
  };

  const handleCheckClick = async () => {
    // Handle check button click here
    if (files.length === 0) {
      alert("Please select at least one audio file for detection");
      return;
    }

    // create a new form data object
    const formData = new FormData();

    // append each file to the form data object
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    // send an asynchronous http post request to the server with the form data object
    try {
      const response = await fetch("http://127.0.0.1:5000/web_detect", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(
          "Something went wrong couldn't send the file to server"
        );
      }
      const result = await response.json();
      console.log("SUCCESS RESPONCE FROM SERVER");
      console.log(result);
      setResultFiles(result);
      setShowResults(true);
    } catch (error) {
      console.log(error);
      alert("There was an error processing your request");
    }
  };

  const handleRemoveClick = (fileIndex) => {
    const updatedFiles = [...files];
    updatedFiles.splice(fileIndex, 1);
    setFiles(updatedFiles);
  };

  return (
    <div className="speech-detection-container">
      <div className="move-back-container">
        <Link to="/SpeechButtons">
          <MdArrowBack className="move-back" />
        </Link>
      </div>

      <div className="speech-detection-box">
        <div className="speech-detection-header">Speech Detection</div>
        <div className="speech-detection-upload">
          <div className="speech-detection-upload-container">
            <label className="choose-file" htmlFor="file-upload">
              <FaFileUpload className="speech-detection-upload-icon" />
              <div>Choose Files</div>
            </label>
            <input
              id="file-upload"
              type="file"
              multiple
              accept="audio/*"
              onChange={handleFileChange}
            />
          </div>
          <div
            className="speech-detection-upload-text"
            onClick={handleGoogleDriveClick}
          >
            <label className="choose-file" htmlFor="file-upload">
              <FaGoogleDrive className="speech-detection-upload-icon" />
              <div>Add files from Google Drive</div>
            </label>
          </div>
        </div>
        {files.length > 0 && (
          <div className="speech-detection-file-list">
            <div className="speech-detection-file-list-header">
              Selected Files:
            </div>
            {files.map((file, index) => (
              <div key={file.name} className="speech-detection-file-list-item">
                <div className="speech-detection-file-name">{file.name}</div>
                <div
                  className="speech-detection-remove-file"
                  onClick={() => handleRemoveClick(index)}
                >
                  <AiOutlineClose className="speech-detection-remove-icon" />
                </div>
              </div>
            ))}
          </div>
        )}
        {/* <Link to="/results"> */}
        <button className="speech-detection-check" onClick={handleCheckClick}>
          Check
        </button>
        {/* </Link> */}
      </div>
      {/* only show results if the check button has been pressed and there is a valid responce from the server */}
      {showResults && resultFiles && <Results files={resultFiles} />}
    </div>
  );
}

export default SpeechDetection;
