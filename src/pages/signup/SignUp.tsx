import React, { useState } from "react";
import Alert from "../../components/Alert";
import { useAuth } from "../../context/AuthContext";
import styles from "./signup.module.css"; // Ensure correct casing

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      email === "" ||
      name === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("Please fill in all fields");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      login({ name, email });
      alert("Signed up successfully!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
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
            <label>Name:</label>
            <input
              type="text"
              className={styles.formControl}
              value={name}
              onChange={(e) => setName(e.target.value)}
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
    </div>
  );
};

export default SignUp;
