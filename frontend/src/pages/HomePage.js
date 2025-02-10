import React, { useState } from 'react';

const HomePage = () => {
  const [selectedTeams, setSelectedTeams] = useState(['New England Patriots', 'Green Bay Packers']);

  return (
    <div className="home-page">
      <h1>NFL Playoff Predictor</h1>
      <p>Powered by Machine Learning</p>

      <div className="search-bar">
        <input type="text" placeholder="Search for NFL team..." />
        <button>Search</button>
      </div>

      <div className="selected-teams">
        <h2>Selected Teams</h2>
        {selectedTeams.map((team, index) => (
          <p key={index}>{team}</p>
        ))}
      </div>
    </div>
  );
};

export default HomePage;