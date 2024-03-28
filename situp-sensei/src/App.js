import './App.css';
import LandingPage from './LandingPage.js';
import WebcamPage from './WebcamPage.js';
import About from './About.js';
import Signup from './Signup.js';
import Login from './Login.js';
import UserDashboard from './UserDashboard.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dojo" element={<WebcamPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<UserDashboard />} />
    </Routes>
  );
}

export default App;
