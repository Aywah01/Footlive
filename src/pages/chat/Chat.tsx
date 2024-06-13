import React from "react";
import styles from "./chat.module.css";

const Chat: React.FC = () => {
  return (
    <div className={styles.chatContainer}>
      <h1 className={styles.chatTitle}>Chat</h1>
      <p className={styles.chatParagraph}>
        Welcome to the Chat page. Here you can discuss and chat about football
        matches.
      </p>
    </div>
  );
};

export default Chat;
