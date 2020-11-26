import React, { useContext, useState } from "react";
import classes from "./ProductPopUp.module.css";
import Backdrop from "./Backdrop/Backdrop";
import { StoreContext } from "../../Contexts/store";

const ProductPopUp = (props) => {
  const [AllProducts, activeItem] = useContext(StoreContext);
  const [quantity, SetQuantity] = useState(1);

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
  }

  const show = activeItem ? classes.ContainerShow : classes.Container;

  const handleQuantity = (event) => {
    let quanity = parseInt(document.getElementById("Quantity").value);
    if (event.target.id === "+") {
      SetQuantity((quanity += 1));
    } else {
      if (quanity === 1) return;
      SetQuantity((quanity -= 1));
    }
  };

  return (
    <div className={show}>
      <Backdrop />
      <div className={classes.PopUp}>
        {selected}
        <div className={classes.EditCart}>
          <button className={classes.Minus} id="-" onClick={handleQuantity}>
            -
          </button>
          <input
            id="Quantity"
            className={classes.Quantity}
            value={quantity}
            readOnly
          />
          <button className={classes.Plus} id="+" onClick={handleQuantity}>
            +
          </button>
          <h3>Add to cart</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductPopUp;
