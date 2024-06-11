// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

// const Header: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState<string>("");

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearch = () => {
//     console.log("Search query:", searchQuery);
//     // Implement your search logic here
//   };

//   return (
//     <header>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             FootLive
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/news">
//                   News
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/shop">
//                   Shop
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/chat">
//                   Chat
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/articles">
//                   Article
//                 </Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="statsDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Stats
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="statsDropdown">
//                   <li>
//                     <Link className="dropdown-item" to="/stats/player">
//                       Player Stats
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/stats/match">
//                       Match Details
//                     </Link>
//                   </li>
//                   <li>
//                     <Link className="dropdown-item" to="/stats/team">
//                       Team Stats
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="userDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   User
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="userDropdown">
//                   <li>
//                     <Link className="dropdown-item" to="/profile">
//                       Profile
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//             <form
//               className="d-flex me-auto"
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSearch();
//               }}
//             >
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search"
//                 aria-label="Search"
//                 value={searchQuery}
//                 onChange={handleInputChange}
//               />
//               <button className="btn btn-outline-success" type="submit">
//                 Search
//               </button>
//             </form>
//             <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/login">
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/signup">
//                   Sign Up
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();

    // Define a mapping of search terms to routes
    const routeMap: { [key: string]: string } = {
      home: "/",
      news: "/news",
      shop: "/shop",
      chat: "/chat",
      article: "/articles",
      "player stats": "/stats/player",
      "match details": "/stats/match",
      "team stats": "/stats/team",
      profile: "/profile",
      login: "/login",
      signup: "/signup",
    };

    // Check if the query matches any key in the routeMap
    if (routeMap[query]) {
      navigate(routeMap[query]);
    } else {
      // If no match, navigate to a search results page
      navigate(`/articles?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header>
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
                <Link className="nav-link" to="/news">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/chat">
                  Chat
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Article
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="statsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Stats
                </a>
                <ul className="dropdown-menu" aria-labelledby="statsDropdown">
                  <li>
                    <Link className="dropdown-item" to="/stats/player">
                      Player Stats
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/stats/match">
                      Match Details
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/stats/team">
                      Team Stats
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby="userDropdown">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                </ul>
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
    </header>
  );
};

export default Header;
