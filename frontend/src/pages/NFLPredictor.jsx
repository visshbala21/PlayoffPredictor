import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const NFLPredictor = () => {
    const [teams, setTeams] = useState([]);
    const [selectedTeam1, setSelectedTeam1] = useState("");
    const [selectedTeam2, setSelectedTeam2] = useState("");
    const [results, setResults] = useState(null);

    // Fetch team list from the backend
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

    const fetchPrediction = async () => {
        if (!selectedTeam1 || !selectedTeam2) {
            alert("Please select two teams.");
            return;
        }
        try {
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    team1: selectedTeam1,
                    team2: selectedTeam2
                }),
            });
            const data = await response.json();
            if (data.error) {
                alert("Error: " + data.error);
            } else {
                setResults(data);
            }
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            {/* Header */}
            <header className="bg-gray-800 text-white p-6 rounded-lg text-center">
                <h1 className="text-3xl font-bold">NFL Playoff Predictor</h1>
                <p className="text-gray-300 mt-2">Powered by Machine Learning Models</p>
            </header>

            {/* Team 1 Selection */}
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <h2 className="font-bold text-xl">Team 1</h2>
                <div className="flex items-center gap-2">
                    <Search className="text-gray-500" />
                    <select
                        className="w-full p-2 border rounded"
                        value={selectedTeam1}
                        onChange={(e) => setSelectedTeam1(e.target.value)}
                    >
                        <option value="">Select Team 1...</option>
                        {teams.map((team) => (
                            <option key={team.Team} value={team.Team}>
                                {team.Team}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Team 2 Selection */}
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <h2 className="font-bold text-xl">Team 2</h2>
                <div className="flex items-center gap-2">
                    <Search className="text-gray-500" />
                    <select
                        className="w-full p-2 border rounded"
                        value={selectedTeam2}
                        onChange={(e) => setSelectedTeam2(e.target.value)}
                    >
                        <option value="">Select Team 2...</option>
                        {teams.map((team) => (
                            <option key={team.Team} value={team.Team}>
                                {team.Team}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Calculate Button */}
            <button
                onClick={fetchPrediction}
                className="mt-4 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
            >
                Calculate Predictions
            </button>

            {/* Results */}
            {results && (
                <div className="bg-white p-6 rounded-lg shadow space-y-6 mt-6">
                    <h2 className="font-bold text-xl">Playoff Predictions</h2>
                    <div>
                        <h3 className="font-semibold">{results.team1.name}</h3>
                        <p className="mt-2 text-green-600 font-bold">
                            Playoff Probability: {results.team1.playoff_probability}%
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">{results.team2.name}</h3>
                        <p className="mt-2 text-green-600 font-bold">
                            Playoff Probability: {results.team2.playoff_probability}%
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NFLPredictor;
