// Main_front.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Feed from "./Feed";
import "../../styles/Main_Front.css";
import "../../styles/Sidebar.css";
import Searchbar from "./Searchbar";
import "../../styles/Feed_chat.css";

const Main_Front = ({ onLogout, user, onOpenProfile, onNavigate }) => {
  return (
    <div className="main-front">
      <Sidebar />
      <div className="main-content">
        <Searchbar onLogout={onLogout} onOpenProfile={onOpenProfile} />
        <Topbar onNavigate={onNavigate} currentPage="main"/> {/* ✅ Pass onNavigate */}
        <Feed user={user} />
      </div>
    </div>
  );
};

export default Main_Front;
