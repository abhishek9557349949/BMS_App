import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginAndSignup from './Components/LoginAndSignup/LoginAndSignup.jsx';
import OwnerLandingPage from './Components/OwnerLandingPage/OwnerLandingPage.jsx';
import ExicutiveLandingPage from './Components/ExicutiveLandingPage/ExicutiveLandingPage.jsx';
import AccountantLoginPage from './Components/AccountLoginPage/AccountantLoginPage.jsx';
import ManagerLandingPage from './Components/ManagerLandingPage/ManagerLandingPage.jsx';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<LoginAndSignup />} />
        <Route path="/owner-home" element={<OwnerLandingPage />} />
        <Route path="/mgr-home" element={<ManagerLandingPage />} />
        <Route path="/acc-home" element={<AccountantLoginPage />} />
        <Route path="/exc-home" element={<ExicutiveLandingPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
