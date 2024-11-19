// import React from "react";
// import styles from "./teamDetails.module.css"; // Assume you have this CSS file

// const TeamDetails: React.FC = () => {
//   // Example team details data
//   const teamDetails = {
//     name: "Manchester United",
//     founded_year: 1878,
//     country: "England",
//     logo_url: "https://via.placeholder.com/100", // Replace with actual logo URL
//     venue_name: "Old Trafford",
//     venue_address: "Sir Matt Busby Way, Old Trafford",
//     numberOfPlayers: 25,
//     coach: "Erik ten Hag",
//   };

//   return (
//     <div className={`container mt-5 ${styles.teamDetailsContainer}`}>
//       <h1 className={styles.teamName}>{teamDetails.name}</h1>
//       <img
//         src={teamDetails.logo_url}
//         alt={`${teamDetails.name} logo`}
//         className={styles.teamLogo}
//       />
//       <div className={styles.detailsContainer}>
//         <p>
//           <strong>Founded:</strong> {teamDetails.founded_year}
//         </p>
//         <p>
//           <strong>Country:</strong> {teamDetails.country}
//         </p>
//         <p>
//           <strong>Venue:</strong> {teamDetails.venue_name}
//         </p>
//         <p>
//           <strong>Address:</strong> {teamDetails.venue_address}
//         </p>
//         <p>
//           <strong>Number of Players:</strong> {teamDetails.numberOfPlayers}
//         </p>
//         <p>
//           <strong>Coach:</strong> {teamDetails.coach}
//         </p>
//       </div>
//       <button className={styles.moreInfoButton}>More Information</button>
//     </div>
//   );
// };

// export default TeamDetails;

import React from "react";
import styles from "./teamDetails.module.css";

const TeamDetails: React.FC = () => {
  // Example team details data
  const teamDetails = {
    name: "Manchester United",
    founded_year: 1878,
    country: "England",
    logo_url: "https://resources.premierleague.com/premierleague/badges/t1.svg", // Updated with actual logo URL
    venue_name: "Old Trafford",
    venue_address: "Sir Matt Busby Way, Old Trafford, Manchester, England",
    numberOfPlayers: 25,
    coach: "Erik ten Hag",
  };

  return (
    <div className={`${styles.teamDetailsContainer} container mt-5`}>
      <h1 className={styles.teamName}>{teamDetails.name}</h1>
      <img
        src={teamDetails.logo_url}
        alt={`${teamDetails.name} logo`}
        className={styles.teamLogo}
      />
      <div className={styles.detailsContainer}>
        <p>
          <strong>Founded:</strong> {teamDetails.founded_year}
        </p>
        <p>
          <strong>Country:</strong> {teamDetails.country}
        </p>
        <p>
          <strong>Venue:</strong> {teamDetails.venue_name}
        </p>
        <p>
          <strong>Address:</strong> {teamDetails.venue_address}
        </p>
        <p>
          <strong>Number of Players:</strong> {teamDetails.numberOfPlayers}
        </p>
        <p>
          <strong>Coach:</strong> {teamDetails.coach}
        </p>
      </div>
      <button className={styles.moreInfoButton}>More Information</button>
    </div>
  );
};

export default TeamDetails;
