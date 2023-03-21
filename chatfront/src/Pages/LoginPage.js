import React from "react";
import { useHistory } from "react-router-dom";
import "../Styles/LoginPage.css";
const LoginPage = () => {
  const navigator = useHistory();
  const navigateToSignUpPage = (event) => {
    navigator.push("signup");
  };
  return (
    <div className="login-parent">
      <div className="lp-heading">Chat App</div>
      <div className="form-heading">
        <div className="lp-navigator">
          <button className="login">Login</button>
          <button className="sign-up" onClick={navigateToSignUpPage}>
            Sign Up
          </button>
          <div className="auth-text">Email Address</div>
          <input placeholder="Enter your Email Address" onChange={""} />
          <div className="auth-text">Password</div>
          <input placeholder="Enter your Password" onChange={""} />
          <button className="login-button">Login</button>
          <button className="credential-button">
            Get Guest User Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
