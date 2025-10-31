import React, { useState } from "react";
import "../../styles/Profile page/ProfileSection.css";
import { FaPlus } from "react-icons/fa";
import { GoDot } from "react-icons/go";
import post1 from "../../assets/Post.png";
import post2 from "../../assets/flag.jpg";
import logo from "../../assets/exp-logo.jpg";
import { useEffect } from "react";

const ProfilePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);       // About expand
  const [isExpExpanded, setIsExpExpanded] = useState(false); // Experience expand
  const [isFeedExpanded, setIsFeedExpanded] = useState(false); // Feed expand

  // Dummy feed posts
  const feedPosts = [
    {
      id: 1,
      title: "Swadeshi India",
      logo: post2,
      image: post1,
      likes: 1139,
      comments: 58,
      caption:
        "Liked by Amit Shah and 25,513 others. Swadeshi India: The Swadeshi Movement began in 1905, during India's freedom struggle...",
    },
    {
      id: 2,
      title: "Make in India",
      logo: post2,
      image: post1,
      likes: 854,
      comments: 33,
      caption:
        "Encouraging domestic production and innovation for India's growth...",
    },
    {
      id: 3,
      title: "Digital Bharat",
      logo: post2,
      image: post1,
      likes: 1423,
      comments: 97,
      caption:
        "Empowering citizens with technology and digital services across rural India...",
    },
    {
      id: 4,
      title: "Startup India",
      logo: post2,
      image: post1,
      likes: 2450,
      comments: 112,
      caption:
        "Boosting entrepreneurship and innovation through Startup India programs...",
    },
  ];

   const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const visiblePosts = isFeedExpanded ? feedPosts : feedPosts.slice(0, 2);


  return (
    <div className="profile-page">


      {/* ====================== Profile Header (Cover + Info) ====================== */}
      <div className="profile-header">
        <div className="profile-cover">
          <img
            src={
              user?.cover_image
                ? user.cover_image
                : "https://images.unsplash.com/photo-1503264116251-35a269479413" // default fallback cover
            }
            alt="cover"
            className="cover-img"
          />
        </div>

        <div className="profile-info">
          <div className="profile-avatar">
            <img
              src={
                user?.profile_image
                  ? user.profile_image
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png" // fallback avatar
              }
              alt="avatar"
            />
          </div>

          <h2>
            {user
              ? `${user.first_name || ""} ${user.last_name || ""}`.trim()
              : "User Name"}
          </h2>
          <p className="role">{user?.profession || "Your Profession"}</p>
          <p className="desc">{user?.tagline || "Your bio or tagline goes here."}</p>

          <div className="connections">
            <span>{user?.follower_count ?? 0} followers</span>
            <span>{user?.connection_count ?? 0} Professional connections</span>
          </div>

          <div className="profile-actions">
            <button className="btn add">Add connection</button>
            <button className="btn following">✓ Following</button>
            <button className="btn more">⋯</button>
          </div>
        </div>
      </div>

      {/* ===================== About + Experience ====================== */}
      <div className="about-exp-container">
        {/* ====================== About Section ====================== */}
        <div className={`about-box ${isExpanded ? "expanded" : ""}`}>
          <h3>About</h3>
          <p>
            Our goal is simple – making our customers' financial portfolios look
            good while providing optimal services. Check out our LinkedIn to
            learn more about us! We believe in innovation, teamwork, and
            delivering top-notch performance to every client, ensuring growth
            and reliability in every step of collaboration.
          </p>
          <div className="about-actions">
            <button
              className="show-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show less ↑" : "Show all details →"}
            </button>
          </div>
        </div>

        {/* ====================== Experience Section ====================== */}
        <div className={`experience-box ${isExpExpanded ? "expanded" : ""}`}>
          <div className="exp-header">
            <h3>Experience</h3>
            <FaPlus className="plus-icon" />
          </div>

          {[1, 2, 3, 4, 5].map((_, index) => (
            <div className="exp-item" key={index}>
              <div className="exp-item-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="exp-item-infomation">
                <p className="position">Position (Title)</p>
                <p className="company">Company Name</p>
                <p className="date">Start date – End date · Your experience</p>
              </div>
            </div>
          ))}

          <div className="exp-actions">
            <button
              className="show-btn"
              onClick={() => setIsExpExpanded(!isExpExpanded)}
            >
              {isExpExpanded ? "Show less ↑" : "Show all details →"}
            </button>
          </div>
        </div>
      </div>

      {/* ====================== Feed Section ====================== */}
      <div className={`feed-container-1 ${isFeedExpanded ? "expanded" : ""}`}>
        <h3>Feed</h3>

        <div className="feed-grid">
          {visiblePosts.map((post) => (
            <div key={post.id} className="feed-card">
              <div className="feed-header">
                <img src={post.logo} alt={post.title} className="feed-logo" />
                <div>
                  <h4>{post.title}</h4>
                </div>
              </div>

              <img src={post.image} alt={post.title} className="feed-image" />

              <div className="feed-actions-1">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
                <span>↗️ Share</span>
              </div>

              <p className="feed-caption-1">{post.caption}</p>
            </div>
          ))}
        </div>

        <div className="feed-doted-item">
          <p>
            <GoDot /> <GoDot /> <GoDot /> <GoDot /> <GoDot /> <GoDot />
          </p>
        </div>

        <div className="feed-actions-show-btn">
          <button
            className="show-btn"
            onClick={() => setIsFeedExpanded(!isFeedExpanded)}
          >
            {isFeedExpanded ? "Show less ↑" : "Show all details →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
