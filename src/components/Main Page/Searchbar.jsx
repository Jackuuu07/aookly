import React from "react";
import "../../styles/Main_Front.css";
import { MdAccountCircle } from "react-icons/md";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import "../../styles/Searcbar.css";

const Searchbar = ({ onLogout }) => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Explore" className="search-input" />

      <div className="search-buttons">
        <button className="search-button">
          <MdAccountCircle />
        </button>
        <button className="search-button">
          <IoNotificationsCircle />
        </button>

        {/* ✅ Logout button calls parent's logout handler */}
        <button className="search-button" onClick={onLogout}>
          <IoIosLogOut />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
