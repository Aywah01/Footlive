import React, { useState } from "react";
import Alert from "../components/Alert";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please fill in all fields");
    } else {
      setError("");
      alert("Logged in successfully!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <Alert message={error} />
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// //import { useAuth } from "../context/AuthContext"; // Import the useAuth hook

// const Login: React.FC = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   //const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Perform login logic here (e.g., authenticate with server)
//     // If successful, call the login method and navigate to the home page
//     //login();
//     navigate("/");
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleLogin();
//         }}
//       >
//         <div>
//           <label>
//             Username:
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password:
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </label>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
