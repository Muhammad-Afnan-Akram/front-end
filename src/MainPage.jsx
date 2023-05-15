import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css"; // Import a CSS file for styling

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page-left">
        <h2>Say goodbye to communication barriers with Speech Swift !!</h2>
        <p>
          Experience the future of voice technology with Speech Swift - the
          revolutionary app that clones your voice using advanced Deep Learning
          techniques and detects synthetic speech in Urdu.
        </p>
        <Link to="/SpeechButtons">
          <button className="main-page-button">Get Started &rarr;</button>
        </Link>
      </div>
      <div className="main-page-right">
        <img src="/logo.png" alt="Speech Swift" className="speech-swift-logo" />
      </div>
    </div>
  );
};

export default MainPage;
