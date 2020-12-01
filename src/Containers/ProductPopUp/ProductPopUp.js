import React, { useContext, useState } from "react";
import classes from "./ProductPopUp.module.css";
import Backdrop from "./Backdrop/Backdrop";
import { StoreContext } from "../../Contexts/store";

const ProductPopUp = (props) => {
  const [allProducts, activeItem, setActiveItem, cart, setCart] = useContext(
    StoreContext
  );
  let [quantity, SetQuantity] = useState(1);

  ///////////////////////////////////////////////////////////
  // Set Popup
  let selected = null;
  if (activeItem) {
    const item = Object.values(allProducts).filter((o) => {
      return o.id === activeItem;
    });

    selected = (
      <div className={classes.Item}>
        <img className={classes.Img} alt="" src={item[0].image} />
        <div className={classes.Name}>{item[0].name}</div>
        <div className={classes.Price}>£{item[0].price}</div>
        <div className={classes.Description}>{item[0].description}</div>
      </div>
    );
  }

  const show = activeItem ? classes.ContainerShow : classes.Container;

  const handleQuantity = (event) => {
    if (event.target.id === "+") {
      SetQuantity(quantity + 1);
    } else {
      if (quantity === 1) return;
      SetQuantity(quantity - 1);
    }
  };

  ///////////////////////////////////////////////////////////
  // Add to cart

  const addToCart = () => {
    let newOrder = { id: activeItem, quantity: quantity };
    let newCart = [...cart, newOrder];
    if (newCart.length > 1) {
      for (let i = 0; i < newCart.length - 1; i++) {
        if (newCart[i].id === newOrder.id) {
          newCart[i].quantity += newOrder.quantity;
          newCart.pop();
        }
      }
    }

    setCart(newCart);
    setActiveItem(null);
    SetQuantity(1);
  };

  ////////////////////////////////
  // Close backdrop
  const closeBackdrop = () => {
    setActiveItem(null);
  };

  return (
    <div className={show}>
      <Backdrop closeBackdrop={closeBackdrop} />
      <div className={classes.PopUp}>
        {selected}
        <div className={classes.EditCart}>
          <button className={classes.Minus} id="-" onClick={handleQuantity}>
            -
          </button>
          <div id="Quantity" className={classes.Quantity}>
            {quantity}
          </div>
          <button className={classes.Plus} id="+" onClick={handleQuantity}>
            +
          </button>
          <h3 onClick={addToCart}>Add to cart</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductPopUp;
