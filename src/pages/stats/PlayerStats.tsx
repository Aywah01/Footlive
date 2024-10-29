import React from "react";
import styles from "./playerStats.module.css";

const PlayerStats: React.FC = () => {
  // Example player data
  const mostGoals = [
    {
      name: "Player A",
      team: "Team Alpha",
      goals: 20,
      assists: 5,
      cleanSheets: 2,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Player B",
      team: "Team Beta",
      goals: 18,
      assists: 3,
      cleanSheets: 1,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Player C",
      team: "Team Gamma",
      goals: 17,
      assists: 7,
      cleanSheets: 4,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Player D",
      team: "Team Delta",
      goals: 15,
      assists: 3,
      cleanSheets: 2,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
  ];

  const mostAssists = [
    {
      name: "Player E",
      team: "Team Alpha",
      goals: 10,
      assists: 10,
      cleanSheets: 3,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Player F",
      team: "Team Beta",
      goals: 8,
      assists: 9,
      cleanSheets: 5,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Player G",
      team: "Team Gamma",
      goals: 6,
      assists: 8,
      cleanSheets: 4,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Player H",
      team: "Team Delta",
      goals: 4,
      assists: 7,
      cleanSheets: 2,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
  ];

  const mostCleanSheets = [
    {
      name: "Player I",
      team: "Team Alpha",
      goals: 0,
      assists: 0,
      cleanSheets: 15,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Player J",
      team: "Team Beta",
      goals: 0,
      assists: 0,
      cleanSheets: 13,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Player K",
      team: "Team Gamma",
      goals: 0,
      assists: 0,
      cleanSheets: 10,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Player L",
      team: "Team Delta",
      goals: 0,
      assists: 0,
      cleanSheets: 8,
      image: "https://via.placeholder.com/100", // Placeholder image
    },
  ];

  return (
    <div className={`container ${styles.playerStatsContainer}`}>
      <h2>Player Statistics</h2>

      {/* Most Goals Section */}
      <div className={styles.section}>
        <h3>Most Goals</h3>
        <div className={styles.playerGrid}>
          {mostGoals.map((player, index) => (
            <div key={index} className={styles.playerCard}>
              <img
                src={player.image}
                alt={player.name}
                className={styles.playerImage}
              />
              <h4>
                {player.name} ({player.team})
              </h4>
              <p>Goals: {player.goals}</p>
              <p>Assists: {player.assists}</p>
              <p>Clean Sheets: {player.cleanSheets}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Most Assists Section */}
      <div className={styles.section}>
        <h3>Most Assists</h3>
        <div className={styles.playerGrid}>
          {mostAssists.map((player, index) => (
            <div key={index} className={styles.playerCard}>
              <img
                src={player.image}
                alt={player.name}
                className={styles.playerImage}
              />
              <h4>
                {player.name} ({player.team})
              </h4>
              <p>Goals: {player.goals}</p>
              <p>Assists: {player.assists}</p>
              <p>Clean Sheets: {player.cleanSheets}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Most Clean Sheets Section */}
      <div className={styles.section}>
        <h3>Most Clean Sheets</h3>
        <div className={styles.playerGrid}>
          {mostCleanSheets.map((player, index) => (
            <div key={index} className={styles.playerCard}>
              <img
                src={player.image}
                alt={player.name}
                className={styles.playerImage}
              />
              <h4>
                {player.name} ({player.team})
              </h4>
              <p>Goals: {player.goals}</p>
              <p>Assists: {player.assists}</p>
              <p>Clean Sheets: {player.cleanSheets}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
