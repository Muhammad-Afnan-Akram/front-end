import React from "react";
import { MdArrowBack } from "react-icons/md";
import "./SpeechButtons.css";
import { Link } from "react-router-dom";

const SpeechButtons = () => {
  const handleMoveBackClick = () => {
    // Handle move back functionality
    console.log("Move back clicked");
  };

  return (
    <div className="speech-buttons-container">
      <div className="speech-generation-container">
        <Link to="/SpeechGeneration">
          <button className="speech-generation-button">
            Speech Generation
          </button>
        </Link>
      </div>
      <div className="speech-detection-container">
        <Link to="/SpeechDetection">
          <button className="speech-detection-button">Speech Detection</button>
        </Link>
      </div>
      <div className="move-back-container" onClick={handleMoveBackClick}>
        <Link to="/">
          <MdArrowBack className="move-back" />
        </Link>
      </div>
    </div>
  );
};

export default SpeechButtons;
