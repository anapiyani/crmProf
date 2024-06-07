import React from "react";
import "./profile.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../containers/store/store";
import { useNavigate } from "react-router-dom";

const ProfileComponent = () => {
  const navigation = useNavigate();
  const user = useSelector((state: RootState) => state.user.data);

  const onLogOut = () => {
    localStorage.removeItem("accessToken");
    navigation("/login");
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile Information</h2>
      <div className="profile-details">
        <p>
          <strong>Username:</strong> {user?.first_name || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>Name:</strong> {user?.first_name} {user?.last_name}
        </p>
        <p>
          <strong>Phone Number:</strong> {user?.phone_number}
        </p>
        <p>
          <strong>Date Joined:</strong> {user?.date_joined}
        </p>
        <p>
          <strong>Last Login:</strong> {user?.last_login || "Never"}
        </p>
        <p>
          <strong>Role:</strong> {user?.role}
        </p>
        <p>
          <strong>Staff:</strong> {user?.is_staff ? "Yes" : "No"}
        </p>
        <p>
          <strong>Superuser:</strong> {user?.is_superuser ? "Yes" : "No"}
        </p>
        <div className="button-container">
          <button className="logout-button" onClick={onLogOut}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
