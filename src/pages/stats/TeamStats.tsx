import React from "react";
import styles from "./teamStats.module.css"; // Assume you have this CSS file

const TeamStats: React.FC = () => {
  // Example data for multiple teams
  const teams = [
    {
      name: "Team A",
      logo: "https://via.placeholder.com/100", // Replace with actual logo
      goals: 55,
      assists: 30,
      cleanSheets: 10,
      leaguePosition: 1,
      players: [
        { name: "Player 1", goals: 20 },
        { name: "Player 2", goals: 15 },
        { name: "Player 3", goals: 10 },
      ],
    },
    {
      name: "Team B",
      logo: "https://via.placeholder.com/100", // Replace with actual logo
      goals: 50,
      assists: 35,
      cleanSheets: 9,
      leaguePosition: 2,
      players: [
        { name: "Player A", goals: 18 },
        { name: "Player B", goals: 17 },
        { name: "Player C", goals: 15 },
      ],
    },
    {
      name: "Team C",
      logo: "https://via.placeholder.com/100", // Replace with actual logo
      goals: 45,
      assists: 25,
      cleanSheets: 12,
      leaguePosition: 3,
      players: [
        { name: "Player X", goals: 22 },
        { name: "Player Y", goals: 12 },
        { name: "Player Z", goals: 10 },
      ],
    },
    {
      name: "Team D",
      logo: "https://via.placeholder.com/100", // Replace with actual logo
      goals: 40,
      assists: 20,
      cleanSheets: 8,
      leaguePosition: 4,
      players: [
        { name: "Player 4", goals: 16 },
        { name: "Player 5", goals: 14 },
        { name: "Player 6", goals: 8 },
      ],
    },
  ];

  return (
    <div className={`container ${styles.teamStatsContainer}`}>
      <h2>Team Statistics</h2>
      <div className={styles.teamGrid}>
        {teams.map((team, index) => (
          <div key={index} className={styles.teamCard}>
            <img
              src={team.logo}
              alt={`${team.name} logo`}
              className={styles.teamLogo}
            />
            <h3>{team.name}</h3>
            <p>Goals: {team.goals}</p>
            <p>Assists: {team.assists}</p>
            <p>Clean Sheets: {team.cleanSheets}</p>
            <p>League Position: {team.leaguePosition}</p>
            <h4>Top Players</h4>
            <ul>
              {team.players.map((player, idx) => (
                <li key={idx}>
                  {player.name} (Goals: {player.goals})
                </li>
              ))}
            </ul>
            <button className={styles.moreInfoButton}>More Information</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamStats;
