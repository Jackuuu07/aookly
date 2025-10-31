import Sidebar from "../Main Page/Sidebar";
import Searchbar from "../Main Page/Searchbar";
import ProfileSection from "./ProfileSection";
import "../../styles/Profile page/Profile.css";
import "../../styles/Sidebar.css";
import "../../styles/Searcbar.css";
import Topbar from "../Main Page/Topbar";

const Profile = () => {
    return (
        <div className="profile">
            <Sidebar />
            <div className="profile-content">
                <Searchbar />
                <Topbar />
                <ProfileSection />
            </div>
        </div>
    );
};

export default Profile;