// import React from "react";
// import styles from "./teamStats.module.css"; // Assume you have this CSS file

// const TeamStats: React.FC = () => {
//   // Example data for multiple teams
//   const teams = [
//     {
//       name: "Team A",
//       logo: "https://via.placeholder.com/100", // Replace with actual logo
//       goals: 55,
//       assists: 30,
//       cleanSheets: 10,
//       leaguePosition: 1,
//       players: [
//         { name: "Player 1", goals: 20 },
//         { name: "Player 2", goals: 15 },
//         { name: "Player 3", goals: 10 },
//       ],
//     },
//     {
//       name: "Team B",
//       logo: "https://via.placeholder.com/100", // Replace with actual logo
//       goals: 50,
//       assists: 35,
//       cleanSheets: 9,
//       leaguePosition: 2,
//       players: [
//         { name: "Player A", goals: 18 },
//         { name: "Player B", goals: 17 },
//         { name: "Player C", goals: 15 },
//       ],
//     },
//     {
//       name: "Team C",
//       logo: "https://via.placeholder.com/100", // Replace with actual logo
//       goals: 45,
//       assists: 25,
//       cleanSheets: 12,
//       leaguePosition: 3,
//       players: [
//         { name: "Player X", goals: 22 },
//         { name: "Player Y", goals: 12 },
//         { name: "Player Z", goals: 10 },
//       ],
//     },
//     {
//       name: "Team D",
//       logo: "https://via.placeholder.com/100", // Replace with actual logo
//       goals: 40,
//       assists: 20,
//       cleanSheets: 8,
//       leaguePosition: 4,
//       players: [
//         { name: "Player 4", goals: 16 },
//         { name: "Player 5", goals: 14 },
//         { name: "Player 6", goals: 8 },
//       ],
//     },
//   ];

//   return (
//     <div className={`container ${styles.teamStatsContainer}`}>
//       <h2>Team Statistics</h2>
//       <div className={styles.teamGrid}>
//         {teams.map((team, index) => (
//           <div key={index} className={styles.teamCard}>
//             <img
//               src={team.logo}
//               alt={`${team.name} logo`}
//               className={styles.teamLogo}
//             />
//             <h3>{team.name}</h3>
//             <p>Goals: {team.goals}</p>
//             <p>Assists: {team.assists}</p>
//             <p>Clean Sheets: {team.cleanSheets}</p>
//             <p>League Position: {team.leaguePosition}</p>
//             <h4>Top Players</h4>
//             <ul>
//               {team.players.map((player, idx) => (
//                 <li key={idx}>
//                   {player.name} (Goals: {player.goals})
//                 </li>
//               ))}
//             </ul>
//             <button className={styles.moreInfoButton}>More Information</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TeamStats;

import React from "react";
import styles from "./teamStats.module.css";

const TeamStats: React.FC = () => {
  const teams = [
    {
      name: "Manchester City",
      logo: "https://resources.premierleague.com/premierleague/badges/t43.svg",
      goals: 50,
      assists: 35,
      cleanSheets: 8,
      leaguePosition: 2,
      players: [
        { name: "Erling Haaland", goals: 12 },
        { name: "Phil Foden", goals: 6 },
        { name: "Kevin De Bruyne", goals: 5 },
      ],
    },
    {
      name: "Liverpool",
      logo: "https://resources.premierleague.com/premierleague/badges/t14.svg",
      goals: 48,
      assists: 30,
      cleanSheets: 10,
      leaguePosition: 1,
      players: [
        { name: "Mohamed Salah", goals: 8 },
        { name: "Darwin Núñez", goals: 7 },
        { name: "Luis Díaz", goals: 6 },
      ],
    },
    {
      name: "Arsenal",
      logo: "https://resources.premierleague.com/premierleague/badges/t3.svg",
      goals: 45,
      assists: 28,
      cleanSheets: 9,
      leaguePosition: 4,
      players: [
        { name: "Bukayo Saka", goals: 7 },
        { name: "Gabriel Jesus", goals: 6 },
        { name: "Martin Ødegaard", goals: 5 },
      ],
    },
    {
      name: "Tottenham",
      logo: "https://resources.premierleague.com/premierleague/badges/t6.svg",
      goals: 40,
      assists: 25,
      cleanSheets: 6,
      leaguePosition: 10,
      players: [
        { name: "Heung-min Son", goals: 8 },
        { name: "James Maddison", goals: 5 },
        { name: "Dejan Kulusevski", goals: 4 },
      ],
    },
    {
      name: "Chelsea",
      logo: "https://resources.premierleague.com/premierleague/badges/t8.svg",
      goals: 38,
      assists: 22,
      cleanSheets: 7,
      leaguePosition: 4,
      players: [
        { name: "Raheem Sterling", goals: 7 },
        { name: "Cole Palmer", goals: 6 },
        { name: "Nicolas Jackson", goals: 5 },
      ],
    },
    {
      name: "Manchester United",
      logo: "https://resources.premierleague.com/premierleague/badges/t1.svg",
      goals: 36,
      assists: 20,
      cleanSheets: 6,
      leaguePosition: 13,
      players: [
        { name: "Marcus Rashford", goals: 8 },
        { name: "Bruno Fernandes", goals: 6 },
        { name: "Casemiro", goals: 4 },
      ],
    },
    {
      name: "Aston Villa",
      logo: "https://resources.premierleague.com/premierleague/badges/t7.svg",
      goals: 40,
      assists: 24,
      cleanSheets: 9,
      leaguePosition: 9,
      players: [
        { name: "Ollie Watkins", goals: 8 },
        { name: "Douglas Luiz", goals: 6 },
        { name: "Leon Bailey", goals: 5 },
      ],
    },
    {
      name: "Newcastle United",
      logo: "https://resources.premierleague.com/premierleague/badges/t4.svg",
      goals: 42,
      assists: 30,
      cleanSheets: 10,
      leaguePosition: 8,
      players: [
        { name: "Alexander Isak", goals: 9 },
        { name: "Miguel Almirón", goals: 7 },
        { name: "Callum Wilson", goals: 6 },
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
