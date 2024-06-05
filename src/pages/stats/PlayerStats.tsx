import React from "react";

const PlayerStats: React.FC = () => {
  // Example data
  const player = {
    name: "Player 1",
    team: "Team A",
    goals: 15,
    assists: 7,
    appearances: 20,
  };

  return (
    <div className="container mt-5">
      <h2>Player Statistics</h2>
      <h3>
        {player.name} ({player.team})
      </h3>
      <p>Goals: {player.goals}</p>
      <p>Assists: {player.assists}</p>
      <p>Appearances: {player.appearances}</p>
    </div>
  );
};

export default PlayerStats;
