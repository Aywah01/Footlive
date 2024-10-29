import React, { useEffect, useState } from "react";
import styles from "./chat.module.css";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "User",
      text: "What will be the game for Premier League this weekend?",
    },
    {
      id: 2,
      user: "Service",
      text: "The Premier League matches this weekend are Arsenal vs. Chelsea and Liverpool vs. Manchester City.",
    },
    {
      id: 3,
      user: "User",
      text: 'Who is gonna win this match between "Arsenal" vs "Chelsea"?',
    },
    {
      id: 4,
      user: "Service",
      text: "It’s hard to predict, but Arsenal has been in great form recently. It should be a competitive match!",
    },
    {
      id: 5,
      user: "User",
      text: "Who should I put for my Fantasy Premier League team for next matches?",
    },
    {
      id: 6,
      user: "Service",
      text: "Consider adding players like Mohamed Salah and Harry Kane, as they have favorable matches coming up.",
    },
  ]);

  useEffect(() => {
    const loadMomentCRM = () => {
      const script = document.createElement("script");
      script.src = "https://www.momentcrm.com/embed";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.MomentCRM("init", {
          teamVanityId: "footlive",
          doChat: true,
          doTimeTravel: true,
        });
      };

      script.onerror = () => {
        console.error("Failed to load MomentCRM script.");
      };
    };

    loadMomentCRM();

    return () => {
      const script = document.querySelector(
        "script[src='https://www.momentcrm.com/embed']"
      );
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className={styles.chatContainer}>
      <h1 className={styles.chatTitle}>Chat</h1>
      <p className={styles.chatParagraph}>
        Welcome to the Chat page. Here you can discuss and chat about football
        matches.
      </p>
      <div className={styles.chatMessages}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={
              message.user === "User"
                ? styles.userMessage
                : styles.serviceMessage
            }
          >
            <div className={styles.messageText}>{message.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
