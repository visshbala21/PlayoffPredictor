import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import CurrentSeasonStats from "./pages/CurrentSeasonStats";
import NFLPredictor from "./pages/NFLPredictor";  // Make sure NFLPredictor.jsx is in src/pages/

import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Bar */}
        <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/current-stats">Current Season Stats</Link></li>
            <li><Link to="/predict">Calculate Predictions</Link></li>
          </ul>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/current-stats" element={<CurrentSeasonStats />} />
          <Route path="/predict" element={<NFLPredictor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
