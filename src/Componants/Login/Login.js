import React, { useContext, useEffect, useState } from "react";
import classes from "./Login.module.css";
import Backdrop from "../../Containers/ProductPopUp/Backdrop/Backdrop";
import { AuthorizedContext } from "../../Contexts/Authorized";
import axios from "axios";
import Login from "./Forms/LoginForm/LoginForm";
import Register from "./Forms/RegisterForm/RegisterForm";

const LoginPopUp = (props) => {
  const [authorized, setAuthorized, popup, setPopup] = useContext(
    AuthorizedContext
  );
  const [mode, setMode] = useState("login");

  ///////////////////////////////////////////////////////////
  // Set Popup / Backdrop
  const show = popup ? classes.ContainerShow : classes.Container;

  const closeBackdrop = () => {
    setPopup(false);
  };
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  let form = mode === "login" ? <Login /> : <Register />;

  const switchMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };
  let switchMessage =
    mode === "login"
      ? "Don't have an account, click here to sign up!"
      : "Already have an account, click here to log in!";

  const handleGuest = () => {
    setAuthorized(true);
    setPopup(false);
  };

  return (
    <div className={show}>
      <Backdrop closeBackdrop={closeBackdrop} />
      <div className={classes.PopUp}>
        {form}
        <button className={classes.Guest} onClick={handleGuest}>
          Just testing? Click here to sign in
        </button>
        <button className={classes.Switch} onClick={switchMode}>
          {switchMessage}
        </button>
      </div>
    </div>
  );
};

export default LoginPopUp;
