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
        "http://localhost:5173/stats/team-details",
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
