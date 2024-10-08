// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const TeamDetails: React.FC = () => {
//   const [teamDetails, setTeamDetails] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Function to fetch team details from the API
//     const fetchTeamDetails = async () => {
//       try {
//         const response = await axios.get(
//           "https://api-football-v1.p.rapidapi.com/v3/teams",
//           {
//             headers: {
//               "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//               "x-rapidapi-key":
//                 "f3100dc649msh171183fec421b41p1aa1e9jsnc33840fe3e6c",
//             },
//             params: {
//               id: "33", // Manchester United ID
//             },
//           }
//         );
//         setTeamDetails(response.data.response[0]); // Store the team details in state
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch team details");
//         setLoading(false);
//       }
//     };

//     fetchTeamDetails();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;
//   if (!teamDetails) return <p>No team details available.</p>;

//   return (
//     <div className="container mt-5">
//       <h2>{teamDetails.team.name}</h2>
//       <img
//         src={teamDetails.team.logo}
//         alt={`${teamDetails.team.name} logo`}
//         width="100"
//       />
//       <h3>Team Information</h3>
//       <p>Country: {teamDetails.team.country}</p>
//       <p>Founded: {teamDetails.team.founded}</p>
//       <p>Code: {teamDetails.team.code}</p>
//       <h3>Home Venue</h3>
//       <p>Venue Name: {teamDetails.venue.name}</p>
//       <p>
//         Address: {teamDetails.venue.address}, {teamDetails.venue.city}
//       </p>
//       <p>Capacity: {teamDetails.venue.capacity}</p>
//       <p>Surface: {teamDetails.venue.surface}</p>
//       <img
//         src={teamDetails.venue.image}
//         alt={`${teamDetails.venue.name}`}
//         width="200"
//       />
//     </div>
//   );
// };

// export default TeamDetails;

//so this is the team details of manchester united, i already gave the file at discord

import React, { useEffect, useState } from "react";
import SaveTeamDetails from "../stats/SaveTeamDetails";
import axios from "axios";

const TeamDetails: React.FC = () => {
  const [teamDetails, setTeamDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTeamDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5173/stats/team-details/33"
        ); // Replace 33 with team ID
        setTeamDetails(response.data[0]); // Assuming the result is an array with one item
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch team details");
        setLoading(false);
      }
    };

    fetchTeamDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{teamDetails.name}</h1>
      <p>Founded: {teamDetails.founded_year}</p>
      <p>Country: {teamDetails.country}</p>
      <img
        src={teamDetails.logo_url}
        alt={`${teamDetails.name} logo`}
        width="100"
      />
      <p>Venue: {teamDetails.venue_name}</p>
      {/* You can display more details as needed */}

      <h1>Team Details</h1>
      <SaveTeamDetails />
    </div>
  );
};

export default TeamDetails;
