import "./App.css";
import MainPage from "./MainPage";
import Results from "./Results";
import SpeechDetection from "./SpeechDetection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpeechGeneration from "./SpeechGeneration";
import SpeechButtons from "./SpeechButtons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/SpeechButtons" element={<SpeechButtons />} />
        <Route path="/SpeechGeneration" element={<SpeechGeneration />} />
        <Route path="/SpeechDetection" element={<SpeechDetection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
