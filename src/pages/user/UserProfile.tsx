import React from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./userProfile.module.css";
import { User } from "../../types/user.types"; // Example import path, adjust as necessary

const UserProfile: React.FC = () => {
  const { user } = useAuth();

  const defaultUser: User = {
    name: "Hong Gil Dong",
    email: "honggildong@gmail.com",
    about:
      "I am a passionate football fan and player. I love following the Premier League and playing fantasy football.",
    contacts: {
      phone: "+82 10-1234-5678",
      address: "Seoul, South Korea",
    },
    profilePicture: "https://via.placeholder.com/150",
  };

  const currentUser = user || defaultUser;

  return (
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>User Profile</h2>
      <div className={styles.profilePicture}>
        <img
          src={currentUser.profilePicture}
          alt="Profile"
          className={styles.image}
        />
      </div>
      <div className={styles.userInfo}>
        <strong>Email:</strong> {currentUser.email}
      </div>
      <div className={styles.userInfo}>
        <strong>About Me:</strong>
        <div>{currentUser.about}</div>
      </div>
      <div className={styles.userInfo}>
        <strong>Contact:</strong>
        <div>Phone: {currentUser.contacts?.phone || "N/A"}</div>
        <div>Address: {currentUser.contacts?.address || "N/A"}</div>
      </div>
    </div>
  );
};

export default UserProfile;
