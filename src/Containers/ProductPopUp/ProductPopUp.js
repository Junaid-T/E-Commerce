import React, { useContext, useState } from "react";
import classes from "./ProductPopUp.module.css";
import Backdrop from "./Backdrop/Backdrop";
import { StoreContext } from "../../Contexts/store";

const ProductPopUp = (props) => {
  const store = useContext(StoreContext);
  let [quantity, SetQuantity] = useState(1);

  ///////////////////////////////////////////////////////////
  // This determines what the active item in the store is and gets its id to use.
  // It then return the JSX with the active items details.
  let selected = null;
  if (store.activeItem) {
    const item = Object.values(store.allProducts).filter((o) => {
      return o.id === store.activeItem;
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

  // This function works out whether there is already some of the active item in the cart
  // If so it increases the amount of it by what the user asks
  // If not then it add a new instance of the active item.
  const addToCart = () => {
    let newOrder = { id: store.activeItem, quantity: quantity };
    let newCart = [...store.cart, newOrder];
    if (newCart.length > 1) {
      for (let i = 0; i < newCart.length - 1; i++) {
        if (newCart[i].id === newOrder.id) {
          newCart[i].quantity += newOrder.quantity;
          newCart.pop();
        }
      }
    }

    // Adds to cart and closes popup window
    store.setCart(newCart);
    store.setActiveItem(null);
    SetQuantity(1);
  };

  ////////////////////////////////
  // Close backdrop
  const closeBackdrop = () => {
    SetQuantity(1);
    store.setActiveItem(null);
  };

  return (
    <div>
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
