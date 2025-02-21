import React, { useState, useEffect, useContext } from 'react';
import { TeamContext } from '../context/TeamContext';

const CurrentSeasonStats = () => {
  const { selectedTeams } = useContext(TeamContext);
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/teams');
        const data = await response.json();
        setTeamData(data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchTeams();
  }, []);

  // Filter out only the two selected teams
  const selectedTeamStats = teamData.filter(team =>
    team.Team === selectedTeams.team1 || team.Team === selectedTeams.team2
  );

  return (
    <div className="stats-page">
      <h2>Current Season Stats</h2>
      {selectedTeamStats.length === 0 ? (
        <p>No teams selected. Please select teams on the Home Page.</p>
      ) : (
        selectedTeamStats.map((team) => (
          <div key={team.Team} className="team-stats" style={{ margin: '16px 0' }}>
            <h3>{team.Team}</h3>
            <p>Wins: {team.Wins}</p>
            <p>Points For: {team.Points_For}</p>
            <p>Points Against: {team.Points_Against}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CurrentSeasonStats;
