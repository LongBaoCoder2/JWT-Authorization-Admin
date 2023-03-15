import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerRequest } from "../../services/authService/authService";
import "../Login/Login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password };

    registerRequest(user, dispatch, navigate);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="label">Register</label>
        <div className="form-input">
          <label className="username-label">Username: </label>
          <input
            type="text"
            name="username"
            className="username-input"
            placeholder="Input your username..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="email-label">Email: </label>
          <input
            type="text"
            name="email"
            className="email-input"
            placeholder="Input your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label className="password-label">Password: </label>
          <input
            type="password"
            name="password"
            className="password-input"
            placeholder="Input your password..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="btn-login">
            Register
          </button>
        </div>
        <div className="register-suggest">
          <span>Already have an account?</span>
          <Link to="/login">
            <span className="link-login">Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
