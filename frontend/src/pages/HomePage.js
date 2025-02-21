import React, { useState, useEffect, useContext } from 'react';
import { TeamContext } from '../context/TeamContext';

const HomePage = () => {
  const { selectedTeams, setSelectedTeams } = useContext(TeamContext);
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/teams');
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchTeams();
  }, []);

  // Filter the team list based on the user's search
  const filteredTeams = teams.filter(team =>
    team.Team.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // When the user clicks on a team from the filtered list
  const handleTeamSelect = (teamName) => {
    // If Team 1 not selected, set Team 1
    if (!selectedTeams.team1) {
      setSelectedTeams({ ...selectedTeams, team1: teamName });
      setMessage(`Team 1 selected: ${teamName}`);
    }
    // Else if Team 1 selected, but Team 2 not selected, set Team 2
    else if (!selectedTeams.team2) {
      setSelectedTeams({ ...selectedTeams, team2: teamName });
      setMessage(`Team 2 selected: ${teamName}`);
    }
    // Else both teams are selected
    else {
      setMessage("Both teams are already selected. Clear selections to pick different teams.");
    }
  };

  // Clear the current selections
  const handleClearSelections = () => {
    setSelectedTeams({ team1: '', team2: '' });
    setMessage('');
  };

  return (
    <div className="home-page">
      <h1>NFL Playoff Predictor</h1>
      <p>Powered by Machine Learning</p>

      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search for an NFL team..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filtered Search Results */}
      <div className="search-results">
        {filteredTeams.map((team) => (
          <div
            key={team.Team}
            style={{
              cursor: 'pointer',
              margin: '4px 0',
              backgroundColor: '#eee',
              padding: '4px'
            }}
            onClick={() => handleTeamSelect(team.Team)}
          >
            {team.Team}
          </div>
        ))}
      </div>

      {/* Display Selected Teams */}
      <div className="selected-teams" style={{ marginTop: '16px' }}>
        <h2>Selected Teams</h2>
        <p>Team 1: {selectedTeams.team1 || 'None'}</p>
        <p>Team 2: {selectedTeams.team2 || 'None'}</p>
      </div>

      {/* Display Message */}
      {message && <p style={{ color: 'blue', marginTop: '8px' }}>{message}</p>}

      {/* Clear Button */}
      <button onClick={handleClearSelections} style={{ marginTop: '16px' }}>
        Clear Selections
      </button>
    </div>
  );
};

export default HomePage;
