import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Feed from "./Feed";
import "../../styles/Main_Front.css";
import "../../styles/Sidebar.css";
import Searchbar from "./Searchbar";
import "../../styles/Feed_chat.css";

const Main_Front = ({ onLogout, user }) => {
  return (
    <div className="main-front">
      <Sidebar />
      <div className="main-content">
        <Searchbar onLogout={onLogout} />
        <Topbar />
        <Feed user={user} /> {/* ✅ Pass user to feed */}
      </div>
    </div>
  );
};
  
export default Main_Front;
