// import React from "react";
// import { useAuth } from "../../context/AuthContext";

// const UserProfile: React.FC = () => {
//   const { user } = useAuth();

//   const defaultUser = {
//     name: "Hong Gil Dong",
//     email: "honggildong@gmail.com",
//   };

//   const currentUser = user || defaultUser;

//   return (
//     <div className="container mt-5">
//       <h2>User Profile</h2>
//       <div>
//         <strong>Name:</strong> {currentUser.name}
//       </div>
//       <div>
//         <strong>Email:</strong> {currentUser.email}
//       </div>
//       {/* Add additional user information here */}
//     </div>
//   );
// };

// export default UserProfile;

import React from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "./userProfile.module.css";

const UserProfile: React.FC = () => {
  const { user } = useAuth();

  const defaultUser = {
    name: "Hong Gil Dong",
    email: "honggildong@gmail.com",
  };

  const currentUser = user || defaultUser;

  return (
    <div className={`container mt-5 ${styles.container}`}>
      <h2 className={styles.title}>User Profile</h2>
      <div className={styles.userInfo}>
        <strong>Name:</strong> {currentUser.name}
      </div>
      <div className={styles.userInfo}>
        <strong>Email:</strong> {currentUser.email}
      </div>
      {/* Add additional user information here */}
    </div>
  );
};

export default UserProfile;
