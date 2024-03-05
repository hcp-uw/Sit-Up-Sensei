import './App.css';
import LandingPage from './LandingPage.js';
import WebcamPage from './WebcamPage.js';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/webcam" element={<WebcamPage />} />
    </Routes>
  );
}

export default App;
