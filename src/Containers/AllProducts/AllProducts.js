import React, { useEffect, useContext } from "react";
import classes from "./AllProducts.module.css";
import Product from "./Product/Product";
import uniqid from "uniqid";
import { StoreContext } from "../../Contexts/store";

const AllProducts = (props) => {
  const [value, ,] = useContext(StoreContext);

  let complete = null;
  if (value) {
    // for each items in stock - return a product componant
    complete = Object.values(value).map((o) => {
      return <Product name={o.Name} price={o.Price} key={o.id} id={o.id} />;
    });
  }

  return <div className={classes.Container}>{complete}</div>;
};

export default AllProducts;
