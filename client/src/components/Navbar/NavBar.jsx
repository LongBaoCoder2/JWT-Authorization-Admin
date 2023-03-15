import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.auth.login.currentUser);

  return (
    <div className="navbar">
      <div className="logo">Hello World</div>
      <div className="nav-link">
        <Link to="/">
          <div className="link home-link">Home</div>
        </Link>
        {user ? (
          <>
            <Link to="logout">
              <div className="link logout-link">Logout</div>
            </Link>
          </>
        ) : (
          <>
            {" "}
            <Link to="login">
              <div className="link login-link">Login</div>
            </Link>
            <Link to="register">
              <div className="link register-link">Register</div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
