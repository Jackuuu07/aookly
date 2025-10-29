import { useState, useEffect } from "react";
import "./App.css";
import rocket from "./assets/rocket.svg";
import Login from "./components/Login and Signup/Login";
import Main_front from "./components/Main Page/Main_front";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLoginSuccess = () => {
    console.log("🎉 Login success callback triggered!");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      {!isLoggedIn && <img src={rocket} alt="App Logo" className="app-logo" />}

      {isLoggedIn ? (
        <Main_front onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
