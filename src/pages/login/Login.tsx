import React, { useState } from "react";
import Alert from "../../components/Alert";
import { useAuth } from "../../context/AuthContext";
import styles from "./login.module.css"; // Ensure correct casing

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "") {
      setError("Please fill in all fields");
    } else {
      setError("");
      login({
        name,
        email,
        gender: "", // You might need to adjust where to set gender.
        interestCountry: "",
        interestLeague: "",
        interestPlayer: "",
      });
      alert("Logged in successfully!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Login</h2>
        <Alert message={error} />
        <form onSubmit={handleLogin}>
          <div className={styles.mb3}>
            <label>Email:</label>
            <input
              type="email"
              className={styles.formControl}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.mb3}>
            <label>Name:</label>
            <input
              type="text"
              className={styles.formControl}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.mb3}>
            <label>Password:</label>
            <input
              type="password"
              className={styles.formControl}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
