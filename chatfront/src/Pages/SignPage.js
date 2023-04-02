import React from "react";
import { useHistory } from "react-router-dom";
import "../Styles/LoginPage.css";
const SignPage = () => {
  const navigator = useHistory();
  const navigateToLoginPage = (event) => {
    navigator.push("login");
  };
  return (
    <div className="login-parent">
      <div className="lp-heading">Chat App</div>
      <div className="form-heading">
        <div className="lp-navigator">
          <button className="login" onClick={navigateToLoginPage}>
            Login
          </button>
          <button className="sign-up">Sign Up</button>
          <div className="auth-text">Full Name</div>
          <input placeholder="Enter your Full Name" onChange={""} />
          <div className="auth-text">Email Address</div>
          <input placeholder="Enter your Email Address" onChange={""} />
          <div className="auth-text">Password</div>
          <input placeholder="Enter your Password" onChange={""} />
          <div className="auth-text">Confirm Password</div>
          <input placeholder="Enter your Password" onChange={""} />
          <div className="auth-text">Upload Your Picture</div>
          <input type={"file"} className="upload-image" />
          <button className="login-button">Login</button>
          <button className="credential-button">
            Get Guest User Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
