import React, { useContext } from "react";
import classes from "./ProductPopUp.module.css";
import Backdrop from "./Backdrop/Backdrop";
import { StoreContext } from "../../Contexts/store";

const ProductPopUp = (props) => {
  const [AllProducts, activeItem, setActiveItem] = useContext(StoreContext);

  let selected = null;
  if (activeItem) {
    const item = Object.values(AllProducts).filter((o) => {
      return o.id === activeItem;
    });

    selected = (
      <div className={classes.Item}>
        <img className={classes.Img} alt="" />
        <div className={classes.Name}>{item[0].Name}</div>
        <div className={classes.Price}>{item[0].Price}</div>
      </div>
    );
    //POPUP CLASS ACTIVE
  }

  const show = activeItem ? classes.ContainerShow : classes.Container;

  return (
    <div className={show}>
      <Backdrop />
      <div className={classes.PopUp}>{selected}</div>
    </div>
  );
};

export default ProductPopUp;
