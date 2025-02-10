import React from 'react';

const PredictionsPage = () => {
  const predictions = {
    'New England Patriots': 78,
    'Green Bay Packers': 45,
  };

  return (
    <div className="predictions-page">
      <h2>Playoff Predictions</h2>
      {Object.entries(predictions).map(([team, percentage]) => (
        <div key={team} className="prediction-bar">
          <h3>{team}</h3>
          <div className="bar-container">
            <div
              className="bar"
              style={{ width: `${percentage}%`, backgroundColor: percentage > 50 ? 'green' : 'red' }}
            ></div>
          </div>
          <p>{percentage}%</p>
        </div>
      ))}
    </div>
  );
};

export default PredictionsPage;