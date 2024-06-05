import React from "react";

const MatchDetails: React.FC = () => {
  // Example data
  const match = {
    homeTeam: "Team A",
    awayTeam: "Team B",
    score: "2 - 1",
    events: [
      { minute: 12, description: "Goal by Team A" },
      { minute: 34, description: "Yellow card for Team B" },
      { minute: 78, description: "Goal by Team B" },
    ],
  };

  return (
    <div className="container mt-5">
      <h2>Match Details</h2>
      <h3>
        {match.homeTeam} vs {match.awayTeam}
      </h3>
      <p>Score: {match.score}</p>
      <ul>
        {match.events.map((event, index) => (
          <li key={index}>
            {event.minute}': {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchDetails;
