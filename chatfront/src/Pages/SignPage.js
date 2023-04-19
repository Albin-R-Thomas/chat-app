import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios'
import "../Styles/LoginPage.css";
const SignPage = () => {
  const navigator = useHistory();
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)
  const [credentials, setCredentials] = useState({email:"",password:"",confirmPassword:"",name:""})
  const [image,setImage]= useState(null)
  const navigateToLoginPage = (event) => {
    navigator.push("login");
  };
  const uploadImage = (e) =>{
    setImage(e.target.files[0])
  }
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  const login = async(e) =>{
    if(credentials.password!==credentials.confirmPassword){
      alert("Password doesn't Match!!!")
     passwordRef.current.value = ""
     confirmPasswordRef.current.value= ""
    const enterCredentials = {...credentials,password:"",confirmPassword:""}
    setCredentials(enterCredentials)
    }
    else if(credentials.password.length<=4){
      alert("Password is too short")
      passwordRef.current.value = ""
     confirmPasswordRef.current.value= ""
    const enterCredentials = {...credentials,password:"",confirmPassword:""}
    setCredentials(enterCredentials)
    }
    else{
    const form = new FormData()
    if(image)
    form.append("profileImage",image,image.name)
    form.append("name",credentials.name)
    form.append("password",credentials.password)
    form.append("email",credentials.email)
    await axios({
      method:"post",
      url:"http://localhost:5000/api/user/signup",
      data:form
    })
  }
  }
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
          <input placeholder="Enter your Full Name" onChange={onChange} name="name"/>
          <div className="auth-text">Email Address</div>
          <input placeholder="Enter your Email Address" onChange={onChange} name="email" />
          <div className="auth-text">Password</div>
          <input placeholder="Enter your Password" onChange={onChange} name="password" ref={passwordRef}/>
          <div className="auth-text">Confirm Password</div>
          <input placeholder="Enter your Password" onChange={onChange} name="confirmPassword" ref={confirmPasswordRef}/>
          <div className="auth-text">Upload Your Picture</div>
          <input type={"file"} className="upload-image" name="profileImage" onChange={uploadImage}/>
          <button className="login-button" onClick={login}>Sign Up</button>
          <button className="credential-button">
            Get Guest User Credentials
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignPage;
