import React, { useState } from "react";
import { useUserAuth } from "./UserAuthContext";
import { useNavigate } from "react-router-dom";
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // Pass username along with email and password for sign-up
      await signUp(email, password, username);
      // Optionally save username in localStorage or context if required
      localStorage.setItem('userName', username);
      navigate("/"); // Redirect to the home page or dashboard after sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="form-button">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-3">
          <p>
            Already have an account? <a href="/">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
