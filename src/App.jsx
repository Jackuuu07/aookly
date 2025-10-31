import { useState, useEffect } from "react";
import "./App.css";
import rocket from "./assets/rocket1.png";
import Login from "./components/Login and Signup/Login";
import Main_front from "./components/Main Page/Main_front";
import Profile from "./components/Profile Page/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("main"); // ✅ "main" or "profile"

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

  // ✅ Switch between Main and Profile pages
  const handleOpenProfile = () => setActivePage("profile");
  const handleBackToMain = () => setActivePage("main");

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
              onOpenProfile={handleOpenProfile} // ✅ Open profile when icon clicked
            />
          )}

          {activePage === "profile" && (
            <Profile
              onLogout={handleLogout}
              user={user}
              onBack={handleBackToMain} // ✅ Back to main feed
            />
          )}
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
