import './App.css';
import LandingPage from './LandingPage.js';
import WebcamPage from './WebcamPage.js';
import About from './About.js';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/webcam" element={<WebcamPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
