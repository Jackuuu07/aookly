import React from "react";
import "../../styles/Profile page/ProfileSection.css";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaLink,
  FaBuilding,
  FaInfoCircle,
  FaQuestionCircle,
  FaShieldAlt,
  FaFileContract,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="profile-page">
      {/* ===== Profile Header (Cover + Info) ===== */}
      <div className="profile-header">
        <div className="profile-cover">
          <img
            src="https://images.unsplash.com/photo-1503264116251-35a269479413"
            alt="cover"
            className="cover-img"
          />
        </div>

        <div className="profile-info">
          <div className="profile-avatar">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
              alt="avatar"
            />
          </div>
          <h2>Name</h2>
          <p className="role">Software developer</p>
          <p className="desc">
            sdfsdfllllllllllllllllllllllllllllllllllllllsdcsdfsdfsdfsdf
          </p>

          <div className="connections">
            <span>10k followers</span>
            <span>22 Professional connections</span>
          </div>

          <div className="profile-actions">
            <button className="btn add">Add connection</button>
            <button className="btn following">✓ Following</button>
            <button className="btn more">⋯</button>
          </div>
        </div>
      </div>

      {/* ===== Details Section ===== */}
      <div className="profile-section">
        <h3>About</h3>
        <div className="card-grid">
          <div className="card"><FaBriefcase /> Profession</div>
          <div className="card"><FaMapMarkerAlt /> Location</div>
          <div className="card"><FaLink /> Link</div>
          <div className="card"><FaBuilding /> Add your company / business profile</div>
        </div>
      </div>

      {/* ===== Preferences Section ===== */}
      <div className="profile-section">
        <h3>Experience</h3>
        <div className="card-grid">
          <div className="card"><FaInfoCircle /> About us</div>
          <div className="card"><FaQuestionCircle /> Help & support</div>
          <div className="card"><FaShieldAlt /> Privacy & Policies</div>
          <div className="card"><FaFileContract /> Terms & Condition</div>
          <div className="card"><FaShareAlt /> Share app</div>
          <div className="card"><FaStar /> Rate us</div>
        </div>
      </div>

      {/* ===== Bottom Buttons ===== */}
      <div className="bottom-buttons">
        <button className="delete-btn">Delete Account</button>
        <button className="logout-btn">Log out</button>
      </div>
    </div>
  );
};

export default ProfilePage;
