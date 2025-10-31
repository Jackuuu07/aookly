import Sidebar from "../Main Page/Sidebar";
import Searchbar from "../Main Page/Searchbar";
import ProfileSection from "./ProfileSection";
import "../../styles/Profile page/Profile.css";
import "../../styles/Sidebar.css";
import "../../styles/Searcbar.css";
import Topbar from "../Main Page/Topbar";

const Profile = ({ onLogout, onNavigate, onBack }) => {
  return (
    <div className="profile">
      <Sidebar />
      <div className="profile-content">
        <Searchbar onLogout={onLogout} />
        {/* ✅ Pass onNavigate to Topbar so it works same as Main_Front */}
        <Topbar onNavigate={onNavigate} currentPage="profile"/>
        <ProfileSection />
      </div>
    </div>
  );
};

export default Profile;
