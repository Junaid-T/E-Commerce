import React, { useContext } from "react";
import classes from "./Backdrop.module.css";
import { StoreContext } from "../../../Contexts/store";

const Backdrop = (props) => {
  return (
    <div className={classes.Backdrop} onClick={props.closeBackdrop}>
      {props.children}
    </div>
  );
};

export default Backdrop;
