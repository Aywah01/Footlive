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

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TeamStatistics: React.FC = () => {
//   const [statistics, setStatistics] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Function to fetch team statistics from the API
//     const fetchTeamStatistics = async () => {
//       try {
//         const response = await axios.get(
//           "https://api-football-v1.p.rapidapi.com/v3/teams/statistics",
//           {
//             headers: {
//               "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//               "x-rapidapi-key":
//                 "f3100dc649msh171183fec421b41p1aa1e9jsnc33840fe3e6c",
//             },
//             params: {
//               league: "39", // Premier League
//               season: "2020",
//               team: "33", // Manchester United
//             },
//           }
//         );
//         setStatistics(response.data.response); // Store the statistics data in state
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch team statistics");
//         setLoading(false);
//       }
//     };

//     fetchTeamStatistics();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (!statistics) return <p>No statistics available.</p>;

//   return (
//     <div className="container mt-5">
//       <h2>{statistics.team.name} - Team Statistics</h2>
//       <img
//         src={statistics.team.logo}
//         alt={`${statistics.team.name} logo`}
//         width="100"
//       />
//       <h3>League: {statistics.league.name}</h3>
//       <h4>Season: {statistics.league.season}</h4>

//       <h5>Fixtures Played: {statistics.fixtures.played.total}</h5>
//       <h5>Wins: {statistics.fixtures.wins.total}</h5>
//       <h5>Draws: {statistics.fixtures.draws.total}</h5>
//       <h5>Losses: {statistics.fixtures.loses.total}</h5>

//       <h5>Goals For: {statistics.goals.for.total}</h5>
//       <h5>Goals Against: {statistics.goals.against.total}</h5>

//       <h5>Clean Sheets: {statistics.clean_sheet.total}</h5>
//       <h5>Failed to Score: {statistics.failed_to_score.total}</h5>

//       <h5>Penalty Statistics</h5>
//       <p>Penalties Scored: {statistics.penalty.scored.total}</p>
//       <p>Penalties Missed: {statistics.penalty.missed.total}</p>

//       <h5>Cards</h5>
//       <p>Red Cards: {statistics.cards.red["16-30"].total} (16-30 mins)</p>
//       <p>Yellow Cards: {statistics.cards.yellow["0-15"].total} (0-15 mins)</p>
//     </div>
//   );
// };

// export default TeamStatistics;
