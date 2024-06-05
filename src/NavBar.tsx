// import React from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// const NavBar: React.FC = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           FootLive
//         </Link>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/match/:id">
//                 Matches
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/player/:id">
//                 Player Stats
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/team/:id">
//                 Team Stats
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/profile">
//                 Profile
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/login">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/signup">
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log("Search query:", searchQuery);
    // Implement your search logic here
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          FootLive
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/match/:id">
                Matches
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/player/:id">
                Player Stats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team/:id">
                Team Stats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
          <form
            className="d-flex me-auto"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
