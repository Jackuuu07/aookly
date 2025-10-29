import React from "react";
import "../../styles/Main_Front.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <button className="active">Feed</button>
      <button>Connections</button>
      <button>Chat</button>
      <button>Your AI</button>
    </div>
  );
};

export default Topbar;
