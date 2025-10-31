import React, { useEffect } from "react";
import "../../styles/Main_Front.css";

const Topbar = ({ onNavigate, currentPage }) => {
  const [active, setActive] = React.useState("Feed");

  useEffect(() => {
    // 🧹 When on profile page, clear the active button
    if (currentPage === "profile") {
      setActive(null);
    }
  }, [currentPage]);

  const handleClick = (label) => {
    setActive(label);

    if (onNavigate) {
      if (label === "Feed") onNavigate("main");
      else if (label === "Connections") onNavigate("connections");
      else if (label === "Chat") onNavigate("chat");
      else if (label === "Your AI") onNavigate("ai");
    }
  };

  return (
    <div className="topbar">
      {["Feed", "Connections", "Chat", "Your AI"].map((label) => (
        <button
          key={label}
          className={`topbar-btn ${active === label ? "active" : ""}`}
          onClick={() => handleClick(label)}
          aria-pressed={active === label}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Topbar;
