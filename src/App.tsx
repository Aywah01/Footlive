// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import MatchDetails from "./components/MatchDetails";
// import PlayerStats from "./components/PlayerStats";
// import TeamStats from "./components/TeamStats";
// import UserProfile from "./components/UserProfile";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/match/:id" element={<MatchDetails />} />
//           <Route path="/player/:id" element={<PlayerStats />} />
//           <Route path="/team/:id" element={<TeamStats />} />
//           <Route path="/profile" element={<UserProfile />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import News from "./pages/News";
// import Shop from "./pages/Shop";
// import Chat from "./pages/Chat";
// import Articles from "./pages/Articles";
// import MatchDetails from "./pages/stats/MatchDetails";
// import PlayerStats from "./pages/stats/PlayerStats";
// import TeamStats from "./pages/stats/TeamStats";
// import UserProfile from "./pages/user/UserProfile";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Header />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/chat" element={<Chat />} />
//           <Route path="/articles" element={<Articles />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/match/:id" element={<MatchDetails />} />
//           <Route path="/player/:id" element={<PlayerStats />} />
//           <Route path="/team/:id" element={<TeamStats />} />
//           <Route path="/profile" element={<UserProfile />} />
//         </Routes>
//       </div>
//       <Footer />
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/News";
import Shop from "./pages/Shop";
import Chat from "./pages/Chat";
import Articles from "./pages/Articles";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/user/UserProfile";
import PlayerStats from "./pages/stats/PlayerStats";
import MatchDetails from "./pages/stats/MatchDetails";
import TeamStats from "./pages/stats/TeamStats";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/stats/player" element={<PlayerStats />} />
            <Route path="/stats/match" element={<MatchDetails />} />
            <Route path="/stats/team" element={<TeamStats />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
