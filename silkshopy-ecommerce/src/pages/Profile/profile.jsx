import { ProfileInfo } from "./components/profile-info";
import { NavLink, Outlet } from "react-router-dom";
import "./profile.css";

export const ProfilePage = () => {

    const getActiveStyle = ({ isActive }) => ({
        backgroundColor: isActive ? "#4285F4" : "#fff",
        color: isActive ? "#fff" : "#000",
    });

    return (
        <main className="profile-main">
            <h2>Profile</h2>
            <div className="pr-content-box">
               <div className="pr-tabs">
                <NavLink style={getActiveStyle} className="pr-tab-name" to="/profile/">
                   Profile info
                </NavLink>

                <NavLink style={getActiveStyle} className="pr-tab-name" to="address">
                    Address
                </NavLink>

                <NavLink style={getActiveStyle} className="pr-tab-name" to="order">
                    Orders
                </NavLink>
               </div>

               <div className="pr-body">
                   <Outlet />
               </div>
            </div>
        </main>
    )
}