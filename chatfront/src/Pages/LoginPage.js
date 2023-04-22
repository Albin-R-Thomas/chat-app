import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Styles/LoginPage.css";
import axios from "axios";

const LoginPage = () => {
  const navigator = useHistory();
  const navigateToSignUpPage = (event) => {
    navigator.push("signup");
  };
  const [credentials, setcredentials] = useState({ email: "", password: "" })
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  const submit = async (e) => {
    if (!credentials.email || !credentials.password) {
      alert("Please fill all the required details")
    }
    try {
      const token = await axios({
        method: "get",
        url: "http://localhost:5000/api/user/login",
        params: credentials
      })
      window.localStorage.setItem("chatToken", JSON.stringify(token.data))
    } catch (error) {
      console.log(error)
    }
    navigator.push("chats")
  }
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
          <input placeholder="Enter your Email Address" name="email" onChange={onChange} />
          <div className="auth-text">Password</div>
          <input placeholder="Enter your Password" name="password" onChange={onChange} />
          <button className="login-button" onClick={submit}>Login</button>
          <button className="credential-button">
            Get Guest User Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
