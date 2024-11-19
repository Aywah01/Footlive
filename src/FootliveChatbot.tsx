import React, { useState } from "react";

const FootliveChatbot: React.FC = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        let tipsHtml = data.tips.join("<br>") || "No tips found.";
        let videoHtml =
          data.video !== "No video found."
            ? `<br><a href="${data.video}" target="_blank">Watch Suggested Video</a>`
            : "";
        setResponse(tipsHtml + videoHtml);
      })
      .catch((error) => {
        console.error("Error:", error);
        setResponse("An error occurred while fetching data.");
      });
  };

  return (
    <div id="chat-container">
      <h1>Footlive AI Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask about football..."
          required
        />
        <input type="submit" value="Send" />
      </form>
      <div id="response" dangerouslySetInnerHTML={{ __html: response }}></div>
    </div>
  );
};

export default FootliveChatbot;
