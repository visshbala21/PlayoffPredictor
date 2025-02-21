import React, { useState, createContext } from 'react';

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  const [selectedTeams, setSelectedTeams] = useState({
    team1: '',
    team2: ''
  });

  return (
    <TeamContext.Provider value={{ selectedTeams, setSelectedTeams }}>
      {children}
    </TeamContext.Provider>
  );
};
