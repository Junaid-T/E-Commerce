import React, { useEffect, useContext, Fragment } from "react";
import classes from "./AllProducts.module.css";
import Product from "./Product/Product";
import { StoreContext } from "../../Contexts/store";
////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

const AllProducts = (props) => {
  const [allProducts] = useContext(StoreContext);

  let complete = null;
  if (allProducts) {
    // for each items in stock - return a product componant
    complete = Object.values(allProducts).map((o) => {
      return (
        <Product
          name={o.name}
          price={o.price}
          key={o.id}
          id={o.id}
          source={o.image}
          description={o.description}
        />
      );
    });
  }

  return <div className={classes.Container}>{complete}</div>;
};

export default AllProducts;
