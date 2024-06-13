// import React from "react";
// import styles from "./chat.module.css";

// const Chat: React.FC = () => {
//   return (
//     <div className={styles.chatContainer}>
//       <h1 className={styles.chatTitle}>Chat</h1>
//       <p className={styles.chatParagraph}>
//         Welcome to the Chat page. Here you can discuss and chat about football
//         matches.
//       </p>
//     </div>
//   );
// };

// export default Chat;

import React, { useEffect } from "react";
import styles from "./chat.module.css";

const Chat: React.FC = () => {
  useEffect(() => {
    const loadMomentCRM = () => {
      const script = document.createElement("script");
      script.src = "https://www.momentcrm.com/embed";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Now TypeScript recognizes MomentCRM as a global variable
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
      // Cleanup function if necessary
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
    </div>
  );
};

export default Chat;
