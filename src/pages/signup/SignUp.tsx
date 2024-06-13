import React, { useState } from "react";
import Alert from "../../components/Alert";
import styles from "./signup.module.css";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "" || confirmPassword === "") {
      setError("Please fill in all fields");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      alert("Signed up successfully!");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Sign Up</h2>
      <Alert message={error} />
      <form onSubmit={handleSignUp}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className={styles.formControl}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className={styles.formControl}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password:</label>
          <input
            type="password"
            className={styles.formControl}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
