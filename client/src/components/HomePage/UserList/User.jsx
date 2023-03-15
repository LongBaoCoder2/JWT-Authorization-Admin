import React from "react";
import "./User.css";

const User = ({ username, email }) => {
  return (
    <div className="user">
      <div className="username">{username ? username : ""}</div>
      <div className="email">{email}</div>
      <div className="btn-group">
        <button id="btn-check"> Check </button>
        <button id="btn-delete"> Delete </button>
      </div>
    </div>
  );
};

export default User;
