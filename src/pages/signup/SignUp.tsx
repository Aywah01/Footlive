// import React, { useState } from "react";
// import Alert from "../../components/Alert";
// import { useAuth } from "../../context/AuthContext";
// import styles from "./signup.module.css"; // Ensure correct casing

// const SignUp: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");
//   const { login } = useAuth();

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (
//       email === "" ||
//       name === "" ||
//       password === "" ||
//       confirmPassword === ""
//     ) {
//       setError("Please fill in all fields");
//     } else if (password !== confirmPassword) {
//       setError("Passwords do not match");
//     } else {
//       setError("");
//       login({ name, email });
//       alert("Signed up successfully!");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formContainer}>
//         <h2>Sign Up</h2>
//         <Alert message={error} />
//         <form onSubmit={handleSignUp}>
//           <div className="mb-3">
//             <label>Email:</label>
//             <input
//               type="email"
//               className={styles.formControl}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Name:</label>
//             <input
//               type="text"
//               className={styles.formControl}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password:</label>
//             <input
//               type="password"
//               className={styles.formControl}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               className={styles.formControl}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//           <button type="submit" className={styles.btn}>
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// import React, { useState } from "react";
// import Alert from "../../components/Alert";
// import { useAuth } from "../../context/AuthContext";
// import styles from "./signup.module.css"; // Ensure correct casing

// const SignUp: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [gender, setGender] = useState(""); // State for gender
//   const [error, setError] = useState("");
//   const { login } = useAuth();

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (
//       email === "" ||
//       name === "" ||
//       password === "" ||
//       confirmPassword === "" ||
//       gender === "" // Validate gender selection
//     ) {
//       setError("Please fill in all fields including gender");
//     } else if (password !== confirmPassword) {
//       setError("Passwords do not match");
//     } else {
//       setError("");
//       login({ name, email, gender }); // Include gender in login data
//       alert("Signed up successfully!");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formContainer}>
//         <h2>Sign Up</h2>
//         <Alert message={error} />
//         <form onSubmit={handleSignUp}>
//           <div className="mb-3">
//             <label>Email:</label>
//             <input
//               type="email"
//               className={styles.formControl}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Name:</label>
//             <input
//               type="text"
//               className={styles.formControl}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password:</label>
//             <input
//               type="password"
//               className={styles.formControl}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               className={styles.formControl}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Gender:</label>
//             <select
//               id="gender"
//               name="gender"
//               className={styles.formControl}
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//             >
//               <option value="">Choose...</option>
//               <option value="male">남성</option>
//               <option value="female">여성</option>
//             </select>
//           </div>
//           <button type="submit" className={styles.btn}>
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// import React, { useState } from "react";
// import styles from "./signup.module.css";
// import Alert from "../../components/Alert";
// import { useAuth } from "../../context/AuthContext";

// const SignUp: React.FC = () => {
//   const { login } = useAuth();

//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [gender, setGender] = useState("");
//   const [error, setError] = useState("");

//   const handleSignUp = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (
//       email === "" ||
//       name === "" ||
//       password === "" ||
//       confirmPassword === "" ||
//       gender === ""
//     ) {
//       setError("Please fill in all fields including gender");
//     } else if (password !== confirmPassword) {
//       setError("Passwords do not match");
//     } else {
//       setError("");
//       login({ name, email, gender });
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.formContainer}>
//         <h2>Sign Up</h2>
//         <Alert message={error} />
//         <form onSubmit={handleSignUp}>
//           <div className="mb-3">
//             <label>Email:</label>
//             <input
//               type="email"
//               className={styles.formControl}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Name:</label>
//             <input
//               type="text"
//               className={styles.formControl}
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Password:</label>
//             <input
//               type="password"
//               className={styles.formControl}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Confirm Password:</label>
//             <input
//               type="password"
//               className={styles.formControl}
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label>Gender:</label>
//             <select
//               id="gender"
//               name="gender"
//               className={styles.formControl}
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//             >
//               <option value="">Choose...</option>
//               <option value="male">남성</option>
//               <option value="female">여성</option>
//             </select>
//           </div>

//           <button type="submit" className={styles.btn}>
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import styles from "./signup.module.css";
import Alert from "../../components/Alert";
import { useAuth } from "../../context/AuthContext";

const SignUp: React.FC = () => {
  const { login } = useAuth();

  // State variables for form inputs and error handling
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [interestCountry, setInterestCountry] = useState("");
  const [interestLeague, setInterestLeague] = useState("");
  const [interestPlayer, setInterestPlayer] = useState("");
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      email === "" ||
      name === "" ||
      password === "" ||
      confirmPassword === "" ||
      gender === "" ||
      interestCountry === "" ||
      interestLeague === "" ||
      interestPlayer === ""
    ) {
      setError("Please fill in all fields including interest details");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      login({
        name,
        email,
        gender,
        interestCountry,
        interestLeague,
        interestPlayer,
      });
    }
  };

  // JSX rendering of the component
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Sign Up</h2>
        <Alert message={error} /> {/* Displays error message if there is any */}
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
          <div className="mb-3">
            <label>Gender:</label>
            <select
              id="gender"
              name="gender"
              className={styles.formControl}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
          </div>
          <div className="mb-3">
            <label>관심 국가:</label>
            <select
              id="interestCountry"
              name="interestCountry"
              className={styles.formControl}
              value={interestCountry}
              onChange={(e) => setInterestCountry(e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="ko">한국</option>
              <option value="eg">영국</option>
              <option value="sp">스페인</option>
              <option value="jp">일본</option>
              <option>관심 없음</option>
            </select>
          </div>
          <div className="mb-3">
            <label>관심 리그:</label>
            <select
              id="interestLeague"
              name="interestLeague"
              className={styles.formControl}
              value={interestLeague}
              onChange={(e) => setInterestLeague(e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="EPL">EPL</option>
              <option value="lalea">라 리가</option>
              <option value="seA">세리에 A</option>
              <option value="klea">K 리그</option>
              <option>관심 없음</option>
            </select>
          </div>
          <div className="mb-3">
            <label>관심 선수:</label>
            <select
              id="interestPlayer"
              name="interestPlayer"
              className={styles.formControl}
              value={interestPlayer}
              onChange={(e) => setInterestPlayer(e.target.value)}
            >
              <option value="">Choose...</option>
              <option value="son">손흥민</option>
              <option value="lee">이강인</option>
              <option value="me">메시</option>
              <option value="ho">호날두</option>
              <option>관심 없음</option>
            </select>
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
