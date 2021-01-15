import React, { Fragment, useContext, useState } from "react";
import classes from "./Login.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { AuthorizedContext } from "../../Contexts/Authorized";
import Login from "./Forms/LoginForm/LoginForm";
import Register from "./Forms/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";

const LoginPopUp = (props) => {
  const auth = useContext(AuthorizedContext);

  const [mode, setMode] = useState("login");

  ///////////////////////////////////////////////////////////
  const closeBackdrop = () => {
    auth.setPopup(false);
  };

  // This allows the user to toggle between login or register & then return that componant to the variable "form" which gets rendered below
  let form = mode === "login" ? <Login /> : <Register />;
  const switchMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };
  let switchMessage =
    mode === "login"
      ? "Don't have an account, click here to sign up!"
      : "Already have an account, click here to log in!";

  const handleGuest = () => {
    auth.testUser();
    auth.setPopup(false);
  };

  const notLoggedIn = () => {
    return (
      <Fragment>
        {form}
        <button className={classes.Guest} onClick={handleGuest}>
          Just testing? Click here to sign in
        </button>
        <button className={classes.Switch} onClick={switchMode}>
          {switchMessage}
        </button>
      </Fragment>
    );
  };

  const logOut = () => {
    auth.setAuthorized(false);
    auth.setPopup(false);
    localStorage.removeItem("token");
  };

  const loggedIn = () => {
    return (
      <Fragment>
        <Link
          to="/orderhistory"
          onClick={closeBackdrop}
          className={classes.LoggedInOptions}
        >
          Your orders
        </Link>
        <div className={classes.LoggedInOptions} onClick={logOut}>
          Sign out
        </div>
      </Fragment>
    );
  };

  return (
    <div>
      <Backdrop closeBackdrop={closeBackdrop} />
      <div className={auth.authorized ? classes.PopUpLoggedIn : classes.PopUp}>
        {auth.authorized ? loggedIn() : notLoggedIn()}
      </div>
    </div>
  );
};

export default LoginPopUp;
