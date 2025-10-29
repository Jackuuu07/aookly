import React, { useEffect, useState } from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { FaPenToSquare } from "react-icons/fa6";
import "../../styles/Feed_chat.css"; // 👈 make sure path is correct

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch feed data from API
  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch("https://aookly.onrender.com/posts/feed?page=1");
        const result = await response.json();
        console.log("✅ API Response:", result);

        // ✅ Correct structure
        if (result.status && Array.isArray(result.data)) {
          setPosts(result.data);
        } else {
          console.warn("⚠️ No valid data array found in API response");
          setPosts([]);
        }
      } catch (error) {
        console.error("❌ Error fetching feed:", error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  const users = [
    { name: "Anushka Sharma", online: true },
    { name: "Smriti Mandhana", online: true },
    { name: "MS Dhoni", online: false },
    { name: "Hardik Pandya", online: true },
    { name: "Ellyse Perry", online: false },
    { name: "Shubman Gill", online: true },
    { name: "KL Rahul", online: true },
  ];

  return (
    <div className="feed-section">
      {/* ================= LEFT: Dynamic Feed ================= */}
      <div className="feed">
        {loading ? (
          <p>Loading posts...</p>
        ) : posts.length > 0 ? (
          posts.map((post) => (
            <div className="post" key={post.post_id}>
              {/* ---- Post Header ---- */}
              <div className="post-header">
                <img
                  src={
                    post.profile_image ||
                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  }
                  alt={post.username}
                  className="profile-pic"
                />
                <div className="user-info">
                  <h4>{post.username}</h4>
                  {post.tagline && <p className="tagline">{post.tagline}</p>}
                </div>
              </div>

              {/* ---- Post Media ---- */}
              {post.media_url && (
                post.media_url.endsWith(".mp4") ||
                post.media_url.endsWith(".mov") ? (
                  <video controls className="post-media">
                    <source src={post.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={post.media_url}
                    alt="Post media"
                    className="post-media"
                  />
                )
              )}

              {/* ---- Post Description ---- */}
              {post.description && (
                <p className="post-description">{post.description}</p>
              )}

              {/* ---- Post Actions ---- */}
              <div className="post-actions">
                <span>❤️ {post.like_count}</span>
                <span>💬 {post.comment_count}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>

      {/* ================= RIGHT: Chat List ================= */}
      <div className="chat-list">
        <div className="chat-header">
          <h3>Chat</h3>
          <div className="chat-actions">
            <FiSearch className="chat-icon" />
            <FiSettings className="chat-icon" />
          </div>
        </div>

        {users.map((user, index) => (
          <div className="chat-user" key={index}>
            <div className="avatar-container">
              <div className="avatar">{user.name.charAt(0)}</div>
              {user.online && <span className="online-dot"></span>}
            </div>
            <span>{user.name}</span>
          </div>
        ))}

        <button className="new-message-btn">
          <FaPenToSquare />
        </button>
      </div>
    </div>
  );
};

export default Feed;
