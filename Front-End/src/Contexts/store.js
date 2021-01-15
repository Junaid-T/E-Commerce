import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const StoreContext = createContext();

const getData = async function () {
  try {
    const data = await axios.get(
      "http://127.0.0.1:4000/api/v1/product/getproducts"
    );

    // Transform the data from an array of objects to an object of objects
    // Avoids iterating over all products when managing cart
    const formattedData = data.data.data.reduce((obj, item) => {
      obj[item.id] = item;
      return obj;
    }, {});
    return formattedData;
  } catch (error) {
    throw new Error();
  }
};

///////////////////////////////////////////////////////////////////////////

export const StoreProvider = (props) => {
  const [allProducts, setAllProducts] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getData()
      .then((data) => setAllProducts(data))
      .catch((err) => setAllProducts("ServerError"));
  }, []);

  return (
    <StoreContext.Provider
      value={{
        allProducts,
        activeItem,
        setActiveItem,
        cart,
        setCart,
        total,
        setTotal,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
