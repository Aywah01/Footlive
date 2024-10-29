import React from "react";
import styles from "./matchDetails.module.css"; // Assume you have this CSS file

const MatchDetails: React.FC = () => {
  // Example data for three leagues with teams and match details
  const leagues = [
    {
      name: "Premier League",
      teams: [
        {
          name: "Team A",
          tablePosition: 1,
          nextMatch: "vs Team B",
          mvp: "Player A",
        },
        {
          name: "Team B",
          tablePosition: 2,
          nextMatch: "vs Team C",
          mvp: "Player B",
        },
        {
          name: "Team C",
          tablePosition: 3,
          nextMatch: "vs Team A",
          mvp: "Player C",
        },
        {
          name: "Team D",
          tablePosition: 4,
          nextMatch: "vs Team E",
          mvp: "Player D",
        },
      ],
    },
    {
      name: "La Liga",
      teams: [
        {
          name: "Team E",
          tablePosition: 1,
          nextMatch: "vs Team F",
          mvp: "Player E",
        },
        {
          name: "Team F",
          tablePosition: 2,
          nextMatch: "vs Team G",
          mvp: "Player F",
        },
        {
          name: "Team G",
          tablePosition: 3,
          nextMatch: "vs Team H",
          mvp: "Player G",
        },
        {
          name: "Team H",
          tablePosition: 4,
          nextMatch: "vs Team E",
          mvp: "Player H",
        },
      ],
    },
    {
      name: "Bundesliga",
      teams: [
        {
          name: "Team I",
          tablePosition: 1,
          nextMatch: "vs Team J",
          mvp: "Player I",
        },
        {
          name: "Team J",
          tablePosition: 2,
          nextMatch: "vs Team K",
          mvp: "Player J",
        },
        {
          name: "Team K",
          tablePosition: 3,
          nextMatch: "vs Team L",
          mvp: "Player K",
        },
        {
          name: "Team L",
          tablePosition: 4,
          nextMatch: "vs Team I",
          mvp: "Player L",
        },
      ],
    },
  ];

  return (
    <div className={`container mt-5 ${styles.matchDetailsContainer}`}>
      <h2>Match Details</h2>
      {leagues.map((league) => (
        <div key={league.name} className={styles.leagueSection}>
          <h3 className={styles.leagueTitle}>{league.name}</h3>
          <div className={styles.teamList}>
            {league.teams.map((team, index) => (
              <div key={index} className={styles.teamCard}>
                <h4>{team.name}</h4>
                <p>Table Position: {team.tablePosition}</p>
                <p>Next Match: {team.nextMatch}</p>
                <p>MVP: {team.mvp}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchDetails;
