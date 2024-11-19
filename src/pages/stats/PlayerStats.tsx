import React from "react";
import styles from "./playerStats.module.css";

const PlayerStats = () => {
  const placeholderImage =
    "https://via.placeholder.com/250?text=No+Image+Available";

  const topScorers = [
    {
      name: "Erling Haaland",
      team: "Manchester City",
      goals: 12,
      assists: 0,
      cleanSheets: 0,
      image:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p223094.png",
    },
    {
      name: "Bryan Mbeumo",
      team: "Brentford",
      goals: 8,
      assists: 1,
      cleanSheets: 0,
      image: "/src/assets/mbeumo.png",
    },
    {
      name: "Chris Wood",
      team: "Nottingham Forest",
      goals: 8,
      assists: 0,
      cleanSheets: 0,
      image: "/src/assets/chriswood.jpg",
    },
    {
      name: "Mohamed Salah",
      team: "Liverpool",
      goals: 8,
      assists: 6,
      cleanSheets: 0,
      image:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png",
    },
  ];

  const topAssists = [
    {
      name: "Bukayo Saka",
      team: "Arsenal",
      goals: 2,
      assists: 7,
      cleanSheets: 0,
      image: "/src/assets/saka.jpg",
    },
    {
      name: "Cole Palmer",
      team: "Chelsea",
      goals: 6,
      assists: 5,
      cleanSheets: 0,
      image: "/src/assets/palmer.png",
    },
    {
      name: "Wilfred Ndidi",
      team: "Leicester City",
      goals: 0,
      assists: 4,
      cleanSheets: 0,
      image: "/src/assets/ndidi.png",
    },
    {
      name: "Nicolas Jackson",
      team: "Chelsea",
      goals: 0,
      assists: 4,
      image: "/src/assets/jackson.png",
    },
  ];

  const mostCleanSheets = [
    {
      name: "André Onana",
      team: "Manchester United",
      goals: 0,
      assists: 0,
      cleanSheets: 5,
      image: "/src/assets/onana.png",
    },
    {
      name: "Matz Sels",
      team: "Nottingham Forest",
      goals: 0,
      assists: 0,
      cleanSheets: 4,
      image: "/src/assets/matz.png", // Example of missing image fallback
    },
    {
      name: "Alisson Becker",
      team: "Liverpool",
      goals: 0,
      assists: 0,
      cleanSheets: 3,
      image:
        "https://resources.premierleague.com/premierleague/photos/players/250x250/p116535.png",
    },
  ];

  return (
    <div className={`container ${styles.playerStatsContainer}`}>
      <h2>Player Statistics</h2>

      <div className={styles.section}>
        <h3>Top Goal Scorers</h3>
        <div className={styles.playerGrid}>
          {topScorers.map((player, index) => (
            <div key={index} className={styles.playerCard}>
              <img
                src={player.image}
                onError={(e) => (e.currentTarget.src = placeholderImage)}
                alt={`${player.name} - ${player.team}`}
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

      <div className={styles.section}>
        <h3>Top Assist Providers</h3>
        <div className={styles.playerGrid}>
          {topAssists.map((player, index) => (
            <div key={index} className={styles.playerCard}>
              <img
                src={player.image}
                onError={(e) => (e.currentTarget.src = placeholderImage)}
                alt={`${player.name} - ${player.team}`}
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

      <div className={styles.section}>
        <h3>Most Clean Sheets</h3>
        <div className={styles.playerGrid}>
          {mostCleanSheets.map((player, index) => (
            <div key={index} className={styles.playerCard}>
              <img
                src={player.image}
                onError={(e) => (e.currentTarget.src = placeholderImage)}
                alt={`${player.name} - ${player.team}`}
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

// import React from "react";
// import styles from "./playerStats.module.css";

// const PlayerStats: React.FC = () => {
//   // Example player data
//   const mostGoals = [
//     {
//       name: "Player A",
//       team: "Team Alpha",
//       goals: 20,
//       assists: 5,
//       cleanSheets: 2,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//     {
//       name: "Player B",
//       team: "Team Beta",
//       goals: 18,
//       assists: 3,
//       cleanSheets: 1,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//     {
//       name: "Player C",
//       team: "Team Gamma",
//       goals: 17,
//       assists: 7,
//       cleanSheets: 4,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//     {
//       name: "Player D",
//       team: "Team Delta",
//       goals: 15,
//       assists: 3,
//       cleanSheets: 2,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//   ];

//   const mostAssists = [
//     {
//       name: "Player E",
//       team: "Team Alpha",
//       goals: 10,
//       assists: 10,
//       cleanSheets: 3,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//     {
//       name: "Player F",
//       team: "Team Beta",
//       goals: 8,
//       assists: 9,
//       cleanSheets: 5,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//     {
//       name: "Player G",
//       team: "Team Gamma",
//       goals: 6,
//       assists: 8,
//       cleanSheets: 4,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//     {
//       name: "Player H",
//       team: "Team Delta",
//       goals: 4,
//       assists: 7,
//       cleanSheets: 2,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//   ];

//   const mostCleanSheets = [
//     {
//       name: "Player I",
//       team: "Team Alpha",
//       goals: 0,
//       assists: 0,
//       cleanSheets: 15,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//     {
//       name: "Player J",
//       team: "Team Beta",
//       goals: 0,
//       assists: 0,
//       cleanSheets: 13,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//     {
//       name: "Player K",
//       team: "Team Gamma",
//       goals: 0,
//       assists: 0,
//       cleanSheets: 10,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//     {
//       name: "Player L",
//       team: "Team Delta",
//       goals: 0,
//       assists: 0,
//       cleanSheets: 8,
//       image: "https://via.placeholder.com/100", // Placeholder image
//     },
//   ];

//   return (
//     <div className={`container ${styles.playerStatsContainer}`}>
//       <h2>Player Statistics</h2>

//       {/* Most Goals Section */}
//       <div className={styles.section}>
//         <h3>Most Goals</h3>
//         <div className={styles.playerGrid}>
//           {mostGoals.map((player, index) => (
//             <div key={index} className={styles.playerCard}>
//               <img
//                 src={player.image}
//                 alt={player.name}
//                 className={styles.playerImage}
//               />
//               <h4>
//                 {player.name} ({player.team})
//               </h4>
//               <p>Goals: {player.goals}</p>
//               <p>Assists: {player.assists}</p>
//               <p>Clean Sheets: {player.cleanSheets}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Most Assists Section */}
//       <div className={styles.section}>
//         <h3>Most Assists</h3>
//         <div className={styles.playerGrid}>
//           {mostAssists.map((player, index) => (
//             <div key={index} className={styles.playerCard}>
//               <img
//                 src={player.image}
//                 alt={player.name}
//                 className={styles.playerImage}
//               />
//               <h4>
//                 {player.name} ({player.team})
//               </h4>
//               <p>Goals: {player.goals}</p>
//               <p>Assists: {player.assists}</p>
//               <p>Clean Sheets: {player.cleanSheets}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Most Clean Sheets Section */}
//       <div className={styles.section}>
//         <h3>Most Clean Sheets</h3>
//         <div className={styles.playerGrid}>
//           {mostCleanSheets.map((player, index) => (
//             <div key={index} className={styles.playerCard}>
//               <img
//                 src={player.image}
//                 alt={player.name}
//                 className={styles.playerImage}
//               />
//               <h4>
//                 {player.name} ({player.team})
//               </h4>
//               <p>Goals: {player.goals}</p>
//               <p>Assists: {player.assists}</p>
//               <p>Clean Sheets: {player.cleanSheets}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayerStats;
