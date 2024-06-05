import React from "react";

const TeamStats: React.FC = () => {
  // Example data
  const team = {
    name: "Team A",
    wins: 12,
    draws: 5,
    losses: 3,
  };

  return (
    <div className="container mt-5">
      <h2>Team Statistics</h2>
      <h3>{team.name}</h3>
      <p>Wins: {team.wins}</p>
      <p>Draws: {team.draws}</p>
      <p>Losses: {team.losses}</p>
    </div>
  );
};

export default TeamStats;
