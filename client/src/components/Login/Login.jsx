import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../services/authService/authService";
import Success from "../Notification/Toast";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [status, setStatus] = useState("");

  const showNotification = () => {
    setStatus("active");
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, password };
    showNotification();
    loginRequest(user, dispatch, navigate);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="label">Login</label>
        <div className="form-input">
          <label className="username-label">Username: </label>
          <input
            type="text"
            name="username"
            className="username-input"
            placeholder="Input your username..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-input">
          <label className="password-label">Password: </label>
          <input
            type="password"
            name="password"
            className="password-input"
            placeholder="Input your password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </div>
        <div className="register-suggest">
          <span>Don't have an account?</span>
          <Link to="/register">
            <span className="link-register">Register now</span>
          </Link>
        </div>
      </form>
      <Success status={status}></Success>
    </div>
  );
};

export default Login;
