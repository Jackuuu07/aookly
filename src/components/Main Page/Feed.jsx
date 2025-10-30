import React, { useEffect, useState } from "react";
import { FiSearch, FiSettings } from "react-icons/fi";
import { FaPenToSquare } from "react-icons/fa6";
import "../../styles/Feed_chat.css";

const Feed = ({ user }) => {
  const [feedData, setFeedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loggedInUser = user || JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  // ✅ Fetch personalized feed
  useEffect(() => {
    const fetchFeed = async () => {
      if (!loggedInUser || !token) {
        console.warn("⚠️ User not logged in or token missing");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://aookly.onrender.com/posts/feed?page=1&user_id=${loggedInUser.user_id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        console.log("✅ API Response:", data);

        if (res.status === 401 || data.message === "Access denied") {
          console.error("❌ Unauthorized: Invalid or expired token");
          alert("Session expired. Please log in again.");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.reload();
          return;
        }

        if (data?.status && Array.isArray(data.data)) {
          setFeedData(data.data);
        } else {
          console.warn("⚠️ No valid data array found in API response");
          setFeedData([]);
        }
      } catch (err) {
        console.error("❌ Fetch error:", err);
        setFeedData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, [loggedInUser, token]);

  // 💖 Handle like toggle (instant UI update)
  const handleLike = (postId) => {
    setFeedData((prevData) =>
      prevData.map((post) =>
        post.post_id === postId
          ? {
              ...post,
              is_liked: !post.is_liked,
              like_count: post.is_liked
                ? Number(post.like_count) - 1
                : Number(post.like_count) + 1,
            }
          : post
      )
    );
  };

  // 💬 Handle comment click
  const handleComment = (postId) => {
    alert(`🗨️ Comment feature coming soon for Post ID: ${postId}`);
  };

  // 🧑 Example users for chat sidebar
  const users = [
    { name: "Anushka Sharma", online: true },
    { name: "Smriti Mandhana", online: true },
    { name: "MS Dhoni", online: false },
    { name: "Hardik Pandya", online: true },
  ];

  if (loading) return <p>Loading feed...</p>;

  return (
    <div className="feed-section">
      {/* ================= LEFT SIDE: Feed + Create Post ================= */}
      <div className="feed-container">
        {/* ===== CREATE POST CARD ===== */}
        <div className="create-post-card">
          <div className="create-post-header">
            <img
              src={
                loggedInUser?.profile_image ||
                "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Profile"
              className="create-profile-img"
            />
            <textarea
              className="create-caption"
              placeholder="What's on your mind?"
              rows="2"
            />
          </div>

          <div className="create-media-section">
            <label htmlFor="fileInput" className="upload-label">
              📸 Add Photo/Video
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*,video/*"
              className="hidden-input"
            />
            <button className="post-btn">Post</button>
          </div>

          
        </div>

        {/* ===== FEED ===== */}
        <div className="feed">
          {feedData.length > 0 ? (
            feedData.map((post) => (
              <div key={post.post_id} className="feed-card">
                {/* ==== Header (Profile + Username + Premium Tag) ==== */}
                <div className="feed-header">
                  <img
                    src={
                      post.profile_image ||
                      loggedInUser?.profile_image ||
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt={post.username}
                    className="feed-profile-img"
                  />
                  <div className="feed-user-info">
                    <div className="feed-username">
                      <span>{post.username}</span>
                      {post.is_premium && (
                        <span className="premium-tag">Premium</span>
                      )}
                    </div>
                    {post.tagline && (
                      <p className="feed-tagline">{post.tagline}</p>
                    )}
                  </div>
                </div>

                {/* ==== Media Section ==== */}
                <div className="feed-media">
                  {post.media_url &&
                  (post.media_url.endsWith(".mp4") ||
                    post.media_url.endsWith(".mov")) ? (
                    <video controls className="feed-video">
                      <source src={post.media_url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    post.media_url && (
                      <img
                        src={post.media_url}
                        alt="Post media"
                        className="feed-image"
                      />
                    )
                  )}
                </div>

                {/* ==== Description ==== */}
                {post.description && (
                  <p className="feed-description">{post.description}</p>
                )}

                {/* ==== Interaction Bar ==== */}
                <div className="feed-actions">
                  <button
                    className={`like-btn ${post.is_liked ? "liked" : ""}`}
                    onClick={() => handleLike(post.post_id)}
                  >
                    {post.is_liked ? "❤️" : "🤍"} {post.like_count}
                  </button>

                  <button
                    className="comment-btn"
                    onClick={() => handleComment(post.post_id)}
                  >
                    💬 {post.comment_count}
                  </button>
                </div>

                {/* ==== Last Liked User ==== */}
                {post.last_liked_user && (
                  <div className="feed-last-liked">
                    <img
                      src={
                        post.last_liked_user.profile_image ||
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      }
                      alt={post.last_liked_user.username}
                      className="last-liked-img"
                    />
                    <p>
                      Liked by <b>{post.last_liked_user.username}</b> and{" "}
                      <b>{Math.max(0, post.like_count - 1)}</b> others
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No posts found for {loggedInUser?.username || "this user"}.</p>
          )}
        </div>
      </div>

      {/* ================= RIGHT: Chat Sidebar ================= */}
      <div className="chat-list">
        <div className="chat-header">
          <h3>Chat</h3>
          <div className="chat-actions">
            <FiSearch className="chat-icon" />
            <FiSettings className="chat-icon" />
          </div>
        </div>

          {users.map((chatUser, index) => (
            <div className="chat-user" key={index}>
              <div className="avatar-container">
                <div className="custom-avatar">{chatUser.name.charAt(0)}</div>
                {chatUser.online && <span className="online-dot"></span>}
              </div>
              <span>{chatUser.name}</span>
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
