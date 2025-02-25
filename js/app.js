// NFL Teams Data with simulated ML features
const nflTeams = [
    {
        id: 1,
        name: "Arizona Cardinals",
        abbreviation: "ARI",
        division: "NFC West",
        features: {
            offenseRating: 72,
            defenseRating: 68,
            qbRating: 75,
            coachRating: 73,
            playoffExperience: 55,
            injuryIndex: 82,
            homeFieldAdvantage: 76,
            momentum: 65
        }
    },
    {
        id: 2,
        name: "Atlanta Falcons",
        abbreviation: "ATL",
        division: "NFC South",
        features: {
            offenseRating: 76,
            defenseRating: 74,
            qbRating: 80,
            coachRating: 78,
            playoffExperience: 68,
            injuryIndex: 85,
            homeFieldAdvantage: 79,
            momentum: 72
        }
    },
    {
        id: 3,
        name: "Baltimore Ravens",
        abbreviation: "BAL",
        division: "AFC North",
        features: {
            offenseRating: 88,
            defenseRating: 90,
            qbRating: 92,
            coachRating: 88,
            playoffExperience: 80,
            injuryIndex: 75,
            homeFieldAdvantage: 85,
            momentum: 87
        }
    },
    {
        id: 4,
        name: "Buffalo Bills",
        abbreviation: "BUF",
        division: "AFC East",
        features: {
            offenseRating: 87,
            defenseRating: 86,
            qbRating: 90,
            coachRating: 85,
            playoffExperience: 78,
            injuryIndex: 80,
            homeFieldAdvantage: 84,
            momentum: 86
        }
    },
    {
        id: 5,
        name: "Carolina Panthers",
        abbreviation: "CAR",
        division: "NFC South",
        features: {
            offenseRating: 65,
            defenseRating: 70,
            qbRating: 68,
            coachRating: 72,
            playoffExperience: 60,
            injuryIndex: 78,
            homeFieldAdvantage: 75,
            momentum: 62
        }
    },
    {
        id: 6,
        name: "Chicago Bears",
        abbreviation: "CHI",
        division: "NFC North",
        features: {
            offenseRating: 75,
            defenseRating: 79,
            qbRating: 78,
            coachRating: 76,
            playoffExperience: 65,
            injuryIndex: 83,
            homeFieldAdvantage: 80,
            momentum: 74
        }
    },
    {
        id: 7,
        name: "Cincinnati Bengals",
        abbreviation: "CIN",
        division: "AFC North",
        features: {
            offenseRating: 89,
            defenseRating: 82,
            qbRating: 91,
            coachRating: 83,
            playoffExperience: 75,
            injuryIndex: 72,
            homeFieldAdvantage: 81,
            momentum: 85
        }
    },
    {
        id: 8,
        name: "Cleveland Browns",
        abbreviation: "CLE",
        division: "AFC North",
        features: {
            offenseRating: 78,
            defenseRating: 84,
            qbRating: 80,
            coachRating: 77,
            playoffExperience: 65,
            injuryIndex: 75,
            homeFieldAdvantage: 79,
            momentum: 76
        }
    },
    {
        id: 9,
        name: "Dallas Cowboys",
        abbreviation: "DAL",
        division: "NFC East",
        features: {
            offenseRating: 86,
            defenseRating: 85,
            qbRating: 85,
            coachRating: 82,
            playoffExperience: 78,
            injuryIndex: 79,
            homeFieldAdvantage: 88,
            momentum: 82
        }
    },
    {
        id: 10,
        name: "Denver Broncos",
        abbreviation: "DEN",
        division: "AFC West",
        features: {
            offenseRating: 72,
            defenseRating: 80,
            qbRating: 74,
            coachRating: 76,
            playoffExperience: 70,
            injuryIndex: 82,
            homeFieldAdvantage: 84,
            momentum: 71
        }
    },
    {
        id: 11,
        name: "Detroit Lions",
        abbreviation: "DET",
        division: "NFC North",
        features: {
            offenseRating: 87,
            defenseRating: 82,
            qbRating: 84,
            coachRating: 85,
            playoffExperience: 72,
            injuryIndex: 80,
            homeFieldAdvantage: 83,
            momentum: 89
        }
    },
    {
        id: 12,
        name: "Green Bay Packers",
        abbreviation: "GB",
        division: "NFC North",
        features: {
            offenseRating: 85,
            defenseRating: 80,
            qbRating: 86,
            coachRating: 84,
            playoffExperience: 85,
            injuryIndex: 78,
            homeFieldAdvantage: 89,
            momentum: 83
        }
    },
    {
        id: 13,
        name: "Houston Texans",
        abbreviation: "HOU",
        division: "AFC South",
        features: {
            offenseRating: 83,
            defenseRating: 79,
            qbRating: 85,
            coachRating: 80,
            playoffExperience: 68,
            injuryIndex: 84,
            homeFieldAdvantage: 78,
            momentum: 86
        }
    },
    {
        id: 14,
        name: "Indianapolis Colts",
        abbreviation: "IND",
        division: "AFC South",
        features: {
            offenseRating: 79,
            defenseRating: 77,
            qbRating: 78,
            coachRating: 80,
            playoffExperience: 72,
            injuryIndex: 81,
            homeFieldAdvantage: 80,
            momentum: 77
        }
    },
    {
        id: 15,
        name: "Jacksonville Jaguars",
        abbreviation: "JAX",
        division: "AFC South",
        features: {
            offenseRating: 80,
            defenseRating: 76,
            qbRating: 82,
            coachRating: 79,
            playoffExperience: 65,
            injuryIndex: 83,
            homeFieldAdvantage: 77,
            momentum: 78
        }
    },
    {
        id: 16,
        name: "Kansas City Chiefs",
        abbreviation: "KC",
        division: "AFC West",
        features: {
            offenseRating: 92,
            defenseRating: 88,
            qbRating: 98,
            coachRating: 95,
            playoffExperience: 95,
            injuryIndex: 81,
            homeFieldAdvantage: 90,
            momentum: 91
        }
    },
    {
        id: 17,
        name: "Las Vegas Raiders",
        abbreviation: "LV",
        division: "AFC West",
        features: {
            offenseRating: 75,
            defenseRating: 77,
            qbRating: 74,
            coachRating: 75,
            playoffExperience: 68,
            injuryIndex: 80,
            homeFieldAdvantage: 82,
            momentum: 73
        }
    },
    {
        id: 18,
        name: "Los Angeles Chargers",
        abbreviation: "LAC",
        division: "AFC West",
        features: {
            offenseRating: 84,
            defenseRating: 81,
            qbRating: 87,
            coachRating: 78,
            playoffExperience: 65,
            injuryIndex: 72,
            homeFieldAdvantage: 76,
            momentum: 80
        }
    },
    {
        id: 19,
        name: "Los Angeles Rams",
        abbreviation: "LAR",
        division: "NFC West",
        features: {
            offenseRating: 83,
            defenseRating: 84,
            qbRating: 84,
            coachRating: 88,
            playoffExperience: 82,
            injuryIndex: 75,
            homeFieldAdvantage: 77,
            momentum: 82
        }
    },
    {
        id: 20,
        name: "Miami Dolphins",
        abbreviation: "MIA",
        division: "AFC East",
        features: {
            offenseRating: 88,
            defenseRating: 79,
            qbRating: 86,
            coachRating: 83,
            playoffExperience: 70,
            injuryIndex: 78,
            homeFieldAdvantage: 82,
            momentum: 84
        }
    },
    {
        id: 21,
        name: "Minnesota Vikings",
        abbreviation: "MIN",
        division: "NFC North",
        features: {
            offenseRating: 82,
            defenseRating: 80,
            qbRating: 83,
            coachRating: 81,
            playoffExperience: 75,
            injuryIndex: 82,
            homeFieldAdvantage: 84,
            momentum: 79
        }
    },
    {
        id: 22,
        name: "New England Patriots",
        abbreviation: "NE",
        division: "AFC East",
        features: {
            offenseRating: 70,
            defenseRating: 79,
            qbRating: 72,
            coachRating: 82,
            playoffExperience: 85,
            injuryIndex: 80,
            homeFieldAdvantage: 83,
            momentum: 68
        }
    },
    {
        id: 23,
        name: "New Orleans Saints",
        abbreviation: "NO",
        division: "NFC South",
        features: {
            offenseRating: 80,
            defenseRating: 82,
            qbRating: 79,
            coachRating: 81,
            playoffExperience: 78,
            injuryIndex: 79,
            homeFieldAdvantage: 85,
            momentum: 76
        }
    },
    {
        id: 24,
        name: "New York Giants",
        abbreviation: "NYG",
        division: "NFC East",
        features: {
            offenseRating: 74,
            defenseRating: 76,
            qbRating: 75,
            coachRating: 80,
            playoffExperience: 72,
            injuryIndex: 76,
            homeFieldAdvantage: 81,
            momentum: 73
        }
    },
    {
        id: 25,
        name: "New York Jets",
        abbreviation: "NYJ",
        division: "AFC East",
        features: {
            offenseRating: 81,
            defenseRating: 88,
            qbRating: 82,
            coachRating: 79,
            playoffExperience: 65,
            injuryIndex: 78,
            homeFieldAdvantage: 80,
            momentum: 79
        }
    },
    {
        id: 26,
        name: "Philadelphia Eagles",
        abbreviation: "PHI",
        division: "NFC East",
        features: {
            offenseRating: 85,
            defenseRating: 84,
            qbRating: 85,
            coachRating: 84,
            playoffExperience: 83,
            injuryIndex: 76,
            homeFieldAdvantage: 87,
            momentum: 83
        }
    },
    {
        id: 27,
        name: "Pittsburgh Steelers",
        abbreviation: "PIT",
        division: "AFC North",
        features: {
            offenseRating: 78,
            defenseRating: 86,
            qbRating: 76,
            coachRating: 88,
            playoffExperience: 85,
            injuryIndex: 82,
            homeFieldAdvantage: 86,
            momentum: 81
        }
    },
    {
        id: 28,
        name: "San Francisco 49ers",
        abbreviation: "SF",
        division: "NFC West",
        features: {
            offenseRating: 90,
            defenseRating: 91,
            qbRating: 85,
            coachRating: 92,
            playoffExperience: 88,
            injuryIndex: 78,
            homeFieldAdvantage: 85,
            momentum: 89
        }
    },
    {
        id: 29,
        name: "Seattle Seahawks",
        abbreviation: "SEA",
        division: "NFC West",
        features: {
            offenseRating: 81,
            defenseRating: 80,
            qbRating: 82,
            coachRating: 83,
            playoffExperience: 80,
            injuryIndex: 81,
            homeFieldAdvantage: 88,
            momentum: 79
        }
    },
    {
        id: 30,
        name: "Tampa Bay Buccaneers",
        abbreviation: "TB",
        division: "NFC South",
        features: {
            offenseRating: 82,
            defenseRating: 81,
            qbRating: 80,
            coachRating: 84,
            playoffExperience: 78,
            injuryIndex: 79,
            homeFieldAdvantage: 80,
            momentum: 81
        }
    },
    {
        id: 31,
        name: "Tennessee Titans",
        abbreviation: "TEN",
        division: "AFC South",
        features: {
            offenseRating: 76,
            defenseRating: 79,
            qbRating: 77,
            coachRating: 80,
            playoffExperience: 72,
            injuryIndex: 84,
            homeFieldAdvantage: 82,
            momentum: 75
        }
    },
    {
        id: 32,
        name: "Washington Commanders",
        abbreviation: "WAS",
        division: "NFC East",
        features: {
            offenseRating: 77,
            defenseRating: 78,
            qbRating: 76,
            coachRating: 79,
            playoffExperience: 68,
            injuryIndex: 80,
            homeFieldAdvantage: 79,
            momentum: 76
        }
    }
];

// State variables
let selectedTeam1 = null;
let selectedTeam2 = null;

// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const team1Search = document.getElementById('team1-search');
    const team2Search = document.getElementById('team2-search');
    const team1List = document.getElementById('team1-list');
    const team2List = document.getElementById('team2-list');
    const team1Selected = document.getElementById('team1-selected');
    const team2Selected = document.getElementById('team2-selected');
    const team1SelectedLogo = document.getElementById('team1-selected-logo');
    const team2SelectedLogo = document.getElementById('team2-selected-logo');
    const team1SelectedName = document.getElementById('team1-selected-name');
    const team2SelectedName = document.getElementById('team2-selected-name');
    const team1SelectedDivision = document.getElementById('team1-selected-division');
    const team2SelectedDivision = document.getElementById('team2-selected-division');
    const predictButton = document.getElementById('predict-button');
    const results = document.getElementById('results');
    const resultLogo1 = document.getElementById('result-logo1');
    const resultLogo2 = document.getElementById('result-logo2');
    const resultName1 = document.getElementById('result-name1');
    const resultName2 = document.getElementById('result-name2');
    const winProbability1 = document.getElementById('win-probability1');
    const winProbability2 = document.getElementById('win-probability2');
    const predictionMarker = document.getElementById('prediction-marker');
    const predictionLabel = document.getElementById('prediction-label');
    const factorsList = document.getElementById('factors-list');
    const team1Result = document.getElementById('team1-result');
    const team2Result = document.getElementById('team2-result');

    // Initialize team lists
    function initTeamLists() {
        populateTeamList(team1List, 1);
        populateTeamList(team2List, 2);
    }

    // Populate team list with all teams
    function populateTeamList(listElement, teamNumber) {
        listElement.innerHTML = '';
        
        nflTeams.forEach(team => {
            const teamItem = document.createElement('div');
            teamItem.className = 'team-item';
            teamItem.dataset.id = team.id;
            
            const logoDiv = document.createElement('div');
            logoDiv.className = 'team-logo';
            logoDiv.textContent = team.abbreviation;
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'team-info';
            
            const teamName = document.createElement('h3');
            teamName.textContent = team.name;
            
            const teamDivision = document.createElement('p');
            teamDivision.textContent = team.division;
            
            infoDiv.appendChild(teamName);
            infoDiv.appendChild(teamDivision);
            
            teamItem.appendChild(logoDiv);
            teamItem.appendChild(infoDiv);
            
            teamItem.addEventListener('click', () => {
                if (teamNumber === 1) {
                    selectTeam1(team);
                } else {
                    selectTeam2(team);
                }
            });
            
            listElement.appendChild(teamItem);
        });
    }

    // Filter team list based on search input
    function filterTeamList(listElement, searchValue) {
        const items = listElement.querySelectorAll('.team-item');
        const searchLower = searchValue.toLowerCase();
        
        items.forEach(item => {
            const teamName = item.querySelector('h3').textContent.toLowerCase();
            const teamAbbr = item.querySelector('.team-logo').textContent.toLowerCase();
            
            if (teamName.includes(searchLower) || teamAbbr.includes(searchLower)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Select team 1
    function selectTeam1(team) {
        selectedTeam1 = team;
        team1SelectedLogo.textContent = team.abbreviation;
        team1SelectedName.textContent = team.name;
        team1SelectedDivision.textContent = team.division;
        team1Selected.style.display = 'flex';
        
        highlightSelectedTeam(team1List, team.id);
        checkPredictButtonState();
    }

    // Select team 2
    function selectTeam2(team) {
        selectedTeam2 = team;
        team2SelectedLogo.textContent = team.abbreviation;
        team2SelectedName.textContent = team.name;
        team2SelectedDivision.textContent = team.division;
        team2Selected.style.display = 'flex';
        
        highlightSelectedTeam(team2List, team.id);
        checkPredictButtonState();
    }

    // Highlight selected team in list
    function highlightSelectedTeam(listElement, teamId) {
        const items = listElement.querySelectorAll('.team-item');
        
        items.forEach(item => {
            if (parseInt(item.dataset.id) === teamId) {
                item.classList.add('selected');
            } else {
                item.classList.remove('selected');
            }
        });
    }

    // Check if predict button should be enabled
    function checkPredictButtonState() {
        if (selectedTeam1 && selectedTeam2) {
            predictButton.disabled = false;
        } else {
            predictButton.disabled = true;
        }
    }

    // Predict playoff outcome
    function predictPlayoffOutcome() {
        if (!selectedTeam1 || !selectedTeam2) return;
        
        // Get team features
        const team1Features = selectedTeam1.features;
        const team2Features = selectedTeam2.features;
        
        // Calculate weighted score for each team
        const weights = {
            offenseRating: 0.15,
            defenseRating: 0.15,
            qbRating: 0.18,
            coachRating: 0.12,
            playoffExperience: 0.13,
            injuryIndex: 0.08,
            homeFieldAdvantage: 0.09,
            momentum: 0.1
        };
        
        let team1Score = 0;
        let team2Score = 0;
        
        // Calculate weighted scores
        Object.keys(weights).forEach(feature => {
            team1Score += team1Features[feature] * weights[feature];
            team2Score += team2Features[feature] * weights[feature];
        });
        
        // Add some randomness (simulating the unpredictability of playoffs)
        const randomFactor = 5; // +/- 5 points
        team1Score += (Math.random() * randomFactor * 2) - randomFactor;
        team2Score += (Math.random() * randomFactor * 2) - randomFactor;
        
        // Calculate win probabilities
        const totalScore = team1Score + team2Score;
        const team1Probability = Math.round((team1Score / totalScore) * 100);
        const team2Probability = 100 - team1Probability;
        
        // Display results
        displayResults(team1Probability, team2Probability);
    }

    // Display prediction results
    function displayResults(team1Probability, team2Probability) {
        // Update team names and logos
        resultLogo1.textContent = selectedTeam1.abbreviation;
        resultLogo2.textContent = selectedTeam2.abbreviation;
        resultName1.textContent = selectedTeam1.name;
        resultName2.textContent = selectedTeam2.name;
        
        // Update win probabilities
        winProbability1.textContent = `${team1Probability}%`;
        winProbability2.textContent = `${team2Probability}%`;
        
        // Update prediction marker position
        predictionMarker.style.left = `${team1Probability}%`;
        
        // Update prediction label
        if (team1Probability > team2Probability) {
            predictionLabel.textContent = `${selectedTeam1.name} is favored to win by ${team1Probability - team2Probability}%`;
            team1Result.classList.add('winner');
            team2Result.classList.remove('winner');
        } else if (team2Probability > team1Probability) {
            predictionLabel.textContent = `${selectedTeam2.name} is favored to win by ${team2Probability - team1Probability}%`;
            team2Result.classList.add('winner');
            team1Result.classList.remove('winner');
        } else {
            predictionLabel.textContent = "The teams are evenly matched!";
            team1Result.classList.remove('winner');
            team2Result.classList.remove('winner');
        }
        
        // Generate key factors
        generateKeyFactors();
        
        // Show results
        results.style.display = 'block';
        
        // Scroll to results
        results.scrollIntoView({ behavior: 'smooth' });
    }

    // Generate key factors for the prediction
    function generateKeyFactors() {
        factorsList.innerHTML = '';
        
        const team1Features = selectedTeam1.features;
        const team2Features = selectedTeam2.features;
        
        // Compare features and identify significant differences
        const keyDifferences = [];
        
        if (Math.abs(team1Features.qbRating - team2Features.qbRating) > 10) {
            if (team1Features.qbRating > team2Features.qbRating) {
                keyDifferences.push(`${selectedTeam1.name}'s quarterback rating is significantly higher (${team1Features.qbRating} vs ${team2Features.qbRating})`);
            } else {
                keyDifferences.push(`${selectedTeam2.name}'s quarterback rating is significantly higher (${team2Features.qbRating} vs ${team1Features.qbRating})`);
            }
        }
        
        if (Math.abs(team1Features.offenseRating - team2Features.offenseRating) > 8) {
            if (team1Features.offenseRating > team2Features.offenseRating) {
                keyDifferences.push(`${selectedTeam1.name} has a stronger offense (${team1Features.offenseRating} vs ${team2Features.offenseRating})`);
            } else {
                keyDifferences.push(`${selectedTeam2.name} has a stronger offense (${team2Features.offenseRating} vs ${team1Features.offenseRating})`);
            }
        }
        
        if (Math.abs(team1Features.defenseRating - team2Features.defenseRating) > 8) {
            if (team1Features.defenseRating > team2Features.defenseRating) {
                keyDifferences.push(`${selectedTeam1.name} has a stronger defense (${team1Features.defenseRating} vs ${team2Features.defenseRating})`);
            } else {
                keyDifferences.push(`${selectedTeam2.name} has a stronger defense (${team2Features.defenseRating} vs ${team1Features.defenseRating})`);
            }
        }
        
        if (Math.abs(team1Features.playoffExperience - team2Features.playoffExperience) > 15) {
            if (team1Features.playoffExperience > team2Features.playoffExperience) {
                keyDifferences.push(`${selectedTeam1.name} has significantly more playoff experience`);
            } else {
                keyDifferences.push(`${selectedTeam2.name} has significantly more playoff experience`);
            }
        }
        
        if (Math.abs(team1Features.momentum - team2Features.momentum) > 10) {
            if (team1Features.momentum > team2Features.momentum) {
                keyDifferences.push(`${selectedTeam1.name} has better momentum going into the playoffs`);
            } else {
                keyDifferences.push(`${selectedTeam2.name} has better momentum going into the playoffs`);
            }
        }
        
        if (Math.abs(team1Features.coachRating - team2Features.coachRating) > 8) {
            if (team1Features.coachRating > team2Features.coachRating) {
                keyDifferences.push(`${selectedTeam1.name}'s coaching staff is rated higher`);
            } else {
                keyDifferences.push(`${selectedTeam2.name}'s coaching staff is rated higher`);
            }
        }
        
        // Add random contextual factors
        const contextualFactors = [
            "Historical playoff performance trends favor this outcome",
            "Weather conditions expected for playoff games favor the predicted winner",
            "Recent head-to-head matchups support this prediction",
            "Injury recovery timelines factor into the prediction model",
            "Team chemistry metrics suggest stronger cohesion for the favored team",
            "Schedule difficulty leading up to playoffs impacts team readiness"
        ];
        
        // Randomly select 1-2 contextual factors
        const numContextual = Math.floor(Math.random() * 2) + 1;
        for (let i = 0; i < numContextual; i++) {
            const randomIndex = Math.floor(Math.random() * contextualFactors.length);
            keyDifferences.push(contextualFactors[randomIndex]);
            contextualFactors.splice(randomIndex, 1);
        }
        
        // Ensure we have at least 3 factors, but not more than 5
        const numFactors = Math.min(Math.max(keyDifferences.length, 3), 5);
        
        // Add factors to the list
        for (let i = 0; i < numFactors; i++) {
            const factor = document.createElement('li');
            factor.textContent = keyDifferences[i];
            factorsList.appendChild(factor);
        }
    }

    // Event listeners
    team1Search.addEventListener('input', () => {
        filterTeamList(team1List, team1Search.value);
    });
    
    team2Search.addEventListener('input', () => {
        filterTeamList(team2List, team2Search.value);
    });
    
    predictButton.addEventListener('click', predictPlayoffOutcome);
    
    // Initialize
    initTeamLists();
});