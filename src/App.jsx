import { useState, useEffect } from "react";
import "./App.css";
import rocket from "./assets/rocket.svg";
import Login from "./components/Login and Signup/Login";
import Main_front from "./components/Main Page/Main_front";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

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

  return (
    <div className="app-container">
      {!isLoggedIn && <img src={rocket} alt="App Logo" className="app-logo" />}

      {isLoggedIn ? (
        <Main_front onLogout={handleLogout} user={user} />  //{/* ✅ Pass user */}
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
