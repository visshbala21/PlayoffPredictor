from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from sklearn.linear_model import LogisticRegression

app = Flask(__name__)
CORS(app)

# Dummy ML Model for Predictions
model = LogisticRegression()
X_train = np.array([[10, 300, 200], [12, 350, 180], [8, 280, 220]])
y_train = np.array([1, 1, 0])  # 1 = Made Playoffs, 0 = Missed Playoffs
model.fit(X_train, y_train)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        stats = np.array([
            data['wins'], 
            data['points_scored'], 
            data['points_against']
        ]).reshape(1, -1)
        probability = model.predict_proba(stats)[0][1] * 100
        return jsonify({"playoff_probability": round(probability, 2)})
    except KeyError as e:
        return jsonify({"error": f"Missing key: {str(e)}"}), 400

if __name__ == '__main__':
    app.run(debug=True)
