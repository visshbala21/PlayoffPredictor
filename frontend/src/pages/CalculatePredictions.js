import React from 'react';

const CalculatePage = () => {
  const handleCalculate = () => {
    // Add logic to calculate predictions
    alert('Calculating predictions...');
  };

  return (
    <div className="calculate-page">
      <button onClick={handleCalculate}>Calculate Predictions</button>
    </div>
  );
};

export default CalculatePage;