import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutRequest } from "../../services/authService/authService";
import "./NavBar.css";

const NavBar = () => {
  const isAuth = useSelector((state) => state.auth.login.isAuthentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">Hello World</div>
      <div className="nav-link">
        <Link to="/">
          <div className="link home-link">Home</div>
        </Link>
        {isAuth ? (
          <>
            <div
              className="link logout-link"
              onClick={logoutRequest(dispatch, navigate)}
            >
              Logout
            </div>
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
