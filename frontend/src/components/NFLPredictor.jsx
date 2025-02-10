import React, { useState } from 'react';
import { Search } from 'lucide-react';

const NFLPredictor = () => {
    const [teams] = useState([
        "New England Patriots",
        "Green Bay Packers",
        "Kansas City Chiefs",
        "Buffalo Bills",
        "Dallas Cowboys",
    ]);
    const [selectedTeam, setSelectedTeam] = useState("");
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
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            {/* Header */}
            <header className="bg-gray-800 text-white p-6 rounded-lg text-center">
                <h1 className="text-3xl font-bold">NFL Playoff Predictor</h1>
                <p className="text-gray-300 mt-2">Powered by Machine Learning</p>
            </header>

            {/* Search and Select Team */}
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <h2 className="font-bold text-xl">Search and Select a Team</h2>
                <div className="flex items-center gap-2">
                    <Search className="text-gray-500" />
                    <select
                        className="w-full p-2 border rounded"
                        value={selectedTeam}
                        onChange={(e) => setSelectedTeam(e.target.value)}
                    >
                        <option value="">Select a team...</option>
                        {teams.map((team) => (
                            <option key={team} value={team}>
                                {team}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Input Section */}
            {selectedTeam && (
                <div className="bg-white p-6 rounded-lg shadow space-y-6">
                    <h2 className="font-bold text-xl">Enter Stats for {selectedTeam}</h2>
                    <div className="space-y-4">
                        {/* Wins */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Wins</label>
                            <input
                                type="number"
                                placeholder="Enter number of wins"
                                className="w-full p-2 border rounded"
                                onChange={(e) => setStats({ ...stats, wins: +e.target.value })}
                            />
                        </div>

                        {/* Points Scored */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Points Scored</label>
                            <input
                                type="number"
                                placeholder="Enter points scored"
                                className="w-full p-2 border rounded"
                                onChange={(e) => setStats({ ...stats, points_scored: +e.target.value })}
                            />
                        </div>

                        {/* Points Against */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Points Against</label>
                            <input
                                type="number"
                                placeholder="Enter points against"
                                className="w-full p-2 border rounded"
                                onChange={(e) => setStats({ ...stats, points_against: +e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        onClick={fetchPrediction}
                        className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                    >
                        Calculate
                    </button>
                </div>
            )}

            {/* Results */}
            {results !== null && selectedTeam && (
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="font-bold text-xl">Results</h2>
                    <p className="mt-4 text-green-600 font-bold">
                        {selectedTeam}'s probability of winning the playoffs is {results}%.
                    </p>
                </div>
            )}
        </div>
    );
};

export default NFLPredictor;
