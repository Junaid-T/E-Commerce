import React from "react";
import classes from "./RegisterForm.module.css";

const RegisterForm = () => {
  const checkInputs = function () {};

  const handleSubmit = (e) => {
    e.preventDefault();
    checkInputs();
  };

  ///////////////////////////////////////////////////////////
  return (
    <form className={classes.Form}>
      Sign Up
      <input
        id="username"
        className={classes.Username}
        placeholder="Username"
        type="text"
        required
      ></input>
      <p className={classes.ErrorMsg}>Username must be at least 6 characters</p>
      <input
        id="email"
        className={classes.Email}
        placeholder="Email"
        type="email"
        required
      ></input>
      <p className={classes.ErrorMsg}>Please enter a valid email address</p>
      <input
        id="password1"
        type="password"
        className={classes.Password}
        placeholder="Password"
        required
      ></input>
      <p className={classes.ErrorMsg}>
        Password must be at least 8 characters long and contain at least 1
        uppercase letter, 1 lowercase letter, 1 number and 1 symbol
      </p>
      <input
        id="password2"
        type="password"
        className={classes.Password}
        placeholder="Repeat Password"
        required
      ></input>
      <p className={classes.ErrorMsg}>Passwords do not match</p>
      <button id="submit" className={classes.Submit} onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

// ADD SUCCESS/FAILURE STYLING CLASSES

// REDO form check

// const checkUsername = function () {
//   if (usernameValue.length > 5) {
//     success(username);
//     return true;
//   }
//   error(username);
//   return false;
// };

// const checkEmail = function () {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (re.test(emailValue)) {
//     success(email);
//     return true;
//   }
//   error(email);
//   return false;
// };

// const checkPassword = function () {
//   if (password1Value.length < 8) {
//     error(password1);
//     return false;
//   }
//   const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//   if (re.test(password1Value)) {
//     success(password1);
//     return true;
//   }
//   error(password1);
//   return false;
// };

// const recheckPassword = function () {
//   if (password2Value === "") {
//     password2.classList.add("form-error");
//   }
//   if (password1Value === password2Value) {
//     success(password2);
//     return true;
//   }
//   error(password2);
//   return false;
// };
