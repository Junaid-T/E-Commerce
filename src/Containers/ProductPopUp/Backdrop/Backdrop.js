import React, { useContext } from "react";
import classes from "./Backdrop.module.css";
import { StoreContext } from "../../../Contexts/store";

const Backdrop = (props) => {
  const [AllProducts, activeItem, setActiveItem] = useContext(StoreContext);

  const handleClick = () => {
    setActiveItem(null);
  };
  return (
    <div className={classes.Backdrop} onClick={handleClick}>
      {props.children}
    </div>
  );
};

export default Backdrop;
