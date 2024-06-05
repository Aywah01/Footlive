import React from "react";

const UserProfile: React.FC = () => {
  // Example data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    // Add any other user-related data here
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <div>
        <strong>Name:</strong> {user.name}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      {/* Add additional user information here */}
    </div>
  );
};

export default UserProfile;
