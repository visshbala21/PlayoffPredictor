import React from 'react';

const StatsPage = () => {
  const teamStats = {
    'New England Patriots': { wins: 10, pointsScored: 320, pointsAgainst: 250 },
    'Green Bay Packers': { wins: 8, pointsScored: 300, pointsAgainst: 280 },
  };

  return (
    <div className="stats-page">
      <h2>Current Season Stats</h2>
      {Object.entries(teamStats).map(([team, stats]) => (
        <div key={team} className="team-stats">
          <h3>{team}</h3>
          <p>Wins: {stats.wins}</p>
          <p>Points Scored: {stats.pointsScored}</p>
          <p>Points Against: {stats.pointsAgainst}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsPage;