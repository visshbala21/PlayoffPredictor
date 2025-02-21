import React, { useContext, useState } from 'react';
import { TeamContext } from '../context/TeamContext';

const CalculatePredictions = () => {
  const { selectedTeams } = useContext(TeamContext);
  const [result, setResult] = useState(null);

  const fetchPrediction = async () => {
    if (!selectedTeams.team1 || !selectedTeams.team2) {
      alert("Please select both teams on the Home Page before calculating.");
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          team1: selectedTeams.team1,
          team2: selectedTeams.team2
        }),
      });
      const data = await response.json();
      if (data.error) {
        alert("Error: " + data.error);
      } else {
        setResult(data);
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div className="calculate-page">
      <h2>Calculate Predictions</h2>
      <p>
        Selected Teams: 
        <strong> {selectedTeams.team1 || 'None'} </strong> and 
        <strong> {selectedTeams.team2 || 'None'} </strong>
      </p>
      <button onClick={fetchPrediction}>Calculate</button>

      {result && (
        <div className="prediction-results" style={{ marginTop: '16px' }}>
          <h3>Playoff Predictions</h3>
          <p>
            {result.team1.name} Playoff Probability: {result.team1.playoff_probability}%
          </p>
          <p>
            {result.team2.name} Playoff Probability: {result.team2.playoff_probability}%
          </p>
          {result.team1.playoff_probability > result.team2.playoff_probability ? (
            <p>{result.team1.name} is more likely to win the playoffs.</p>
          ) : result.team1.playoff_probability < result.team2.playoff_probability ? (
            <p>{result.team2.name} is more likely to win the playoffs.</p>
          ) : (
            <p>Both teams have equal chances.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalculatePredictions;
