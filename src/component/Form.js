//importiing all the files-
import React, { useState } from "react";
import "./Form.css";

//Created Function 
function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && confirmPassword) {
      if (
        emailError === "" &&
        passwordError === "" &&
        confirmPasswordError === ""
      ) {
        alert("Form submitted successfully!");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
      } else {
        alert("Form cannot be Submitted!");
      }
    }
  };
  
  //Validation for Email-
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Please enter a valid email address!");
    } else {
      setEmailError("");
    }
  };
  
  //Validation for Password-
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError("Password must be at least 8 characters long!");
    } else {
      setPasswordError("");
    }
  };
  
  //Validation for Confirm Password
  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError("Passwords do not match!");
    } else {
      setConfirmPasswordError("");
    }
  };
 
  return (
    //Creating Signup Form-
    <form onSubmit={handleSubmit}>
 
      <div className="form-Validation txt">
        <label htmlFor="email" id="pass">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} 
         className={emailError ? "error" : email ? "valid" : ""} />
        {emailError && <span className="error-text">{emailError}</span>}
      </div>

      <div className="form-Validation txt">
        <label htmlFor="password" id="pass">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange}
         className={passwordError ? "error" : password ? "valid" : ""} />
        {passwordError && <span className="error-text">{passwordError}</span>}
      </div>

      <div className="form-Validation txt">
        <label htmlFor="confirmPassword" id="pass">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange}
         className={confirmPasswordError ? "error" : confirmPassword ? "valid" : ""}/>
        {confirmPasswordError && (
          <span className="error-text">{confirmPasswordError}</span>
        )}
      </div>
      
      <button id="btn" type="submit">Sign up</button>
    </form>
  );
}
 
export default Form;