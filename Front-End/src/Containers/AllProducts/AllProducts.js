import React, { useContext } from "react";
import classes from "./AllProducts.module.css";
import Product from "./Product/Product";
import { StoreContext } from "../../Contexts/store";
////////////////////////////////////////////////////////////////////

//////////////////////////////////////////

const AllProducts = (props) => {
  const store = useContext(StoreContext);

  let complete = null;
  if (store.allProducts) {
    // for each item in stock - return a product componant
    complete = Object.entries(store.allProducts).map((product) => {
      return (
        <Product
          name={product[1].name}
          price={product[1].price}
          key={product[0]}
          id={product[0]}
          source={product[1].image}
          description={product[1].description}
        />
      );
    });
  }
  if (store.allProducts === "ServerError") {
    return <h1>Something went wrong, please try again later</h1>;
  }

  return <div className={classes.Container}>{complete}</div>;
};

export default AllProducts;
