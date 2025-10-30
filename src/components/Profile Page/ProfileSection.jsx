import React from "react";
import "../../styles/Profile page/ProfileSection.css";

const ProfileSection = () => {
  return (
    <div className="profile-section">
      {/* ===== Cover Section ===== */}
      <div className="profile-cover">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413"
          alt="cover"
          className="cover-img"
        />
        <div className="edit-cover">
          <i className="fa fa-camera"></i>
        </div>
      </div>

      {/* ===== Profile Header ===== */}
      <div className="profile-header">
        <div className="profile-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
            alt="profile"
            className="avatar"
          />
          <div className="edit-avatar">
            <i className="fa fa-camera"></i>
          </div>
        </div>

        <div className="profile-info">
          <h2 className="name">Name</h2>
          <p className="role">Software developer</p>
          <p className="bio">
            sdsfsdfffffffffffffffffffffffffffffffffffffffffffffffffffffszdcsdfsdfsd
          </p>

          <div className="connections">
            <span>10k followers</span> • <span>22 Professional connections</span>
          </div>

          <div className="profile-buttons">
            <button className="add-btn">Add connection</button>
            <button className="following-btn">✓ Following</button>
            <button className="more-btn">⋯</button>
          </div>
        </div>
      </div>

      {/* ===== Preferences Section ===== */}
      <div className="preferences">
        <h3>Preferences</h3>
        <div className="pref-grid">
          <div className="pref-item">
            <i className="fa fa-info-circle"></i>
            <span>About us</span>
          </div>
          <div className="pref-item">
            <i className="fa fa-question-circle"></i>
            <span>Help & support</span>
          </div>
          <div className="pref-item">
            <i className="fa fa-lock"></i>
            <span>Privacy & Policies</span>
          </div>
          <div className="pref-item">
            <i className="fa fa-file-text"></i>
            <span>Terms & Condition</span>
          </div>
          <div className="pref-item">
            <i className="fa fa-share-alt"></i>
            <span>Share app</span>
          </div>
          <div className="pref-item">
            <i className="fa fa-star"></i>
            <span>Rate us</span>
          </div>
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

export default ProfileSection;
