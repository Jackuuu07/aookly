import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Feed from "./Feed";
import "../../styles/Main_Front.css";
import "../../styles/Sidebar.css";
import Searchbar from "./Searchbar";
import "../../styles/Feed_chat.css";

const Main_Front = ({ onLogout }) => {
  return (
    <div className="main-front">
      <Sidebar />
      <div className="main-content">
        {/* ✅ Pass logout handler down */}
        <Searchbar onLogout={onLogout} />
        <Topbar />
        <Feed />
      </div>
    </div>
  );
};

export default Main_Front;
