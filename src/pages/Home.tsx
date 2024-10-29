import React, { useState } from "react";
import styles from "./home.module.css"; // Assume you have this CSS file

const Home: React.FC = () => {
  // Sample data for league standings and fixtures
  const leagues = [
    {
      name: "Premier League",
      teams: [
        { club: "Team A", points: 76, wins: 24, draws: 4, losses: 6 },
        { club: "Team B", points: 65, wins: 19, draws: 8, losses: 7 },
        { club: "Team C", points: 55, wins: 18, draws: 1, losses: 11 },
      ],
      fixtures: [
        { match: "Team A vs Team B", date: "2023-12-02" }, // Saturday
        { match: "Team C vs Team D", date: "2023-12-03" }, // Sunday
      ],
    },
    {
      name: "La Liga",
      teams: [
        { club: "Team D", points: 71, wins: 21, draws: 8, losses: 5 },
        { club: "Team E", points: 66, wins: 20, draws: 6, losses: 8 },
        { club: "Team F", points: 58, wins: 18, draws: 4, losses: 10 },
      ],
      fixtures: [
        { match: "Team D vs Team E", date: "2023-12-02" }, // Saturday
        { match: "Team F vs Team G", date: "2023-12-03" }, // Sunday
      ],
    },
    {
      name: "Bundesliga",
      teams: [
        { club: "Team G", points: 78, wins: 25, draws: 3, losses: 6 },
        { club: "Team H", points: 70, wins: 21, draws: 7, losses: 6 },
        { club: "Team I", points: 60, wins: 18, draws: 6, losses: 8 },
      ],
      fixtures: [
        { match: "Team G vs Team H", date: "2023-12-02" }, // Saturday
        { match: "Team I vs Team J", date: "2023-12-03" }, // Sunday
      ],
    },
  ];

  const [expandedLeague, setExpandedLeague] = useState<number | null>(null);
  const [expandedFixtures, setExpandedFixtures] = useState<number | null>(null);

  const toggleLeague = (index: number) => {
    setExpandedLeague(expandedLeague === index ? null : index);
  };

  const toggleFixtures = (index: number) => {
    setExpandedFixtures(expandedFixtures === index ? null : index);
  };

  return (
    <div className={`container ${styles.homeContainer}`}>
      <h2>Welcome to FootLive</h2>
      <p>
        Your one-stop destination for live football updates and detailed
        statistics.
      </p>

      {leagues.map((league, index) => (
        <div key={index} className={styles.leagueSection}>
          <h3
            className={styles.leagueTitle}
            onClick={() => toggleLeague(index)}
          >
            {league.name}
          </h3>
          {expandedLeague === index && (
            <>
              <div className={styles.leagueTable}>
                <table className={styles.leagueTableStyle}>
                  <thead>
                    <tr>
                      <th>Club</th>
                      <th>Points</th>
                      <th>Wins</th>
                      <th>Draws</th>
                      <th>Losses</th>
                    </tr>
                  </thead>
                  <tbody>
                    {league.teams.map((team, idx) => (
                      <tr key={idx}>
                        <td>{team.club}</td>
                        <td>{team.points}</td>
                        <td>{team.wins}</td>
                        <td>{team.draws}</td>
                        <td>{team.losses}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h4
                className={styles.fixturesTitle}
                onClick={() => toggleFixtures(index)}
              >
                {expandedFixtures === index ? "Hide Fixtures" : "Show Fixtures"}
              </h4>
              {expandedFixtures === index && (
                <ul className={styles.fixturesList}>
                  {league.fixtures.map((fixture, idx) => (
                    <li key={idx} className={styles.fixtureItem}>
                      {fixture.match} on{" "}
                      {new Date(fixture.date).toLocaleDateString()}{" "}
                      {/* Format the date */}
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Home: React.FC = () => {
//   const [fixtures, setFixtures] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Function to fetch data from the API
//     const fetchHeadToHead = async () => {
//       try {
//         const response = await axios.get(
//           "https://api-football-v1.p.rapidapi.com/v3/fixtures/headtohead?h2h=33-34",
//           //so the 33-34 at the end of the api url is for the team id, where the team id 33 is for Manchester United
//           {
//             headers: {
//               "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//               "x-rapidapi-key":
//                 "f3100dc649msh171183fec421b41p1aa1e9jsnc33840fe3e6c",
//             },
//           }
//         );
//         setFixtures(response.data.response); // Assuming the data is inside 'response'
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data");
//         setLoading(false);
//       }
//     };

//     fetchHeadToHead();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mt-5">
//       <h2>Welcome to FootLive</h2>
//       <p>
//         Your one-stop destination for live football updates and detailed
//         statistics.
//       </p>

//       <h3>Head-to-Head Fixtures</h3>
//       <ul>
//         {fixtures.map((fixture) => (
//           <li key={fixture.fixture.id}>
//             {fixture.teams.home.name} vs {fixture.teams.away.name} on{" "}
//             {new Date(fixture.fixture.date).toLocaleDateString()}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;

//so the line is from 17-77 only

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Home: React.FC = () => {
//   const [fixtures, setFixtures] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Function to fetch fixtures by date from the API
//     const fetchFixtures = async () => {
//       try {
//         const response = await axios.get(
//           "https://api-football-v1.p.rapidapi.com/v3/fixtures",
//           {
//             headers: {
//               "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//               "x-rapidapi-key":
//                 "f3100dc649msh171183fec421b41p1aa1e9jsnc33840fe3e6c",
//             },
//             params: {
//               date: "2021-01-29", // Change the date dynamically if needed
//             },
//           }
//         );
//         console.log(response.data.response); // Log the API response for debugging
//         setFixtures(response.data.response); // Store the fixture data in state
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching fixtures:", err); // Log the error for debugging
//         setError("Failed to fetch fixtures");
//         setLoading(false);
//       }
//     };

//     fetchFixtures();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (fixtures.length === 0) return <p>No fixtures available for this date.</p>; // Handle empty fixtures

//   return (
//     <div className="container mt-5">
//       <h2>Football Fixtures on 2021-01-29</h2>
//       <ul>
//         {fixtures.map((fixture) => (
//           <li key={fixture.fixture.id}>
//             <div>
//               <h3>
//                 {fixture.teams.home.name} vs {fixture.teams.away.name}
//               </h3>
//               <p>
//                 Date: {new Date(fixture.fixture.date).toLocaleDateString()} |
//                 Time:{" "}
//                 {new Date(
//                   fixture.fixture.timestamp * 1000
//                 ).toLocaleTimeString()}{" "}
//                 ({fixture.fixture.timezone})
//               </p>
//               <p>
//                 Venue: {fixture.venue.name}, {fixture.venue.city}
//               </p>
//               <p>
//                 Score: {fixture.goals.home} - {fixture.goals.away}
//               </p>
//               <p>Status: {fixture.status.long}</p>
//             </div>
//             <hr />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect } from "react";

// const Home: React.FC = () => {
//   useEffect(() => {
//     // Create a script element
//     const script = document.createElement("script");
//     script.src =
//       "https://ls.soccersapi.com/widget/res/wo_w5314_66568b37933b3/widget.js";
//     script.async = true;

//     // Append the script to the document body
//     document.body.appendChild(script);

//     // Cleanup script when component unmounts
//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         id="ls-widget"
//         data-w="wo_w5314_66568b37933b3"
//         className="livescore-widget"
//       ></div>
//     </div>
//   );
// };

// export default Home;
