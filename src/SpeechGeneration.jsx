import React, { useState } from "react";
import { FaGoogleDrive } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import "./SpeechGeneration.css";

function SpeechGeneration() {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGenerateAudioClick = () => {
    // Send data to the server based on the selected option
    let dataToSend = "";
    if (selectedOption === "option1") {
      dataToSend = "VCTK_old_17I-0338@nu.edu.pk";
    } else {
      // Handle other options here
      // dataToSend = ...
    }

    console.log(
      `Generating audio: Option - ${selectedOption}, Text - ${text}, Data to send - ${dataToSend}`
    );
    // Send dataToSend to the server
  };

  return (
    <div className="speech-generation-container">
      <div className="move-back-container">
        <Link to="/SpeechButtons">
          <MdArrowBack className="move-back" />
        </Link>
      </div>

      <div className="speech-generation-box">
        <div className="speech-generation-header">Speech Generation</div>
        <div className="speech-generation-options">
          <div className="speech-generation-textbox-container">
            <input
              className="speech-generation-textbox"
              type="text"
              placeholder="Enter Urdu text..."
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="speech-generation-select-container">
            <select
              className="speech-generation-select"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Select Speaker</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </div>
        <button
          className="speech-generation-generate"
          onClick={handleGenerateAudioClick}
        >
          Generate Audio
        </button>
      </div>
    </div>
  );
}

export default SpeechGeneration;
