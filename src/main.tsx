import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// //import { AuthProvider } from "./context/AuthContext"; // Import AuthProvider

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//      <AuthProvider>
//       <App />
//      </AuthProvider>
//     </BrowserRouter>
//   </React.StrictMode>
// );
