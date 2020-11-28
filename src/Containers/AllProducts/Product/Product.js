import React, { useContext } from "react";
import classes from "./Product.module.css";
import image from "../../../Assets/TEMP_1.svg";
import { StoreContext } from "../../../Contexts/store";

const Product = (props) => {
  const [, , setActiveItem] = useContext(StoreContext);

  const handleClick = (event) => {
    setActiveItem(props.id);
  };
  return (
    <div className={classes.Container} onClick={handleClick} id={props.id}>
      <img className={classes.Img} alt="" src={image} />
      <div className={classes.Name}>{props.name}</div>
      <div className={classes.Price}>£{props.price}</div>
    </div>
  );
};

export default Product;
//
//
// POP UP SHOULD NOT BE A CHILD OF THIS. SHOULD BE SEPARATE BUT GET THE STATE.
