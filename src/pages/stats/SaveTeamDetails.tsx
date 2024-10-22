// import React, { useState } from "react";
// import axios from "axios";
// import mysql from "mysql2";

// const connection = mysql.createConnection({
//   host: "localhost:3306", // Your database host
//   user: "root", // Your database user
//   password: "Polifoli135.", // Your database password
//   database: "footlive", // Your database name
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to MySQL!");
// });

// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(bodyParser.json());

// app.post('/save-data', (req, res) => {
//   const { teamName, foundedYear, stadium } = req.body;

//   const sql = "INSERT INTO teams (teamName, foundedYear, stadium) VALUES (?, ?, ?)";
//   connection.query(sql, [teamName, foundedYear, stadium], (err, result) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send("Failed to save data.");
//     }
//     return res.status(200).send("Data saved successfully.");
//   });
// });

// app.listen(3306, () => {
//   console.log("Server running on port 3000");
// });

// const saveDataToDatabase = async (data) => {
//   try {
//     await axios.post("http://localhost:3306/save-data", data);
//   } catch (error) {
//     console.error("Error saving data: ", error);
//   }
// };

// // Example of fetching and saving data
// const fetchAndSaveData = async () => {
//   const data = await fetchData();
//   // Assuming data is in the correct format to be sent
//   await saveDataToDatabase(data);
// };

// app.get('/get-teams', (req, res) => {
//   connection.query('SELECT * FROM teams', (error, results) => {
//     if (error) {
//       return res.status(500).send(error);
//     }
//     return res.json(results);
//   });
// });

// const getTeams = async () => {
//   try {
//     const response = await axios.get("http://localhost:3306/get-teams");
//     const teams = response.data;
//     console.log(teams); // Or update state to render on your main page
//   } catch (error) {
//     console.error("Error getting teams: ", error);
//   }
// };

// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://api-football-v1.p.rapidapi.com/v3/teams"
//     );
//     const data = response.data; // Assuming the data returned is already in JSON format
//     // Process and save data to MySQL in the next step
//   } catch (error) {
//     console.error("Error fetching data: ", error);
//   }
// };

// const SaveTeamDetails = () => {
//   const [teamName, setTeamName] = useState("");
//   const [foundedYear, setFoundedYear] = useState("");
//   const [stadium, setStadium] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     const teamData = { teamName, foundedYear, stadium };

//     try {
//       const response = await axios.post(
//         "http://localhost:5173/stats/team-details",
//         teamData
//       );
//       setMessage("Team details saved successfully!");
//     } catch (error) {
//       setMessage("Failed to save team details");
//     }
//   };

//   return (
//     <div>
//       <h2>Save Team Details</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Team Name:</label>
//           <input
//             type="text"
//             value={teamName}
//             onChange={(e) => setTeamName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Founded Year:</label>
//           <input
//             type="number"
//             value={foundedYear}
//             onChange={(e) => setFoundedYear(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Stadium:</label>
//           <input
//             type="text"
//             value={stadium}
//             onChange={(e) => setStadium(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Save Team</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default SaveTeamDetails;

import React, { useState } from "react";
import axios from "axios";

const SaveTeamDetails = () => {
  const [teamName, setTeamName] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [stadium, setStadium] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const teamData = { teamName, foundedYear, stadium };

    try {
      const response = await axios.post(
        "http://localhost:3000/save-data",
        teamData
      );
      setMessage("Team details saved successfully!");
    } catch (error) {
      setMessage("Failed to save team details");
    }
  };

  return (
    <div>
      <h2>Save Team Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Team Name:</label>
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Founded Year:</label>
          <input
            type="number"
            value={foundedYear}
            onChange={(e) => setFoundedYear(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Stadium:</label>
          <input
            type="text"
            value={stadium}
            onChange={(e) => setStadium(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save Team</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SaveTeamDetails;
