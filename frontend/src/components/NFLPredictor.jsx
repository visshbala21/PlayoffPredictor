import React, { useState } from 'react';
import { Search, BarChart2 } from 'lucide-react';

const NFLPredictor = () => {
    const [teams, setTeams] = useState([]);
    const [stats, setStats] = useState({ wins: 0, points_scored: 0, points_against: 0 });
    const [results, setResults] = useState(null);

    const fetchPrediction = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(stats),
            });
            const data = await response.json();
            setResults(data.playoff_probability);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4 space-y-6">
            {/* Header */}
            <header className="bg-gray-800 text-white p-4 rounded-lg">
                <h1 className="text-2xl font-bold">NFL Playoff Predictor</h1>
                <p className="text-gray-300">Powered by Machine Learning</p>
            </header>

            {/* Input Section */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-bold mb-4">Enter Stats</h2>
                    <input type="number" placeholder="Wins" onChange={(e) => setStats({ ...stats, wins: +e.target.value })} />
                    <input type="number" placeholder="Points Scored" onChange={(e) => setStats({ ...stats, points_scored: +e.target.value })} />
                    <input type="number" placeholder="Points Against" onChange={(e) => setStats({ ...stats, points_against: +e.target.value })} />
                    <button onClick={fetchPrediction}>Calculate</button>
                </div>
            </div>

            {/* Results */}
            {results && <div>Playoff Probability: {results}%</div>}
        </div>
    );
};

export default NFLPredictor;
