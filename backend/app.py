from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

# Load your pre-trained model from model.joblib
model = joblib.load('model.joblib')

# Load team data from the CSV file (assumes columns: Team, Wins, Points_For, Points_Against, Playoffs)
team_df = pd.read_csv('nfl_data.csv')

# Endpoint to return the list of teams (with basic stats)
@app.route('/teams', methods=['GET'])
def get_teams():
    teams = team_df[['Team', 'Wins', 'Points_For', 'Points_Against']].to_dict(orient='records')
    return jsonify(teams)

# Endpoint to compute playoff predictions based on two team names
@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        # Expect payload with team1 and team2 names
        team1_name = data.get('team1')
        team2_name = data.get('team2')
        
        if not team1_name or not team2_name:
            return jsonify({"error": "Both team1 and team2 must be provided."}), 400
        
        # Look up team1 in the CSV
        team1_row = team_df[team_df['Team'] == team1_name]
        if team1_row.empty:
            return jsonify({"error": f"Team not found: {team1_name}"}), 404
        team1_stats = team1_row.iloc[0]
        stats1 = np.array([
            float(team1_stats['Wins']),
            float(team1_stats['Points_For']),
            float(team1_stats['Points_Against'])
        ]).reshape(1, -1)
        
        # Look up team2 in the CSV
        team2_row = team_df[team_df['Team'] == team2_name]
        if team2_row.empty:
            return jsonify({"error": f"Team not found: {team2_name}"}), 404
        team2_stats = team2_row.iloc[0]
        stats2 = np.array([
            float(team2_stats['Wins']),
            float(team2_stats['Points_For']),
            float(team2_stats['Points_Against'])
        ]).reshape(1, -1)
        
        # Generate playoff probability predictions using the pre-trained model
        prob1 = model.predict_proba(stats1)[0][1] * 100
        prob2 = model.predict_proba(stats2)[0][1] * 100
        
        return jsonify({
            "team1": {"name": team1_name, "playoff_probability": round(prob1, 2)},
            "team2": {"name": team2_name, "playoff_probability": round(prob2, 2)}
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
