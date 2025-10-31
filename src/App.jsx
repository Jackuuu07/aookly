import { useState, useEffect } from "react";
import "./App.css";
import rocket from "./assets/rocket1.png";
import Login from "./components/Login and Signup/Login";
import Main_front from "./components/Main Page/Main_front";
import Profile from "./components/Profile Page/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("main"); // main, profile, connections, chat, ai

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLoginSuccess = () => {
    const userData = localStorage.getItem("user");
    setUser(userData ? JSON.parse(userData) : null);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  const handleOpenProfile = () => setActivePage("profile");
  const handleBackToMain = () => setActivePage("main");
  const handleNavigate = (page) => setActivePage(page); // ✅ receives from Topbar

  return (
    <div className="app-container">
      {!isLoggedIn && (
        <div className="logo-container">
          <img src={rocket} alt="App Logo" className="app-logo" />
        </div>
      )}

      {isLoggedIn ? (
        <>
          {activePage === "main" && (
            <Main_front
              onLogout={handleLogout}
              user={user}
              onOpenProfile={handleOpenProfile}
              onNavigate={handleNavigate} // ✅ pass navigation handler
            />
          )}

          {activePage === "profile" && (
            <Profile
              onLogout={handleLogout}
              user={user}
              onBack={handleBackToMain} 
              onNavigate={handleNavigate} // ✅ add this line

            />
          )}

          {activePage === "connections" && <h1>Connections Page Coming Soon</h1>}
          {activePage === "chat" && <h1>Chat Page Coming Soon</h1>}
          {activePage === "ai" && <h1>Your AI Assistant Page Coming Soon</h1>}
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
