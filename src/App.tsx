import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import News from "./pages/news/News";
import Shop from "./pages/shop/Shop";
import Chat from "./pages/chat/Chat";
import Articles from "./pages/articles/Articles";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Profile from "./pages/user/UserProfile";
import PlayerStats from "./pages/stats/PlayerStats";
import MatchDetails from "./pages/stats/MatchDetails";
import TeamStats from "./pages/stats/TeamStats";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default App;
