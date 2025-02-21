import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CurrentSeasonStats from "./pages/CurrentSeasonStats";
import CalculatePredictions from "./pages/CalculatePredictions";
import { TeamProvider } from './context/TeamContext';

import './index.css';

const App = () => {
  return (
    <TeamProvider>
      <Router>
        <div className="app-container">
          {/* Navigation Bar */}
          <nav className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/current-stats">Current Season Stats</Link></li>
              <li><Link to="/calculate">Calculate Predictions</Link></li>
            </ul>
          </nav>

          {/* Page Routing */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/current-stats" element={<CurrentSeasonStats />} />
            <Route path="/calculate" element={<CalculatePredictions />} />
          </Routes>
        </div>
      </Router>
    </TeamProvider>
  );
};

export default App;
